import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const DemoDisclaimerBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const { language } = useLanguage();
  const t = getTranslations(language).banner;

  if (dismissed) return null;

  return (
    <aside aria-label="Portfolio notice" className="bg-[#18243A] text-slate-200 text-xs py-2 px-4 border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-[#345BEF] text-white font-semibold px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#F4C96B]" /> {t.caseStudy}
          </span>
          <span className="text-slate-300 text-xs">
            {t.notice}
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10 shrink-0"
          aria-label="Dismiss portfolio notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
