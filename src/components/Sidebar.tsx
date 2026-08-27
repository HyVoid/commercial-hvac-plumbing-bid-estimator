import React, { useState } from 'react';
import {
  Layers,
  LayoutDashboard,
  FileText,
  Sliders,
  FolderKanban,
  Calculator,
  Cpu,
  BarChart3,
  TrendingUp,
  Download,
  Upload,
  FileUp,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Clock,
} from 'lucide-react';
import { SheetTabId } from '../types';

interface SidebarProps {
  activeTab: SheetTabId;
  onSelectTab: (tab: SheetTabId) => void;
  lastSaved: string;
  onExportBackup: () => void;
  onImportBackup: () => void;
  onBulkCsvImport: () => void;
  onResetData: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

interface TabItem {
  id: SheetTabId;
  label: string;
  sheetNo: string;
  icon: React.ElementType;
  description: string;
}

const TABS: TabItem[] = [
  {
    id: '08_Dashboard',
    label: 'Dashboard',
    sheetNo: '08',
    icon: LayoutDashboard,
    description: 'Executive Cockpit',
  },
  {
    id: '01_README',
    label: 'Overview & SOP',
    sheetNo: '01',
    icon: FileText,
    description: 'System Architecture',
  },
  {
    id: '02_Assumptions',
    label: 'Assumptions',
    sheetNo: '02',
    icon: Sliders,
    description: 'Labor & Markup Rates',
  },
  {
    id: '03_Project_Setup',
    label: 'Project Setup',
    sheetNo: '03',
    icon: FolderKanban,
    description: 'Master Registry',
  },
  {
    id: '04_Quantity_Takeoff',
    label: 'Quantity Takeoff',
    sheetNo: '04',
    icon: Calculator,
    description: 'Measurement Lines',
  },
  {
    id: '05_Estimate_Engine',
    label: 'Estimate Engine',
    sheetNo: '05',
    icon: Cpu,
    description: 'Calculation Core',
  },
  {
    id: '06_Bid_Summary',
    label: 'Bid Summary',
    sheetNo: '06',
    icon: BarChart3,
    description: 'Proposal Rollup',
  },
  {
    id: '07_Bid_Tracker',
    label: 'Bid Tracker',
    sheetNo: '07',
    icon: TrendingUp,
    description: 'Pipeline & Awards',
  },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  lastSaved,
  onExportBackup,
  onImportBackup,
  onBulkCsvImport,
  onResetData,
  isCollapsed,
  onToggleCollapse,
}) => {
  const formattedTime = React.useMemo(() => {
    try {
      const date = new Date(lastSaved);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    } catch {
      return 'Just now';
    }
  }, [lastSaved]);

  return (
    <aside
      className={`bg-white border-r border-[#E5E5E1] h-screen sticky top-0 flex flex-col justify-between transition-all duration-300 z-30 select-none shrink-0 ${
        isCollapsed ? 'w-[72px]' : 'w-[280px]'
      }`}
    >
      {/* Top Brand Header */}
      <div className="p-4 border-b border-[#E5E5E1]">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-[var(--main)] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Layers className="w-4 h-4 text-white" />
            </div>
            {!isCollapsed && (
              <div className="min-w-0">
                <h1 className="font-heading text-sm font-bold text-[var(--main)] tracking-[-0.01em] leading-tight line-clamp-2">
                  Commercial Plumbing & Mechanical Estimating & Bid Tracking Excel Toolkit
                </h1>
                <span className="text-[10px] text-[var(--gray)] font-mono font-medium block mt-0.5">
                  Excel Model v2.4 SaaS
                </span>
              </div>
            )}
          </div>
          <button
            onClick={onToggleCollapse}
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            className="p-1 rounded-md text-[var(--gray)] hover:text-[var(--main)] hover:bg-[#F5F5F2] transition cursor-pointer shrink-0"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Sheets Navigation List */}
      <div className="flex-1 overflow-y-auto py-3 px-2 space-y-1 no-scrollbar">
        {!isCollapsed && (
          <div className="px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-label text-[var(--gray)]">
            Worksheets / Navigation
          </div>
        )}

        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`sidebar-tab-${tab.id}`}
              onClick={() => onSelectTab(tab.id)}
              title={isCollapsed ? `[${tab.sheetNo}] ${tab.label}` : undefined}
              className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-left transition-all cursor-pointer group ${
                isActive
                  ? 'bg-[#F5F5F2] text-[var(--main)] font-semibold shadow-xs'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-[var(--main)]'
              }`}
            >
              <div
                className={`w-7 h-7 rounded flex items-center justify-center shrink-0 transition-colors ${
                  isActive
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-slate-100 text-slate-500 group-hover:text-[var(--main)] group-hover:bg-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>

              {!isCollapsed && (
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] truncate">{tab.label}</span>
                    <span className="text-[10px] font-mono opacity-50 font-bold ml-1.5">
                      {tab.sheetNo}
                    </span>
                  </div>
                  <div className="text-[11px] text-[var(--gray)] truncate leading-none mt-0.5">
                    {tab.description}
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Utilities & Backup Toolbar */}
      <div className="border-t border-[#E5E5E1] p-3 space-y-3 bg-white">
        {/* Last Saved Indicator */}
        {!isCollapsed ? (
          <div className="flex items-center justify-between text-[11px] text-[var(--gray)] px-1">
            <div className="flex items-center gap-1.5 italic">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Saved: {formattedTime}</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-[var(--color-positive)]" title="All changes saved" />
          </div>
        ) : (
          <div className="flex justify-center" title={`Saved: ${formattedTime}`}>
            <span className="w-2 h-2 rounded-full bg-[var(--color-positive)]" />
          </div>
        )}

        {/* Action Buttons */}
        <div className={`grid gap-1.5 ${isCollapsed ? 'grid-cols-1' : 'grid-cols-2'}`}>
          <button
            id="sidebar-btn-csv-import"
            onClick={onBulkCsvImport}
            title="Bulk CSV Import"
            className="flex items-center justify-center gap-1.5 px-2 py-1.5 border border-[#E5E5E1] rounded-md text-xs font-medium text-[var(--main)] hover:bg-[#F5F5F2] transition cursor-pointer"
          >
            <FileUp className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
            {!isCollapsed && <span className="truncate">Import CSV</span>}
          </button>

          <button
            id="sidebar-btn-export"
            onClick={onExportBackup}
            title="Export JSON Backup"
            className="flex items-center justify-center gap-1.5 px-2 py-1.5 border border-[#E5E5E1] rounded-md text-xs font-medium text-[var(--main)] hover:bg-[#F5F5F2] transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[var(--gray)] shrink-0" />
            {!isCollapsed && <span className="truncate">Export</span>}
          </button>

          <button
            id="sidebar-btn-import"
            onClick={onImportBackup}
            title="Restore JSON Backup"
            className="flex items-center justify-center gap-1.5 px-2 py-1.5 border border-[#E5E5E1] rounded-md text-xs font-medium text-[var(--main)] hover:bg-[#F5F5F2] transition cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5 text-[var(--gray)] shrink-0" />
            {!isCollapsed && <span className="truncate">Restore</span>}
          </button>

          <button
            id="sidebar-btn-reset"
            onClick={onResetData}
            title="Reset Data"
            className="flex items-center justify-center gap-1.5 px-2 py-1.5 border border-red-200 rounded-md text-xs font-medium text-[#D32F2F] hover:bg-red-50 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 shrink-0" />
            {!isCollapsed && <span className="truncate">Reset</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};
