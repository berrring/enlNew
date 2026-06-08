import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../data/faqs';

interface AccordionProps {
  items: FAQItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#345BEF]/40 shadow-sm'
                : 'bg-white/80 border-[#18243A]/10 hover:border-[#18243A]/20'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#345BEF]/50 rounded-2xl"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="editorial-badge bg-[#FAF8F5] text-[#516382] border border-[#18243A]/10 text-[10px]">
                  {item.category}
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-[#18243A]">
                  {item.question}
                </span>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? 'bg-[#345BEF] text-white rotate-180' : 'bg-[#FAF8F5] text-[#18243A]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-[#18243A]/5">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
