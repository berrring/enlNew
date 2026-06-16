import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pb-24 space-y-20">
      {/* 1. Editorial Storytelling Header */}
      <section className="bg-[#FAF8F5] border-b border-[#18243A]/10 py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/20">
              Our Story & Manifesto
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#18243A] tracking-tight leading-[1.08]">
              Built for Europeans who refuse to sound like an automated translation.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-light">
              FluentBridge was founded on a simple observation: millions of European professionals possess brilliant ideas in their mother tongues, but find themselves muffled, hesitant, or misunderstood in international English.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Visual Story Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="editorial-badge bg-[#FAF8F5] text-[#516382] border border-[#18243A]/10">
              The Origin Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#18243A] tracking-tight">
              From Oxford lecture halls to European multinational boardrooms.
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              <p className="editorial-dropcap">
                In 2021, an international group of Oxford and Cambridge linguistics fellows noticed a recurring pattern among European graduate students and corporate transferees. These students had spent 8 to 12 years studying English grammar tables in secondary school, yet they still dreaded speaking unprompted in seminars.
              </p>
              <p>
                The problem was never intelligence or grammar knowledge. The problem was <em>embodied communicative practice</em>. Traditional language learning treats English as a mathematical formula of rules to memorize. In reality, spoken fluency is a physical, social, and emotional reflex.
              </p>
              <p>
                We built FluentBridge to be a different kind of academy: an intimate online European salon where adults practice high-stakes conversation, learn diplomatic nuance, and receive respectful, scientific phonetic feedback.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white bg-[#18243A] relative">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                  alt="Academic seminar in a historic European setting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18243A]/90 via-[#18243A]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="font-serif italic text-base">
                    "When you free someone's voice, you liberate their entire intellect."
                  </div>
                  <div className="text-xs text-[#F4C96B] font-semibold">
                    Founding Principle, FluentBridge
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Academy Values */}
      <section className="bg-[#18243A] text-white py-20 rounded-3xl sm:rounded-[40px] mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="editorial-badge bg-white/10 text-[#F4C96B] border border-white/15">
              Academy Core Values
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              What guides our classrooms every day.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#345BEF] text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Respect for Heritage</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We do not erase your European identity. A French, German, Italian, or Spanish lilt has elegance; our goal is effortless phonological clarity, not sterile conformity.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F4C96B] text-[#18243A] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-white">The Lexical Reality</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Native speech relies on chunks, collocations, and idioms—not isolated vocabulary lists. We teach you the phrases native speakers reach for automatically.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E7F0E8] text-[#2F5238] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Intimacy & Safety</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Adults learn when they feel safe to make mistakes. Capping cohorts at 5 students ensures everyone is heard, respected, and encouraged to take linguistic risks.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#18243A] flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Pragmatic Utility</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                If an idiom or structure cannot be applied in a European business negotiation, academic paper, or social dinner this week, we don't waste your time with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Learning Philosophy (Editorial Split 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-[#18243A]/10 bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80"
                alt="Students collaborating across Europe"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="editorial-badge bg-[#FAF8F5] text-[#516382] border border-[#18243A]/10">
              The Pedagogical Creed
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#18243A] tracking-tight">
              Language as an instrument of action, not passive memorization.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              When you learn with FluentBridge, you do not fill in worksheet blanks. You defend an investment thesis, negotiate project milestones, resolve simulated interpersonal friction, and tell unscripted stories.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#345BEF] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700"><strong>70% Speaking Ratio:</strong> Instructors act as conversational directors, keeping the spotlight on student speech.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#345BEF] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700"><strong>Asynchronous Diagnostics:</strong> Detailed acoustic notes and grammar redlines delivered in your private portal after class.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#345BEF] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700"><strong>CET & GMT Synchronized:</strong> Built around European working rhythms, from early morning sprints to evening salons.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#FAF8F5] p-12 sm:p-16 rounded-3xl border border-[#18243A]/10 max-w-4xl mx-auto space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#18243A]">
            Experience our pedagogy in person.
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Book a complimentary 30-minute diagnostic session with one of our senior academic coaches. No sales pressure, just honest linguistic evaluation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/book-trial"
              className="inline-flex items-center gap-2 bg-[#345BEF] hover:bg-[#2646c7] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md"
            >
              <span>Book Free Trial Lesson</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#18243A] px-6 py-3.5 rounded-xl font-semibold text-sm border border-[#18243A]/15"
            >
              <span>Explore Course Syllabi</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
