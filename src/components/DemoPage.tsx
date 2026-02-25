
import React, { useState } from 'react';
import { HiveEntry, AnalysisResult } from '../types';

const DEMO_RECORDS: HiveEntry[] = [
  { id: 'd1', timestamp: '2025-01-20T08:30:00Z', severity: 8, location: ['Arms', 'Torso'], triggers: 'Seafood, Heat', weather: { temp: 31, humidity: 72, pollenLevel: 'High (Birch, Alder)' } },
  { id: 'd2', timestamp: '2025-01-21T21:15:00Z', severity: 5, location: ['Legs'], triggers: 'Stress', weather: { temp: 24, humidity: 55, pollenLevel: 'Moderate (Grass)' } },
  { id: 'd3', timestamp: '2025-01-23T14:00:00Z', severity: 9, location: ['Arms', 'Neck'], triggers: 'Heat, Sweat', weather: { temp: 33, humidity: 78, pollenLevel: 'High (Birch, Grass)' } },
  { id: 'd4', timestamp: '2025-01-25T09:45:00Z', severity: 4, location: ['Torso'], triggers: 'Detergent', weather: { temp: 22, humidity: 45, pollenLevel: 'Low' } },
  { id: 'd5', timestamp: '2025-01-26T18:30:00Z', severity: 7, location: ['Arms'], triggers: 'Heat', weather: { temp: 30, humidity: 80, pollenLevel: 'Moderate (Birch)' } },
  { id: 'd6', timestamp: '2025-01-28T07:00:00Z', severity: 3, location: ['Feet'], triggers: 'Cold', weather: { temp: 15, humidity: 40, pollenLevel: 'Low' } },
  { id: 'd7', timestamp: '2025-01-30T22:00:00Z', severity: 8, location: ['Arms', 'Chest'], triggers: 'Alcohol, Heat', weather: { temp: 28, humidity: 85, pollenLevel: 'High (Ragweed)' } },
  { id: 'd8', timestamp: '2025-02-01T12:00:00Z', severity: 6, location: ['Legs'], triggers: 'Sweat', weather: { temp: 29, humidity: 65, pollenLevel: 'Moderate (Grass)' } },
  { id: 'd9', timestamp: '2025-02-03T16:20:00Z', severity: 10, location: ['Arms', 'Torso', 'Neck'], triggers: 'Heat, Stress', weather: { temp: 34, humidity: 82, pollenLevel: 'High (Birch, Ragweed)' } },
  { id: 'd10', timestamp: '2025-02-05T10:00:00Z', severity: 5, location: ['Hands'], triggers: 'Pressure', weather: { temp: 23, humidity: 50, pollenLevel: 'Low' } },
];

const DEMO_ANALYSIS: AnalysisResult = {
  commonTriggers: ['Heat', 'Sweat', 'Seafood'],
  severityTrend: 'Consistent upward trend in high-temperature environments (>28°C).',
  potentialPatterns: 'Localized Pattern: Breakouts on your ARMS frequently occur during high humidity (>70%).',
  advice: 'Strong correlation with exogenous thermal factors detected. Advise cooling protocols and dehumidification during peaks.',
  environmentInsights: 'Environment Correlation: Significant escalation in itch severity when local temp exceeds 29°C and humidity is over 65%.',
};

