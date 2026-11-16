import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Volume2, 
  Check, 
  ChevronRight 
} from 'lucide-react';
import { getCourses } from '../data/courses';
import { getTeachers } from '../data/teachers';
import { getFaqs } from '../data/faqs';
import { TeacherCard } from '../components/TeacherCard';
import { Accordion } from '../components/Accordion';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'classes' | 'mentorship' | 'practical'>('classes');
  const [sampleVoiceActive, setSampleVoiceActive] = useState(false);
  const { language } = useLanguage();
  const t = getTranslations(language).home;

  const allCourses = getCourses(language);
  const allTeachers = getTeachers(language);
  const faqsData = getFaqs(language);

  // Core 4 popular courses
  const popularCourses = allCourses.filter((c) =>
    ['general-english', 'conversational-english', 'business-english', 'ielts-preparation'].includes(c.id)
  );

  // Featured flagship course for asymmetric display
  const flagshipCourse = allCourses.find((c) => c.id === 'business-english') || allCourses[0];
  const sideCourses = popularCourses.filter((c) => c.id !== 'business-english');

  // Featured teachers (first 3)
  const featuredTeachers = allTeachers.slice(0, 3);

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* 1. HERO SECTION: ASYMMETRICAL EDITORIAL COMPOSITION */}
      <section className="relative pt-6 sm:pt-12 overflow-hidden">
        {/* Subtle decorative background gradients and grid */}
        <div className="absolute inset-0 bg-grid-editorial opacity-50 pointer-events-none" />
        <div className="absolute -top-32 right-0 w-[30rem] h-[30rem] bg-[#F4C96B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-28 w-96 h-96 bg-[#345BEF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Top Live Cohort Status Strip */}
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 border border-[#18243A]/10 shadow-xs backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#345BEF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#345BEF]"></span>
            </span>
            <span className="text-xs font-semibold text-[#18243A]">
              {t.statusTicker}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-[#516382] font-medium hidden sm:inline">
              CET / GMT
            </span>
            <Link
              to="/courses"
              className="text-xs font-bold text-[#345BEF] hover:underline flex items-center gap-1"
            >
              <span>{t.viewSeats}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Bold Editorial Typography & Actions */}
            <div className="lg:col-span-7 space-y-7 sm:space-y-9">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E7F0E8] text-[#2F5238] text-[11px] font-bold uppercase tracking-wider">
                  {t.heroPill}
                </div>

                <h1 className="font-serif text-5xl sm:text-7xl xl:text-8xl font-bold text-[#18243A] leading-[1.04] tracking-tight">
                  {t.heroHeadline1} <br />
                  <span className="italic font-normal text-[#345BEF] underline decoration-[#F4C96B] decoration-wavy decoration-2">{t.heroHeadlineItalic}</span> {t.heroHeadline2}
                </h1>
              </div>

              <p className="text-lg sm:text-2xl text-[#516382] leading-relaxed max-w-2xl font-light">
                {t.heroDesc}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#345BEF] hover:bg-[#2646c7] text-white px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-200 shadow-md hover:shadow-xl group"
                >
                  <span>{t.exploreSyllabi}</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/book-trial"
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#FAF8F5] text-[#18243A] px-7 py-4 rounded-2xl text-base font-semibold transition-all duration-200 border border-[#18243A]/15 hover:border-[#18243A]/30 shadow-xs"
                >
                  <Calendar className="w-5 h-5 text-[#345BEF]" />
                  <span>{t.bookFreeTrial}</span>
                </Link>
              </div>

              {/* Editorial Stat Strip */}
              <div className="pt-6 border-t border-[#18243A]/10 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#18243A]">{t.maxStudents}</div>
                  <div className="text-xs text-[#516382] font-medium mt-0.5">{t.maxStudentsSub}</div>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#18243A]">{t.speakingRatio}</div>
                  <div className="text-xs text-[#516382] font-medium mt-0.5">{t.speakingRatioSub}</div>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#18243A]">{t.cefrStandard}</div>
                  <div className="text-xs text-[#516382] font-medium mt-0.5">{t.cefrStandardSub}</div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Multi-Layer Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Portrait Frame */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#18243A] aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                    alt="Young European student participating in an online English seminar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18243A]/90 via-[#18243A]/20 to-transparent" />

                  {/* Student Quote overlay on image */}
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                    <p className="font-serif italic text-sm text-slate-200">
                      "{t.studentQuote}"
                    </p>
                    <p className="text-[11px] font-semibold text-[#F4C96B] uppercase tracking-wider">
                      {t.studentAuthor}
                    </p>
                  </div>
                </div>

                {/* Overlapping Floating Element 1: Interactive Audio Coaching Snippet */}
                <div className="absolute -top-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#18243A]/10 max-w-[240px] hidden sm:block">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#345BEF]">
                      {t.acousticCoaching}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSampleVoiceActive(!sampleVoiceActive)}
                      type="button"
                      className="w-9 h-9 rounded-xl bg-[#18243A] text-white flex items-center justify-center hover:bg-[#345BEF] transition-colors shrink-0"
                      aria-label="Play audio sample"
                    >
                      <Volume2 className="w-4 h-4 text-[#F4C96B]" />
                    </button>
                    <div>
                      <div className="text-xs font-bold text-[#18243A]">{t.vocalStressDrill}</div>
                      <div className="text-[11px] text-[#516382]">
                        {sampleVoiceActive ? t.playingDemo : t.clickPreview}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlapping Floating Element 2: Quick CEFR Quiz Card */}
                <div className="absolute -bottom-6 -right-6 z-20 bg-[#FAF8F5] p-5 rounded-2xl shadow-xl border border-[#18243A]/15 max-w-[250px] text-[#18243A]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="w-4 h-4 text-[#345BEF]" />
                    <span className="text-xs font-bold uppercase tracking-wider">{t.unsureLevel}</span>
                  </div>
                  <p className="text-xs text-[#516382] mb-3 leading-relaxed">
                    {t.quizPrompt}
                  </p>
                  <Link
                    to="/quiz"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#345BEF] hover:underline"
                  >
                    <span>{t.startQuiz}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Editorial Accent Frame Border Behind */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-dashed border-[#F4C96B] -z-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY FLUENTBRIDGE: EDITORIAL MAGAZINE SPLIT LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#18243A]/10 rounded-3xl sm:rounded-[40px] p-8 sm:p-14 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Magazine Column: Bold Thesis & Candid Photography */}
            <div className="lg:col-span-5 space-y-6">
              <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/30">
                {t.methodBadge}
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight leading-tight">
                {t.methodHeadline}
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                {t.methodDesc}
              </p>

              <div className="rounded-2xl overflow-hidden border border-[#18243A]/10 shadow-sm aspect-[4/3] relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Students in a lively discussion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#18243A]/90 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  {t.methodPhotoCaption}
                </div>
              </div>
            </div>

            {/* Right Magazine Column: Numbered Editorial Points */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              
              {/* Point 1 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#18243A]/10 space-y-2 card-hover-lift">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-[#345BEF]">01</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#516382]">{t.pillar1Tag}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#18243A]">
                  {t.pillar1Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.pillar1Desc}
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#18243A]/10 space-y-2 card-hover-lift">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-[#2F5238]">02</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#516382]">{t.pillar2Tag}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#18243A]">
                  {t.pillar2Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.pillar2Desc}
                </p>
              </div>

              {/* Point 3 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#18243A]/10 space-y-2 card-hover-lift">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-[#9A731E]">03</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#516382]">{t.pillar3Tag}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#18243A]">
                  {t.pillar3Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.pillar3Desc}
                </p>
              </div>

              {/* Point 4 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#18243A]/10 space-y-2 card-hover-lift">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-[#345BEF]">04</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#516382]">{t.pillar4Tag}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#18243A]">
                  {t.pillar4Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.pillar4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR COURSES: ASYMMETRICAL FLAGSHIP SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#18243A]/10 pb-6">
          <div className="space-y-3">
            <span className="editorial-badge bg-[#F4C96B]/25 text-[#18243A] border border-[#F4C96B]/40">
              {t.coursesBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight">
              {t.coursesTitle}
            </h2>
            <p className="text-[#516382] text-base max-w-xl">
              {t.coursesDesc}
            </p>
          </div>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-[#345BEF] hover:text-[#2646c7] font-semibold text-base group self-start md:self-end"
          >
            <span>{t.viewAllCoursesBtn}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetrical Grid: 1 Big Flagship + 3 Side Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Flagship Large Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#18243A] rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#345BEF]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="editorial-badge bg-[#F4C96B] text-[#18243A]">
                  {t.flagshipBadge}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {flagshipCourse.format} • {language === 'ru' ? 'Уровень' : 'Level'}: {flagshipCourse.level}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                  {flagshipCourse.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                  {flagshipCourse.fullDescription.slice(0, 220)}...
                </p>
              </div>

              {/* Learning outcomes preview */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4C96B]">
                  {t.coreCapabilities}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {flagshipCourse.learningOutcomes.slice(0, 4).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                      <Check className="w-3.5 h-3.5 text-[#F4C96B] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  {t.indicativeTuition}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-bold text-white">€{flagshipCourse.indicativePrice}</span>
                  <span className="text-xs text-slate-400">{t.perMonth}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={`/courses/${flagshipCourse.slug}`}
                  className="inline-flex items-center gap-2 bg-[#345BEF] hover:bg-[#2646c7] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-md"
                >
                  <span>{t.exploreFullSyllabus}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 3 Curated Side Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {sideCourses.map((c) => (
              <div
                key={c.id}
                className="bg-white p-6 rounded-2xl border border-[#18243A]/10 hover:border-[#345BEF]/40 transition-all card-hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#516382] mb-1.5">
                    <span className="font-semibold text-[#18243A]">{c.category}</span>
                    <span className="bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#18243A]/10 font-medium">
                      {language === 'ru' ? 'Уровень' : 'Level'}: {c.level}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#18243A]">
                    <Link to={`/courses/${c.slug}`} className="hover:text-[#345BEF] transition-colors">
                      {c.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                    {c.shortDescription}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#18243A]/5 flex items-center justify-between">
                  <span className="font-serif font-bold text-base text-[#18243A]">
                    €{c.indicativePrice} <span className="text-xs text-slate-500 font-normal">{t.perMonth}</span>
                  </span>
                  <Link
                    to={`/courses/${c.slug}`}
                    className="text-xs font-bold text-[#345BEF] hover:underline flex items-center gap-1"
                  >
                    <span>{t.viewCourse}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS: CONNECTED TIMELINE ROADMAP */}
      <section className="bg-[#18243A] text-white py-20 rounded-3xl sm:rounded-[40px] mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="editorial-badge bg-white/10 text-[#F4C96B] border border-white/15">
              {t.roadmapBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {t.roadmapTitle}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              {t.roadmapDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-4 relative group hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#345BEF] text-white font-serif text-lg font-bold flex items-center justify-center">
                  01
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4C96B]">{t.step1Tag}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                {t.step1Title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.step1Desc}
              </p>
              <div className="pt-2 text-xs text-slate-400 font-medium">
                {t.step1Output}
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-4 relative group hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#F4C96B] text-[#18243A] font-serif text-lg font-bold flex items-center justify-center">
                  02
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4C96B]">{t.step2Tag}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                {t.step2Title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.step2Desc}
              </p>
              <div className="pt-2 text-xs text-slate-400 font-medium">
                {t.step2Output}
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-4 relative group hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0E8] text-[#2F5238] font-serif text-lg font-bold flex items-center justify-center">
                  03
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4C96B]">{t.step3Tag}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                {t.step3Title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.step3Desc}
              </p>
              <div className="pt-2 text-xs text-slate-400 font-medium">
                {t.step3Output}
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-4 relative group hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white text-[#18243A] font-serif text-lg font-bold flex items-center justify-center">
                  04
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4C96B]">{t.step4Tag}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                {t.step4Title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.step4Desc}
              </p>
              <div className="pt-2 text-xs text-slate-400 font-medium">
                {t.step4Output}
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              to="/book-trial"
              className="inline-flex items-center gap-2.5 bg-[#F4C96B] hover:bg-[#e6bb59] text-[#18243A] px-8 py-4 rounded-2xl text-base font-bold transition-all shadow-md group"
            >
              <span>{t.scheduleDiagnosticBtn}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LEARNING EXPERIENCE: INTERACTIVE STUDIO DEMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="editorial-badge bg-[#FAF8F5] text-[#516382] border border-[#18243A]/10">
            {t.insideSalonBadge}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight">
            {t.insideSalonTitle}
          </h2>
          <p className="text-[#516382] text-base sm:text-lg">
            {t.insideSalonDesc}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#FAF8F5] border border-[#18243A]/10 gap-1.5 flex-wrap justify-center shadow-2xs">
            <button
              onClick={() => setActiveTab('classes')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'classes'
                  ? 'bg-[#18243A] text-white shadow-sm'
                  : 'text-[#516382] hover:text-[#18243A]'
              }`}
            >
              {t.tab1}
            </button>
            <button
              onClick={() => setActiveTab('mentorship')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'mentorship'
                  ? 'bg-[#18243A] text-white shadow-sm'
                  : 'text-[#516382] hover:text-[#18243A]'
              }`}
            >
              {t.tab2}
            </button>
            <button
              onClick={() => setActiveTab('practical')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'practical'
                  ? 'bg-[#18243A] text-white shadow-sm'
                  : 'text-[#516382] hover:text-[#18243A]'
              }`}
            >
              {t.tab3}
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-3xl border border-[#18243A]/10 p-8 sm:p-12 shadow-sm">
          {activeTab === 'classes' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="editorial-badge bg-[#EEF2FD] text-[#345BEF]">
                  {t.tab1Badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#18243A]">
                  {t.tab1Title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {t.tab1Desc}
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#345BEF]" />
                    <span>{t.tab1P1}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#345BEF]" />
                    <span>{t.tab1P2}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#345BEF]" />
                    <span>{t.tab1P3}</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-[#18243A]/10 shadow-md aspect-video relative">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                    alt="Students in a lively discussion"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#18243A]/90 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    {t.tab1Caption}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mentorship' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238]">
                  {t.tab2Badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#18243A]">
                  {t.tab2Title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {t.tab2Desc}
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2F5238]" />
                    <span>{t.tab2P1}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2F5238]" />
                    <span>{t.tab2P2}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2F5238]" />
                    <span>{t.tab2P3}</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-[#18243A]/10 shadow-md aspect-video relative">
                  <img
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80"
                    alt="Tutor providing detailed writing and speaking feedback"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#18243A]/90 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    {t.tab2Caption}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'practical' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="editorial-badge bg-[#FDF7E7] text-[#18243A]">
                  {t.tab3Badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#18243A]">
                  {t.tab3Title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {t.tab3Desc}
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F4C96B]" />
                    <span>{t.tab3P1}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F4C96B]" />
                    <span>{t.tab3P2}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F4C96B]" />
                    <span>{t.tab3P3}</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-[#18243A]/10 shadow-md aspect-video relative">
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80"
                    alt="Spontaneous conversation workshop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#18243A]/90 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    {t.tab3Caption}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. MEET OUR TEACHERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#18243A]/10 pb-6">
          <div className="space-y-3">
            <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/20">
              {t.teachersBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight">
              {t.teachersTitle}
            </h2>
            <p className="text-[#516382] text-base max-w-xl">
              {t.teachersDesc}
            </p>
          </div>

          <Link
            to="/teachers"
            className="inline-flex items-center gap-2 text-[#345BEF] hover:text-[#2646c7] font-semibold text-base group self-start md:self-end"
          >
            <span>{t.viewAllFaculty}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Featured Teachers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-4">
          <span className="editorial-badge bg-[#FAF8F5] text-[#516382] border border-[#18243A]/10">
            {t.faqBadge}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight">
            {t.faqTitle}
          </h2>
          <p className="text-[#516382] text-base">
            {t.faqDesc}
          </p>
        </div>

        <Accordion items={faqsData.slice(0, 5)} />

        <div className="text-center pt-2">
          <p className="text-sm text-slate-500 mb-2">
            {t.faqContactPrompt}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-[#345BEF] font-semibold text-sm hover:underline"
          >
            <span>{t.faqContactLink}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 8. FINAL EDITORIAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#18243A]/10 rounded-3xl sm:rounded-[40px] p-8 sm:p-16 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#345BEF]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="editorial-badge bg-[#345BEF] text-white">
                {t.ctaBadge}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight leading-tight">
                {t.ctaHeadline}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
                {t.ctaDesc}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                to="/book-trial"
                className="inline-flex items-center justify-center gap-2 bg-[#345BEF] hover:bg-[#2646c7] text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-md group text-center"
              >
                <span>{t.ctaBookBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/quiz"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#18243A] px-7 py-4 rounded-2xl font-semibold text-base transition-all border border-[#18243A]/15 text-center"
              >
                <Sparkles className="w-4 h-4 text-[#345BEF]" />
                <span>{t.ctaQuizBtn}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
