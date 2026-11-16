import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, Clock, Compass } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = getTranslations(language);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.courses, path: '/courses' },
    { name: t.nav.teachers, path: '/teachers' },
    { name: t.nav.pricing, path: '/pricing' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F6F1]/95 backdrop-blur-md shadow-xs border-b border-[#18243A]/10 py-3'
          : 'bg-[#F8F6F1] py-4 sm:py-5 border-b border-[#18243A]/8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#18243A] font-semibold bg-[#18243A]/6'
                      : 'text-[#516382] hover:text-[#18243A] hover:bg-[#18243A]/4'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Quick Level Quiz Pill */}
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                `ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                  isActive
                    ? 'bg-[#E7F0E8] text-[#2F5238] border-[#2F5238]/30 shadow-xs'
                    : 'bg-[#FAF8F5] text-[#18243A] border-[#18243A]/15 hover:border-[#345BEF] hover:text-[#345BEF]'
                }`
              }
            >
              <Compass className="w-3.5 h-3.5 text-[#345BEF]" />
              <span>{t.nav.testLevel}</span>
              <span className="bg-[#345BEF] text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold">5m</span>
            </NavLink>
          </nav>

          {/* Desktop Action CTAs & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center rounded-full bg-[#18243A]/6 p-0.5 border border-[#18243A]/10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-white text-[#18243A] shadow-2xs font-bold'
                    : 'text-[#516382] hover:text-[#18243A]'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ru')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'ru'
                    ? 'bg-white text-[#18243A] shadow-2xs font-bold'
                    : 'text-[#516382] hover:text-[#18243A]'
                }`}
                aria-label="Переключить на русский язык"
              >
                RU
              </button>
            </div>

            <div className="text-right pr-2 hidden xl:block">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#516382] block">
                {t.nav.timezoneSync}
              </span>
              <span className="text-xs font-semibold text-[#18243A] flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#345BEF]" /> {t.nav.timezones}
              </span>
            </div>

            <Link
              to="/book-trial"
              className="inline-flex items-center gap-2 bg-[#18243A] text-white hover:bg-[#345BEF] px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow group"
            >
              <span>{t.nav.bookTrial}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language Switcher */}
            <div className="flex items-center rounded-full bg-[#18243A]/6 p-0.5 border border-[#18243A]/10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-white text-[#18243A] shadow-2xs font-bold'
                    : 'text-[#516382]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded-full transition-all ${
                  language === 'ru'
                    ? 'bg-white text-[#18243A] shadow-2xs font-bold'
                    : 'text-[#516382]'
                }`}
              >
                RU
              </button>
            </div>

            <Link
              to="/book-trial"
              className="inline-flex items-center text-xs font-semibold bg-[#18243A] text-white px-2.5 py-1.5 rounded-lg"
            >
              {language === 'ru' ? 'Урок' : 'Trial'}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-[#18243A] hover:bg-[#18243A]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#345BEF]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay / Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] sm:top-[69px] bg-[#F8F6F1] border-b border-[#18243A]/10 shadow-xl transition-all duration-300 max-h-[calc(100vh-69px)] overflow-y-auto z-50">
          <div className="px-5 pt-4 pb-8 space-y-4">
            <div className="flex flex-col space-y-1 border-b border-[#18243A]/10 pb-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#18243A]/8 text-[#18243A] font-bold'
                        : 'text-[#516382] hover:bg-black/5 hover:text-[#18243A]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Level Test Card */}
            <Link
              to="/quiz"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#E7F0E8] border border-[#2F5238]/20 text-[#18243A]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#345BEF] shadow-2xs">
                  <Sparkles className="w-5 h-5 text-[#345BEF]" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.nav.testLevel}</div>
                  <div className="text-xs text-[#516382]">{t.nav.freeTestDesc}</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#2F5238]" />
            </Link>

            {/* Mobile CTAs */}
            <div className="pt-2 space-y-2.5">
              <Link
                to="/book-trial"
                className="w-full flex items-center justify-center gap-2 bg-[#345BEF] hover:bg-[#2646c7] text-white py-3.5 px-4 rounded-xl font-semibold text-base transition-colors shadow-sm"
              >
                <span>{t.nav.bookTrial}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-center gap-4 text-xs text-[#516382] pt-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#345BEF]" /> {t.nav.timezones}
                </span>
                <span>•</span>
                <span>{t.nav.smallCohorts}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};