const DemoPage: React.FC = () => {
  const [view, setView] = useState<'analysis' | 'dataset'>('analysis');

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Enterprise Clinical Demo</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-base font-medium">
          Showcasing diagnostic capabilities and high-fidelity data structuring for medical facilities.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-slate-200 dark:bg-slate-800 p-1.5 rounded-2xl flex items-center shadow-inner border border-slate-300 dark:border-slate-700">
          <button 
            onClick={() => setView('analysis')}
            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${view === 'analysis' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-md scale-105' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Smart Analysis
          </button>
          <button 
            onClick={() => setView('dataset')}
            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${view === 'dataset' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-md scale-105' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Clinical Dataset
          </button>
        </div>
      </div>

      {view === 'analysis' ? (
        <div className="bg-slate-900 text-white rounded-[3rem] p-10 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px] -mr-40 -mt-40 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-indigo-600 p-3 rounded-2xl shadow-lg shadow-indigo-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight">Local Intelligence Engine</h3>
                <p className="text-indigo-400 text-xs font-black uppercase tracking-widest">Heuristic Clinical Insights</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                <h4 className="text-rose-400 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center">Primary Triggers</h4>
                <div className="flex flex-wrap gap-2">
                  {DEMO_ANALYSIS.commonTriggers.map(t => (
                    <span key={t} className="bg-rose-500/10 text-rose-100 border border-rose-500/20 px-4 py-1.5 rounded-xl text-xs font-bold">{t}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                <h4 className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center">Severity Trend</h4>
                <p className="text-slate-200 text-sm font-medium leading-relaxed">{DEMO_ANALYSIS.severityTrend}</p>
              </div>

              <div className="md:col-span-2 bg-indigo-600/10 border border-indigo-500/20 rounded-3xl p-8">
                <h4 className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center">Exogenous Correlations</h4>
                <p className="text-indigo-50 text-base font-bold italic leading-relaxed">"{DEMO_ANALYSIS.environmentInsights}"</p>
              </div>

              <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                <h4 className="text-amber-400 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center">Anatomical Patterns</h4>
                <p className="text-slate-200 text-sm font-medium leading-relaxed">{DEMO_ANALYSIS.potentialPatterns}</p>
              </div>

              <div className="md:col-span-2 bg-emerald-600/10 border border-emerald-500/20 rounded-3xl p-8">
                <h4 className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center">Clinical Advice</h4>
                <p className="text-emerald-50 text-lg font-bold italic leading-tight">"{DEMO_ANALYSIS.advice}"</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm overflow-hidden transition-colors">
          <div className="bg-slate-50 dark:bg-slate-950 p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Structured Patient Log</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">N = 10 Observation Records</p>
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95">
              Download Demo .xlsx
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900/50 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  <th className="p-4 border-b border-slate-200 dark:border-slate-800 whitespace-nowrap">Date Timestamp</th>
                  <th className="p-4 border-b border-slate-200 dark:border-slate-800 whitespace-nowrap text-center">Sev.</th>
                  <th className="p-4 border-b border-slate-200 dark:border-slate-800 whitespace-nowrap">Locations</th>
                  <th className="p-4 border-b border-slate-200 dark:border-slate-800 whitespace-nowrap">Triggers</th>
                  <th className="p-4 border-b border-slate-200 dark:border-slate-800 whitespace-nowrap text-center">Temp</th>
                  <th className="p-4 border-b border-slate-200 dark:border-slate-800 whitespace-nowrap text-center">Humidity %</th>
                  <th className="p-4 border-b border-slate-200 dark:border-slate-800 whitespace-nowrap">Pollen Index & Composition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {DEMO_RECORDS.map((record, i) => (
                  <tr key={record.id} className={`text-[11px] font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-950/20'}`}>
                    <td className="p-4 text-slate-900 dark:text-white font-bold whitespace-nowrap">
                      {new Date(record.timestamp).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block w-8 py-0.5 rounded-lg text-[10px] font-black text-white ${record.severity >= 8 ? 'bg-rose-500' : record.severity >= 5 ? 'bg-amber-500' : 'bg-emerald-500'}`}>
                        {record.severity}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">{record.location.join(', ')}</td>
                    <td className="p-4 text-slate-700 dark:text-slate-200 font-bold italic">{record.triggers}</td>
                    <td className="p-4 text-center text-slate-500 dark:text-slate-500 font-bold">{record.weather?.temp}°C</td>
                    <td className="p-4 text-center text-slate-500 dark:text-slate-500 font-bold">{record.weather?.humidity}%</td>
                    <td className="p-4">
                      <div className="flex flex-col space-y-1">
                        <span className={`inline-flex px-2 py-0.5 rounded-lg text-[9px] font-black uppercase w-fit ${record.weather?.pollenLevel?.includes('High') ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400' : record.weather?.pollenLevel?.includes('Moderate') ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'}`}>
                          {record.weather?.pollenLevel}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-slate-950 text-center">
            <p className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">Dataset optimized for clinical CRM & EMR ingestion</p>
          </div>
        </div>
      )}

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900 p-8 rounded-[2.5rem] flex items-start space-x-6 shadow-sm transition-colors">
        <div className="bg-indigo-600 text-white p-3 rounded-2xl shadow-lg shadow-indigo-100 dark:shadow-none shrink-0">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        </div>
        <div>
          <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Facility Protocol Integration</h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
            This demo environment highlights the <span className="text-indigo-600 dark:text-indigo-400 font-bold italic">High-Fidelity Mode</span>. Clinicians can view cross-referenced environmental metrics and AI-deduced anatomical heatmaps to provide more targeted therapeutic interventions for chronic urticaria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
