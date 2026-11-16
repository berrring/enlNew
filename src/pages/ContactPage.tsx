import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  Info, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  inquiryType: string;
  message: string;
}

interface ErrorsState {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslations(language).contactPage;

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    inquiryType: language === 'ru' ? 'Общие вопросы поступления' : 'General Admissions',
    message: ''
  });

  const [errors, setErrors] = useState<ErrorsState>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: ErrorsState = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'ru' ? 'Пожалуйста, введите ваше имя.' : 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = language === 'ru' ? 'Имя должно содержать минимум 2 символа.' : 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'ru' ? 'Укажите email адрес.' : 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'ru' ? 'Неверный формат email (например, name@domain.com).' : 'Please provide a valid email format (e.g., name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = language === 'ru' ? 'Пожалуйста, укажите тему обращения.' : 'Please provide an inquiry subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'ru' ? 'Пожалуйста, напишите ваше сообщение.' : 'Please write your message or question.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = language === 'ru' ? 'Минимум 15 символов, чтобы мы могли понять ваш запрос.' : 'Please provide at least 15 characters so we can understand your goal.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      inquiryType: language === 'ru' ? 'Общие вопросы поступления' : 'General Admissions',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

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

      {/* Main Grid: Form + European Offices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#18243A]/10 shadow-sm space-y-6">
              
              {/* Demo Mode Notice Banner */}
              <div className="bg-[#FAF8F5] border border-[#18243A]/10 p-4 rounded-2xl flex items-start gap-3 text-xs text-[#516382]">
                <Info className="w-4 h-4 text-[#345BEF] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#18243A]">{t.demoNoticeTitle}:</strong> {t.demoNoticeDesc}
                </div>
              </div>

              {submitted ? (
                /* Success Confirmation State */
                <div className="py-10 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#E7F0E8] text-[#2F5238] flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238]">
                      {t.successTitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18243A]">
                      {language === 'ru' ? `Спасибо, ${formData.fullName}!` : `Thank you, ${formData.fullName}!`}
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      {t.successDesc}
                    </p>
                  </div>

                  <div className="bg-[#FAF8F5] p-5 rounded-2xl text-left text-xs text-slate-700 max-w-md mx-auto space-y-1.5 border border-[#18243A]/5">
                    <div><strong>{t.simulatedDetailsTitle}:</strong></div>
                    <div>Email: {formData.email}</div>
                    <div>{t.topicLabel}: {formData.inquiryType}</div>
                    <div>{t.estResponse}</div>
                  </div>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-xl bg-[#18243A] hover:bg-[#345BEF] text-white text-xs font-semibold transition-colors"
                    >
                      {t.sendAnotherBtn}
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#18243A]">
                      {t.fullNameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Marcella Rossi"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#18243A] placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#18243A]/10 focus:border-[#345BEF] focus:ring-1 focus:ring-[#345BEF]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#18243A]">
                      {t.emailLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. m.rossi@company.de"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#18243A] placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#18243A]/10 focus:border-[#345BEF] focus:ring-1 focus:ring-[#345BEF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 font-medium">{errors.email}</p>
                    )}
                  </div>

                  {/* Inquiry Type Select & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="inquiryType" className="block text-xs font-bold uppercase tracking-wider text-[#18243A]">
                        {t.topicLabel}
                      </label>
                      <select
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#18243A]/10 text-sm text-[#18243A] focus:outline-none focus:border-[#345BEF] focus:ring-1 focus:ring-[#345BEF]"
                      >
                        {language === 'ru' ? (
                          <>
                            <option value="Общие вопросы поступления">Общие вопросы поступления</option>
                            <option value="Корпоративное обучение">Корпоративное обучение и компенсация</option>
                            <option value="Индивидуальный коучинг">Индивидуальный коучинг для руководителей</option>
                            <option value="Подготовка к IELTS">Подготовка к IELTS Academic</option>
                            <option value="Расписание и таймзоны CET">Расписание и таймзоны CET / GMT</option>
                          </>
                        ) : (
                          <>
                            <option value="General Admissions">General Admissions</option>
                            <option value="Corporate / Employer Sponsorship">Corporate / Employer Sponsorship</option>
                            <option value="Executive Coaching">Executive 1-on-1 Coaching</option>
                            <option value="IELTS Exam Preparation">IELTS Exam Preparation</option>
                            <option value="Timetable & CET Scheduling">Timetable & CET Scheduling</option>
                          </>
                        )}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#18243A]">
                        {t.subjectLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Question regarding Business Cohort"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#18243A] placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.subject ? 'border-rose-400 bg-rose-50/20' : 'border-[#18243A]/10 focus:border-[#345BEF] focus:ring-1 focus:ring-[#345BEF]'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-rose-500 font-medium">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#18243A]">
                      {t.messageLabel} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === 'ru' ? 'Расскажите о вашем текущем уровне, целях обучения или удобном графике...' : 'Tell us about your current English level, learning goals, or preferred schedule...'}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#18243A] placeholder-slate-400 focus:outline-none transition-colors resize-y ${
                        errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-[#18243A]/10 focus:border-[#345BEF] focus:ring-1 focus:ring-[#345BEF]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#345BEF] hover:bg-[#2646c7] text-white font-bold text-sm transition-all shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>{t.simulatingBtn}</span>
                      ) : (
                        <>
                          <span>{t.submitBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Office Details & European Coverage */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#18243A] text-white p-8 rounded-3xl border border-white/10 space-y-6">
              <span className="editorial-badge bg-[#F4C96B] text-[#18243A]">
                {t.centersBadge}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {t.centersTitle}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.centersDesc}
              </p>

              <div className="space-y-4 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F4C96B] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">{t.simHeadquarters}</div>
                    <div className="text-slate-300 mt-0.5">Herengracht 450, 1017 CA Amsterdam, Netherlands</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#345BEF] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">{t.admissionsOffice}</div>
                    <div className="text-slate-300 mt-0.5">admissions@fluentbridge-demo.eu</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#345BEF] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">{t.academicDesk}</div>
                    <div className="text-slate-300 mt-0.5">+31 (0) 20 894 3000 (Mon–Fri CET)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#E7F0E8] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">{t.hours}</div>
                    <div className="text-slate-300 mt-0.5">08:00 – 21:00 CET / 07:00 – 20:00 GMT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trial Lesson Quick Box */}
            <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#18243A]/10 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#345BEF]" />
                <h4 className="font-serif font-bold text-base text-[#18243A]">
                  {language === 'ru' ? 'Ищете запись на пробный урок?' : 'Looking for a trial lesson instead?'}
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'ru'
                  ? 'Запишитесь на 30-минутный диагностический урок напрямую с академическим наставником.'
                  : 'Skip the generic inquiry and book a 1-on-1 diagnostic lesson directly into an academic coach\'s schedule.'}
              </p>
              <Link
                to="/book-trial"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#345BEF] hover:underline pt-1"
              >
                <span>{language === 'ru' ? 'Перейти к бронированию урока' : 'Go to Trial Lesson Booking'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
