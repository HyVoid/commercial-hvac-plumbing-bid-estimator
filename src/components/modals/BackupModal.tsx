import React, { useState, useRef } from 'react';
import { X, Upload, FileJson, AlertCircle, CheckCircle2 } from 'lucide-react';
import { AppState } from '../../types';

interface BackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRestore: (state: AppState) => void;
}

export const BackupModal: React.FC<BackupModalProps> = ({
  isOpen,
  onClose,
  onRestore,
}) => {
  const [jsonText, setJsonText] = useState('');
  const [parsedData, setParsedData] = useState<AppState | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setJsonText(content);
      verifyAndSet(content);
    };
    reader.readAsText(file);
  };

  const verifyAndSet = (text: string) => {
    try {
      const data = JSON.parse(text);
      if (!data.assumptions || !data.projects || !data.takeoffs) {
        setErrorMsg('Invalid backup file. Missing required state properties (assumptions, projects, takeoffs).');
        setParsedData(null);
      } else {
        setErrorMsg('');
        setParsedData(data);
      }
    } catch (err: any) {
      setErrorMsg(`JSON Parse Error: ${err.message}`);
      setParsedData(null);
    }
  };

  const handleConfirmRestore = () => {
    if (!parsedData) return;
    onRestore(parsedData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,28,44,0.4)] backdrop-blur-sm animate-in">
      <div className="bg-[var(--color-surface)] w-full max-w-lg rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] border border-slate-100 overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-accent)] flex items-center justify-center">
              <Upload className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-[var(--color-primary)]">
                Restore System Backup (JSON)
              </h3>
              <p className="text-xs text-[var(--color-muted)]">
                Restore full workspace state from a previously exported backup file.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 hover:border-[var(--color-accent)] rounded-xl p-6 text-center cursor-pointer transition bg-slate-50/50"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleFileChange}
              className="hidden"
            />
            <FileJson className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <div className="text-xs font-semibold text-[var(--color-primary)]">
              Click to select backup .json file
            </div>
            <div className="text-[11px] text-[var(--color-muted)] mt-0.5">
              Supports full application backup schema
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[var(--color-primary)]">
              Or Paste JSON Content:
            </label>
            <textarea
              rows={4}
              value={jsonText}
              onChange={(e) => {
                setJsonText(e.target.value);
                verifyAndSet(e.target.value);
              }}
              placeholder='{"assumptions": {...}, "projects": [...], "takeoffs": [...]}'
              className="w-full p-2.5 font-mono text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
            />
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {parsedData && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Valid Backup Archive Verified
              </div>
              <div className="text-[11px] text-emerald-700">
                • {parsedData.projects?.length || 0} Projects | • {parsedData.takeoffs?.length || 0} Takeoff lines | • {parsedData.assumptions?.laborRates?.length || 0} Trade Rates
              </div>
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            disabled={!parsedData}
            onClick={handleConfirmRestore}
            className="px-4 py-2 bg-[var(--color-accent)] disabled:opacity-40 text-white text-xs font-semibold rounded-lg hover:opacity-90 transition shadow-sm cursor-pointer"
          >
            Restore Backup
          </button>
        </div>
      </div>
    </div>
  );
};
