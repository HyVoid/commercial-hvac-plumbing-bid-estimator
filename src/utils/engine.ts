import {
  AppState,
  AssumptionsState,
  BidTrackerRecord,
  EstimateEngineRow,
  ProjectRecord,
  QuantityTakeoffItem,
} from '../types';

/**
 * Calculates the applied labor rate by matching division/trade against the Assumptions table.
 */
export function getAppliedLaborRate(
  item: QuantityTakeoffItem,
  assumptions: AssumptionsState
): number {
  if (item.overrideLaborRate !== undefined && item.overrideLaborRate !== null && item.overrideLaborRate > 0) {
    return item.overrideLaborRate;
  }

  const match = assumptions.laborRates.find(
    (lr) => lr.tradeName.trim().toLowerCase() === item.division.trim().toLowerCase()
  );

  if (match) {
    return match.ratePerHour;
  }

  // Fallback: search partial match or default to first rate
  const partial = assumptions.laborRates.find((lr) =>
    item.division.toLowerCase().includes(lr.tradeName.toLowerCase().split(' - ')[0])
  );

  return partial ? partial.ratePerHour : assumptions.laborRates[0]?.ratePerHour || 85.0;
}

/**
 * Computes the 05_Estimate_Engine dynamic rows from 04_Quantity_Takeoff and 02_Assumptions
 */
export function computeEstimateEngineRows(
  takeoffs: QuantityTakeoffItem[],
  assumptions: AssumptionsState
): EstimateEngineRow[] {
  const { overheadRate, contingencyRate, targetMarkupRate } = assumptions;

  return takeoffs.map((item) => {
    const appliedLaborRate = getAppliedLaborRate(item, assumptions);
    const directMaterialCost = item.quantity * item.materialUnitRate;
    const directLaborCost = item.quantity * item.laborHoursPerUnit * appliedLaborRate;
    const directEquipmentCost = item.quantity * item.equipmentUnitRate;
    const directCostSubtotal = directMaterialCost + directLaborCost + directEquipmentCost;

    const overheadAllocation = directCostSubtotal * overheadRate;
    const contingencyAmount = (directCostSubtotal + overheadAllocation) * contingencyRate;
    const markupAmount = (directCostSubtotal + overheadAllocation + contingencyAmount) * targetMarkupRate;
    const lineItemFinalBid = directCostSubtotal + overheadAllocation + contingencyAmount + markupAmount;

    return {
      id: item.id,
      projectId: item.projectId,
      division: item.division,
      itemDescription: item.itemDescription,
      unit: item.unit,
      quantity: item.quantity,
      appliedLaborRate,
      directMaterialCost,
      directLaborCost,
      directEquipmentCost,
      directCostSubtotal,
      overheadAllocation,
      contingencyAmount,
      markupAmount,
      lineItemFinalBid,
    };
  });
}

/**
 * Computes Bid Tracker Rows linking Projects to their computed totals
 */
export function computeBidTrackerRecords(
  projects: ProjectRecord[],
  engineRows: EstimateEngineRow[],
  trackerOverrides: Record<string, { actualWonAmount: number; lossReason: string; status?: ProjectRecord['status'] }>
): BidTrackerRecord[] {
  return projects.map((prj) => {
    const prjEngineRows = engineRows.filter((r) => r.projectId === prj.id);
    const totalEstimatedCost = prjEngineRows.reduce((acc, r) => acc + r.directCostSubtotal, 0);
    const quotedBidPrice = prjEngineRows.reduce((acc, r) => acc + r.lineItemFinalBid, 0);

    const override = trackerOverrides[prj.id];
    const status = override?.status || prj.status;
    const actualWonAmount = override?.actualWonAmount !== undefined ? override.actualWonAmount : (status === 'Won' ? quotedBidPrice : 0);
    const lossReason = override?.lossReason || (status === 'Lost' ? 'Price or qualification deviation' : '');
    const variance = status === 'Won' ? actualWonAmount - quotedBidPrice : 0;

    return {
      projectId: prj.id,
      projectName: prj.name,
      client: prj.client,
      bidDate: prj.bidDate,
      totalEstimatedCost,
      quotedBidPrice,
      status,
      actualWonAmount,
      variance,
      lossReason,
    };
  });
}

/**
 * Computes single project summary for Sheet 06
 */
export interface SingleProjectSummary {
  projectId: string;
  projectName: string;
  client: string;
  bidDate: string;
  estimator: string;
  status: string;
  notes: string;
  directMaterial: number;
  directLabor: number;
  directEquipment: number;
  directCostSubtotal: number;
  overheadAllocation: number;
  contingencyAmount: number;
  markupAmount: number;
  totalBidPrice: number;
  laborCostRatio: number;
  materialCostRatio: number;
  equipmentCostRatio: number;
  divisionBreakdown: {
    division: string;
    directMaterial: number;
    directLabor: number;
    directEquipment: number;
    directCostSubtotal: number;
    finalBid: number;
    itemCount: number;
  }[];
}

