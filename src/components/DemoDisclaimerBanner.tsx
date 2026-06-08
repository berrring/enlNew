import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

export const DemoDisclaimerBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-[#18243A] text-white text-xs py-2 px-4 border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-[#345BEF]/30 text-[#F4C96B] font-semibold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
            <Info className="w-3 h-3" /> Portfolio Showcase
          </span>
          <span className="text-slate-300">
            FluentBridge is an editorial concept website demonstrating premium web design & engineering. All courses, pricing, and teacher profiles are realistic fictional examples.
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
