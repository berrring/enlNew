import React from 'react';
import { Award, MapPin, Sparkles, BookOpen } from 'lucide-react';
import type { Teacher } from '../types';

interface TeacherCardProps {
  teacher: Teacher;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  return (
    <div className="bg-white rounded-3xl border border-[#18243A]/10 overflow-hidden hover:shadow-xl hover:border-[#345BEF]/30 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Portrait & Location Badge */}
        <div className="relative h-72 sm:h-80 overflow-hidden bg-[#18243A]">
          <img
            src={teacher.avatarUrl}
            alt={teacher.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18243A] via-transparent to-transparent opacity-85" />

          {/* Fictional demo badge */}
          <div className="absolute top-4 left-4">
            <span className="editorial-badge bg-black/60 text-white/90 backdrop-blur-md text-[10px]">
              Fictional Demo Profile
            </span>
          </div>

          {/* Accent & Experience at bottom of photo */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-1.5 text-xs text-[#F4C96B] mb-1 font-medium">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{teacher.location}</span>
              <span className="text-white/40">•</span>
              <span>{teacher.accent}</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              {teacher.name}
            </h3>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              {teacher.role}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-5">
          {/* Specialties Pills */}
          <div className="flex flex-wrap gap-1.5">
            {teacher.specialties.map((spec, idx) => (
              <span
                key={idx}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/15"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Bio paragraph */}
          <p className="text-slate-600 text-sm leading-relaxed">
            {teacher.bio}
          </p>

          {/* Teaching Style Box */}
          <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#18243A]/5 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#18243A]">
              <Sparkles className="w-3.5 h-3.5 text-[#345BEF]" />
              <span>Teaching Philosophy</span>
            </div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              {teacher.teachingStyle}
            </p>
          </div>

          {/* Qualifications & Accreditations */}
          <div className="space-y-2 pt-2 border-t border-[#18243A]/5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#516382]">
              <Award className="w-3.5 h-3.5 text-[#F4C96B]" />
              <span>Credentials & Experience ({teacher.experienceYears} Years)</span>
            </div>
            <ul className="space-y-1 text-xs text-slate-600">
              {teacher.qualifications.map((q, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#345BEF] font-bold mt-0.5">•</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Footer */}
      <div className="px-6 pb-6 pt-2">
        <div className="text-xs text-[#516382] bg-white p-3 rounded-xl border border-dashed border-[#18243A]/15 flex items-start gap-2">
          <BookOpen className="w-4 h-4 text-[#345BEF] shrink-0 mt-0.5" />
          <span className="italic">{teacher.favoriteQuote}</span>
        </div>
      </div>
    </div>
  );
};
