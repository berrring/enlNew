import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const isDark = variant === 'dark';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group text-decoration-none ${className}`}>
      {/* Geometric architectural bridge symbol */}
      <div className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm overflow-hidden"
        style={{
          background: isDark ? '#18243A' : '#FAF8F5',
        }}
      >
        <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6">
          {/* Arch bridge motif */}
          <path
            d="M6 26C6 16.0589 11.3726 10 18 10C24.6274 10 30 16.0589 30 26"
            stroke={isDark ? '#F4C96B' : '#18243A'}
            strokeWidth="2.75"
            strokeLinecap="round"
          />
          {/* Deck of the bridge */}
          <line
            x1="4"
            y1="18"
            x2="32"
            y2="18"
            stroke={isDark ? '#345BEF' : '#345BEF'}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Accent pillar */}
          <circle cx="18" cy="24" r="2.2" fill={isDark ? '#E7F0E8' : '#F4C96B'} />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className={`font-serif text-xl font-bold tracking-tight ${isDark ? 'text-[#18243A]' : 'text-[#FAF8F5]'}`}>
            Fluent<span className="text-[#345BEF]">Bridge</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4C96B] mb-0.5 inline-block"></span>
        </div>
        <span className={`text-[9.5px] uppercase tracking-[0.2em] font-semibold -mt-1 ${isDark ? 'text-[#516382]' : 'text-slate-300'}`}>
          European Academy
        </span>
      </div>
    </Link>
  );
};
