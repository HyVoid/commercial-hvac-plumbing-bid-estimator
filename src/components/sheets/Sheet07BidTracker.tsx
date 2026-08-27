import React, { useState } from 'react';
import {
  TrendingUp,
  Search,
  CheckCircle2,
  XCircle,
  Clock,
  FileText,
  DollarSign,
  Layers,
  ArrowUpRight,
  AlertTriangle,
} from 'lucide-react';
import {
  AssumptionsState,
  BidTrackerRecord,
  EstimateEngineRow,
  ProjectRecord,
  ProjectStatus,
} from '../../types';
import {
  computeBidTrackerRecords,
  formatCurrency,
  formatPercent,
} from '../../utils/engine';

interface Sheet07BidTrackerProps {
  projects: ProjectRecord[];
  engineRows: EstimateEngineRow[];
  assumptions: AssumptionsState;
  trackerOverrides: Record<string, { actualWonAmount: number; lossReason: string; status?: ProjectStatus }>;
  onUpdateOverride: (
    projectId: string,
    data: { actualWonAmount?: number; lossReason?: string; status?: ProjectStatus }
  ) => void;
  onNavigateToSummary: (projectId: string) => void;
}

const STATUS_OPTIONS: ProjectStatus[] = ['Draft', 'Submitted', 'Won', 'Lost', 'Pending'];

