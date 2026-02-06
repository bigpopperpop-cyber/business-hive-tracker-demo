
import React from 'react';
import DataManager from './DataManager';
import { HiveEntry } from '../types';

interface SyncPageProps {
  entries: HiveEntry[];
  onImport: (entries: HiveEntry[]) => void;
  onClear: () => void;
}

const SyncPage: React.FC<SyncPageProps> = ({ entries, onImport, onClear }) => {
  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("Enterprise demo link copied to clipboard.");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Clinical Data Management</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg font-medium leading-relaxed">
          Manage patient records, export clinical datasets, and configure white-label backups. All data remains within the local secure storage environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dataset Card */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900 p-8 rounded-[2.5rem] relative overflow-hidden group transition-colors">
          <div className="absolute top-0 right-0 p-8 text-emerald-200/50 dark:text-emerald-500/10 group-hover:scale-110 transition-transform">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM13 9V3.5L18.5 9H13z"/></svg>
          </div>
          <div className="relative z-10">
            <div className="bg-emerald-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200 dark:shadow-none">
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 17v-2m3 2v-4m3 2v-6m-8-5l10 10"/></svg>
            </div>
            <h4 className="text-xl font-black text-emerald-900 dark:text-emerald-400 mb-2">Dataset Export (CSV)</h4>
            <p className="text-emerald-700/80 dark:text-emerald-500/70 text-sm leading-relaxed mb-4 font-medium">
              Objective clinical datasets for EMR integration. Generates a delimited file containing all symptom telemetry, environmental variables, and trigger logs.
            </p>
          </div>
        </div>

        {/* Configuration Card */}
        <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2.5rem] relative overflow-hidden group transition-colors shadow-sm">
          <div className="absolute top-0 right-0 p-8 text-slate-200 dark:text-slate-800 group-hover:scale-110 transition-transform">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
          </div>
          <div className="relative z-10">
            <div className="bg-slate-800 dark:bg-slate-700 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-200 dark:shadow-none">
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
            </div>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">Protocol Backup (JSON)</h4>
            <p className="text-slate-600/80 dark:text-slate-500/70 text-sm leading-relaxed mb-4 font-medium">
              Facilitates device migration. Encrypt-ready data objects containing the full patient history and custom clinic configurations.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <DataManager 
          entries={entries} 
          onImport={onImport} 
          onClear={onClear} 
        />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] flex items-start space-x-6 mt-12 transition-all shadow-sm">
        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-800">
          <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-lg font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Deployment Notice: Facility Privacy Protocol</p>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Clinical Hive Tracker Pro is a local-first utility. We do not utilize cloud-based patient accounts. All medical data is sequestered on the device. Clinics should instruct patients to export encrypted backups regularly to ensure clinical continuity.
          </p>
        </div>
      </div>
      
      <div className="text-center pt-10">
        <button 
            onClick={handleShare}
            className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-black uppercase text-[11px] tracking-widest hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            <span>Share Clinical Demo Link</span>
          </button>
      </div>
    </div>
  );
};

export default SyncPage;
