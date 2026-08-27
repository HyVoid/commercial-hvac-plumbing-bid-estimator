export type SheetTabId =
  | '01_README'
  | '02_Assumptions'
  | '03_Project_Setup'
  | '04_Quantity_Takeoff'
  | '05_Estimate_Engine'
  | '06_Bid_Summary'
  | '07_Bid_Tracker'
  | '08_Dashboard';

export type ProjectStatus = 'Draft' | 'Submitted' | 'Won' | 'Lost' | 'Pending';

export interface TradeLaborRate {
  id: string;
  tradeName: string;
  ratePerHour: number;
  description?: string;
}

export interface EquipmentRate {
  id: string;
  equipmentType: string;
  ratePerHour: number;
  description?: string;
}

export interface AssumptionsState {
  currencySymbol: string;
  overheadRate: number; // e.g. 0.10 for 10%
  targetMarkupRate: number; // e.g. 0.15 for 15%
  contingencyRate: number; // e.g. 0.05 for 5%
  laborRates: TradeLaborRate[];
  equipmentRates: EquipmentRate[];
}

export interface ProjectRecord {
  id: string;
  name: string;
  client: string;
  bidDate: string;
  estimator: string;
  status: ProjectStatus;
  notes: string;
}

export interface QuantityTakeoffItem {
  id: string;
  projectId: string;
  division: string;
  itemDescription: string;
  unit: string;
  quantity: number;
  materialUnitRate: number;
  laborHoursPerUnit: number;
  equipmentUnitRate: number;
  overrideLaborRate?: number | null;
}

export interface EstimateEngineRow {
  id: string;
  projectId: string;
  division: string;
  itemDescription: string;
  unit: string;
  quantity: number;
  appliedLaborRate: number;
  directMaterialCost: number;
  directLaborCost: number;
  directEquipmentCost: number;
  directCostSubtotal: number;
  overheadAllocation: number;
  contingencyAmount: number;
  markupAmount: number;
  lineItemFinalBid: number;
}

export interface BidTrackerRecord {
  projectId: string;
  projectName: string;
  client: string;
  bidDate: string;
  totalEstimatedCost: number;
  quotedBidPrice: number;
  status: ProjectStatus;
  actualWonAmount: number;
  variance: number;
  lossReason: string;
}

export interface AppState {
  assumptions: AssumptionsState;
  projects: ProjectRecord[];
  takeoffs: QuantityTakeoffItem[];
  trackerOverrides: Record<string, { actualWonAmount: number; lossReason: string; status?: ProjectStatus }>;
  selectedSummaryProjectId: string;
  lastSaved: string;
}
