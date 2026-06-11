import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';
import { coursesData } from '../data/courses';
import { teachersData } from '../data/teachers';

export const CourseDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = coursesData.find((c) => c.slug === slug);

  // If not found, gracefully redirect to courses catalog
  if (!course) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="font-serif text-3xl font-bold text-[#18243A]">Course Not Found</h1>
        <p className="text-slate-600">The syllabus you were looking for does not exist or has been restructured.</p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 bg-[#345BEF] text-white px-6 py-3 rounded-xl font-semibold text-sm"
        >
          <span>Browse All Courses</span>
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
            <Link to="/" className="hover:text-[#18243A] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/courses" className="hover:text-[#18243A] transition-colors">Courses</Link>
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
                  Level: {course.level}
                </span>
                {course.popular && (
                  <span className="editorial-badge bg-[#F4C96B] text-[#18243A]">
                    Popular European Cohort
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#18243A] tracking-tight leading-[1.12]">
                {course.title}
              </h1>

              <p className="text-lg sm:text-xl text-[#516382] leading-relaxed">
                {course.tagline}
              </p>

              {/* Fast Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#18243A]/10 text-sm">
                <div>
                  <span className="text-xs text-[#516382] uppercase tracking-wider font-semibold block">Duration</span>
                  <span className="font-serif font-bold text-base text-[#18243A] flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-4 h-4 text-[#345BEF]" /> {course.duration}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#516382] uppercase tracking-wider font-semibold block">Format</span>
                  <span className="font-serif font-bold text-base text-[#18243A] flex items-center gap-1.5 mt-0.5">
                    <Users className="w-4 h-4 text-[#345BEF]" /> {course.format}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#516382] uppercase tracking-wider font-semibold block">Weekly Load</span>
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
                  <span>Request a Free Trial for This Course</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/quiz"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#18243A] px-5 py-3.5 rounded-xl font-semibold text-sm transition-all border border-[#18243A]/15"
                >
                  <Sparkles className="w-4 h-4 text-[#345BEF]" />
                  <span>Test if this level suits you</span>
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
                  <div className="font-bold font-serif text-sm mb-0.5">CEFR Aligned Quality Guarantee</div>
                  <div className="text-[#516382]">
                    Includes baseline diagnostic, personal error blueprint, and completion certificate.
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
                Course Overview
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                {course.fullDescription}
              </p>
            </section>

            {/* Who The Course Is For */}
            <section className="bg-white p-8 rounded-3xl border border-[#18243A]/10 space-y-5">
              <div className="flex items-center gap-2">
                <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238]">Target Audience</span>
                <h3 className="font-serif text-2xl font-bold text-[#18243A]">
                  Who is this program designed for?
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
                What you will achieve
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

            {/* Curriculum Breakdown by Modules */}
            <section className="space-y-6">
              <div className="space-y-2">
                <span className="editorial-badge bg-[#F4C96B]/20 text-[#18243A]">Structured Progression</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18243A] tracking-tight">
                  Curriculum Overview
                </h3>
                <p className="text-slate-600 text-sm">
                  Every module pairs theoretical communication frameworks with live simulations and recorded practice.
                </p>
              </div>

              <div className="space-y-4">
                {course.curriculum.map((mod, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-[#18243A]/10 space-y-3 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#18243A] text-white">
                        {mod.week}
                      </span>
                      <span className="text-xs text-[#516382] font-medium">Interactive Workshop</span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-[#18243A]">
                      {mod.title}
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {mod.description}
                    </p>

                    <div className="pt-2 border-t border-[#18243A]/5 flex flex-wrap gap-2">
                      {mod.keyOutcomes.map((ko, kIdx) => (
                        <span
                          key={kIdx}
                          className="text-xs bg-[#FAF8F5] text-slate-700 px-3 py-1 rounded-lg border border-[#18243A]/5 font-medium"
                        >
                          ✓ {ko}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Teaching Methodology & Schedule Examples */}
            <section className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#18243A]/10 space-y-6">
              <div className="space-y-2">
                <span className="editorial-badge bg-[#345BEF] text-white">Pedagogical Framework</span>
                <h3 className="font-serif text-2xl font-bold text-[#18243A]">
                  Teaching Methodology
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {course.methodology}
                </p>
              </div>

              {/* Schedule options */}
              <div className="pt-4 border-t border-[#18243A]/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#18243A]">
                  Sample European Timetables (CET / GMT)
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
                    Indicative Tuition (Sample)
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-4xl font-bold text-[#18243A]">
                      €{course.indicativePrice}
                    </span>
                    <span className="text-sm text-slate-500 font-medium">/ month</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    *Illustrative pricing for portfolio demo purposes.
                  </p>
                </div>

                <div className="space-y-3 border-t border-b border-[#18243A]/10 py-5 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Cohort Size:</span>
                    <span className="font-semibold text-[#18243A]">Max 5 Students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Weekly Live Time:</span>
                    <span className="font-semibold text-[#18243A]">{course.hoursPerWeek}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Total Program:</span>
                    <span className="font-semibold text-[#18243A]">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Materials:</span>
                    <span className="font-semibold text-[#2F5238]">All Digital Texts Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Timezone:</span>
                    <span className="font-semibold text-[#18243A]">CET / GMT Aligned</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to={`/book-trial?course=${course.slug}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#345BEF] hover:bg-[#2646c7] text-white py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-md group text-center"
                  >
                    <span>Request Free Trial Lesson</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/quiz"
                    className="w-full flex items-center justify-center gap-2 bg-[#FAF8F5] hover:bg-slate-100 text-[#18243A] py-3 px-4 rounded-xl font-semibold text-xs transition-colors border border-[#18243A]/10 text-center"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#345BEF]" />
                    <span>Check CEFR Proficiency First</span>
                  </Link>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2F5238]" /> No credit card needed for trial session
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
                      Sample Lead Tutor ({recommendedTeacher.location})
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
                  <span>Meet all instructors</span>
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
