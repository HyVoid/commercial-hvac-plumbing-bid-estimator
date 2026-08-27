import React, { useState, useRef } from 'react';
import {
  X,
  FileUp,
  Download,
  AlertCircle,
  CheckCircle2,
  FileSpreadsheet,
} from 'lucide-react';
import { QuantityTakeoffItem } from '../../types';
import { exportTakeoffsToCsv, parseTakeoffsFromCsv } from '../../utils/engine';

interface CsvImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (items: QuantityTakeoffItem[], mode: 'append' | 'replace') => void;
  currentTakeoffs: QuantityTakeoffItem[];
}

export const CsvImportModal: React.FC<CsvImportModalProps> = ({
  isOpen,
  onClose,
  onImport,
  currentTakeoffs,
}) => {
  const [csvText, setCsvText] = useState('');
  const [parsedItems, setParsedItems] = useState<QuantityTakeoffItem[]>([]);
  const [importMode, setImportMode] = useState<'append' | 'replace'>('append');
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setCsvText(content);
      processCsv(content);
    };
    reader.readAsText(file);
  };

  const processCsv = (text: string) => {
    try {
      const items = parseTakeoffsFromCsv(text);
      if (items.length === 0) {
        setErrorMsg('No valid takeoff rows detected. Ensure header columns match standard format.');
        setParsedItems([]);
      } else {
        setErrorMsg('');
        setParsedItems(items);
      }
    } catch (err: any) {
      setErrorMsg(`Failed to parse CSV: ${err.message || 'Unknown error'}`);
      setParsedItems([]);
    }
  };

  const handleDownloadSample = () => {
    const sampleCsv = exportTakeoffsToCsv(currentTakeoffs.slice(0, 5));
    const blob = new Blob([sampleCsv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MEP_Quantity_Takeoff_Sample.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleConfirmImport = () => {
    if (parsedItems.length === 0) return;
    onImport(parsedItems, importMode);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,28,44,0.4)] backdrop-blur-sm animate-in">
      <div className="bg-[var(--color-surface)] w-full max-w-2xl rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-accent)] flex items-center justify-center">
              <FileUp className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-[var(--color-primary)]">
                Bulk CSV Quantity Takeoff Import
              </h3>
              <p className="text-xs text-[var(--color-muted)]">
                Import drawing takeoff items directly from Excel or estimating software.
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Top Actions: Template Download & File Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <h4 className="text-xs font-bold text-[var(--color-primary)]">Need a CSV template?</h4>
              <p className="text-[11px] text-[var(--color-muted)] mt-0.5">
                Download current takeoff format matching columns A through I.
              </p>
            </div>
            <button
              onClick={handleDownloadSample}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-[var(--color-primary)] text-xs font-semibold rounded-lg hover:bg-slate-50 transition shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>Download Template</span>
            </button>
          </div>

          {/* Upload Dropzone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 hover:border-[var(--color-accent)] rounded-xl p-8 text-center cursor-pointer transition bg-slate-50/50 hover:bg-blue-50/30"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
            />
            <FileSpreadsheet className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <div className="text-xs font-semibold text-[var(--color-primary)]">
              Click or drag and drop a .csv file here
            </div>
            <div className="text-[11px] text-[var(--color-muted)] mt-1">
              Supports standard UTF-8 comma-delimited takeoff CSV files
            </div>
          </div>

          {/* Paste CSV Direct Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[var(--color-primary)]">
              Or Paste CSV Raw Text:
            </label>
            <textarea
              rows={4}
              value={csvText}
              onChange={(e) => {
                setCsvText(e.target.value);
                processCsv(e.target.value);
              }}
              placeholder={`Project ID,Division / Trade,Item Description,Unit,Quantity,Material Unit Rate ($),Labor Hours / Unit,Equipment Unit Rate ($)\nPRJ-2026-001,Plumbing - Journeyman,4" Copper Water Main,LF,1000,32.00,0.80,4.00`}
              className="w-full p-3 font-mono text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
            />
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Parsed Preview */}
          {parsedItems.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Ready to import {parsedItems.length} takeoff rows
                </span>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="importMode"
                      checked={importMode === 'append'}
                      onChange={() => setImportMode('append')}
                    />
                    <span>Append</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="importMode"
                      checked={importMode === 'replace'}
                      onChange={() => setImportMode('replace')}
                    />
                    <span className="text-rose-700 font-medium">Replace All</span>
                  </label>
                </div>
              </div>

              <div className="max-h-40 overflow-y-auto border border-slate-200 rounded-lg text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-100 text-[10px] uppercase text-slate-600 font-mono">
                    <tr>
                      <th className="p-1.5">Project</th>
                      <th className="p-1.5">Trade</th>
                      <th className="p-1.5">Item</th>
                      <th className="p-1.5 text-right">Qty</th>
                      <th className="p-1.5 text-right">Mat $</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                    {parsedItems.slice(0, 5).map((item, idx) => (
                      <tr key={idx}>
                        <td className="p-1.5 font-bold">{item.projectId}</td>
                        <td className="p-1.5 font-sans">{item.division}</td>
                        <td className="p-1.5 font-sans truncate max-w-[180px]">{item.itemDescription}</td>
                        <td className="p-1.5 text-right">{item.quantity}</td>
                        <td className="p-1.5 text-right">${item.materialUnitRate.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {parsedItems.length > 5 && (
                  <div className="p-2 text-center text-[11px] text-slate-400 bg-slate-50">
                    ...and {parsedItems.length - 5} more items
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            disabled={parsedItems.length === 0}
            onClick={handleConfirmImport}
            className="px-4 py-2 bg-[var(--color-accent)] disabled:opacity-40 text-white text-xs font-semibold rounded-lg hover:opacity-90 transition shadow-sm cursor-pointer"
          >
            Import {parsedItems.length} Lines ({importMode === 'append' ? 'Append' : 'Replace'})
          </button>
        </div>
      </div>
    </div>
  );
};
