import React, { useState } from 'react';
import {
  FolderKanban,
  Plus,
  Trash2,
  Search,
  ArrowUpRight,
  Calculator,
  Calendar,
  User,
  Building,
  Tag,
  CheckCircle2,
} from 'lucide-react';
import { ProjectRecord, ProjectStatus, SheetTabId } from '../../types';

interface Sheet03ProjectSetupProps {
  projects: ProjectRecord[];
  onChange: (projects: ProjectRecord[]) => void;
  onNavigateToSummary: (projectId: string) => void;
  onNavigateToTakeoff: (projectId: string) => void;
}

const STATUS_OPTIONS: ProjectStatus[] = ['Draft', 'Submitted', 'Won', 'Lost', 'Pending'];

export const Sheet03ProjectSetup: React.FC<Sheet03ProjectSetupProps> = ({
  projects,
  onChange,
  onNavigateToSummary,
  onNavigateToTakeoff,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const handleFieldChange = (id: string, field: keyof ProjectRecord, value: string) => {
    const updated = projects.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          [field]: value,
        };
      }
      return p;
    });
    onChange(updated);
  };

  const handleAddProject = () => {
    const year = new Date().getFullYear();
    const nextIndex = projects.length + 1;
    const padded = String(nextIndex).padStart(3, '0');
    const newId = `PRJ-${year}-${padded}`;

    const newProject: ProjectRecord = {
      id: newId,
      name: 'New Commercial Mechanical Bid',
      client: 'General Contractor / Owner',
      bidDate: new Date().toISOString().split('T')[0],
      estimator: 'Lead Cost Engineer',
      status: 'Draft',
      notes: 'Initial scope takeoff and specification review in progress.',
    };

    onChange([...projects, newProject]);
  };

  const handleDeleteProject = (id: string) => {
    if (projects.length <= 1) return;
    if (window.confirm(`Are you sure you want to delete project ${id}? This will also affect linked calculations.`)) {
      onChange(projects.filter((p) => p.id !== id));
    }
  };

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.estimator.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
            Sheet 03 // Project Master Database
          </span>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-[var(--color-primary)] tracking-display">
            Project Setup & Register
          </h1>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-3xl">
            Master repository of all bidding opportunities, active contracts, and archived proposals.
            The primary key <code>Project ID</code> connects engineering takeoff lines with executive pipeline rollups.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAddProject}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--color-accent)] text-white text-xs font-semibold rounded-lg hover:opacity-90 transition shadow-sm cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-[var(--color-surface)] p-4 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Project ID, Name, Client, Estimator..."
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

      {/* Projects Master Table */}
      <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-[var(--table-header-sep)] bg-[var(--table-header-bg)] text-[var(--color-primary)] font-semibold uppercase tracking-label text-[11px]">
                <th className="py-3 px-4 w-32">Project ID [PK]</th>
                <th className="py-3 px-4 min-w-[220px]">Project Commercial Title</th>
                <th className="py-3 px-4 min-w-[180px]">Client / General Contractor</th>
                <th className="py-3 px-4 w-32">Bid Due Date</th>
                <th className="py-3 px-4 w-36">Lead Estimator</th>
                <th className="py-3 px-4 w-32">Bid Status</th>
                <th className="py-3 px-4 min-w-[200px]">Project Notes / Scope Scope</th>
                <th className="py-3 px-4 w-28 text-center">Quick Actions</th>
                <th className="py-3 px-2 w-10 text-center">Del</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProjects.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-8 text-center text-slate-400 text-xs">
                    No projects found matching current criteria.
                  </td>
                </tr>
              ) : (
                filteredProjects.map((prj) => (
                  <tr key={prj.id} className="hover:bg-slate-50/70 transition-colors">
                    {/* Project ID */}
                    <td className="py-2.5 px-4 font-mono font-bold text-[var(--color-accent)]">
                      <input
                        type="text"
                        value={prj.id}
                        onChange={(e) => handleFieldChange(prj.id, 'id', e.target.value)}
                        className="editable-cell-input w-full px-2 py-1 rounded font-mono font-bold text-xs text-[var(--color-accent)]"
                      />
                    </td>

                    {/* Name */}
                    <td className="py-2.5 px-4">
                      <input
                        type="text"
                        value={prj.name}
                        onChange={(e) => handleFieldChange(prj.id, 'name', e.target.value)}
                        className="editable-cell-input w-full px-2 py-1 rounded font-medium text-xs text-[var(--color-primary)]"
                      />
                    </td>

                    {/* Client */}
                    <td className="py-2.5 px-4">
                      <input
                        type="text"
                        value={prj.client}
                        onChange={(e) => handleFieldChange(prj.id, 'client', e.target.value)}
                        className="editable-cell-input w-full px-2 py-1 rounded text-xs text-[var(--color-body-text)]"
                      />
                    </td>

                    {/* Bid Date */}
                    <td className="py-2.5 px-4">
                      <input
                        type="date"
                        value={prj.bidDate}
                        onChange={(e) => handleFieldChange(prj.id, 'bidDate', e.target.value)}
                        className="editable-cell-input w-full px-2 py-1 rounded font-mono text-xs text-[var(--color-body-text)]"
                      />
                    </td>

                    {/* Estimator */}
                    <td className="py-2.5 px-4">
                      <input
                        type="text"
                        value={prj.estimator}
                        onChange={(e) => handleFieldChange(prj.id, 'estimator', e.target.value)}
                        className="editable-cell-input w-full px-2 py-1 rounded text-xs text-[var(--color-body-text)]"
                      />
                    </td>

                    {/* Status */}
                    <td className="py-2.5 px-4">
                      <select
                        value={prj.status}
                        onChange={(e) => handleFieldChange(prj.id, 'status', e.target.value as ProjectStatus)}
                        className={`w-full px-2 py-1 rounded-full text-xs font-semibold text-center cursor-pointer ${getStatusBadge(
                          prj.status
                        )}`}
                      >
                        {STATUS_OPTIONS.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Notes */}
                    <td className="py-2.5 px-4">
                      <input
                        type="text"
                        value={prj.notes}
                        onChange={(e) => handleFieldChange(prj.id, 'notes', e.target.value)}
                        className="editable-cell-input w-full px-2 py-1 rounded text-xs text-slate-500"
                        placeholder="Add engineering or commercial notes..."
                      />
                    </td>

                    {/* Quick Actions */}
                    <td className="py-2.5 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => onNavigateToTakeoff(prj.id)}
                          title="Open Takeoff BOQ"
                          className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-[var(--color-primary)] rounded text-[11px] font-medium transition cursor-pointer flex items-center gap-0.5"
                        >
                          <Calculator className="w-3 h-3 text-[var(--color-accent)]" />
                          <span>Takeoff</span>
                        </button>
                        <button
                          onClick={() => onNavigateToSummary(prj.id)}
                          title="View Bid Summary"
                          className="px-2 py-1 bg-blue-50 hover:bg-blue-100 text-[var(--color-accent)] rounded text-[11px] font-medium transition cursor-pointer flex items-center gap-0.5"
                        >
                          <span>Summary</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </td>

                    {/* Delete */}
                    <td className="py-2.5 px-2 text-center">
                      <button
                        onClick={() => handleDeleteProject(prj.id)}
                        disabled={projects.length <= 1}
                        className="p-1 text-slate-400 hover:text-red-600 disabled:opacity-20 transition cursor-pointer"
                        title="Delete project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Summary */}
        <div className="p-3 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-xs text-[var(--color-muted)]">
          <span>Showing {filteredProjects.length} of {projects.length} registered projects</span>
          <span className="font-mono text-[11px]">Primary Master DB: 03_Project_Setup</span>
        </div>
      </div>
    </div>
  );
};
