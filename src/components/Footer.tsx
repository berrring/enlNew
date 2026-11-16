import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Globe2, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { language } = useLanguage();
  const t = getTranslations(language);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#18243A] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & European Focus Bar */}
        <div className="bg-[#233452] rounded-3xl p-8 sm:p-10 mb-16 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="editorial-badge bg-[#F4C96B]/20 text-[#F4C96B] border border-[#F4C96B]/30 mb-3">
              {t.footer.dispatchBadge}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight mb-2">
              {t.footer.dispatchTitle}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.footer.dispatchDesc}
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="bg-[#E7F0E8] text-[#18243A] p-4 rounded-2xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2F5238] shrink-0" />
                <p className="text-sm font-medium">
                  {t.footer.subscribed}
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={t.footer.emailPlaceholder}
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#345BEF]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-[#345BEF] hover:bg-[#2646c7] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>{t.footer.subscribe}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  {t.footer.subtext}
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm pt-2">
              {t.footer.aboutText}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Globe2 className="w-4 h-4 text-[#F4C96B]" />
                <span>{t.footer.cetSync}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-[#E7F0E8]" />
                <span>{t.footer.cefrAligned}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-white text-base font-semibold tracking-wide">
              {t.footer.coursesHeading}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses/general-english" className="hover:text-white transition-colors">
                  {language === 'ru' ? 'Общий английский (General English)' : 'General English'}
                </Link>
              </li>
              <li>
                <Link to="/courses/conversational-english" className="hover:text-white transition-colors">
                  {language === 'ru' ? 'Разговорный английский (Fluency)' : 'Conversational English'}
                </Link>
              </li>
              <li>
                <Link to="/courses/business-english" className="hover:text-white transition-colors">
                  {language === 'ru' ? 'Деловой английский (Business & Executive)' : 'Business English & Executive'}
                </Link>
              </li>
              <li>
                <Link to="/courses/ielts-preparation" className="hover:text-white transition-colors">
                  {language === 'ru' ? 'Подготовка к IELTS Academic' : 'IELTS Academic Masterclass'}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-[#345BEF] hover:underline font-medium inline-flex items-center gap-1 pt-1">
                  {t.footer.viewAllCourses} <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Academy Info */}
          <div className="space-y-3">
            <h4 className="font-serif text-white text-base font-semibold tracking-wide">
              {t.footer.academyHeading}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t.footer.ourStory}
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="hover:text-white transition-colors">
                  {t.footer.facultyDir}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  {t.footer.tuitionPlans}
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-[#F4C96B] hover:underline transition-colors flex items-center gap-1">
                  <span>{t.footer.levelQuiz}</span>
                  <span className="text-[10px] bg-[#F4C96B]/20 text-[#F4C96B] px-1.5 py-0.2 rounded font-semibold">{t.footer.freeBadge}</span>
                </Link>
              </li>
              <li>
                <Link to="/book-trial" className="hover:text-white transition-colors">
                  {t.footer.bookTrialLesson}
                </Link>
              </li>
            </ul>
          </div>

          {/* European Office Support */}
          <div className="space-y-3">
            <h4 className="font-serif text-white text-base font-semibold tracking-wide">
              {t.footer.supportHeading}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4C96B] shrink-0 mt-0.5" />
                <span>{t.footer.headOffice}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#345BEF] shrink-0" />
                <span>admissions@fluentbridge-demo.eu</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#345BEF] shrink-0" />
                <span>+31 (0) 20 894 3000 ({t.footer.operatingHours})</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Portfolio Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
            <span className="hidden sm:inline">•</span>
            <span>{t.footer.tagline}</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/contact" className="hover:text-white transition-colors">
              {language === 'ru' ? 'Контакты и консультация' : 'Contact & Inquiry'}
            </Link>
            <span>•</span>
            <span className="text-slate-500">
              {t.footer.builtWith}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};