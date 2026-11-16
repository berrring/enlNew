import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Clock, 
  Users,
  FileText,
  Building
} from 'lucide-react';
import { getPricingPlans, getComparisonFeatures } from '../data/pricingPlans';
import { getFaqs } from '../data/faqs';
import { Accordion } from '../components/Accordion';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');
  const { language } = useLanguage();
  const t = getTranslations(language).pricingPage;
  const pricingPlans = getPricingPlans(language);
  const comparisonFeatures = getComparisonFeatures(language);
  const faqsData = getFaqs(language);

  const pricingFaqs = faqsData.filter((f) => 
    language === 'ru' 
      ? f.category === 'Пробный урок и оплата' || f.category === 'Trial & Pricing'
      : f.category === 'Trial & Pricing'
  );

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

      {/* Corporate Sponsorship & Reimbursement Highlight Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18243A] text-white p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#345BEF]/30 text-[#F4C96B] shrink-0 mt-0.5">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white">
                {t.sponsorshipTitle}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-0.5 max-w-2xl">
                {t.sponsorshipDesc}
              </p>
            </div>
          </div>
          <Link
            to="/contact?topic=corporate"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold shrink-0 transition-colors border border-white/20"
          >
            <FileText className="w-3.5 h-3.5 text-[#F4C96B]" />
            <span>{t.requestInvoiceBtn}</span>
          </Link>
        </div>
      </section>

      {/* Billing Cycle Toggle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#FAF8F5] border border-[#18243A]/10 shadow-xs">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-[#18243A] text-white shadow-sm'
                : 'text-[#516382] hover:text-[#18243A]'
            }`}
          >
            {t.monthlyTuition}
          </button>
          <button
            onClick={() => setBillingCycle('quarterly')}
            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              billingCycle === 'quarterly'
                ? 'bg-[#18243A] text-white shadow-sm'
                : 'text-[#516382] hover:text-[#18243A]'
            }`}
          >
            <span>{t.quarterlyCommitment}</span>
            <span className="bg-[#F4C96B] text-[#18243A] text-[10px] px-2 py-0.5 rounded-full font-bold">
              {t.savePercent}
            </span>
          </button>
        </div>
      </section>

      {/* 3 Pricing Plans Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const displayPrice =
              billingCycle === 'monthly'
                ? plan.monthlyPrice
                : plan.quarterlyPricePerMonth;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-white border-2 border-[#345BEF] shadow-2xl scale-[1.02] z-10'
                    : 'bg-white border border-[#18243A]/10 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="editorial-badge bg-[#345BEF] text-white shadow-md">
                      {t.mostChosenBadge}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#18243A]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price display */}
                  <div className="pt-2 pb-4 border-b border-[#18243A]/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-bold font-serif text-[#18243A]">
                        €{displayPrice}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ {language === 'ru' ? 'мес' : 'month'}</span>
                    </div>
                    <div className="text-xs text-[#345BEF] font-semibold mt-1">
                      {billingCycle === 'quarterly'
                        ? (language === 'ru' ? `Оплата за квартал (€${displayPrice * 3} за 3 мес)` : `Billed quarterly (€${displayPrice * 3} / 3 months)`)
                        : t.billedMonthly}
                    </div>
                  </div>

                  {/* Lessons & Format stats */}
                  <div className="bg-[#FAF8F5] p-4 rounded-2xl space-y-2 text-xs border border-[#18243A]/5">
                    <div className="flex items-center gap-2 font-semibold text-[#18243A]">
                      <Clock className="w-3.5 h-3.5 text-[#345BEF]" />
                      <span>{plan.lessonsPerMonth}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="w-3.5 h-3.5 text-[#345BEF]" />
                      <span>{plan.format}</span>
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#516382]">
                      {t.whatsIncluded}
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#2F5238] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8 mt-6 border-t border-[#18243A]/10 space-y-2">
                  <Link
                    to={`/book-trial?plan=${plan.id}`}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm transition-all text-center ${
                      plan.popular
                        ? 'bg-[#345BEF] hover:bg-[#2646c7] text-white shadow-md'
                        : 'bg-[#18243A] hover:bg-[#345BEF] text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-[11px] text-center text-slate-400">
                    {t.guaranteeNote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Plan Comparison Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="editorial-badge bg-[#FAF8F5] text-[#516382] border border-[#18243A]/10">
            {t.matrixBadge}
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#18243A] tracking-tight">
            {t.matrixTitle}
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-[#18243A]/10 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-[#18243A]/10">
                  <th className="py-4 px-6 font-serif font-bold text-[#18243A] w-2/5">
                    {t.featureHeader}
                  </th>
                  <th className="py-4 px-4 font-serif font-bold text-[#18243A] text-center w-1/5">
                    Essential
                  </th>
                  <th className="py-4 px-4 font-serif font-bold text-[#345BEF] text-center w-1/5 bg-[#EEF2FD]/50">
                    Plus (Hybrid)
                  </th>
                  <th className="py-4 px-4 font-serif font-bold text-[#18243A] text-center w-1/5">
                    Intensive Executive
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#18243A]/5">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 text-slate-800 font-medium">
                      <div className="font-semibold text-[#18243A]">{row.name}</div>
                      <div className="text-[11px] text-[#516382]">{row.category}</div>
                    </td>

                    {/* Essential column */}
                    <td className="py-4 px-4 text-center text-slate-600">
                      {typeof row.essential === 'boolean' ? (
                        row.essential ? (
                          <CheckCircle2 className="w-4 h-4 text-[#2F5238] mx-auto" />
                        ) : (
                          <XCircle className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-medium">{row.essential}</span>
                      )}
                    </td>

                    {/* Plus column */}
                    <td className="py-4 px-4 text-center bg-[#EEF2FD]/30 font-semibold text-[#18243A]">
                      {typeof row.plus === 'boolean' ? (
                        row.plus ? (
                          <CheckCircle2 className="w-4 h-4 text-[#345BEF] mx-auto" />
                        ) : (
                          <XCircle className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-[#345BEF]">{row.plus}</span>
                      )}
                    </td>

                    {/* Intensive column */}
                    <td className="py-4 px-4 text-center text-slate-600">
                      {typeof row.intensive === 'boolean' ? (
                        row.intensive ? (
                          <CheckCircle2 className="w-4 h-4 text-[#2F5238] mx-auto" />
                        ) : (
                          <XCircle className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-medium text-[#18243A]">{row.intensive}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="editorial-badge bg-[#FAF8F5] text-[#516382] border border-[#18243A]/10">
            {t.faqBadge}
          </span>
          <h3 className="font-serif text-3xl font-bold text-[#18243A]">
            {t.faqTitle}
          </h3>
        </div>

        <Accordion items={pricingFaqs} />
      </section>
    </div>
  );
};
