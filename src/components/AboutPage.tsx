
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Enterprise Clinical Utility</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-lg leading-relaxed font-medium">
          Clinical Hive Tracker Pro is a high-precision medical monitoring tool designed for clinics to white-label for their patients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Clinical Protocol */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm transition-colors">
          <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100 dark:shadow-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-slate-800 dark:text-white mb-4 tracking-tight">Monitoring Protocol</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
            Standardized symptom tracking ensures high-fidelity data for clinical review.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] mt-1 shrink-0">01</span>
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-white">Severity Index</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Quantify itch intensity using a standardized 1-10 clinical scale.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] mt-1 shrink-0">02</span>
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-white">Anatomical Mapping</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Precisely document affected body areas for distribution analysis.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Security & Deployment */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm transition-colors">
          <div className="w-12 h-12 bg-slate-800 dark:bg-slate-700 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-200 dark:shadow-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-slate-800 dark:text-white mb-4 tracking-tight">Secure Deployment</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
            Engineered for clinical privacy. Local-first data architecture.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] mt-1 shrink-0">01</span>
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-white">Privacy by Design</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">No centralized cloud storage. Data remains encrypted on the patient's device.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] mt-1 shrink-0">02</span>
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-white">White-Label Ready</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Clinics can customize branding and placeholders for facility integration.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Environmental Telemetry */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm transition-colors">
          <div className="w-12 h-12 bg-cyan-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-100 dark:shadow-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-slate-800 dark:text-white mb-4 tracking-tight">Clinical Telemetry</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
            Capture exogenous factors for objective clinical pattern matching.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 font-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] mt-1 shrink-0">01</span>
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-white">Exogenous Insights</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Correlate local temperature and humidity with symptom flare-ups.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 font-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] mt-1 shrink-0">02</span>
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-white">Aerobiological Data</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Integrated pollen telemetry detects seasonal allergen interactions.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <div className="bg-indigo-600 dark:bg-indigo-900 text-white rounded-[2.5rem] p-10 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-black mb-4 tracking-tight">Objective Pattern Analysis</h3>
          <p className="text-indigo-100 dark:text-indigo-200 text-base leading-relaxed font-medium max-w-2xl">
            Upon reaching 3 historical data points, the <span className="text-white font-extrabold">'Clinical Analytics'</span> module activates. Our heuristic engine performs localized correlation analysis between patient-reported triggers and environmental metrics.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
             <div className="bg-white/10 dark:bg-indigo-500/30 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/20 dark:border-indigo-400/30">Facility Protocol Ready</div>
             <div className="bg-white/10 dark:bg-indigo-500/30 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/20 dark:border-indigo-400/30">White-Label Patient Tool</div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-10 transition-colors">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-2 rounded-xl border border-slate-300 dark:border-slate-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-[0.1em]">Clinical Disclaimer</h3>
        </div>
        <div className="space-y-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
          <p>
            <strong>Clinical Hive Tracker Pro</strong> is an observational data logging utility. It is not intended for the replacement of professional clinical diagnosis.
          </p>
          <p>
            Pattern correlations are statistically generated based on patient input and are intended for review by a licensed medical practitioner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
