
import React, { useState, useEffect } from 'react';
import HiveForm from './components/HiveForm';
import HistoryCharts from './components/HistoryCharts';
import AnalysisPanel from './components/AnalysisPanel';
import SyncPage from './components/SyncPage';
import AboutPage from './components/AboutPage';
import DoctorReport from './components/DoctorReport';
import { HiveEntry, AnalysisResult } from './types';
import { STORAGE_KEY } from './constants';

type Tab = 'log' | 'history' | 'sync' | 'about';
type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [entries, setEntries] = useState<HiveEntry[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>('log');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [editingEntry, setEditingEntry] = useState<HiveEntry | null>(null);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load history", e);
      }
    }

    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const saveToStorage = (data: HiveEntry[]) => {
    setEntries(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const addEntry = (entry: HiveEntry) => {
    const updated = [entry, ...entries];
    saveToStorage(updated);
    setActiveTab('history');
  };

  const updateEntry = (updated: HiveEntry) => {
    const updatedEntries = entries.map(e => e.id === updated.id ? updated : e);
    saveToStorage(updatedEntries);
    setEditingEntry(null);
  };

  const deleteEntry = (id: string) => {
    if (!window.confirm("Delete this entry?")) return;
    const updated = entries.filter(e => e.id !== id);
    saveToStorage(updated);
  };

  const handleImport = (importedEntries: HiveEntry[]) => {
    const existingIds = new Set(entries.map(e => e.id));
    const newEntries = importedEntries.filter(e => !existingIds.has(e.id));
    const updated = [...newEntries, ...entries].sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
    saveToStorage(updated);
    alert(`Successfully imported ${newEntries.length} clinical logs.`);
    setActiveTab('history');
  };

  const handleClear = () => {
    saveToStorage([]);
    alert("Local history purged.");
  };

  const generatePDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300">
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 no-print shadow-sm h-16 md:h-20 flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full flex items-center justify-between">
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="flex items-center space-x-2 border-r border-slate-200 dark:border-slate-800 pr-3 md:pr-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm md:text-base font-extrabold text-slate-900 dark:text-white leading-tight">Clinical Hive Tracker</h1>
                <p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Enterprise Edition</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter">Facility Branding</span>
              <div className="text-[11px] md:text-xs font-bold text-slate-500 dark:text-slate-400 italic">
                [Clinic Logo Here]
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <nav className="hidden lg:flex items-center space-x-1">
              {['log', 'history', 'sync', 'about'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab as Tab)}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all capitalize ${activeTab === tab ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                >
                  {tab === 'log' ? 'Symptom Entry' : tab === 'history' ? 'Patient Stats' : tab}
                </button>
              ))}
            </nav>

            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 h-16 flex items-center justify-around z-50 no-print shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {[
          { id: 'log', label: 'Log', icon: <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /> },
          { id: 'history', label: 'History', icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> },
          { id: 'sync', label: 'Data', icon: <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /> },
          { id: 'about', label: 'Info', icon: <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> }
        ].map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id as Tab)}
            className={`flex flex-col items-center space-y-1 w-full py-2 transition-colors ${activeTab === item.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-600'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
            <span className="text-[10px] font-bold uppercase">{item.label}</span>
          </button>
        ))}
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-4 py-8 pb-24 no-print w-full">
        {activeTab === 'log' && (
          <div className="max-w-4xl mx-auto">
            <HiveForm onAdd={addEntry} />
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 md:p-8 border border-slate-200 dark:border-slate-800 transition-colors shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Clinical Data Summary</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xl font-medium">
                  Export a comprehensive clinical analysis formatted for medical professionals. This report includes diagnostic trends, severity metrics, and environmental correlation insights for your next medical review.
                </p>
              </div>
              <div className="shrink-0">
                <button 
                  onClick={generatePDF} 
                  className="w-full md:w-auto flex items-center justify-center space-x-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-indigo-100 dark:shadow-none transition-all active:scale-95 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Generate Clinical Report</span>
                </button>
              </div>
            </div>

            <AnalysisPanel entries={entries} onAnalysisDone={setAnalysisResult} />
            <HistoryCharts entries={entries} />
            
            <div className="flex items-center space-x-3 mt-12 mb-4 px-2">
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow"></div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">Archived Clinical Records</h3>
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow"></div>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {entries.map(entry => (
                <div key={entry.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 hover:border-indigo-200 dark:hover:border-indigo-900 transition-all group relative shadow-sm hover:shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[9px] font-black uppercase px-2 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
                      {new Date(entry.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <div className="flex items-center space-x-1.5">
                       {entry.weather && (
                         <div className="flex items-center space-x-1 text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-1.5 py-0.5 rounded-lg text-[9px] font-bold border border-indigo-100 dark:border-indigo-900/50">
                           <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                           <span>{entry.weather.temp}°C</span>
                         </div>
                       )}
                       <span className={`px-2 py-0.5 rounded-lg text-[9px] font-black text-white uppercase border ${entry.severity >= 8 ? 'bg-rose-500 border-rose-600' : 'bg-amber-500 border-amber-600'}`}>
                         Sev. {entry.severity}
                       </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-700 dark:text-slate-200 font-bold mb-1 truncate">{entry.location.join(', ')}</p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 italic line-clamp-2">"{entry.triggers || 'No trigger specified'}"</p>
                  <div className="mt-3 flex space-x-1.5">
                    {entry.images?.slice(0, 3).map((img, i) => (
                      <img key={i} src={img} className="w-8 h-8 rounded-lg object-cover border border-slate-100 dark:border-slate-800" />
                    ))}
                  </div>
                  <div className="absolute top-2 right-2 flex opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-slate-900/90 p-1 rounded-lg backdrop-blur-sm">
                    <button onClick={() => setEditingEntry(entry)} className="p-1 text-slate-400 hover:text-indigo-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </button>
                    <button onClick={() => deleteEntry(entry.id)} className="p-1 text-slate-400 hover:text-rose-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}

        {activeTab === 'sync' && <SyncPage entries={entries} onImport={handleImport} onClear={handleClear} />}
        {activeTab === 'about' && <AboutPage />}
      </main>

      {editingEntry && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl bg-white dark:bg-slate-900">
            <HiveForm initialData={editingEntry} onAdd={updateEntry} onCancel={() => setEditingEntry(null)} />
          </div>
        </div>
      )}

      <DoctorReport entries={entries} analysis={analysisResult} />
    </div>
  );
};

export default App;