export function computeSingleProjectSummary(
  targetProjectId: string,
  projects: ProjectRecord[],
  engineRows: EstimateEngineRow[]
): SingleProjectSummary | null {
  const project = projects.find((p) => p.id === targetProjectId);
  if (!project) return null;

  const prjRows = engineRows.filter((r) => r.projectId === targetProjectId);

  const directMaterial = prjRows.reduce((acc, r) => acc + r.directMaterialCost, 0);
  const directLabor = prjRows.reduce((acc, r) => acc + r.directLaborCost, 0);
  const directEquipment = prjRows.reduce((acc, r) => acc + r.directEquipmentCost, 0);
  const directCostSubtotal = prjRows.reduce((acc, r) => acc + r.directCostSubtotal, 0);
  const overheadAllocation = prjRows.reduce((acc, r) => acc + r.overheadAllocation, 0);
  const contingencyAmount = prjRows.reduce((acc, r) => acc + r.contingencyAmount, 0);
  const markupAmount = prjRows.reduce((acc, r) => acc + r.markupAmount, 0);
  const totalBidPrice = prjRows.reduce((acc, r) => acc + r.lineItemFinalBid, 0);

  const laborCostRatio = directCostSubtotal > 0 ? directLabor / directCostSubtotal : 0;
  const materialCostRatio = directCostSubtotal > 0 ? directMaterial / directCostSubtotal : 0;
  const equipmentCostRatio = directCostSubtotal > 0 ? directEquipment / directCostSubtotal : 0;

  // Group by Division
  const divisionMap = new Map<string, {
    directMaterial: number;
    directLabor: number;
    directEquipment: number;
    directCostSubtotal: number;
    finalBid: number;
    itemCount: number;
  }>();

  prjRows.forEach((r) => {
    const existing = divisionMap.get(r.division) || {
      directMaterial: 0,
      directLabor: 0,
      directEquipment: 0,
      directCostSubtotal: 0,
      finalBid: 0,
      itemCount: 0,
    };
    existing.directMaterial += r.directMaterialCost;
    existing.directLabor += r.directLaborCost;
    existing.directEquipment += r.directEquipmentCost;
    existing.directCostSubtotal += r.directCostSubtotal;
    existing.finalBid += r.lineItemFinalBid;
    existing.itemCount += 1;
    divisionMap.set(r.division, existing);
  });

  const divisionBreakdown = Array.from(divisionMap.entries()).map(([division, stats]) => ({
    division,
    ...stats,
  }));

  return {
    projectId: project.id,
    projectName: project.name,
    client: project.client,
    bidDate: project.bidDate,
    estimator: project.estimator,
    status: project.status,
    notes: project.notes,
    directMaterial,
    directLabor,
    directEquipment,
    directCostSubtotal,
    overheadAllocation,
    contingencyAmount,
    markupAmount,
    totalBidPrice,
    laborCostRatio,
    materialCostRatio,
    equipmentCostRatio,
    divisionBreakdown,
  };
}

/**
 * Format currency with default $ and 2 decimals
 */
export function formatCurrency(value: number, symbol = '$', decimals = 2): string {
  if (isNaN(value)) return `${symbol}0.00`;
  const formatted = Math.abs(value).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return value < 0 ? `-${symbol}${formatted}` : `${symbol}${formatted}`;
}

/**
 * Format percentage
 */
export function formatPercent(value: number, decimals = 1): string {
  if (isNaN(value)) return '0.0%';
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * CSV Import/Export Helper
 */
export function exportTakeoffsToCsv(takeoffs: QuantityTakeoffItem[]): string {
  const headers = [
    'Project ID',
    'Division / Trade',
    'Item Description',
    'Unit',
    'Quantity',
    'Material Unit Rate ($)',
    'Labor Hours / Unit',
    'Equipment Unit Rate ($)',
  ];

  const rows = takeoffs.map((t) => [
    `"${t.projectId.replace(/"/g, '""')}"`,
    `"${t.division.replace(/"/g, '""')}"`,
    `"${t.itemDescription.replace(/"/g, '""')}"`,
    `"${t.unit.replace(/"/g, '""')}"`,
    t.quantity,
    t.materialUnitRate,
    t.laborHoursPerUnit,
    t.equipmentUnitRate,
  ]);

  return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
}

export function parseTakeoffsFromCsv(csvText: string): QuantityTakeoffItem[] {
  const lines = csvText.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length <= 1) return [];

  const items: QuantityTakeoffItem[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    // Regex for CSV fields handling quoted commas
    const matches = line.match(/(?:,|\n|^)("(?:(?:"")*[^"]*)*"|[^",\n]*|(?:\n|$))/g);
    if (!matches) continue;

    const values = matches.map((m) => {
      let val = m.replace(/^,/, '').trim();
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.substring(1, val.length - 1).replace(/""/g, '"');
      }
      return val;
    });

    if (values.length >= 5) {
      const projectId = values[0] || 'PRJ-2026-001';
      const division = values[1] || 'Plumbing - Journeyman';
      const itemDescription = values[2] || 'Imported Takeoff Item';
      const unit = values[3] || 'EA';
      const quantity = parseFloat(values[4]) || 0;
      const materialUnitRate = parseFloat(values[5]) || 0;
      const laborHoursPerUnit = parseFloat(values[6]) || 0;
      const equipmentUnitRate = parseFloat(values[7]) || 0;

      items.push({
        id: `TO-CSV-${Date.now()}-${i}`,
        projectId,
        division,
        itemDescription,
        unit,
        quantity,
        materialUnitRate,
        laborHoursPerUnit,
        equipmentUnitRate,
      });
    }
  }

  return items;
}
