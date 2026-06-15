import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Info, 
  User, 
  BookOpen
} from 'lucide-react';
import { coursesData } from '../data/courses';

interface TrialFormData {
  fullName: string;
  email: string;
  course: string;
  level: string;
  preferredDate: string;
  preferredTime: string;
  goalsNotes: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  course?: string;
  level?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export const BookTrialPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCourse = searchParams.get('course') || 'general-english';

  const [formData, setFormData] = useState<TrialFormData>({
    fullName: '',
    email: '',
    course: initialCourse,
    level: 'B1 Intermediate',
    preferredDate: '',
    preferredTime: '18:30 CET (Evening)',
    goalsNotes: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set min date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  useEffect(() => {
    // If course in search params changes
    const c = searchParams.get('course');
    if (c) {
      setFormData((prev) => ({ ...prev, course: c }));
    }
  }, [searchParams]);

  const timeSlots = [
    '08:00 CET (Early Morning Sprint)',
    '12:30 CET (Lunchtime Express)',
    '17:00 CET (Early Evening)',
    '18:30 CET (Evening Prime)',
    '20:00 CET (Late Evening)'
  ];

  const levels = [
    'A1 / A2 (Elementary / Beginner)',
    'B1 Intermediate (Comfortable listening, slow speaking)',
    'B2 Upper-Intermediate (Strong conversational, need polish)',
    'C1 / C2 Advanced (Executive fluency, nuanced debate)',
    'Unsure (I want the coach to diagnose me)'
  ];

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!formData.course) {
      errs.course = 'Please select a course of interest.';
    }

    if (!formData.level) {
      errs.level = 'Please indicate your estimated level.';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a date for your trial.';
    }

    if (!formData.preferredTime) {
      errs.preferredTime = 'Please pick a preferred CET time slot.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore if not supported
      }
    }, 600);
  };

  const selectedCourseObj = coursesData.find((c) => c.slug === formData.course);

  return (
    <div className="pb-24 space-y-16">
      {/* Editorial Header */}
      <section className="bg-[#FAF8F5] border-b border-[#18243A]/10 py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/20">
              Complimentary 30-Minute Diagnostic
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#18243A] tracking-tight">
              Book your private trial lesson.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
              Meet 1-on-1 with an Oxford or Cambridge accredited educator to diagnose your pronunciation habits, grammar roadblocks, and create a 90-day trajectory.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form / Confirmation */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#18243A]/10 shadow-sm">
              
              {/* Demo Mode Notice Banner */}
              <div className="bg-[#FAF8F5] border border-[#18243A]/10 p-4 rounded-2xl flex items-start gap-3 text-xs text-[#516382] mb-8">
                <Info className="w-4 h-4 text-[#345BEF] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#18243A]">Portfolio Simulation Notice:</strong> This trial booking wizard is a portfolio demonstration with full form validation and interactive confirmation. It does not reserve live commercial teacher calendars.
                </div>
              </div>

              {submitted ? (
                /* Polished Confirmation State */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#E7F0E8] text-[#2F5238] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238]">
                      Demo Booking Confirmed
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-[#18243A]">
                      You're all set, {formData.fullName}!
                    </h3>
                    <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
                      Your trial lesson request for <strong>{selectedCourseObj?.title || 'FluentBridge Academy'}</strong> has been simulated.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-[#FAF8F5] rounded-2xl p-6 text-left max-w-md mx-auto border border-[#18243A]/10 space-y-3 text-xs text-slate-700">
                    <div className="font-bold text-sm text-[#18243A] border-b border-[#18243A]/10 pb-2">
                      Lesson Confirmation Details (Mock)
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Student:</span>
                      <span className="font-semibold">{formData.fullName} ({formData.email})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Program:</span>
                      <span className="font-semibold text-[#345BEF]">{selectedCourseObj?.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Selected Level:</span>
                      <span className="font-semibold">{formData.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Date & Slot:</span>
                      <span className="font-semibold">{formData.preferredDate} @ {formData.preferredTime}</span>
                    </div>
                    {formData.goalsNotes && (
                      <div className="pt-2 border-t border-[#18243A]/5">
                        <span className="text-slate-500 block mb-1">Your Stated Goals:</span>
                        <p className="italic text-slate-600">"{formData.goalsNotes}"</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-[#18243A] hover:bg-[#345BEF] text-white text-xs font-semibold transition-colors"
                    >
                      Book Another Trial (Demo)
                    </button>
                    <Link
                      to="/quiz"
                      className="px-6 py-3 rounded-xl bg-[#FAF8F5] hover:bg-slate-200 text-[#18243A] text-xs font-semibold transition-colors border border-[#18243A]/10 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#345BEF]" />
                      <span>Take English Level Quiz</span>
                    </Link>
                  </div>
                </div>
              ) : (
                /* The Booking Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Step 1: Personal Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#18243A]/10">
                      <User className="w-4 h-4 text-[#345BEF]" />
                      <h4 className="font-serif font-bold text-base text-[#18243A]">
                        1. Personal Details
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#18243A]">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Henrik Lindqvist"
                          className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#18243A] placeholder-slate-400 focus:outline-none transition-colors ${
                            errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#18243A]/10 focus:border-[#345BEF]'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-rose-500 font-medium">{errors.fullName}</p>}
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#18243A]">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. henrik@lindqvist.se"
                          className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#18243A] placeholder-slate-400 focus:outline-none transition-colors ${
                            errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#18243A]/10 focus:border-[#345BEF]'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-rose-500 font-medium">{errors.email}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Course & Level Selection */}
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#18243A]/10">
                      <BookOpen className="w-4 h-4 text-[#345BEF]" />
                      <h4 className="font-serif font-bold text-base text-[#18243A]">
                        2. Course of Interest & Self-Assessed Level
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Course */}
                      <div className="space-y-1.5">
                        <label htmlFor="course" className="block text-xs font-bold uppercase tracking-wider text-[#18243A]">
                          Course of Interest <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="course"
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#18243A]/10 text-sm text-[#18243A] focus:outline-none focus:border-[#345BEF]"
                        >
                          {coursesData.map((c) => (
                            <option key={c.slug} value={c.slug}>
                              {c.title} ({c.level})
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Level */}
                      <div className="space-y-1.5">
                        <label htmlFor="level" className="block text-xs font-bold uppercase tracking-wider text-[#18243A]">
                          Estimated Proficiency <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="level"
                          value={formData.level}
                          onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#18243A]/10 text-sm text-[#18243A] focus:outline-none focus:border-[#345BEF]"
                        >
                          {levels.map((lvl) => (
                            <option key={lvl} value={lvl}>
                              {lvl}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Schedule Date & CET Time Slot */}
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#18243A]/10">
                      <CalendarIcon className="w-4 h-4 text-[#345BEF]" />
                      <h4 className="font-serif font-bold text-base text-[#18243A]">
                        3. Schedule Preference (CET / GMT)
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Date */}
                      <div className="space-y-1.5">
                        <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-[#18243A]">
                          Preferred Date <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="preferredDate"
                          type="date"
                          min={minDateString}
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#18243A] focus:outline-none transition-colors ${
                            errors.preferredDate ? 'border-rose-400 bg-rose-50/20' : 'border-[#18243A]/10 focus:border-[#345BEF]'
                          }`}
                        />
                        {errors.preferredDate && (
                          <p className="text-xs text-rose-500 font-medium">{errors.preferredDate}</p>
                        )}
                      </div>

                      {/* Time slot */}
                      <div className="space-y-1.5">
                        <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-[#18243A]">
                          Time Window (CET) <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="preferredTime"
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#18243A]/10 text-sm text-[#18243A] focus:outline-none focus:border-[#345BEF]"
                        >
                          {timeSlots.map((ts) => (
                            <option key={ts} value={ts}>
                              {ts}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Notes & Goals */}
                  <div className="space-y-1.5 pt-4">
                    <label htmlFor="goalsNotes" className="block text-xs font-bold uppercase tracking-wider text-[#18243A]">
                      Specific Challenges or Goals (Optional)
                    </label>
                    <textarea
                      id="goalsNotes"
                      rows={3}
                      value={formData.goalsNotes}
                      onChange={(e) => setFormData({ ...formData, goalsNotes: e.target.value })}
                      placeholder="e.g. Preparing for an executive interview in Dublin, or struggling with vocal confidence during team retrospectives..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#18243A]/10 text-sm text-[#18243A] placeholder-slate-400 focus:outline-none focus:border-[#345BEF]"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#345BEF] hover:bg-[#2646c7] text-white font-bold text-base transition-all shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Validating & Simulating...</span>
                      ) : (
                        <>
                          <span>Confirm Demo Trial Booking</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: What Happens in The Trial */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#18243A] text-white p-7 rounded-3xl border border-white/10 space-y-5">
              <span className="editorial-badge bg-[#F4C96B] text-[#18243A]">
                The Diagnostic Protocol
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                What to expect during your 30 minutes
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Your trial is conducted 1-on-1 via private browser video with an Oxford or Cambridge accredited academic coach.
              </p>

              <div className="space-y-4 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#345BEF] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Spoken Ease & Flow Audit</div>
                    <p className="text-slate-300 mt-0.5">A natural conversation on contemporary European news to evaluate spontaneous syntax without notes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#345BEF] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Phonological & Rhythm Scan</div>
                    <p className="text-slate-300 mt-0.5">Identification of native-language interference (vowel lengths, consonant clusters, and syllable timing).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#345BEF] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">90-Day Learning Blueprint</div>
                    <p className="text-slate-300 mt-0.5">A clear CEFR benchmark score and actionable syllabus recommendation tailored to your professional ambitions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zero Risk Assurance */}
            <div className="bg-[#E7F0E8] p-6 rounded-3xl border border-[#2F5238]/20 space-y-2">
              <div className="flex items-center gap-2 text-[#2F5238] font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-[#2F5238]" />
                <span>Zero Commercial Commitment</span>
              </div>
              <p className="text-xs text-[#2F5238]/80 leading-relaxed">
                No credit cards are requested. If you choose not to enroll in a regular cohort afterward, your diagnostic report is yours to keep forever.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
