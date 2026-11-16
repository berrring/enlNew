import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight, 
  Check, 
  ChevronDown 
} from 'lucide-react';
import { getCourses } from '../data/courses';
import { getTeachers } from '../data/teachers';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const CourseDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = getTranslations(language).courseDetails;
  const coursesData = getCourses(language);
  const teachersData = getTeachers(language);

  const course = coursesData.find((c) => c.slug === slug);
  const [activeModule, setActiveModule] = useState<number | null>(0);

  // If not found, gracefully redirect to courses catalog
  if (!course) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="font-serif text-3xl font-bold text-[#18243A]">{t.notFoundTitle}</h1>
        <p className="text-slate-600">{t.notFoundDesc}</p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 bg-[#345BEF] text-white px-6 py-3 rounded-xl font-semibold text-sm"
        >
          <span>{t.browseCoursesBtn}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  // Recommended sample tutor for this course
  const recommendedTeacher = teachersData[0];

  return (
    <div className="pb-24 space-y-16">
      {/* 1. Breadcrumb & Course Hero */}
      <section className="bg-[#FAF8F5] border-b border-[#18243A]/10 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#516382]">
            <Link to="/" className="hover:text-[#18243A] transition-colors">{t.home}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/courses" className="hover:text-[#18243A] transition-colors">{t.courses}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#18243A] font-semibold">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Hero Title & Key Meta */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/30">
                  {course.category}
                </span>
                <span className="editorial-badge bg-white text-[#18243A] border border-[#18243A]/10">
                  {language === 'ru' ? 'Уровень' : 'Level'}: {course.level}
                </span>
                {course.popular && (
                  <span className="editorial-badge bg-[#F4C96B] text-[#18243A]">
                    {language === 'ru' ? 'Популярный европейский курс' : 'Popular European Cohort'}
                  </span>
                )}
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#18243A] tracking-tight leading-[1.08]">
                {course.title}
              </h1>

              <p className="text-lg sm:text-xl text-[#516382] leading-relaxed">
                {course.tagline}
              </p>

              {/* Fast Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#18243A]/10 text-sm">
                <div>
                  <span className="text-xs text-[#516382] uppercase tracking-wider font-semibold block">{t.totalProgram}</span>
                  <span className="font-serif font-bold text-base text-[#18243A] flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-4 h-4 text-[#345BEF]" /> {course.duration}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#516382] uppercase tracking-wider font-semibold block">{language === 'ru' ? 'Формат' : 'Format'}</span>
                  <span className="font-serif font-bold text-base text-[#18243A] flex items-center gap-1.5 mt-0.5">
                    <Users className="w-4 h-4 text-[#345BEF]" /> {course.format}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#516382] uppercase tracking-wider font-semibold block">{t.weeklyLoad}</span>
                  <span className="font-serif font-bold text-base text-[#18243A] flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-4 h-4 text-[#345BEF]" /> {course.hoursPerWeek}
                  </span>
                </div>
              </div>

              {/* Top CTA buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={`/book-trial?course=${course.slug}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#345BEF] hover:bg-[#2646c7] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md group"
                >
                  <span>{t.requestTrialBtn}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/quiz"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#18243A] px-5 py-3.5 rounded-xl font-semibold text-sm transition-all border border-[#18243A]/15"
                >
                  <Sparkles className="w-4 h-4 text-[#345BEF]" />
                  <span>{t.checkProficiencyBtn}</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image with Floating Quote */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border-4 border-white bg-[#18243A] relative">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18243A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl text-xs text-[#18243A] border border-[#18243A]/10 shadow-lg">
                  <div className="font-bold font-serif text-sm mb-0.5">
                    {language === 'ru' ? 'Европейский стандарт качества CEFR' : 'European CEFR Guarantee'}
                  </div>
                  <div className="text-[#516382]">
                    {language === 'ru'
                      ? 'Включает диагностику на старте, карту ошибок и сертификат окончания.'
                      : 'Includes baseline diagnostic, personal error blueprint, and completion certificate.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Course Content Layout with Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Body */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview / Full Description */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#18243A] tracking-tight">
                {t.overviewTitle}
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                {course.fullDescription}
              </p>
            </section>

            {/* Who The Course Is For */}
            <section className="bg-white p-8 rounded-3xl border border-[#18243A]/10 space-y-5 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238]">{language === 'ru' ? 'Для кого курс' : 'Target Audience'}</span>
                <h3 className="font-serif text-2xl font-bold text-[#18243A]">
                  {t.targetAudienceTitle}
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {course.targetAudience.map((audience, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#18243A]/5">
                    <CheckCircle2 className="w-4 h-4 text-[#345BEF] shrink-0 mt-0.5" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Learning Outcomes */}
            <section className="space-y-5">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18243A] tracking-tight">
                {t.outcomesTitle}
              </h3>
              <div className="space-y-3">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#18243A]/10 flex items-start gap-3.5 shadow-2xs hover:border-[#345BEF]/30 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#EEF2FD] text-[#345BEF] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive Curriculum Breakdown by Modules */}
            <section className="space-y-6">
              <div className="space-y-2">
                <span className="editorial-badge bg-[#F4C96B]/20 text-[#18243A]">{language === 'ru' ? 'План обучения' : 'Structured Progression'}</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18243A] tracking-tight">
                  {t.curriculumTitle}
                </h3>
                <p className="text-slate-600 text-sm">
                  {t.curriculumSub}
                </p>
              </div>

              <div className="space-y-4">
                {course.curriculum.map((mod, idx) => {
                  const isOpen = activeModule === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? 'bg-white border-[#345BEF]/40 shadow-sm'
                          : 'bg-white/80 border-[#18243A]/10 hover:border-[#18243A]/20'
                      }`}
                    >
                      <button
                        onClick={() => setActiveModule(isOpen ? null : idx)}
                        className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#345BEF]/40"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#18243A] text-white">
                            {mod.week}
                          </span>
                          <span className="font-serif text-lg sm:text-xl font-bold text-[#18243A]">
                            {mod.title}
                          </span>
                        </div>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                            isOpen ? 'bg-[#345BEF] text-white rotate-180' : 'bg-[#FAF8F5] text-[#18243A]'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-[#18243A]/5 space-y-4">
                          <p>{mod.description}</p>
                          <div className="pt-2 flex flex-wrap gap-2">
                            {mod.keyOutcomes.map((ko, kIdx) => (
                              <span
                                key={kIdx}
                                className="text-xs bg-[#FAF8F5] text-slate-700 px-3 py-1.5 rounded-lg border border-[#18243A]/5 font-medium flex items-center gap-1.5"
                              >
                                <Check className="w-3 h-3 text-[#2F5238]" /> {ko}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Teaching Methodology & Schedule Examples */}
            <section className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#18243A]/10 space-y-6">
              <div className="space-y-2">
                <span className="editorial-badge bg-[#345BEF] text-white">{language === 'ru' ? 'Методика' : 'Pedagogical Framework'}</span>
                <h3 className="font-serif text-2xl font-bold text-[#18243A]">
                  {t.methodologyTitle}
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {course.methodology}
                </p>
              </div>

              {/* Schedule options */}
              <div className="pt-4 border-t border-[#18243A]/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#18243A]">
                  {t.schedulesTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.schedules.map((sch, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-[#18243A]/10 text-xs space-y-1">
                      <div className="font-bold text-[#18243A] text-sm">{sch.days}</div>
                      <div className="text-[#345BEF] font-semibold">{sch.timeCET}</div>
                      <div className="text-slate-500">{sch.format}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Enrollment & Pricing Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Enrollment Card */}
              <div className="bg-white rounded-3xl p-7 border border-[#18243A]/10 shadow-lg space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#516382] font-bold block mb-1">
                    {t.sampleTuition}
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-4xl font-bold text-[#18243A]">
                      €{course.indicativePrice}
                    </span>
                    <span className="text-sm text-slate-500 font-medium">/ {language === 'ru' ? 'мес' : 'month'}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {t.tuitionNote}
                  </p>
                </div>

                <div className="space-y-3 border-t border-b border-[#18243A]/10 py-5 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{t.cohortSize}:</span>
                    <span className="font-semibold text-[#18243A]">{t.maxStudentsVal}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{t.weeklyLoad}:</span>
                    <span className="font-semibold text-[#18243A]">{course.hoursPerWeek}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{t.totalProgram}:</span>
                    <span className="font-semibold text-[#18243A]">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{t.materials}:</span>
                    <span className="font-semibold text-[#2F5238]">{t.allDigitalIncluded}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{t.timezone}:</span>
                    <span className="font-semibold text-[#18243A]">{t.cetAlignedVal}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to={`/book-trial?course=${course.slug}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#345BEF] hover:bg-[#2646c7] text-white py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-md group text-center"
                  >
                    <span>{t.requestTrialBtn}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/quiz"
                    className="w-full flex items-center justify-center gap-2 bg-[#FAF8F5] hover:bg-slate-100 text-[#18243A] py-3 px-4 rounded-xl font-semibold text-xs transition-colors border border-[#18243A]/10 text-center"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#345BEF]" />
                    <span>{t.checkProficiencyBtn}</span>
                  </Link>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2F5238]" /> {t.noCardNeeded}
                  </span>
                </div>
              </div>

              {/* Sample Teacher Mini Spotlight */}
              <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#18243A]/10 space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={recommendedTeacher.avatarUrl}
                    alt={recommendedTeacher.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#18243A]">
                      {recommendedTeacher.name}
                    </h5>
                    <p className="text-[11px] text-[#516382]">
                      {t.leadTutor} ({recommendedTeacher.location})
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 italic">
                  "{recommendedTeacher.bio.slice(0, 140)}..."
                </p>
                <Link
                  to="/teachers"
                  className="text-xs font-semibold text-[#345BEF] hover:underline flex items-center gap-1"
                >
                  <span>{t.meetAllTutors}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
