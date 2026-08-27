import React, { useState } from 'react';
import {
  Calculator,
  ShieldCheck,
  Search,
  Filter,
  Eye,
  Info,
  Layers,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import {
  AssumptionsState,
  EstimateEngineRow,
  ProjectRecord,
} from '../../types';
import { formatCurrency, formatPercent } from '../../utils/engine';

interface Sheet05EstimateEngineProps {
  engineRows: EstimateEngineRow[];
  projects: ProjectRecord[];
  assumptions: AssumptionsState;
  onNavigateToSummary: (projectId: string) => void;
}

export const Sheet05EstimateEngine: React.FC<Sheet05EstimateEngineProps> = ({
  engineRows,
  projects,
  assumptions,
  onNavigateToSummary,
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFormulaInspect, setActiveFormulaInspect] = useState<string | null>(null);

  const filteredRows = engineRows.filter((r) => {
    const matchesProject = selectedProjectId === 'ALL' || r.projectId === selectedProjectId;
    const matchesSearch =
      r.itemDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.division.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.projectId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesProject && matchesSearch;
  });

  // Calculate Column Totals
  const totalMaterial = filteredRows.reduce((acc, r) => acc + r.directMaterialCost, 0);
  const totalLabor = filteredRows.reduce((acc, r) => acc + r.directLaborCost, 0);
  const totalEquipment = filteredRows.reduce((acc, r) => acc + r.directEquipmentCost, 0);
  const totalDirect = filteredRows.reduce((acc, r) => acc + r.directCostSubtotal, 0);
  const totalOverhead = filteredRows.reduce((acc, r) => acc + r.overheadAllocation, 0);
  const totalContingency = filteredRows.reduce((acc, r) => acc + r.contingencyAmount, 0);
  const totalMarkup = filteredRows.reduce((acc, r) => acc + r.markupAmount, 0);
  const totalFinalBid = filteredRows.reduce((acc, r) => acc + r.lineItemFinalBid, 0);

  return (
    <div className="space-y-6 animate-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-label text-[var(--color-accent)] font-semibold">
            Sheet 05 // Core Calculation Engine Layer
          </span>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-[var(--color-primary)] tracking-display">
            Live Cost Calculation Engine
          </h1>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-3xl">
            Pure dynamic calculation engine. No manual input: all line values are mathematically evaluated in real-time
            from Sheet 04 fact lines and Sheet 02 commercial parameters.
          </p>
        </div>

        {selectedProjectId !== 'ALL' && (
          <button
            onClick={() => onNavigateToSummary(selectedProjectId)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--color-accent)] text-white text-xs font-semibold rounded-lg hover:opacity-90 transition shadow-sm cursor-pointer"
          >
            <span>View Summary for {selectedProjectId}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Formula Audit Bar */}
      <div className="bg-[var(--color-surface)] p-4 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 flex flex-wrap items-center gap-2 text-xs">
        <span className="font-semibold text-[var(--color-primary)] flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
          Active Formula Rules:
        </span>
        <span className="px-2 py-1 bg-slate-100 rounded text-[11px] font-mono text-slate-700">
          Direct Cost [G] = Mat [D] + Labor [E] + Equip [F]
        </span>
        <span className="px-2 py-1 bg-slate-100 rounded text-[11px] font-mono text-slate-700">
          Overhead [H] = G × {formatPercent(assumptions.overheadRate)}
        </span>
        <span className="px-2 py-1 bg-slate-100 rounded text-[11px] font-mono text-slate-700">
          Contingency [I] = (G + H) × {formatPercent(assumptions.contingencyRate)}
        </span>
        <span className="px-2 py-1 bg-slate-100 rounded text-[11px] font-mono text-slate-700">
          Markup [J] = (G + H + I) × {formatPercent(assumptions.targetMarkupRate)}
        </span>
        <span className="px-2 py-1 bg-blue-50 border border-blue-200 rounded text-[11px] font-mono font-bold text-[var(--color-accent)]">
          Final Bid [K] = G + H + I + J
        </span>
      </div>

      {/* Filter and Project Selector */}
      <div className="bg-[var(--color-surface)] p-4 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Project Selector Tab */}
        <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto">
          <span className="text-xs font-semibold uppercase tracking-label text-[var(--color-muted)] whitespace-nowrap">
            Filter View:
          </span>
          <button
            onClick={() => setSelectedProjectId('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer whitespace-nowrap ${
              selectedProjectId === 'ALL'
                ? 'bg-[var(--color-primary)] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Projects ({engineRows.length})
          </button>
          {projects.map((p) => {
            const count = engineRows.filter((r) => r.projectId === p.id).length;
            const isSelected = selectedProjectId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProjectId(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[var(--color-accent)] text-white shadow-sm font-semibold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span className="font-mono">{p.id}</span>
                <span className="text-[10px] opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-72">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search engine lines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
          />
        </div>
      </div>

      {/* Estimate Engine Table */}
      <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-[var(--table-header-sep)] bg-[var(--table-header-bg)] text-[var(--color-primary)] font-semibold uppercase tracking-label text-[11px]">
                <th className="py-3 px-3 w-28">Project [A]</th>
                <th className="py-3 px-3 min-w-[160px]">Division [B]</th>
                <th className="py-3 px-3 min-w-[200px]">Item Description [C]</th>
                <th className="py-3 px-3 w-24 text-right">Direct Mat [D]</th>
                <th className="py-3 px-3 w-24 text-right">Direct Lab [E]</th>
                <th className="py-3 px-3 w-24 text-right">Direct Eqp [F]</th>
                <th className="py-3 px-3 w-28 text-right bg-slate-100/60 font-bold">Direct Sub [G]</th>
                <th className="py-3 px-3 w-24 text-right">Overhead [H]</th>
                <th className="py-3 px-3 w-24 text-right">Contingency [I]</th>
                <th className="py-3 px-3 w-24 text-right">Markup [J]</th>
                <th className="py-3 px-3 w-28 text-right bg-blue-50/60 text-[var(--color-accent)] font-bold">
                  Final Bid [K]
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {filteredRows.length === 0 ? (
                <tr>
                  <td colSpan={11} className="py-12 text-center text-slate-400 text-xs font-sans">
                    No estimate lines available for current project filter.
                  </td>
                </tr>
              ) : (
                filteredRows.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50/80 transition-colors text-xs">
                    <td className="py-2.5 px-3 font-bold text-[var(--color-primary)]">{r.projectId}</td>
                    <td className="py-2.5 px-3 font-sans text-[var(--color-body-text)]">{r.division}</td>
                    <td className="py-2.5 px-3 font-sans text-slate-600 truncate max-w-[240px]">
                      {r.itemDescription}
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-700">
                      {formatCurrency(r.directMaterialCost, assumptions.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-700">
                      {formatCurrency(r.directLaborCost, assumptions.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-700">
                      {formatCurrency(r.directEquipmentCost, assumptions.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right bg-slate-50 font-semibold text-[var(--color-primary)]">
                      {formatCurrency(r.directCostSubtotal, assumptions.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-600">
                      {formatCurrency(r.overheadAllocation, assumptions.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-600">
                      {formatCurrency(r.contingencyAmount, assumptions.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-600">
                      {formatCurrency(r.markupAmount, assumptions.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right bg-blue-50/30 font-bold text-[var(--color-accent)]">
                      {formatCurrency(r.lineItemFinalBid, assumptions.currencySymbol)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            {/* Grand Totals Footer */}
            <tfoot>
              <tr className="border-t-2 border-slate-300 bg-slate-100 font-mono font-bold text-xs text-[var(--color-primary)]">
                <td colSpan={3} className="py-3 px-3 font-sans uppercase tracking-label font-bold">
                  Calculated Subtotals ({filteredRows.length} Items)
                </td>
                <td className="py-3 px-3 text-right">
                  {formatCurrency(totalMaterial, assumptions.currencySymbol)}
                </td>
                <td className="py-3 px-3 text-right">
                  {formatCurrency(totalLabor, assumptions.currencySymbol)}
                </td>
                <td className="py-3 px-3 text-right">
                  {formatCurrency(totalEquipment, assumptions.currencySymbol)}
                </td>
                <td className="py-3 px-3 text-right bg-slate-200/70">
                  {formatCurrency(totalDirect, assumptions.currencySymbol)}
                </td>
                <td className="py-3 px-3 text-right">
                  {formatCurrency(totalOverhead, assumptions.currencySymbol)}
                </td>
                <td className="py-3 px-3 text-right">
                  {formatCurrency(totalContingency, assumptions.currencySymbol)}
                </td>
                <td className="py-3 px-3 text-right">
                  {formatCurrency(totalMarkup, assumptions.currencySymbol)}
                </td>
                <td className="py-3 px-3 text-right bg-blue-100 text-[var(--color-accent)] text-sm">
                  {formatCurrency(totalFinalBid, assumptions.currencySymbol)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
