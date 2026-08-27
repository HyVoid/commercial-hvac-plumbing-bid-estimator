import React from 'react';
import {
  FileSpreadsheet,
  Building,
  User,
  Calendar,
  DollarSign,
  PieChart,
  Percent,
  CheckCircle2,
  TrendingUp,
  Layers,
  ArrowRight,
  Printer,
} from 'lucide-react';
import {
  AssumptionsState,
  EstimateEngineRow,
  ProjectRecord,
} from '../../types';
import {
  computeSingleProjectSummary,
  formatCurrency,
  formatPercent,
} from '../../utils/engine';

interface Sheet06BidSummaryProps {
  projects: ProjectRecord[];
  engineRows: EstimateEngineRow[];
  assumptions: AssumptionsState;
  selectedProjectId: string;
  onSelectProject: (projectId: string) => void;
  onNavigateToTakeoff: (projectId: string) => void;
}

export const Sheet06BidSummary: React.FC<Sheet06BidSummaryProps> = ({
  projects,
  engineRows,
  assumptions,
  selectedProjectId,
  onSelectProject,
  onNavigateToTakeoff,
}) => {
  const summary = computeSingleProjectSummary(
    selectedProjectId,
    projects,
    engineRows
  );

  const maxDivisionBid = summary
    ? Math.max(...summary.divisionBreakdown.map((d) => d.finalBid), 1)
    : 1;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-in">
      {/* Header & Target Project Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-label text-[var(--color-accent)] font-semibold">
            Sheet 06 // Single Project Management Rollup
          </span>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-[var(--color-primary)] tracking-display">
            Bid Summary & Proposal Costing
          </h1>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-3xl">
            Commercial proposal sign-off sheet. Dynamic single-project drilldown analyzing cost structures,
            labor density ratios, overhead coverage, and division distribution.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Target Project ID (C2 Selector) */}
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
            <span className="text-xs font-semibold text-[var(--color-primary)] whitespace-nowrap">
              Target Project [C2]:
            </span>
            <select
              value={selectedProjectId}
              onChange={(e) => onSelectProject(e.target.value)}
              className="font-mono font-bold text-xs text-[var(--color-accent)] bg-transparent focus:outline-none cursor-pointer"
            >
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.id} - {p.name.substring(0, 24)}...
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 text-[var(--color-primary)] text-xs font-semibold rounded-lg hover:bg-slate-50 transition shadow-sm cursor-pointer"
            title="Print Proposal Summary"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print Report</span>
          </button>
        </div>
      </div>

      {!summary ? (
        <div className="bg-[var(--color-surface)] p-12 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] text-center text-slate-400">
          No project selected or project data not found.
        </div>
      ) : (
        <>
          {/* Project Details Banner */}
          <div className="bg-[var(--color-surface)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label">
                Project Name [C3]
              </div>
              <div className="text-sm font-bold text-[var(--color-primary)] mt-1">
                {summary.projectName}
              </div>
              <div className="text-xs text-[var(--color-muted)] font-mono mt-0.5">{summary.projectId}</div>
            </div>

            <div>
              <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label">
                Client / Owner [C4]
              </div>
              <div className="text-sm font-semibold text-[var(--color-primary)] mt-1">
                {summary.client}
              </div>
              <div className="text-xs text-[var(--color-muted)] mt-0.5">Commercial Account</div>
            </div>

            <div>
              <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label">
                Bid Due Date & Estimator
              </div>
              <div className="text-sm font-semibold text-[var(--color-primary)] mt-1">
                {summary.bidDate}
              </div>
              <div className="text-xs text-[var(--color-muted)] mt-0.5">By {summary.estimator}</div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label">
                Proposal Lifecycle Status
              </div>
              <div className="mt-1">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-label bg-blue-50 text-[var(--color-accent)] border border-blue-200">
                  {summary.status}
                </span>
              </div>
              <button
                onClick={() => onNavigateToTakeoff(summary.projectId)}
                className="text-[11px] font-medium text-[var(--color-accent)] hover:underline flex items-center gap-1 mt-2 cursor-pointer"
              >
                <span>Edit Takeoff Quantities</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Core Proposal Numbers Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left: Total Final Bid Highlight Card */}
            <div className="bg-[var(--color-surface)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border-2 border-[var(--color-accent)] flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-label text-[var(--color-accent)] font-bold">
                  Total Final Quoted Bid Price [B14]
                </span>
                <div className="text-3xl lg:text-4xl font-bold font-heading text-[var(--color-primary)] tracking-display mt-2">
                  {formatCurrency(summary.totalBidPrice, assumptions.currencySymbol)}
                </div>
                <p className="text-xs text-[var(--color-muted)] mt-1">
                  Complete commercial proposal amount including direct costs, overhead absorption, contingency risk fund, and profit markup.
                </p>
              </div>

              {/* Stacked Cost Composition Progress Bar */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-[var(--color-muted)]">
                  <span>Direct Cost ({formatCurrency(summary.directCostSubtotal, assumptions.currencySymbol)})</span>
                  <span className="font-semibold text-[var(--color-primary)]">
                    {formatPercent(summary.totalBidPrice > 0 ? summary.directCostSubtotal / summary.totalBidPrice : 0)}
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden flex">
                  <div
                    style={{ width: `${(summary.directMaterial / (summary.totalBidPrice || 1)) * 100}%` }}
                    className="bg-sky-500"
                    title={`Material: ${formatCurrency(summary.directMaterial)}`}
                  />
                  <div
                    style={{ width: `${(summary.directLabor / (summary.totalBidPrice || 1)) * 100}%` }}
                    className="bg-indigo-500"
                    title={`Labor: ${formatCurrency(summary.directLabor)}`}
                  />
                  <div
                    style={{ width: `${(summary.directEquipment / (summary.totalBidPrice || 1)) * 100}%` }}
                    className="bg-amber-500"
                    title={`Equipment: ${formatCurrency(summary.directEquipment)}`}
                  />
                  <div
                    style={{
                      width: `${
                        ((summary.overheadAllocation + summary.contingencyAmount + summary.markupAmount) /
                          (summary.totalBidPrice || 1)) *
                        100
                      }%`,
                    }}
                    className="bg-[var(--color-accent)]"
                    title={`Commercial Spread: ${formatCurrency(
                      summary.overheadAllocation + summary.contingencyAmount + summary.markupAmount
                    )}`}
                  />
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-sky-500" /> Mat
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" /> Labor
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500" /> Equip
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" /> Margin & Fee
                  </span>
                </div>
              </div>
            </div>

            {/* Middle: Direct Cost Breakdown (B7:B10) */}
            <div className="bg-[var(--color-surface)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-label text-[var(--color-primary)]">
                  Direct Cost Elements [B7:B10]
                </h3>
                <span className="text-[10px] text-[var(--color-muted)] font-mono">Fact Tier</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Direct Material (B7)</span>
                  <span className="font-mono font-semibold text-[var(--color-primary)]">
                    {formatCurrency(summary.directMaterial, assumptions.currencySymbol)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Direct Labor (B8)</span>
                  <span className="font-mono font-semibold text-[var(--color-primary)]">
                    {formatCurrency(summary.directLabor, assumptions.currencySymbol)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Direct Equipment (B9)</span>
                  <span className="font-mono font-semibold text-[var(--color-primary)]">
                    {formatCurrency(summary.directEquipment, assumptions.currencySymbol)}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between font-bold">
                  <span className="text-[var(--color-primary)]">Direct Cost Subtotal (B10)</span>
                  <span className="font-mono text-sm text-[var(--color-primary)]">
                    {formatCurrency(summary.directCostSubtotal, assumptions.currencySymbol)}
                  </span>
                </div>
              </div>

              {/* Labor Ratio Metric */}
              <div className="p-3 bg-slate-50 rounded-lg mt-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--color-muted)]">Labor Cost Ratio [B15 = B8/B10]:</span>
                  <span className="font-bold text-[var(--color-primary)] font-mono">
                    {formatPercent(summary.laborCostRatio)}
                  </span>
                </div>
                <p className="text-[10px] text-[var(--color-muted)] mt-1">
                  Measures site labor risk. Ratios above 45% represent labor-intensive projects.
                </p>
              </div>
            </div>

            {/* Right: Commercial Adjustments & Markups (B11:B13) */}
            <div className="bg-[var(--color-surface)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-label text-[var(--color-primary)]">
                  Commercial Markups [B11:B13]
                </h3>
                <span className="text-[10px] text-[var(--color-muted)] font-mono">Strategy Tier</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    Overhead ({formatPercent(assumptions.overheadRate)}) [B11]
                  </span>
                  <span className="font-mono font-semibold text-[var(--color-primary)]">
                    {formatCurrency(summary.overheadAllocation, assumptions.currencySymbol)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    Contingency ({formatPercent(assumptions.contingencyRate)}) [B12]
                  </span>
                  <span className="font-mono font-semibold text-[var(--color-primary)]">
                    {formatCurrency(summary.contingencyAmount, assumptions.currencySymbol)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    Target Markup ({formatPercent(assumptions.targetMarkupRate)}) [B13]
                  </span>
                  <span className="font-mono font-semibold text-[var(--color-primary)]">
                    {formatCurrency(summary.markupAmount, assumptions.currencySymbol)}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between font-bold">
                  <span className="text-[var(--color-accent)]">Gross Commercial Additions</span>
                  <span className="font-mono text-sm text-[var(--color-accent)]">
                    {formatCurrency(
                      summary.overheadAllocation + summary.contingencyAmount + summary.markupAmount,
                      assumptions.currencySymbol
                    )}
                  </span>
                </div>
              </div>

              {/* Profit Yield Insight */}
              <div className="insight-block p-3 rounded-lg text-xs mt-3">
                <div className="font-semibold text-[var(--color-primary)]">
                  Net Commercial Margin Yield:{' '}
                  {formatPercent(
                    summary.totalBidPrice > 0
                      ? (summary.overheadAllocation + summary.contingencyAmount + summary.markupAmount) /
                          summary.totalBidPrice
                      : 0
                  )}
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  Calculated against total bid top-line revenue.
                </div>
              </div>
            </div>
          </div>

          {/* Division Breakdown Dynamic Table (E7:I20) */}
          <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 overflow-hidden space-y-3 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold font-heading text-[var(--color-primary)]">
                  Division & Trade Breakdown Table (E7:I20)
                </h3>
                <p className="text-xs text-[var(--color-muted)] mt-0.5">
                  Dynamic array aggregation grouping all takeoff lines for {summary.projectId} by engineering trade.
                </p>
              </div>
              <span className="text-xs font-mono text-[var(--color-muted)]">
                {summary.divisionBreakdown.length} Active Trades
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--table-header-sep)] bg-[var(--table-header-bg)] text-[var(--color-primary)] font-semibold uppercase tracking-label text-[11px]">
                    <th className="py-2.5 px-3 min-w-[180px]">Division / Trade [E]</th>
                    <th className="py-2.5 px-3 text-right w-28">Material Cost [F]</th>
                    <th className="py-2.5 px-3 text-right w-28">Labor Cost [G]</th>
                    <th className="py-2.5 px-3 text-right w-28">Equipment Cost [H]</th>
                    <th className="py-2.5 px-3 text-right w-32 bg-blue-50/40 text-[var(--color-accent)] font-bold">
                      Division Final Bid [I]
                    </th>
                    <th className="py-2.5 px-3 w-40">Proposal Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {summary.divisionBreakdown.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-400 text-xs font-sans">
                        No takeoff items linked to this project.
                      </td>
                    </tr>
                  ) : (
                    summary.divisionBreakdown.map((div) => {
                      const sharePercent = summary.totalBidPrice > 0 ? (div.finalBid / summary.totalBidPrice) * 100 : 0;
                      return (
                        <tr key={div.division} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-2.5 px-3 font-sans font-semibold text-[var(--color-primary)]">
                            {div.division}
                            <span className="block text-[10px] font-normal text-[var(--color-muted)]">
                              {div.itemCount} takeoff lines
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-right text-slate-700">
                            {formatCurrency(div.directMaterial, assumptions.currencySymbol)}
                          </td>
                          <td className="py-2.5 px-3 text-right text-slate-700">
                            {formatCurrency(div.directLabor, assumptions.currencySymbol)}
                          </td>
                          <td className="py-2.5 px-3 text-right text-slate-700">
                            {formatCurrency(div.directEquipment, assumptions.currencySymbol)}
                          </td>
                          <td className="py-2.5 px-3 text-right font-bold text-[var(--color-accent)] bg-blue-50/20">
                            {formatCurrency(div.finalBid, assumptions.currencySymbol)}
                          </td>
                          <td className="py-2.5 px-3">
                            <div className="flex items-center gap-2">
                              <div className="w-full h-2 rounded-full databar-track overflow-hidden">
                                <div
                                  className="h-full databar-fill rounded-full"
                                  style={{ width: `${Math.min(sharePercent, 100)}%` }}
                                />
                              </div>
                              <span className="text-[11px] text-slate-500 w-10 text-right font-sans">
                                {sharePercent.toFixed(1)}%
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
