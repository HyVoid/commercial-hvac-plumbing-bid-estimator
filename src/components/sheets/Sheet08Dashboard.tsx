import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Award,
  Layers,
  Percent,
  DollarSign,
  PieChart,
  ArrowUpRight,
  ShieldAlert,
  Sliders,
  CheckCircle2,
  Clock,
  Building,
} from 'lucide-react';
import {
  AppState,
  AssumptionsState,
  BidTrackerRecord,
  EstimateEngineRow,
  ProjectRecord,
  ProjectStatus,
  SheetTabId,
} from '../../types';
import {
  computeBidTrackerRecords,
  formatCurrency,
  formatPercent,
} from '../../utils/engine';

interface Sheet08DashboardProps {
  appState: AppState;
  engineRows: EstimateEngineRow[];
  onNavigate: (tab: SheetTabId, projectId?: string) => void;
}

export const Sheet08Dashboard: React.FC<Sheet08DashboardProps> = ({
  appState,
  engineRows,
  onNavigate,
}) => {
  const { projects, assumptions, trackerOverrides, takeoffs } = appState;
  const trackerRecords = computeBidTrackerRecords(projects, engineRows, trackerOverrides);

  // Core KPI Calculations
  const totalPipelineQuoted = trackerRecords.reduce((acc, r) => acc + r.quotedBidPrice, 0);
  const totalWonContractValue = trackerRecords
    .filter((r) => r.status === 'Won')
    .reduce((acc, r) => acc + r.actualWonAmount, 0);

  const wonRecords = trackerRecords.filter((r) => r.status === 'Won');
  const lostRecords = trackerRecords.filter((r) => r.status === 'Lost');
  const activeRecords = trackerRecords.filter((r) => ['Draft', 'Submitted', 'Pending'].includes(r.status));

  const wonCount = wonRecords.length;
  const lostCount = lostRecords.length;
  const decidedCount = wonCount + lostCount;
  const winRateByCount = decidedCount > 0 ? wonCount / decidedCount : 0;

  const wonQuotedBidTotal = wonRecords.reduce((acc, r) => acc + r.quotedBidPrice, 0);
  const winRateByValue = totalPipelineQuoted > 0 ? wonQuotedBidTotal / totalPipelineQuoted : 0;

  const activePipelineVolume = activeRecords.reduce((acc, r) => acc + r.quotedBidPrice, 0);

  // Global Cost Structure Aggregation
  const totalMaterial = engineRows.reduce((acc, r) => acc + r.directMaterialCost, 0);
  const totalLabor = engineRows.reduce((acc, r) => acc + r.directLaborCost, 0);
  const totalEquipment = engineRows.reduce((acc, r) => acc + r.directEquipmentCost, 0);
  const totalDirectCost = engineRows.reduce((acc, r) => acc + r.directCostSubtotal, 0);
  const totalOverhead = engineRows.reduce((acc, r) => acc + r.overheadAllocation, 0);
  const totalContingency = engineRows.reduce((acc, r) => acc + r.contingencyAmount, 0);
  const totalMarkup = engineRows.reduce((acc, r) => acc + r.markupAmount, 0);

  // Division Aggregation
  const divisionMap = new Map<string, { totalBid: number; directCost: number; itemCount: number }>();
  engineRows.forEach((r) => {
    const existing = divisionMap.get(r.division) || { totalBid: 0, directCost: 0, itemCount: 0 };
    existing.totalBid += r.lineItemFinalBid;
    existing.directCost += r.directCostSubtotal;
    existing.itemCount += 1;
    divisionMap.set(r.division, existing);
  });

  const divisionStats = Array.from(divisionMap.entries()).map(([division, stats]) => ({
    division,
    ...stats,
  }));

  // Trade Division vs Status Exposure Matrix Data
  const statuses: ProjectStatus[] = ['Won', 'Submitted', 'Pending', 'Draft', 'Lost'];
  const topTrades = assumptions.laborRates.map((lr) => lr.tradeName);

  const getMatrixExposure = (tradeName: string, status: ProjectStatus) => {
    const matchingProjects = new Set(projects.filter((p) => (trackerOverrides[p.id]?.status || p.status) === status).map((p) => p.id));
    const matchingRows = engineRows.filter(
      (r) => r.division.toLowerCase() === tradeName.toLowerCase() && matchingProjects.has(r.projectId)
    );
    const amount = matchingRows.reduce((acc, r) => acc + r.lineItemFinalBid, 0);
    const count = matchingRows.length;
    return { amount, count };
  };

  return (
    <div className="space-y-8 animate-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-label text-[var(--color-accent)] font-semibold">
            Sheet 08 // Executive Cockpit & Analytics
          </span>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-[var(--color-primary)] tracking-display">
            Commercial Executive Dashboard
          </h1>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-3xl">
            High-level executive oversight synthesizing bidding volume, win rate conversion dynamics, trade-level exposure,
            and corporate gross margin distribution.
          </p>
        </div>
      </div>

      {/* Top 5 Hero KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Total Pipeline [B3] */}
        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift">
          <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label flex items-center justify-between">
            <span>Total Pipeline [B3]</span>
            <Layers className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="text-3xl font-bold font-heading text-[var(--color-primary)] tracking-display mt-2">
            {formatCurrency(totalPipelineQuoted, assumptions.currencySymbol, 0)}
          </div>
          <div className="text-xs text-[var(--color-muted)] mt-1 font-sans">
            {projects.length} Total Registered Bids
          </div>
        </div>

        {/* Won Contract Value [D3] */}
        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift border-t-2 border-emerald-500">
          <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label flex items-center justify-between">
            <span>Won Contracts [D3]</span>
            <Award className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-bold font-heading text-emerald-800 tracking-display mt-2">
            {formatCurrency(totalWonContractValue, assumptions.currencySymbol, 0)}
          </div>
          <div className="text-xs text-[var(--color-muted)] mt-1 font-sans">
            {wonCount} Awarded Projects
          </div>
        </div>

        {/* Win Rate by Count [F3] */}
        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift">
          <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label flex items-center justify-between">
            <span>Win Rate by Count [F3]</span>
            <Percent className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="text-3xl font-bold font-heading text-[var(--color-primary)] tracking-display mt-2">
            {formatPercent(winRateByCount)}
          </div>
          <div className="text-xs text-[var(--color-muted)] mt-1 font-sans">
            {wonCount} Won / {decidedCount} Decided
          </div>
        </div>

        {/* Win Rate by Value [H3] */}
        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift">
          <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label flex items-center justify-between">
            <span>Win Rate by Value [H3]</span>
            <DollarSign className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="text-3xl font-bold font-heading text-[var(--color-primary)] tracking-display mt-2">
            {formatPercent(winRateByValue)}
          </div>
          <div className="text-xs text-[var(--color-muted)] mt-1 font-sans">
            Of Total Quoted Volume
          </div>
        </div>

        {/* Active In-Flight Pipeline */}
        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift">
          <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label flex items-center justify-between">
            <span>In-Flight Pipeline</span>
            <Clock className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-3xl font-bold font-heading text-[var(--color-accent)] tracking-display mt-2">
            {formatCurrency(activePipelineVolume, assumptions.currencySymbol, 0)}
          </div>
          <div className="text-xs text-[var(--color-muted)] mt-1 font-sans">
            {activeRecords.length} Active Opportunities
          </div>
        </div>
      </div>

      {/* Main Two-Column Row: Interactive Exposure Matrix & Cost Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Interactive Exposure Matrix (2 cols) */}
        <div className="lg:col-span-2 bg-[var(--color-surface)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold font-heading text-[var(--color-primary)]">
                MEP Trade Division × Bid Status Exposure Matrix
              </h3>
              <p className="text-xs text-[var(--color-muted)] mt-0.5">
                Interactive trade exposure grid. Hover cells for dynamic scale highlight.
              </p>
            </div>
            <span className="text-xs font-mono text-[var(--color-muted)]">Live Aggregation</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--table-header-sep)] bg-[var(--table-header-bg)] text-[var(--color-primary)] font-semibold uppercase tracking-label text-[11px]">
                  <th className="py-2.5 px-3 min-w-[160px]">Trade / Division</th>
                  {statuses.map((st) => (
                    <th key={st} className="py-2.5 px-2 text-right w-24">
                      {st}
                    </th>
                  ))}
                  <th className="py-2.5 px-3 text-right w-28 font-bold text-[var(--color-accent)]">Total Exposure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {topTrades.map((trade) => {
                  let rowTotal = 0;
                  return (
                    <tr key={trade} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-2 px-3 font-sans text-xs font-semibold text-[var(--color-primary)] truncate max-w-[180px]">
                        {trade}
                      </td>
                      {statuses.map((st) => {
                        const { amount, count } = getMatrixExposure(trade, st);
                        rowTotal += amount;
                        const hasValue = amount > 0;
                        return (
                          <td key={st} className="py-2 px-2 text-right">
                            {hasValue ? (
                              <div
                                className="matrix-cell-interactive px-1.5 py-1 rounded bg-blue-50/60 border border-blue-200/60 cursor-pointer"
                                title={`${trade} (${st}): ${formatCurrency(amount)} across ${count} items`}
                              >
                                <span className="font-semibold text-[var(--color-primary)] text-[11px]">
                                  {formatCurrency(amount, assumptions.currencySymbol, 0)}
                                </span>
                              </div>
                            ) : (
                              <span className="text-slate-300 font-sans text-[11px]">-</span>
                            )}
                          </td>
                        );
                      })}
                      <td className="py-2 px-3 text-right font-bold text-[var(--color-accent)] bg-slate-50">
                        {formatCurrency(rowTotal, assumptions.currencySymbol, 0)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Cost Structure & Markup Allocation (1 col) */}
        <div className="bg-[var(--color-surface)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold font-heading text-[var(--color-primary)]">
                Corporate Cost & Margin Stack
              </h3>
              <PieChart className="w-4 h-4 text-[var(--color-accent)]" />
            </div>
            <p className="text-xs text-[var(--color-muted)]">
              Overall portfolio direct cost vs commercial spread absorption.
            </p>

            <div className="space-y-3 mt-6 text-xs">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500" /> Direct Material
                  </span>
                  <span className="font-mono font-semibold text-[var(--color-primary)]">
                    {formatCurrency(totalMaterial, assumptions.currencySymbol, 0)}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-sky-500"
                    style={{ width: `${(totalMaterial / (totalPipelineQuoted || 1)) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Direct Labor
                  </span>
                  <span className="font-mono font-semibold text-[var(--color-primary)]">
                    {formatCurrency(totalLabor, assumptions.currencySymbol, 0)}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-indigo-500"
                    style={{ width: `${(totalLabor / (totalPipelineQuoted || 1)) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Direct Equipment
                  </span>
                  <span className="font-mono font-semibold text-[var(--color-primary)]">
                    {formatCurrency(totalEquipment, assumptions.currencySymbol, 0)}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-amber-500"
                    style={{ width: `${(totalEquipment / (totalPipelineQuoted || 1)) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" /> Overhead & Markups
                  </span>
                  <span className="font-mono font-semibold text-[var(--color-accent)]">
                    {formatCurrency(totalOverhead + totalContingency + totalMarkup, assumptions.currencySymbol, 0)}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-[var(--color-accent)]"
                    style={{
                      width: `${
                        ((totalOverhead + totalContingency + totalMarkup) / (totalPipelineQuoted || 1)) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="insight-block p-3.5 rounded-lg text-xs mt-6">
            <div className="font-semibold text-[var(--color-primary)]">
              Overall Portfolio Commercial Margin:{' '}
              {formatPercent(
                totalPipelineQuoted > 0
                  ? (totalOverhead + totalContingency + totalMarkup) / totalPipelineQuoted
                  : 0
              )}
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              Reflects corporate target markup ({formatPercent(assumptions.targetMarkupRate)}) plus overhead and contingency buffers.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bidding Projects Rollup */}
      <div className="bg-[var(--color-surface)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold font-heading text-[var(--color-primary)]">
              Active Project Opportunities & Contract Status
            </h3>
            <p className="text-xs text-[var(--color-muted)] mt-0.5">
              Instant access to all bidding proposals. Click any project to open its detailed Bid Summary or Takeoff sheet.
            </p>
          </div>
          <button
            onClick={() => onNavigate('07_Bid_Tracker')}
            className="text-xs font-semibold text-[var(--color-accent)] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Open Pipeline Tracker</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => {
            const pEngineRows = engineRows.filter((r) => r.projectId === p.id);
            const quotedPrice = pEngineRows.reduce((acc, r) => acc + r.lineItemFinalBid, 0);
            const status = trackerOverrides[p.id]?.status || p.status;

            return (
              <div
                key={p.id}
                onClick={() => onNavigate('06_Bid_Summary', p.id)}
                className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 hover:border-[var(--color-accent)] hover:bg-white transition cursor-pointer card-hover-lift flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[var(--color-accent)]">{p.id}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                        status === 'Won'
                          ? 'bg-emerald-100 text-emerald-800'
                          : status === 'Lost'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[var(--color-primary)] mt-1.5 line-clamp-1">
                    {p.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{p.client}</p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">Quoted Bid:</div>
                  <div className="text-sm font-bold font-heading text-[var(--color-primary)] font-mono">
                    {formatCurrency(quotedPrice, assumptions.currencySymbol)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
