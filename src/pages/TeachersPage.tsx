import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Info 
} from 'lucide-react';
import { getTeachers } from '../data/teachers';
import { TeacherCard } from '../components/TeacherCard';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const TeachersPage: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const { language } = useLanguage();
  const t = getTranslations(language).teachersPage;
  const teachersData = getTeachers(language);

  const specialties = useMemo(() => {
    const list = new Set<string>();
    teachersData.forEach((teacher) => {
      teacher.specialties.forEach((s) => list.add(s));
    });
    return ['All', ...Array.from(list).slice(0, 5)];
  }, [teachersData]);

  const filteredTeachers = selectedSpecialty === 'All'
    ? teachersData
    : teachersData.filter((teacher) => teacher.specialties.includes(selectedSpecialty));

  return (
    <div className="pb-24 space-y-16">
      {/* Editorial Header */}
      <section className="bg-[#FAF8F5] border-b border-[#18243A]/10 py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/20">
              {t.badge}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#18243A] tracking-tight">
              {t.title}
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
              {t.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Prominent Fictional Portfolio Project Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18243A] text-white p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#345BEF]/30 text-[#F4C96B] shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white">
                {t.disclaimerTitle}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                {t.disclaimerDesc}
              </p>
            </div>
          </div>
          <Link
            to="/book-trial"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#345BEF] hover:bg-[#2646c7] text-white text-xs font-semibold shrink-0 transition-colors"
          >
            <span>{t.requestDemoTrial}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Filter by Specialty */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#18243A]/10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#516382] mr-2">
            {t.filterSpecialty}:
          </span>
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedSpecialty === spec
                  ? 'bg-[#18243A] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-[#18243A]/10'
              }`}
            >
              {spec === 'All' ? (language === 'ru' ? 'Все специализации' : 'All') : spec}
            </button>
          ))}
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </section>

      {/* Teaching Standards & Hiring Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#18243A]/10 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="editorial-badge bg-[#345BEF] text-white">{t.standardsBadge}</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18243A]">
                {t.standardsTitle}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.standardsDesc}
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-[#18243A]/5 space-y-1.5">
                <div className="font-serif font-bold text-sm text-[#18243A]">{t.p1Title}</div>
                <p className="text-xs text-slate-500">{t.p1Desc}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#18243A]/5 space-y-1.5">
                <div className="font-serif font-bold text-sm text-[#18243A]">{t.p2Title}</div>
                <p className="text-xs text-slate-500">{t.p2Desc}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#18243A]/5 space-y-1.5">
                <div className="font-serif font-bold text-sm text-[#18243A]">{t.p3Title}</div>
                <p className="text-xs text-slate-500">{t.p3Desc}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#18243A]/5 space-y-1.5">
                <div className="font-serif font-bold text-sm text-[#18243A]">{t.p4Title}</div>
                <p className="text-xs text-slate-500">{t.p4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};