export const Sheet07BidTracker: React.FC<Sheet07BidTrackerProps> = ({
  projects,
  engineRows,
  assumptions,
  trackerOverrides,
  onUpdateOverride,
  onNavigateToSummary,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const trackerRecords = computeBidTrackerRecords(
    projects,
    engineRows,
    trackerOverrides
  );

  const filteredRecords = trackerRecords.filter((rec) => {
    const matchesSearch =
      rec.projectId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || rec.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate Pipeline Metrics
  const totalPipelineQuoted = trackerRecords.reduce((acc, r) => acc + r.quotedBidPrice, 0);
  const totalWonContractValue = trackerRecords
    .filter((r) => r.status === 'Won')
    .reduce((acc, r) => acc + r.actualWonAmount, 0);
  const wonCount = trackerRecords.filter((r) => r.status === 'Won').length;
  const lostCount = trackerRecords.filter((r) => r.status === 'Lost').length;
  const closedCount = wonCount + lostCount;
  const winRateByCount = closedCount > 0 ? (wonCount / closedCount) * 100 : 0;

  const totalVariance = trackerRecords.reduce((acc, r) => acc + r.variance, 0);

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case 'Won':
        return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
      case 'Lost':
        return 'bg-rose-50 text-rose-700 border border-rose-200';
      case 'Submitted':
        return 'bg-blue-50 text-blue-700 border border-blue-200';
      case 'Pending':
        return 'bg-amber-50 text-amber-700 border border-amber-200';
      case 'Draft':
      default:
        return 'bg-slate-100 text-slate-700 border border-slate-200';
    }
  };

  return (
    <div className="space-y-6 animate-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-label text-[var(--color-accent)] font-semibold">
            Sheet 07 // Pipeline & Contract Tracking
          </span>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-[var(--color-primary)] tracking-display">
            Bid Pipeline & Contract Tracker
          </h1>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-3xl">
            Live pipeline governance. Synchronizes estimated direct costs and quoted prices directly from the calculation engine,
            tracks award outcomes, and logs negotiation contract variances.
          </p>
        </div>
      </div>

      {/* Pipeline Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift">
          <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label">
            Total Pipeline Volume (Quoted)
          </div>
          <div className="text-2xl font-bold font-heading text-[var(--color-primary)] tracking-display mt-1">
            {formatCurrency(totalPipelineQuoted, assumptions.currencySymbol)}
          </div>
          <div className="text-xs text-[var(--color-muted)] mt-1">
            Across {trackerRecords.length} registered proposals
          </div>
        </div>

        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift">
          <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label">
            Actual Won Contract Value
          </div>
          <div className="text-2xl font-bold font-heading text-[var(--color-primary)] tracking-display mt-1">
            {formatCurrency(totalWonContractValue, assumptions.currencySymbol)}
          </div>
          <div className="text-xs text-[var(--color-muted)] mt-1">
            {wonCount} Won projects secured
          </div>
        </div>

        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift">
          <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label">
            Win Rate (Closed Bids)
          </div>
          <div className="text-2xl font-bold font-heading text-[var(--color-primary)] tracking-display mt-1">
            {winRateByCount.toFixed(1)}%
          </div>
          <div className="text-xs text-[var(--color-muted)] mt-1">
            {wonCount} Won / {closedCount} Decided proposals
          </div>
        </div>

        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift">
          <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label">
            Negotiation Price Variance
          </div>
          <div
            className={`text-2xl font-bold font-heading tracking-display mt-1 ${
              totalVariance < 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-primary)]'
            }`}
          >
            {formatCurrency(totalVariance, assumptions.currencySymbol)}
          </div>
          <div className="text-xs text-[var(--color-muted)] mt-1">
            Contract sign-off vs original quote
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[var(--color-surface)] p-4 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects, clients, IDs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          <span className="text-xs text-[var(--color-muted)] uppercase tracking-label font-semibold">Status:</span>
          {['ALL', ...STATUS_OPTIONS].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
                statusFilter === st
                  ? 'bg-[var(--color-primary)] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Bid Tracker Main Table */}
      <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-[var(--table-header-sep)] bg-[var(--table-header-bg)] text-[var(--color-primary)] font-semibold uppercase tracking-label text-[11px]">
                <th className="py-3 px-3 w-28">Project ID [A]</th>
                <th className="py-3 px-3 min-w-[180px]">Project Name [B]</th>
                <th className="py-3 px-3 min-w-[140px]">Client [C]</th>
                <th className="py-3 px-3 w-24">Bid Date [D]</th>
                <th className="py-3 px-3 w-28 text-right">Est. Direct Cost [E]</th>
                <th className="py-3 px-3 w-32 text-right bg-blue-50/40 text-[var(--color-accent)] font-bold">
                  Quoted Bid Price [F]
                </th>
                <th className="py-3 px-3 w-28 text-center">Status [G]</th>
                <th className="py-3 px-3 w-32 text-right">Actual Won [H] ✎</th>
                <th className="py-3 px-3 w-28 text-right">Variance [I] (fx)</th>
                <th className="py-3 px-3 min-w-[180px]">Loss Reason / Notes [J] ✎</th>
                <th className="py-3 px-2 w-14 text-center">View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={11} className="py-12 text-center text-slate-400 text-xs">
                    No pipeline records found for current criteria.
                  </td>
                </tr>
              ) : (
                filteredRecords.map((rec) => {
                  const isWon = rec.status === 'Won';
                  const isLost = rec.status === 'Lost';

                  return (
                    <tr
                      key={rec.projectId}
                      className={`hover:bg-slate-50/70 transition-colors ${
                        isLost ? 'bg-rose-50/20' : ''
                      }`}
                    >
                      {/* Project ID */}
                      <td className="py-2.5 px-3 font-mono font-bold text-[var(--color-primary)]">
                        {rec.projectId}
                      </td>

                      {/* Project Name */}
                      <td className="py-2.5 px-3 font-medium text-[var(--color-primary)] truncate max-w-[200px]">
                        {rec.projectName}
                      </td>

                      {/* Client */}
                      <td className="py-2.5 px-3 text-slate-600 truncate max-w-[150px]">
                        {rec.client}
                      </td>

                      {/* Bid Date */}
                      <td className="py-2.5 px-3 font-mono text-[11px] text-slate-500">
                        {rec.bidDate}
                      </td>

                      {/* Estimated Cost */}
                      <td className="py-2.5 px-3 text-right font-mono text-slate-700">
                        {formatCurrency(rec.totalEstimatedCost, assumptions.currencySymbol)}
                      </td>

                      {/* Quoted Price */}
                      <td className="py-2.5 px-3 text-right font-mono font-bold text-[var(--color-accent)] bg-blue-50/20">
                        {formatCurrency(rec.quotedBidPrice, assumptions.currencySymbol)}
                      </td>

                      {/* Status Dropdown */}
                      <td className="py-2.5 px-3 text-center">
                        <select
                          value={rec.status}
                          onChange={(e) =>
                            onUpdateOverride(rec.projectId, {
                              status: e.target.value as ProjectStatus,
                              actualWonAmount:
                                e.target.value === 'Won' ? rec.quotedBidPrice : 0,
                            })
                          }
                          className={`w-full px-2 py-1 rounded-full text-xs font-semibold text-center cursor-pointer ${getStatusBadge(
                            rec.status
                          )}`}
                        >
                          {STATUS_OPTIONS.map((st) => (
                            <option key={st} value={st}>
                              {st}
                            </option>
                          ))}
                        </select>
                      </td>

                      {/* Actual Won Amount (Editable) */}
                      <td className="py-2.5 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <span className="text-[11px] text-slate-400">{assumptions.currencySymbol}</span>
                          <input
                            type="number"
                            step="100"
                            disabled={!isWon}
                            value={rec.actualWonAmount || 0}
                            onChange={(e) =>
                              onUpdateOverride(rec.projectId, {
                                actualWonAmount: parseFloat(e.target.value) || 0,
                              })
                            }
                            className={`w-24 px-2 py-1 rounded text-xs text-right font-mono font-semibold ${
                              isWon
                                ? 'editable-cell-input text-emerald-800 font-bold'
                                : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                            }`}
                          />
                        </div>
                      </td>

                      {/* Variance (fx) */}
                      <td
                        className={`py-2.5 px-3 text-right font-mono font-semibold ${
                          rec.variance < 0
                            ? 'text-[var(--color-negative)]'
                            : rec.variance > 0
                            ? 'text-emerald-700'
                            : 'text-slate-500'
                        }`}
                      >
                        {isWon ? formatCurrency(rec.variance, assumptions.currencySymbol) : '$0.00'}
                      </td>

                      {/* Loss Reason / Notes (Editable) */}
                      <td className="py-2.5 px-3">
                        <input
                          type="text"
                          value={rec.lossReason}
                          onChange={(e) =>
                            onUpdateOverride(rec.projectId, {
                              lossReason: e.target.value,
                            })
                          }
                          placeholder={isLost ? 'Enter loss reason (e.g. price, scope)...' : 'Notes...'}
                          className={`w-full px-2 py-1 rounded text-xs ${
                            isLost
                              ? 'editable-cell-input text-rose-800'
                              : 'editable-cell-input text-slate-600'
                          }`}
                        />
                      </td>

                      {/* View Action */}
                      <td className="py-2.5 px-2 text-center">
                        <button
                          onClick={() => onNavigateToSummary(rec.projectId)}
                          title="Open Proposal Summary"
                          className="p-1.5 text-slate-400 hover:text-[var(--color-accent)] transition cursor-pointer"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
            {/* Table Footer Totals */}
            <tfoot>
              <tr className="border-t-2 border-slate-300 bg-slate-100 font-mono font-bold text-xs text-[var(--color-primary)]">
                <td colSpan={4} className="py-3 px-3 font-sans uppercase tracking-label font-bold">
                  Pipeline Summary Totals
                </td>
                <td className="py-3 px-3 text-right">
                  {formatCurrency(
                    filteredRecords.reduce((acc, r) => acc + r.totalEstimatedCost, 0),
                    assumptions.currencySymbol
                  )}
                </td>
                <td className="py-3 px-3 text-right bg-blue-100 text-[var(--color-accent)]">
                  {formatCurrency(
                    filteredRecords.reduce((acc, r) => acc + r.quotedBidPrice, 0),
                    assumptions.currencySymbol
                  )}
                </td>
                <td className="py-3 px-3 text-center font-sans text-[11px] font-normal text-slate-500">
                  {wonCount} Won / {lostCount} Lost
                </td>
                <td className="py-3 px-3 text-right text-emerald-800">
                  {formatCurrency(
                    filteredRecords
                      .filter((r) => r.status === 'Won')
                      .reduce((acc, r) => acc + r.actualWonAmount, 0),
                    assumptions.currencySymbol
                  )}
                </td>
                <td className="py-3 px-3 text-right">
                  {formatCurrency(
                    filteredRecords.reduce((acc, r) => acc + r.variance, 0),
                    assumptions.currencySymbol
                  )}
                </td>
                <td colSpan={2} className="py-3 px-3"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
