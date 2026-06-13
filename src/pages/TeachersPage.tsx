import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Info 
} from 'lucide-react';
import { teachersData } from '../data/teachers';
import { TeacherCard } from '../components/TeacherCard';

export const TeachersPage: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');

  const specialties = [
    'All',
    'IELTS Preparation (Academic)',
    'Executive English',
    'Conversational Ease',
    'Phonology & Intonation',
    'General English (Intermediate to Advanced)'
  ];

  const filteredTeachers = selectedSpecialty === 'All'
    ? teachersData
    : teachersData.filter((t) => t.specialties.includes(selectedSpecialty));

  return (
    <div className="pb-24 space-y-16">
      {/* Editorial Header */}
      <section className="bg-[#FAF8F5] border-b border-[#18243A]/10 py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/20">
              European Faculty Directory
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#18243A] tracking-tight">
              Educators who treat language as living craft.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
              Every instructor brings postgraduate linguistic credentials, commercial or examiner experience, and deep empathy for European adult learners.
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
                Fictional Portfolio Demonstration Profiles
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                The biographies, qualifications, and portraits shown below are realistic fictional profiles created to showcase commercial UI/UX design, filtering, and responsive typography for FluentBridge.
              </p>
            </div>
          </div>
          <Link
            to="/book-trial"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#345BEF] hover:bg-[#2646c7] text-white text-xs font-semibold shrink-0 transition-colors"
          >
            <span>Request Demo Trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Filter by Specialty */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#18243A]/10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#516382] mr-2">
            Filter Specialty:
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
              {spec}
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
              <span className="editorial-badge bg-[#345BEF] text-white">Academic Rigor</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18243A]">
                Our 4 Pillars for Selecting Faculty
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Less than 3% of tutor applicants are admitted to FluentBridge cohorts. We prioritize emotional intelligence, cross-cultural sensitivity, and structured diagnostic feedback over casual conversation.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-[#18243A]/5 space-y-1.5">
                <div className="font-serif font-bold text-sm text-[#18243A]">1. Postgraduate Credentials</div>
                <p className="text-xs text-slate-500">Cambridge DELTA, Trinity DipTESOL, or Master’s in Applied Linguistics required.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#18243A]/5 space-y-1.5">
                <div className="font-serif font-bold text-sm text-[#18243A]">2. Industry Background</div>
                <p className="text-xs text-slate-500">Our business coaches have spent years in European consultancies, tech firms, or legal offices.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#18243A]/5 space-y-1.5">
                <div className="font-serif font-bold text-sm text-[#18243A]">3. Acoustic Voice Training</div>
                <p className="text-xs text-slate-500">Instructors are trained in acoustic phonetics to diagnose subtle European mother-tongue interferences.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#18243A]/5 space-y-1.5">
                <div className="font-serif font-bold text-sm text-[#18243A]">4. Empathy for Multilinguals</div>
                <p className="text-xs text-slate-500">All tutors speak at least one second language, understanding cognitive fatigue firsthand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
