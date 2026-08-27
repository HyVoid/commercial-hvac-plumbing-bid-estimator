import React, { useState, useEffect, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { Sheet01Readme } from './components/sheets/Sheet01Readme';
import { Sheet02Assumptions } from './components/sheets/Sheet02Assumptions';
import { Sheet03ProjectSetup } from './components/sheets/Sheet03ProjectSetup';
import { Sheet04QuantityTakeoff } from './components/sheets/Sheet04QuantityTakeoff';
import { Sheet05EstimateEngine } from './components/sheets/Sheet05EstimateEngine';
import { Sheet06BidSummary } from './components/sheets/Sheet06BidSummary';
import { Sheet07BidTracker } from './components/sheets/Sheet07BidTracker';
import { Sheet08Dashboard } from './components/sheets/Sheet08Dashboard';
import { CsvImportModal } from './components/modals/CsvImportModal';
import { BackupModal } from './components/modals/BackupModal';
import { ResetConfirmModal } from './components/modals/ResetConfirmModal';
import {
  AppState,
  AssumptionsState,
  ProjectRecord,
  ProjectStatus,
  QuantityTakeoffItem,
  SheetTabId,
} from './types';
import { INITIAL_APP_STATE } from './utils/initialData';
import { computeEstimateEngineRows } from './utils/engine';
import { Menu, X, Layers, Clock } from 'lucide-react';

const STORAGE_KEY = 'mep_bid_estimator_state_v2';

const SHEET_NAMES: Record<SheetTabId, { no: string; name: string }> = {
  '08_Dashboard': { no: '08', name: 'Executive Dashboard & Cockpit' },
  '01_README': { no: '01', name: 'System Overview & SOP Guide' },
  '02_Assumptions': { no: '02', name: 'Global Assumptions & Labor Rates' },
  '03_Project_Setup': { no: '03', name: 'Project Master Registry' },
  '04_Quantity_Takeoff': { no: '04', name: 'Quantity Takeoff Measurement' },
  '05_Estimate_Engine': { no: '05', name: 'Cost Calculation Engine' },
  '06_Bid_Summary': { no: '06', name: 'Commercial Proposal Summary' },
  '07_Bid_Tracker': { no: '07', name: 'Bid Pipeline & Contract Tracker' },
};

export default function App() {
  // Load initial state from localStorage if available
  const [appState, setAppState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.assumptions && parsed.projects && parsed.takeoffs) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load saved state from localStorage:', e);
    }
    return INITIAL_APP_STATE;
  });

  const [activeTab, setActiveTab] = useState<SheetTabId>('08_Dashboard');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    appState.selectedSummaryProjectId || appState.projects[0]?.id || 'PRJ-2026-001'
  );

  // Sidebar collapse & mobile menu states
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Modals state
  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);
  const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Synchronize state changes to localStorage
  const updateAppState = (updater: (prev: AppState) => AppState) => {
    setAppState((prev) => {
      const next = updater(prev);
      const withTimestamp = {
        ...next,
        lastSaved: new Date().toISOString(),
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(withTimestamp));
      } catch (err) {
        console.error('Failed to save to localStorage:', err);
      }
      return withTimestamp;
    });
  };

  // Re-compute dynamic calculation engine rows whenever takeoffs or assumptions change
  const engineRows = useMemo(() => {
    return computeEstimateEngineRows(appState.takeoffs, appState.assumptions);
  }, [appState.takeoffs, appState.assumptions]);

  // Assumptions change handler
  const handleAssumptionsChange = (newAssumptions: AssumptionsState) => {
    updateAppState((prev) => ({
      ...prev,
      assumptions: newAssumptions,
    }));
  };

  // Projects change handler
  const handleProjectsChange = (newProjects: ProjectRecord[]) => {
    updateAppState((prev) => ({
      ...prev,
      projects: newProjects,
    }));
  };

  // Takeoffs change handler
  const handleTakeoffsChange = (newTakeoffs: QuantityTakeoffItem[]) => {
    updateAppState((prev) => ({
      ...prev,
      takeoffs: newTakeoffs,
    }));
  };

  // Tracker overrides change handler
  const handleTrackerOverride = (
    projectId: string,
    data: { actualWonAmount?: number; lossReason?: string; status?: ProjectStatus }
  ) => {
    updateAppState((prev) => {
      const existing = prev.trackerOverrides[projectId] || {
        actualWonAmount: 0,
        lossReason: '',
      };
      return {
        ...prev,
        trackerOverrides: {
          ...prev.trackerOverrides,
          [projectId]: {
            ...existing,
            ...data,
          },
        },
      };
    });
  };

  // Navigation helpers
  const handleNavigateToSummary = (projectId: string) => {
    setSelectedProjectId(projectId);
    updateAppState((prev) => ({ ...prev, selectedSummaryProjectId: projectId }));
    setActiveTab('06_Bid_Summary');
    setIsMobileMenuOpen(false);
  };

  const handleNavigateToTakeoff = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActiveTab('04_Quantity_Takeoff');
    setIsMobileMenuOpen(false);
  };

  const handleSelectSummaryProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    updateAppState((prev) => ({ ...prev, selectedSummaryProjectId: projectId }));
  };

  const handleTabSelect = (tab: SheetTabId) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  // Export JSON Backup
  const handleExportBackup = () => {
    const backupJson = JSON.stringify(appState, null, 2);
    const blob = new Blob([backupJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Commercial_MEP_Toolkit_Backup_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Restore JSON Backup
  const handleRestoreBackup = (restoredState: AppState) => {
    const withTimestamp = {
      ...restoredState,
      lastSaved: new Date().toISOString(),
    };
    setAppState(withTimestamp);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(withTimestamp));
    } catch (e) {
      console.error(e);
    }
  };

  // Bulk CSV Import
  const handleBulkCsvImport = (items: QuantityTakeoffItem[], mode: 'append' | 'replace') => {
    updateAppState((prev) => ({
      ...prev,
      takeoffs: mode === 'append' ? [...prev.takeoffs, ...items] : items,
    }));
  };

  // Reset to default sample data
  const handleResetData = () => {
    const reset = {
      ...INITIAL_APP_STATE,
      lastSaved: new Date().toISOString(),
    };
    setAppState(reset);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reset));
    } catch (e) {
      console.error(e);
    }
  };

  const currentSheetInfo = SHEET_NAMES[activeTab];

  return (
    <div className="min-h-screen flex bg-[var(--color-bg)] text-[var(--color-body-text)]">
      {/* Desktop Fixed Left Sidebar */}
      <div className="hidden md:block">
        <Sidebar
          activeTab={activeTab}
          onSelectTab={handleTabSelect}
          lastSaved={appState.lastSaved}
          onExportBackup={handleExportBackup}
          onImportBackup={() => setIsBackupModalOpen(true)}
          onBulkCsvImport={() => setIsCsvModalOpen(true)}
          onResetData={() => setIsResetModalOpen(true)}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
        />
      </div>

      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden backdrop-blur-xs"
        />
      )}

      {/* Mobile Off-canvas Sidebar */}
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white transition-transform duration-300 md:hidden shadow-xl ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-3 flex justify-end border-b border-[#E5E5E1]">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1 rounded-md text-slate-500 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="h-[calc(100%-53px)]">
          <Sidebar
            activeTab={activeTab}
            onSelectTab={handleTabSelect}
            lastSaved={appState.lastSaved}
            onExportBackup={handleExportBackup}
            onImportBackup={() => setIsBackupModalOpen(true)}
            onBulkCsvImport={() => setIsCsvModalOpen(true)}
            onResetData={() => setIsResetModalOpen(true)}
            isCollapsed={false}
            onToggleCollapse={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Top Minimalist Header */}
        <header className="h-14 bg-white border-b border-[#E5E5E1] sticky top-0 z-20 px-4 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1.5 rounded-md text-[var(--main)] hover:bg-[#F5F5F2] md:hidden cursor-pointer shrink-0"
              title="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Breadcrumb / Current View indicator */}
            <div className="flex items-center gap-2 min-w-0">
              <span className="hidden sm:inline-block font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#F5F5F2] text-[var(--main)]">
                SHEET [{currentSheetInfo.no}]
              </span>
              <span className="text-sm font-semibold text-[var(--main)] truncate">
                {currentSheetInfo.name}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-[var(--gray)]">
            <span className="hidden sm:inline font-mono text-[11px]">
              Commercial Plumbing & Mechanical Estimating Toolkit
            </span>
          </div>
        </header>

        {/* Page Sheet Workspace Container */}
        <main className="flex-1 max-w-[1400px] w-full mx-auto p-4 sm:p-6 lg:p-8">
          {activeTab === '01_README' && (
            <Sheet01Readme onNavigate={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === '02_Assumptions' && (
            <Sheet02Assumptions
              assumptions={appState.assumptions}
              onChange={handleAssumptionsChange}
            />
          )}

          {activeTab === '03_Project_Setup' && (
            <Sheet03ProjectSetup
              projects={appState.projects}
              onChange={handleProjectsChange}
              onNavigateToSummary={handleNavigateToSummary}
              onNavigateToTakeoff={handleNavigateToTakeoff}
            />
          )}

          {activeTab === '04_Quantity_Takeoff' && (
            <Sheet04QuantityTakeoff
              takeoffs={appState.takeoffs}
              projects={appState.projects}
              assumptions={appState.assumptions}
              onChange={handleTakeoffsChange}
              selectedProjectId={selectedProjectId}
              onSelectProject={setSelectedProjectId}
            />
          )}

          {activeTab === '05_Estimate_Engine' && (
            <Sheet05EstimateEngine
              engineRows={engineRows}
              projects={appState.projects}
              assumptions={appState.assumptions}
              onNavigateToSummary={handleNavigateToSummary}
            />
          )}

          {activeTab === '06_Bid_Summary' && (
            <Sheet06BidSummary
              projects={appState.projects}
              engineRows={engineRows}
              assumptions={appState.assumptions}
              selectedProjectId={selectedProjectId}
              onSelectProject={handleSelectSummaryProject}
              onNavigateToTakeoff={handleNavigateToTakeoff}
            />
          )}

          {activeTab === '07_Bid_Tracker' && (
            <Sheet07BidTracker
              projects={appState.projects}
              engineRows={engineRows}
              assumptions={appState.assumptions}
              trackerOverrides={appState.trackerOverrides}
              onUpdateOverride={handleTrackerOverride}
              onNavigateToSummary={handleNavigateToSummary}
            />
          )}

          {activeTab === '08_Dashboard' && (
            <Sheet08Dashboard
              appState={appState}
              engineRows={engineRows}
              onNavigate={(tab, pId) => {
                if (pId) setSelectedProjectId(pId);
                setActiveTab(tab);
              }}
            />
          )}
        </main>

        {/* Global Minimal Footer */}
        <footer className="border-t border-[#E5E5E1] bg-white py-3 px-4 sm:px-8 text-[11px] text-[var(--gray)] text-center">
          All data in this tool is stored locally in your browser (localStorage). No user data is transmitted or retained on any server. &copy; 2026 Commercial Plumbing & Mechanical Estimating & Bid Tracking Excel Toolkit.
        </footer>
      </div>

      {/* Modals */}
      <CsvImportModal
        isOpen={isCsvModalOpen}
        onClose={() => setIsCsvModalOpen(false)}
        onImport={handleBulkCsvImport}
        currentTakeoffs={appState.takeoffs}
      />

      <BackupModal
        isOpen={isBackupModalOpen}
        onClose={() => setIsBackupModalOpen(false)}
        onRestore={handleRestoreBackup}
      />

      <ResetConfirmModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleResetData}
      />
    </div>
  );
}
