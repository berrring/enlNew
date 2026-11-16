import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslations(language).aboutPage;

  return (
    <div className="pb-24 space-y-20">
      {/* 1. Editorial Storytelling Header */}
      <section className="bg-[#FAF8F5] border-b border-[#18243A]/10 py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/20">
              {t.badge}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#18243A] tracking-tight leading-[1.08]">
              {t.title}
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-light">
              {t.desc}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Visual Story Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="editorial-badge bg-[#FAF8F5] text-[#516382] border border-[#18243A]/10">
              {t.originBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#18243A] tracking-tight">
              {t.originTitle}
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              <p className="editorial-dropcap">
                {t.p1}
              </p>
              <p>
                {t.p2}
              </p>
              <p>
                {t.p3}
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
                    "{t.quote}"
                  </div>
                  <div className="text-xs text-[#F4C96B] font-semibold">
                    {t.quoteAuthor}
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
              {t.valuesBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {t.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#345BEF] text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-white">{t.val1Title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.val1Desc}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F4C96B] text-[#18243A] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-white">{t.val2Title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.val2Desc}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E7F0E8] text-[#2F5238] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-white">{t.val3Title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.val3Desc}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-7 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#18243A] flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="font-serif text-xl font-bold text-white">{t.val4Title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.val4Desc}
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
              {t.creedBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#18243A] tracking-tight">
              {t.creedTitle}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {t.creedDesc}
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#345BEF] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700"><strong>{t.creedPoint1Title}:</strong> {t.creedPoint1Desc}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#345BEF] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700"><strong>{t.creedPoint2Title}:</strong> {t.creedPoint2Desc}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#345BEF] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700"><strong>{t.creedPoint3Title}:</strong> {t.creedPoint3Desc}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#FAF8F5] p-12 sm:p-16 rounded-3xl border border-[#18243A]/10 max-w-4xl mx-auto space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#18243A]">
            {t.ctaTitle}
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            {t.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/book-trial"
              className="inline-flex items-center gap-2 bg-[#345BEF] hover:bg-[#2646c7] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md"
            >
              <span>{t.ctaBookBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#18243A] px-6 py-3.5 rounded-xl font-semibold text-sm border border-[#18243A]/15"
            >
              <span>{t.ctaBrowseBtn}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};