import React, { useState } from 'react';
import { Award, MapPin, Volume2, Sparkles, Quote } from 'lucide-react';
import type { Teacher } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

interface TeacherCardProps {
  teacher: Teacher;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const { language } = useLanguage();
  const t = getTranslations(language).teachersPage;

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <article className="bg-white rounded-3xl border border-[#18243A]/10 overflow-hidden card-hover-lift flex flex-col justify-between group">
      <div>
        {/* Top Portrait & Location Badge */}
        <div className="relative h-72 sm:h-80 overflow-hidden bg-[#18243A]">
          <img
            src={teacher.avatarUrl}
            alt={teacher.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18243A] via-[#18243A]/40 to-transparent opacity-90" />

          {/* Top Credentials Pill */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="editorial-badge bg-[#FAF8F5]/90 text-[#18243A] backdrop-blur-md text-[10px] shadow-xs">
              {teacher.experienceYears}+ {t.facultyYrs}
            </span>

            {/* Simulated Voice Sample Player */}
            <button
              onClick={toggleAudio}
              type="button"
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold transition-all backdrop-blur-md shadow-xs ${
                isPlayingAudio
                  ? 'bg-[#345BEF] text-white ring-2 ring-white/30'
                  : 'bg-black/50 text-white hover:bg-black/70 border border-white/20'
              }`}
              title="Click to test sample voice preview"
            >
              {isPlayingAudio ? (
                <>
                  <div className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 bg-white soundwave-bar-1" />
                    <span className="w-0.5 bg-white soundwave-bar-2" />
                    <span className="w-0.5 bg-white soundwave-bar-3" />
                  </div>
                  <span>{t.samplePlaying}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#F4C96B]" />
                  <span>{t.voiceSample}</span>
                </>
              )}
            </button>
          </div>

          {/* Accent & Name at bottom of photo */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
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
              <span>{t.teachingPhilosophy}</span>
            </div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              {teacher.teachingStyle}
            </p>
          </div>

          {/* Qualifications & Accreditations */}
          <div className="space-y-2 pt-2 border-t border-[#18243A]/5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#516382]">
              <Award className="w-3.5 h-3.5 text-[#F4C96B]" />
              <span>{t.credentialsTitle}</span>
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
      <div className="px-6 pb-6 pt-0">
        <div className="text-xs text-[#516382] bg-white p-3.5 rounded-2xl border border-dashed border-[#18243A]/15 flex items-start gap-2.5">
          <Quote className="w-4 h-4 text-[#345BEF] shrink-0 mt-0.5" />
          <span className="italic font-serif text-[13px] text-[#18243A]">
            {teacher.favoriteQuote}
          </span>
        </div>
      </div>
    </article>
  );
};