import React, { useState } from 'react';
import {
  Calculator,
  Plus,
  Trash2,
  Copy,
  Search,
  Filter,
  CheckCircle2,
  Sparkles,
  Info,
  DollarSign,
  Clock,
  Layers,
} from 'lucide-react';
import {
  AssumptionsState,
  ProjectRecord,
  QuantityTakeoffItem,
} from '../../types';
import { formatCurrency, getAppliedLaborRate } from '../../utils/engine';

interface Sheet04QuantityTakeoffProps {
  takeoffs: QuantityTakeoffItem[];
  projects: ProjectRecord[];
  assumptions: AssumptionsState;
  onChange: (takeoffs: QuantityTakeoffItem[]) => void;
  selectedProjectId?: string;
  onSelectProject?: (projectId: string) => void;
}

const COMMON_UNITS = ['LF', 'EA', 'SQFT', 'SET', 'TON', 'LBS', 'HR', 'LOT'];

export const Sheet04QuantityTakeoff: React.FC<Sheet04QuantityTakeoffProps> = ({
  takeoffs,
  projects,
  assumptions,
  onChange,
  selectedProjectId,
  onSelectProject,
}) => {
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>(
    selectedProjectId || 'ALL'
  );
  const [searchTerm, setSearchTerm] = useState('');

  // Handle line change
  const handleItemChange = (id: string, field: keyof QuantityTakeoffItem, value: any) => {
    const updated = takeoffs.map((item) => {
      if (item.id === id) {
        let parsedVal = value;
        if (
          field === 'quantity' ||
          field === 'materialUnitRate' ||
          field === 'laborHoursPerUnit' ||
          field === 'equipmentUnitRate'
        ) {
          parsedVal = parseFloat(value) || 0;
        }
        return {
          ...item,
          [field]: parsedVal,
        };
      }
      return item;
    });
    onChange(updated);
  };

  // Add line item
  const handleAddItem = () => {
    const targetProj = activeProjectFilter !== 'ALL' ? activeProjectFilter : projects[0]?.id || 'PRJ-2026-001';
    const defaultTrade = assumptions.laborRates[0]?.tradeName || 'Plumbing - Journeyman';

    const newItem: QuantityTakeoffItem = {
      id: `TO-${Date.now()}`,
      projectId: targetProj,
      division: defaultTrade,
      itemDescription: 'New Piping / Equipment Measurement Item',
      unit: 'LF',
      quantity: 100,
      materialUnitRate: 25.0,
      laborHoursPerUnit: 0.5,
      equipmentUnitRate: 2.0,
    };

    onChange([...takeoffs, newItem]);
  };

  // Duplicate line item
  const handleDuplicateItem = (item: QuantityTakeoffItem) => {
    const newItem: QuantityTakeoffItem = {
      ...item,
      id: `TO-${Date.now()}`,
      itemDescription: `${item.itemDescription} (Copy)`,
    };
    onChange([...takeoffs, newItem]);
  };

  // Delete line item
  const handleDeleteItem = (id: string) => {
    if (takeoffs.length <= 1) return;
    onChange(takeoffs.filter((t) => t.id !== id));
  };

  const filteredTakeoffs = takeoffs.filter((item) => {
    const matchesProject = activeProjectFilter === 'ALL' || item.projectId === activeProjectFilter;
    const matchesSearch =
      item.itemDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.division.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.projectId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesProject && matchesSearch;
  });

  // Calculate quick metrics for current view
  const totalItemsCount = filteredTakeoffs.length;
  const totalDirectHours = filteredTakeoffs.reduce(
    (acc, t) => acc + t.quantity * t.laborHoursPerUnit,
    0
  );
  const totalMaterialPurchases = filteredTakeoffs.reduce(
    (acc, t) => acc + t.quantity * t.materialUnitRate,
    0
  );

  return (
    <div className="space-y-6 animate-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-label text-[var(--color-accent)] font-semibold">
            Sheet 04 // Engineering Takeoff Fact Layer
          </span>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-[var(--color-primary)] tracking-display">
            Quantity Takeoff (BOQ Entry)
          </h1>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-3xl">
            Input field measurements, material pricing, labor productivity hours, and equipment costs.
            The <code>Applied Labor Rate</code> column automatically looks up trade rates from Sheet 02 with full formula parity.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAddItem}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--color-accent)] text-white text-xs font-semibold rounded-lg hover:opacity-90 transition shadow-sm cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Takeoff Line</span>
          </button>
        </div>
      </div>

      {/* Quick Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[var(--color-surface)] p-4 rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] border border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label">
              Takeoff Items Count
            </div>
            <div className="text-xl font-bold font-heading text-[var(--color-primary)] mt-0.5">
              {totalItemsCount} <span className="text-xs font-normal text-[var(--color-muted)]">lines</span>
            </div>
          </div>
          <Layers className="w-6 h-6 text-slate-300" />
        </div>

        <div className="bg-[var(--color-surface)] p-4 rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] border border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label">
              Total Direct Labor Hours
            </div>
            <div className="text-xl font-bold font-heading text-[var(--color-primary)] mt-0.5">
              {totalDirectHours.toLocaleString('en-US', { maximumFractionDigits: 1 })}{' '}
              <span className="text-xs font-normal text-[var(--color-muted)]">craft hours</span>
            </div>
          </div>
          <Clock className="w-6 h-6 text-slate-300" />
        </div>

        <div className="bg-[var(--color-surface)] p-4 rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] border border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-semibold text-[var(--color-muted)] tracking-label">
              Direct Material Purchases
            </div>
            <div className="text-xl font-bold font-heading text-[var(--color-primary)] mt-0.5">
              {formatCurrency(totalMaterialPurchases, assumptions.currencySymbol)}
            </div>
          </div>
          <DollarSign className="w-6 h-6 text-slate-300" />
        </div>
      </div>

      {/* Filter and Project Selector */}
      <div className="bg-[var(--color-surface)] p-4 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Project Selector Tab */}
        <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto">
          <span className="text-xs font-semibold uppercase tracking-label text-[var(--color-muted)] whitespace-nowrap">
            Filter Project:
          </span>
          <button
            onClick={() => setActiveProjectFilter('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer whitespace-nowrap ${
              activeProjectFilter === 'ALL'
                ? 'bg-[var(--color-primary)] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Projects ({takeoffs.length})
          </button>
          {projects.map((p) => {
            const count = takeoffs.filter((t) => t.projectId === p.id).length;
            const isSelected = activeProjectFilter === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveProjectFilter(p.id)}
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
            placeholder="Search descriptions, divisions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
          />
        </div>
      </div>

      {/* Main Takeoff Data Table */}
      <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-[var(--table-header-sep)] bg-[var(--table-header-bg)] text-[var(--color-primary)] font-semibold uppercase tracking-label text-[11px]">
                <th className="py-3 px-3 w-32">Project ID [A]</th>
                <th className="py-3 px-3 min-w-[190px]">Division / Trade [B]</th>
                <th className="py-3 px-3 min-w-[260px]">Item Description [C]</th>
                <th className="py-3 px-2 w-20 text-center">Unit [D]</th>
                <th className="py-3 px-3 w-24 text-right">Quantity [E]</th>
                <th className="py-3 px-3 w-28 text-right">Mat Unit Rate [F]</th>
                <th className="py-3 px-3 w-28 text-right">Labor Hrs/Unit [G]</th>
                <th className="py-3 px-3 w-28 text-right bg-blue-50/40 text-[var(--color-accent)]">
                  Applied Rate [H] (fx)
                </th>
                <th className="py-3 px-3 w-28 text-right">Equip Rate [I]</th>
                <th className="py-3 px-2 w-16 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTakeoffs.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-slate-400 text-xs">
                    No takeoff lines found for current selection. Click "+ Add Takeoff Line" to begin measurement entry.
                  </td>
                </tr>
              ) : (
                filteredTakeoffs.map((item) => {
                  const appliedRate = getAppliedLaborRate(item, assumptions);

                  return (
                    <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                      {/* Project ID Dropdown */}
                      <td className="py-2 px-3">
                        <select
                          value={item.projectId}
                          onChange={(e) => handleItemChange(item.id, 'projectId', e.target.value)}
                          className="editable-cell-input w-full px-2 py-1 rounded text-xs font-mono font-bold text-[var(--color-accent)] cursor-pointer"
                        >
                          {projects.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.id}
                            </option>
                          ))}
                        </select>
                      </td>

                      {/* Division / Trade */}
                      <td className="py-2 px-3">
                        <input
                          type="text"
                          list="trade-options"
                          value={item.division}
                          onChange={(e) => handleItemChange(item.id, 'division', e.target.value)}
                          className="editable-cell-input w-full px-2 py-1 rounded text-xs font-medium text-[var(--color-primary)]"
                        />
                      </td>

                      {/* Item Description */}
                      <td className="py-2 px-3">
                        <input
                          type="text"
                          value={item.itemDescription}
                          onChange={(e) => handleItemChange(item.id, 'itemDescription', e.target.value)}
                          className="editable-cell-input w-full px-2 py-1 rounded text-xs text-[var(--color-body-text)]"
                        />
                      </td>

                      {/* Unit */}
                      <td className="py-2 px-2 text-center">
                        <select
                          value={item.unit}
                          onChange={(e) => handleItemChange(item.id, 'unit', e.target.value)}
                          className="editable-cell-input w-full px-1 py-1 rounded text-xs text-center font-mono cursor-pointer"
                        >
                          {COMMON_UNITS.map((u) => (
                            <option key={u} value={u}>
                              {u}
                            </option>
                          ))}
                        </select>
                      </td>

                      {/* Quantity */}
                      <td className="py-2 px-3 text-right">
                        <input
                          type="number"
                          step="any"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                          className="editable-cell-input w-full px-2 py-1 rounded text-xs text-right font-mono font-semibold text-[var(--color-primary)]"
                        />
                      </td>

                      {/* Material Unit Rate */}
                      <td className="py-2 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <span className="text-[11px] text-[var(--color-muted)]">{assumptions.currencySymbol}</span>
                          <input
                            type="number"
                            step="0.01"
                            value={item.materialUnitRate}
                            onChange={(e) => handleItemChange(item.id, 'materialUnitRate', e.target.value)}
                            className="editable-cell-input w-20 px-2 py-1 rounded text-xs text-right font-mono text-[var(--color-body-text)]"
                          />
                        </div>
                      </td>

                      {/* Labor Hours / Unit */}
                      <td className="py-2 px-3 text-right">
                        <input
                          type="number"
                          step="0.01"
                          value={item.laborHoursPerUnit}
                          onChange={(e) => handleItemChange(item.id, 'laborHoursPerUnit', e.target.value)}
                          className="editable-cell-input w-20 px-2 py-1 rounded text-xs text-right font-mono text-[var(--color-body-text)]"
                        />
                      </td>

                      {/* Applied Labor Rate (Formula Calculated fx) */}
                      <td className="py-2 px-3 text-right bg-blue-50/20">
                        <div className="font-mono font-semibold text-xs text-[var(--color-accent)] flex items-center justify-end gap-1">
                          <span>{formatCurrency(appliedRate, assumptions.currencySymbol)}/hr</span>
                        </div>
                      </td>

                      {/* Equipment Unit Rate */}
                      <td className="py-2 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <span className="text-[11px] text-[var(--color-muted)]">{assumptions.currencySymbol}</span>
                          <input
                            type="number"
                            step="0.01"
                            value={item.equipmentUnitRate}
                            onChange={(e) => handleItemChange(item.id, 'equipmentUnitRate', e.target.value)}
                            className="editable-cell-input w-20 px-2 py-1 rounded text-xs text-right font-mono text-[var(--color-body-text)]"
                          />
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-2 px-2 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => handleDuplicateItem(item)}
                            className="p-1 text-slate-400 hover:text-[var(--color-accent)] transition cursor-pointer"
                            title="Duplicate takeoff line"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            disabled={takeoffs.length <= 1}
                            className="p-1 text-slate-400 hover:text-red-600 disabled:opacity-20 transition cursor-pointer"
                            title="Delete line"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Trade autocomplete datalist */}
        <datalist id="trade-options">
          {assumptions.laborRates.map((lr) => (
            <option key={lr.id} value={lr.tradeName} />
          ))}
        </datalist>

        {/* Table Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-xs text-[var(--color-muted)]">
          <span>Showing {filteredTakeoffs.length} takeoff items</span>
          <span className="font-mono text-[11px]">
            Formula: H2 = XLOOKUP(B2, 02_Assumptions!Trade, 02_Assumptions!Rate)
          </span>
        </div>
      </div>
    </div>
  );
};
