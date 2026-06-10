import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Calendar, 
  MessageSquare, 
  Award, 
  Target, 
  Laptop, 
  BookOpen, 
  TrendingUp,
  Compass
} from 'lucide-react';
import { coursesData } from '../data/courses';
import { teachersData } from '../data/teachers';
import { faqsData } from '../data/faqs';
import { CourseCard } from '../components/CourseCard';
import { TeacherCard } from '../components/TeacherCard';
import { Accordion } from '../components/Accordion';

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'classes' | 'mentorship' | 'practical'>('classes');

  // Popular four courses requested: General English, Conversational English, Business English, IELTS Preparation
  const popularCourses = coursesData.filter((c) =>
    ['general-english', 'conversational-english', 'business-english', 'ielts-preparation'].includes(c.id)
  );

  // Selected sample teachers
  const featuredTeachers = teachersData.slice(0, 3);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 overflow-hidden">
        {/* Subtle decorative background gradients and grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -top-40 right-0 w-96 h-96 bg-[#F4C96B]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#345BEF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#18243A]/10 text-xs font-semibold text-[#18243A] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#345BEF] animate-pulse" />
                <span>Modern English Academy for European Adults & Professionals</span>
                <span className="text-[#345BEF] hidden sm:inline">CET / GMT</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold text-[#18243A] leading-[1.08] tracking-tight">
                English that <br />
                <span className="italic font-normal text-[#345BEF] underline decoration-[#F4C96B] decoration-wavy decoration-2">takes you</span> further.
              </h1>

              {/* Supporting Value Proposition */}
              <p className="text-lg sm:text-xl text-[#516382] leading-relaxed max-w-2xl font-normal">
                FluentBridge bridges the gap between textbook grammar and effortless, unscripted fluency. Designed specifically for university students, expats, and ambitious working professionals across Europe.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#345BEF] hover:bg-[#2646c7] text-white px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/book-trial"
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#FAF8F5] text-[#18243A] px-7 py-4 rounded-2xl text-base font-semibold transition-all duration-200 border border-[#18243A]/15 hover:border-[#18243A]/30 shadow-xs"
                >
                  <Calendar className="w-5 h-5 text-[#345BEF]" />
                  <span>Book a Free Trial</span>
                </Link>
              </div>

              {/* Social Proof & Metrics Highlights */}
              <div className="pt-6 border-t border-[#18243A]/10 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#18243A]">Max 5</div>
                  <div className="text-xs text-[#516382] font-medium">Students per cohort</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#18243A]">70%+</div>
                  <div className="text-xs text-[#516382] font-medium">Speaking time</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#18243A]">CEFR</div>
                  <div className="text-xs text-[#516382] font-medium">Standard aligned</div>
                </div>
              </div>
            </div>

            {/* Right Column: Unique Asymmetrical Editorial Photo Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Portrait Frame */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#18243A] aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                    alt="Young European student participating in an online English seminar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18243A]/80 via-transparent to-transparent" />

                  {/* Quote pill on image */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="font-serif italic text-sm text-slate-200">
                      "I stopped freezing during executive syncs after just 4 weeks."
                    </p>
                    <p className="text-[11px] font-semibold text-[#F4C96B] uppercase tracking-wider mt-1">
                      Elena Rostova — Product Lead, Munich (Demo Student)
                    </p>
                  </div>
                </div>

                {/* Overlapping Floating Element 1: Live Class Badge */}
                <div className="absolute -top-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#18243A]/10 max-w-[210px] hidden sm:block animate-bounce-slow">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#18243A]">Live Seminar</span>
                  </div>
                  <p className="text-xs text-[#516382] font-medium">
                    18:30 CET Cohort: <span className="text-[#18243A] font-semibold">Diplomatic Negotiations</span>
                  </p>
                </div>

                {/* Overlapping Floating Element 2: Quiz CTA card */}
                <div className="absolute -bottom-6 -right-6 z-20 bg-[#E7F0E8] p-4 rounded-2xl shadow-xl border border-[#2F5238]/20 max-w-[240px] text-[#18243A]">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-[#345BEF]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Unsure of your level?</span>
                  </div>
                  <p className="text-xs text-[#516382] mb-2.5">
                    Take our 5-minute placement quiz to find your CEFR starting point.
                  </p>
                  <Link
                    to="/quiz"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#345BEF] hover:underline"
                  >
                    <span>Start Level Quiz</span>
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

      {/* 2. WHY FLUENTBRIDGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/20">
            The FluentBridge Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight">
            Why European learners thrive with us.
          </h2>
          <p className="text-[#516382] text-base sm:text-lg">
            We discarded outdated rote grammar methods in favor of high-engagement conversational salons, executive simulations, and personalized phonetic feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white p-8 rounded-3xl border border-[#18243A]/10 hover:border-[#345BEF]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF2FD] text-[#345BEF] flex items-center justify-center font-serif text-xl font-bold group-hover:scale-110 transition-transform">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#18243A]">
                Flexible Online Learning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Join live seminars directly from your browser. Early morning (07:30 CET), lunchtime express, or evening sessions tailored to busy professional calendars.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#18243A]/5 text-xs text-[#516382] font-semibold">
              01 / Synchronized Across Europe
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 rounded-3xl border border-[#18243A]/10 hover:border-[#345BEF]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E7F0E8] text-[#2F5238] flex items-center justify-center font-serif text-xl font-bold group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#18243A]">
                Experienced Educators
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                All instructors hold DELTA or Master's degrees from Oxford, Cambridge, and London. Real corporate executives and examiners, not casual conversationalists.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#18243A]/5 text-xs text-[#516382] font-semibold">
              02 / DELTA & MA Accredited
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8 rounded-3xl border border-[#18243A]/10 hover:border-[#345BEF]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF7E7] text-[#18243A] flex items-center justify-center font-serif text-xl font-bold group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6 text-[#18243A]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#18243A]">
                Practical Communication
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Learn how to present data, handle hostile questions, write crisp emails, and tell witty anecdotes over drinks without sounding like a translated textbook.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#18243A]/5 text-xs text-[#516382] font-semibold">
              03 / Real-World Scenarios
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-8 rounded-3xl border border-[#18243A]/10 hover:border-[#345BEF]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF2FD] text-[#345BEF] flex items-center justify-center font-serif text-xl font-bold group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#18243A]">
                Personalized Approach
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Receive personalized voice memos, grammar error blueprints, and acoustic pronunciation audits after every single session. Continuous calibration.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#18243A]/5 text-xs text-[#516382] font-semibold">
              04 / Tailored Diagnostic Audits
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR COURSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="editorial-badge bg-[#F4C96B]/20 text-[#18243A] border border-[#F4C96B]/40">
              Curriculum Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight">
              Popular Learning Programs
            </h2>
            <p className="text-[#516382] text-base max-w-xl">
              Intimate cohorts, intensive 1-on-1 mentorship, and exam preparation programs structured around your specific career objectives.
            </p>
          </div>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-[#345BEF] hover:text-[#2646c7] font-semibold text-base group self-start md:self-end"
          >
            <span>View All Courses & Filters</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Popular Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS (STUDENT JOURNEY) */}
      <section className="bg-[#18243A] text-white py-20 rounded-3xl sm:rounded-[40px] mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="editorial-badge bg-white/10 text-[#F4C96B] border border-white/15">
              The Student Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              How learning works at FluentBridge.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              A clear, predictable roadmap from your initial placement audit to complete conversational and professional ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-4 relative group hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#345BEF] text-white font-serif text-xl font-bold flex items-center justify-center">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Choose your course
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Select between General English, Conversational salons, Executive Business, or targeted IELTS preparation.
              </p>
              <div className="pt-2 text-xs text-[#F4C96B] font-medium flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" /> Tailored syllabi
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-4 relative group hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#F4C96B] text-[#18243A] font-serif text-xl font-bold flex items-center justify-center">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Find your learning level
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Complete our fast online level quiz or schedule a 1-on-1 diagnostic trial with an academic coach.
              </p>
              <div className="pt-2 text-xs text-[#F4C96B] font-medium flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" /> CEFR Benchmark
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-4 relative group hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#E7F0E8] text-[#2F5238] font-serif text-xl font-bold flex items-center justify-center">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Start learning
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Join your intimate cohort (max 5 students) or meet your dedicated private mentor at your preferred time.
              </p>
              <div className="pt-2 text-xs text-[#F4C96B] font-medium flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> High speaking time
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-4 relative group hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#18243A] font-serif text-xl font-bold flex items-center justify-center">
                4
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Track your progress
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Review interactive transcripts, diagnostic error blueprints, and earn verifiable CEFR competency credentials.
              </p>
              <div className="pt-2 text-xs text-[#F4C96B] font-medium flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> Measurable gains
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/book-trial"
              className="inline-flex items-center gap-2 bg-[#F4C96B] hover:bg-[#e6bb59] text-[#18243A] px-8 py-4 rounded-2xl text-base font-bold transition-all shadow-md group"
            >
              <span>Schedule Your Free Diagnostic Step</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LEARNING EXPERIENCE INTERACTIVE SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="editorial-badge bg-[#FAF8F5] text-[#516382] border border-[#18243A]/10">
            Behind The Scenes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight">
            The FluentBridge Experience.
          </h2>
          <p className="text-[#516382] text-base sm:text-lg">
            A look into how our live virtual seminars, personalized feedback loop, and practical simulation exercises combine.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#FAF8F5] border border-[#18243A]/10 gap-1.5 flex-wrap justify-center">
            <button
              onClick={() => setActiveTab('classes')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'classes'
                  ? 'bg-[#18243A] text-white shadow-sm'
                  : 'text-[#516382] hover:text-[#18243A]'
              }`}
            >
              1. Live Virtual Salons
            </button>
            <button
              onClick={() => setActiveTab('mentorship')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'mentorship'
                  ? 'bg-[#18243A] text-white shadow-sm'
                  : 'text-[#516382] hover:text-[#18243A]'
              }`}
            >
              2. Diagnostic Mentorship
            </button>
            <button
              onClick={() => setActiveTab('practical')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'practical'
                  ? 'bg-[#18243A] text-white shadow-sm'
                  : 'text-[#516382] hover:text-[#18243A]'
              }`}
            >
              3. Real-World Simulations
            </button>
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="bg-white rounded-3xl border border-[#18243A]/10 p-8 sm:p-12 shadow-sm">
          {activeTab === 'classes' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="editorial-badge bg-[#EEF2FD] text-[#345BEF]">
                  Intimate Cohorts
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#18243A]">
                  Never hide in the back row of a crowded webinar.
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Every class has a strict cap of 3 to 5 students. Tutors do not lecture; they facilitate vigorous, engaging debate, ask probing questions, and invite every participant to voice complex opinions.
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#345BEF]" />
                    <span>Synchronized across CET/GMT to match your workday rhythm</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#345BEF]" />
                    <span>Curated reading articles from FT, Economist, and The Guardian</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#345BEF]" />
                    <span>Interactive digital whiteboard for collaborative lexical mapping</span>
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
                    Live Session: European Tech Governance Debate
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mentorship' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238]">
                  Personalized Feedback Loop
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#18243A]">
                  Diagnostic voice notes and syntax audits.
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Learning does not stop when you log off Zoom. Your tutor reviews your session recordings and sends you a personalized error blueprint highlighting fossilized mistakes, pronunciation stress errors, and suggested native idioms.
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2F5238]" />
                    <span>Acoustic waveform analysis of vowel clarity and connected speech</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2F5238]" />
                    <span>Bring real client proposals or academic abstracts for redlining</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2F5238]" />
                    <span>Quarterly CEFR audit tracking active vocabulary expansion</span>
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
                    Diagnostic Clinic: Acoustic waveform and rhythm analysis
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'practical' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="editorial-badge bg-[#FDF7E7] text-[#18243A]">
                  Simulated Reality
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#18243A]">
                  From cocktail party banter to boardroom grilling.
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  We prepare you for the unpredictable realities of European life: defending an architecture choice during a tense standup, delivering a warm wedding toast in Edinburgh, or holding your ground in commercial negotiations.
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F4C96B]" />
                    <span>Harvard Project negotiation simulations with peer counter-offers</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F4C96B]" />
                    <span>Spontaneous 2-minute impromptu speaking drills under pressure</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F4C96B]" />
                    <span>Deconstructing cultural subtexts between British, US & EU business styles</span>
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
                    Simulation: High-stakes partner pitch and cross-examination
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. MEET OUR TEACHERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/20">
              Selected Faculty Spotlight
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight">
              Meet Our Educators
            </h2>
            <p className="text-[#516382] text-base max-w-xl">
              Postgraduate linguists, ex-IELTS examiners, and corporate strategists who understand how European adults actually acquire confidence.
            </p>
          </div>

          <Link
            to="/teachers"
            className="inline-flex items-center gap-2 text-[#345BEF] hover:text-[#2646c7] font-semibold text-base group self-start md:self-end"
          >
            <span>View Full Faculty Directory</span>
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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="editorial-badge bg-[#FAF8F5] text-[#516382] border border-[#18243A]/10">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#516382] text-base">
            Everything you need to know about our cohorts, scheduling, European timezone sync, and free trial lesson.
          </p>
        </div>

        <Accordion items={faqsData.slice(0, 5)} />

        <div className="text-center mt-10">
          <p className="text-sm text-slate-500 mb-3">
            Have a specific scheduling inquiry or employer sponsorship question?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-[#345BEF] font-semibold text-sm hover:underline"
          >
            <span>Ask our academic admissions team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 8. FINAL EDITORIAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#18243A]/10 rounded-3xl sm:rounded-[40px] p-8 sm:p-16 relative overflow-hidden shadow-sm">
          {/* Decorative motif */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#345BEF]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="editorial-badge bg-[#345BEF] text-white">
                Next Cohorts Starting Soon
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight leading-tight">
                Ready to speak English with the fluency and authority you possess in your native language?
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
                Book a 30-minute diagnostic trial with an academic coach. We will assess your speech rhythm, uncover your false friends, and construct a bespoke plan.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                to="/book-trial"
                className="inline-flex items-center justify-center gap-2 bg-[#345BEF] hover:bg-[#2646c7] text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-md group text-center"
              >
                <span>Book a Free Trial</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/quiz"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#18243A] px-7 py-4 rounded-2xl font-semibold text-base transition-all border border-[#18243A]/15 text-center"
              >
                <Sparkles className="w-4 h-4 text-[#345BEF]" />
                <span>Estimate Level (5m)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
