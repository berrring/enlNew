import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, BookOpen, Clock } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', path: '/courses' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F6F1]/95 backdrop-blur-md shadow-sm border-b border-[#18243A]/10 py-3.5'
          : 'bg-[#F8F6F1] py-5 border-b border-[#18243A]/5'
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
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#345BEF] bg-[#345BEF]/8 font-semibold'
                      : 'text-[#18243A] hover:text-[#345BEF] hover:bg-[#18243A]/4'
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
                `ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                  isActive
                    ? 'bg-[#E7F0E8] text-[#2F5238] border-[#2F5238]/30 shadow-xs'
                    : 'bg-[#E7F0E8]/70 text-[#2F5238] border-[#2F5238]/20 hover:bg-[#E7F0E8] hover:border-[#2F5238]/40'
                }`
              }
            >
              <Sparkles className="w-3.5 h-3.5 text-[#345BEF]" />
              <span>Test Your Level</span>
              <span className="bg-[#345BEF] text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold">5m</span>
            </NavLink>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/book-trial"
              className="inline-flex items-center gap-2 bg-[#18243A] text-white hover:bg-[#345BEF] px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow group"
            >
              <span>Book a Free Trial</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/book-trial"
              className="inline-flex items-center text-xs font-semibold bg-[#18243A] text-white px-3 py-1.5 rounded-lg sm:hidden"
            >
              Free Trial
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
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#F8F6F1] border-b border-[#18243A]/10 shadow-xl transition-all duration-300 max-h-[calc(100vh-65px)] overflow-y-auto">
          <div className="px-5 pt-4 pb-8 space-y-4">
            <div className="flex flex-col space-y-1 border-b border-[#18243A]/10 pb-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#345BEF]/10 text-[#345BEF] font-semibold'
                        : 'text-[#18243A] hover:bg-black/5'
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
              className="flex items-center justify-between p-4 rounded-xl bg-[#E7F0E8] border border-[#2F5238]/20 text-[#18243A]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#345BEF] shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Free English Level Quiz</div>
                  <div className="text-xs text-[#516382]">Accurate CEFR estimate in 5 minutes</div>
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
                <span>Book a Free Trial Lesson</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-center gap-4 text-xs text-[#516382] pt-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#345BEF]" /> CET Timezones
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#345BEF]" /> Small Cohorts
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
