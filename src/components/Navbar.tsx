import React from 'react';
import {
  FileSpreadsheet,
  Download,
  Upload,
  RotateCcw,
  FileUp,
  Layers,
} from 'lucide-react';
import { SheetTabId } from '../types';

interface NavbarProps {
  activeTab: SheetTabId;
  onSelectTab: (tab: SheetTabId) => void;
  lastSaved: string;
  onExportBackup: () => void;
  onImportBackup: () => void;
  onBulkCsvImport: () => void;
  onResetData: () => void;
}

const TABS: { id: SheetTabId; label: string; sheetNo: string }[] = [
  { id: '01_README', label: 'Overview & SOP', sheetNo: '01' },
  { id: '02_Assumptions', label: 'Assumptions', sheetNo: '02' },
  { id: '03_Project_Setup', label: 'Project Setup', sheetNo: '03' },
  { id: '04_Quantity_Takeoff', label: 'Quantity Takeoff', sheetNo: '04' },
  { id: '05_Estimate_Engine', label: 'Estimate Engine', sheetNo: '05' },
  { id: '06_Bid_Summary', label: 'Bid Summary', sheetNo: '06' },
  { id: '07_Bid_Tracker', label: 'Bid Tracker', sheetNo: '07' },
  { id: '08_Dashboard', label: 'Dashboard', sheetNo: '08' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  lastSaved,
  onExportBackup,
  onImportBackup,
  onBulkCsvImport,
  onResetData,
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
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E5E1]">
      {/* Top Main Navigation Bar (56px) */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[56px] flex items-center justify-between">
        {/* Left: Brand Identity & Tabs */}
        <div className="flex items-center gap-8 lg:gap-10 h-full">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[var(--main)] text-white flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <div className="font-heading text-[22px] font-semibold text-[var(--main)] tracking-[-0.01em] whitespace-nowrap">
              MEP Estimator Pro
            </div>
          </div>

          {/* Desktop Nav Tabs */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => onSelectTab(tab.id)}
                  className={`relative text-[13px] font-medium transition-colors h-full flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[var(--main)] font-semibold'
                      : 'text-[var(--gray)] hover:text-[var(--main)]'
                  }`}
                >
                  <span className="text-[11px] font-mono opacity-60">[{tab.sheetNo}]</span>
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: Last Saved Status */}
        <div className="hidden lg:flex items-center text-[11px] text-[var(--gray)] italic">
          Last saved: {formattedTime}
        </div>
      </div>

      {/* Sub Toolbar: Utility Actions */}
      <div className="border-t border-[#E5E5E1] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <button
              id="btn-bulk-csv-import"
              onClick={onBulkCsvImport}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E5E1] rounded-md text-xs font-medium text-[var(--main)] hover:bg-[#F5F5F2] transition cursor-pointer"
            >
              <FileUp className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Bulk CSV Import</span>
            </button>

            <button
              id="btn-import-backup"
              onClick={onImportBackup}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E5E1] rounded-md text-xs font-medium text-[var(--main)] hover:bg-[#F5F5F2] transition cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-[var(--gray)]" />
              <span>Import Backup</span>
            </button>

            <button
              id="btn-export-backup"
              onClick={onExportBackup}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E5E1] rounded-md text-xs font-medium text-[var(--main)] hover:bg-[#F5F5F2] transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[var(--gray)]" />
              <span>Export Backup</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="lg:hidden text-[11px] text-[var(--gray)] italic">
              Saved: {formattedTime}
            </div>
            <button
              id="btn-reset-data"
              onClick={onResetData}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium text-[#D32F2F] hover:bg-red-50 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Data</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Tab Scroller */}
      <div className="md:hidden flex items-center overflow-x-auto border-t border-[#E5E5E1] px-4 py-2 bg-[#F5F5F2] gap-2 text-xs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`px-2.5 py-1 rounded whitespace-nowrap text-xs ${
              activeTab === tab.id
                ? 'bg-[var(--main)] text-white font-semibold'
                : 'text-slate-600 bg-white border border-[#E5E5E1]'
            }`}
          >
            {tab.sheetNo} {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
};

