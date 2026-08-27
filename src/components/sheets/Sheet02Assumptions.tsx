import React from 'react';
import {
  Sliders,
  Plus,
  Trash2,
  Percent,
  DollarSign,
  Wrench,
  Truck,
  Sparkles,
  Info,
} from 'lucide-react';
import { AssumptionsState, TradeLaborRate, EquipmentRate } from '../../types';
import { formatCurrency, formatPercent } from '../../utils/engine';

interface Sheet02AssumptionsProps {
  assumptions: AssumptionsState;
  onChange: (updated: AssumptionsState) => void;
}

export const Sheet02Assumptions: React.FC<Sheet02AssumptionsProps> = ({
  assumptions,
  onChange,
}) => {
  // Handlers for top control parameters
  const handleRateChange = (field: keyof AssumptionsState, rawValue: string) => {
    const num = parseFloat(rawValue);
    onChange({
      ...assumptions,
      [field]: isNaN(num) ? 0 : num / 100, // input is percentage number (e.g. 10 for 10%)
    });
  };

  const handleCurrencyChange = (sym: string) => {
    onChange({
      ...assumptions,
      currencySymbol: sym,
    });
  };

  // Handlers for Trade Labor Rates
  const handleLaborRateChange = (id: string, field: keyof TradeLaborRate, val: any) => {
    const updated = assumptions.laborRates.map((lr) => {
      if (lr.id === id) {
        return {
          ...lr,
          [field]: field === 'ratePerHour' ? parseFloat(val) || 0 : val,
        };
      }
      return lr;
    });
    onChange({ ...assumptions, laborRates: updated });
  };

  const handleAddLaborRate = () => {
    const newId = `LR-${Date.now()}`;
    const newRate: TradeLaborRate = {
      id: newId,
      tradeName: 'New Trade Division',
      ratePerHour: 80.0,
      description: 'Standard trade hourly wage rate',
    };
    onChange({
      ...assumptions,
      laborRates: [...assumptions.laborRates, newRate],
    });
  };

  const handleDeleteLaborRate = (id: string) => {
    if (assumptions.laborRates.length <= 1) return;
    onChange({
      ...assumptions,
      laborRates: assumptions.laborRates.filter((r) => r.id !== id),
    });
  };

  // Handlers for Equipment Rates
  const handleEquipRateChange = (id: string, field: keyof EquipmentRate, val: any) => {
    const updated = assumptions.equipmentRates.map((eq) => {
      if (eq.id === id) {
        return {
          ...eq,
          [field]: field === 'ratePerHour' ? parseFloat(val) || 0 : val,
        };
      }
      return eq;
    });
    onChange({ ...assumptions, equipmentRates: updated });
  };

  const handleAddEquipRate = () => {
    const newId = `EQ-${Date.now()}`;
    const newRate: EquipmentRate = {
      id: newId,
      equipmentType: 'New Mechanical Tool / Rig',
      ratePerHour: 30.0,
      description: 'Standard equipment hourly rental rate',
    };
    onChange({
      ...assumptions,
      equipmentRates: [...assumptions.equipmentRates, newRate],
    });
  };

  const handleDeleteEquipRate = (id: string) => {
    if (assumptions.equipmentRates.length <= 1) return;
    onChange({
      ...assumptions,
      equipmentRates: assumptions.equipmentRates.filter((r) => r.id !== id),
    });
  };

  const maxLaborRate = Math.max(...assumptions.laborRates.map((r) => r.ratePerHour), 120);
  const maxEquipRate = Math.max(...assumptions.equipmentRates.map((r) => r.ratePerHour), 250);

  return (
    <div className="space-y-8 animate-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-label text-[var(--color-accent)] font-semibold">
            Sheet 02 // Central Parameter & Control Layer
          </span>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-[var(--color-primary)] tracking-display">
            Commercial Parameters & Rate Schedule
          </h1>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-3xl">
            Single point of truth for corporate markups, overhead allocation multipliers, wage schedules, and equipment rates.
            Zero hardcoded values: all calculation engine sheets reference this centralized tier.
          </p>
        </div>
      </div>

      {/* Global Control Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Currency Symbol */}
        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift">
          <div className="flex items-center justify-between text-xs text-[var(--color-muted)] mb-2">
            <span className="uppercase font-semibold tracking-label">Currency Symbol [B4]</span>
            <DollarSign className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={assumptions.currencySymbol}
              onChange={(e) => handleCurrencyChange(e.target.value)}
              maxLength={3}
              className="editable-cell-input text-2xl font-bold font-heading text-[var(--color-primary)] w-20 px-3 py-1.5 rounded-lg text-center"
            />
            <span className="text-xs text-[var(--color-muted)]">Global Display</span>
          </div>
          <p className="text-[11px] text-[var(--color-muted)] mt-2">
            Applied to all estimate engine, summary, and dashboard currency formats.
          </p>
        </div>

        {/* Overhead Rate (B5) */}
        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift">
          <div className="flex items-center justify-between text-xs text-[var(--color-muted)] mb-2">
            <span className="uppercase font-semibold tracking-label">Overhead Rate [B5]</span>
            <Percent className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              step="0.5"
              min="0"
              max="100"
              value={(assumptions.overheadRate * 100).toFixed(1)}
              onChange={(e) => handleRateChange('overheadRate', e.target.value)}
              className="editable-cell-input text-2xl font-bold font-heading text-[var(--color-primary)] w-28 px-3 py-1.5 rounded-lg text-right"
            />
            <span className="text-sm font-semibold text-[var(--color-primary)]">%</span>
          </div>
          <p className="text-[11px] text-[var(--color-muted)] mt-2">
            Corporate administrative & operating expenses allocated across direct project costs.
          </p>
        </div>

        {/* Target Markup (B6) */}
        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift">
          <div className="flex items-center justify-between text-xs text-[var(--color-muted)] mb-2">
            <span className="uppercase font-semibold tracking-label">Target Markup [B6]</span>
            <Sliders className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              step="0.5"
              min="0"
              max="100"
              value={(assumptions.targetMarkupRate * 100).toFixed(1)}
              onChange={(e) => handleRateChange('targetMarkupRate', e.target.value)}
              className="editable-cell-input text-2xl font-bold font-heading text-[var(--color-primary)] w-28 px-3 py-1.5 rounded-lg text-right"
            />
            <span className="text-sm font-semibold text-[var(--color-primary)]">%</span>
          </div>
          <p className="text-[11px] text-[var(--color-muted)] mt-2">
            Commercial profit margin markup applied on top of (Direct + Overhead + Contingency).
          </p>
        </div>

        {/* Contingency Rate (B7) */}
        <div className="bg-[var(--color-surface)] p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] card-hover-lift">
          <div className="flex items-center justify-between text-xs text-[var(--color-muted)] mb-2">
            <span className="uppercase font-semibold tracking-label">Contingency Rate [B7]</span>
            <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              step="0.5"
              min="0"
              max="100"
              value={(assumptions.contingencyRate * 100).toFixed(1)}
              onChange={(e) => handleRateChange('contingencyRate', e.target.value)}
              className="editable-cell-input text-2xl font-bold font-heading text-[var(--color-primary)] w-28 px-3 py-1.5 rounded-lg text-right"
            />
            <span className="text-sm font-semibold text-[var(--color-primary)]">%</span>
          </div>
          <p className="text-[11px] text-[var(--color-muted)] mt-2">
            Risk buffer reserve for unforeseen site conditions, drawing gaps, and scope fluctuations.
          </p>
        </div>
      </div>

      {/* Two-Column Tables for Labor and Equipment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Trade Labor Rates (B11:C20) */}
        <div className="bg-[var(--color-surface)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[var(--color-accent)]" />
                <h3 className="text-base font-bold font-heading text-[var(--color-primary)]">
                  Standard Trade Labor Rates (B11:C20)
                </h3>
              </div>
              <p className="text-xs text-[var(--color-muted)] mt-0.5">
                Hourly billing/cost rates per MEP trade. Auto-matched in Quantity Takeoff.
              </p>
            </div>
            <button
              onClick={handleAddLaborRate}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[var(--color-accent)] bg-blue-50 hover:bg-blue-100 rounded-lg transition cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Trade</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--table-header-sep)] bg-[var(--table-header-bg)] text-[var(--color-primary)] font-semibold uppercase tracking-label text-[11px]">
                  <th className="py-2.5 px-3">Trade Name / Division</th>
                  <th className="py-2.5 px-3 text-right">Hourly Rate ({assumptions.currencySymbol}/hr)</th>
                  <th className="py-2.5 px-3 w-28">Relative Scale</th>
                  <th className="py-2.5 px-2 w-10 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {assumptions.laborRates.map((lr) => {
                  const percentScale = (lr.ratePerHour / maxLaborRate) * 100;
                  return (
                    <tr key={lr.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2 px-3">
                        <input
                          type="text"
                          value={lr.tradeName}
                          onChange={(e) => handleLaborRateChange(lr.id, 'tradeName', e.target.value)}
                          className="editable-cell-input w-full px-2 py-1 rounded text-xs text-[var(--color-primary)] font-medium"
                        />
                      </td>
                      <td className="py-2 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <span className="text-[var(--color-muted)]">{assumptions.currencySymbol}</span>
                          <input
                            type="number"
                            step="0.5"
                            value={lr.ratePerHour}
                            onChange={(e) => handleLaborRateChange(lr.id, 'ratePerHour', e.target.value)}
                            className="editable-cell-input w-20 px-2 py-1 rounded text-xs text-right font-mono font-semibold text-[var(--color-primary)]"
                          />
                        </div>
                      </td>
                      <td className="py-2 px-3">
                        <div className="w-full h-2 rounded-full databar-track overflow-hidden">
                          <div
                            className="h-full databar-fill rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(percentScale, 100)}%` }}
                          />
                        </div>
                      </td>
                      <td className="py-2 px-2 text-center">
                        <button
                          onClick={() => handleDeleteLaborRate(lr.id)}
                          disabled={assumptions.laborRates.length <= 1}
                          className="p-1 text-slate-400 hover:text-red-600 disabled:opacity-30 transition cursor-pointer"
                          title="Delete trade"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Standard Equipment Rates (E11:F20) */}
        <div className="bg-[var(--color-surface)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[var(--color-accent)]" />
                <h3 className="text-base font-bold font-heading text-[var(--color-primary)]">
                  Equipment Standard Rental Rates (E11:F20)
                </h3>
              </div>
              <p className="text-xs text-[var(--color-muted)] mt-0.5">
                Hourly operational and rental rates for specialty MEP tools, cranes & lifts.
              </p>
            </div>
            <button
              onClick={handleAddEquipRate}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[var(--color-accent)] bg-blue-50 hover:bg-blue-100 rounded-lg transition cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Equipment</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--table-header-sep)] bg-[var(--table-header-bg)] text-[var(--color-primary)] font-semibold uppercase tracking-label text-[11px]">
                  <th className="py-2.5 px-3">Equipment / Machine Type</th>
                  <th className="py-2.5 px-3 text-right">Hourly Rate ({assumptions.currencySymbol}/hr)</th>
                  <th className="py-2.5 px-3 w-28">Relative Scale</th>
                  <th className="py-2.5 px-2 w-10 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {assumptions.equipmentRates.map((eq) => {
                  const percentScale = (eq.ratePerHour / maxEquipRate) * 100;
                  return (
                    <tr key={eq.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2 px-3">
                        <input
                          type="text"
                          value={eq.equipmentType}
                          onChange={(e) => handleEquipRateChange(eq.id, 'equipmentType', e.target.value)}
                          className="editable-cell-input w-full px-2 py-1 rounded text-xs text-[var(--color-primary)] font-medium"
                        />
                      </td>
                      <td className="py-2 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <span className="text-[var(--color-muted)]">{assumptions.currencySymbol}</span>
                          <input
                            type="number"
                            step="0.5"
                            value={eq.ratePerHour}
                            onChange={(e) => handleEquipRateChange(eq.id, 'ratePerHour', e.target.value)}
                            className="editable-cell-input w-20 px-2 py-1 rounded text-xs text-right font-mono font-semibold text-[var(--color-primary)]"
                          />
                        </div>
                      </td>
                      <td className="py-2 px-3">
                        <div className="w-full h-2 rounded-full databar-track overflow-hidden">
                          <div
                            className="h-full databar-fill rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(percentScale, 100)}%` }}
                          />
                        </div>
                      </td>
                      <td className="py-2 px-2 text-center">
                        <button
                          onClick={() => handleDeleteEquipRate(eq.id)}
                          disabled={assumptions.equipmentRates.length <= 1}
                          className="p-1 text-slate-400 hover:text-red-600 disabled:opacity-30 transition cursor-pointer"
                          title="Delete equipment"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
