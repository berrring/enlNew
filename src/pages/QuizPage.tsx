import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  RotateCcw, 
  Info, 
  Award, 
  Compass, 
  Share2, 
  Check 
} from 'lucide-react';
import { getQuizQuestions, getLevelResult } from '../data/quizQuestions';
import type { LevelResult } from '../data/quizQuestions';
import { useLanguage } from '../context/LanguageContext';
import { getTranslations } from '../data/translations';

export const QuizPage: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslations(language).quizPage;
  const quizQuestions = getQuizQuestions(language);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: number }>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const currentQuestion = quizQuestions[currentIndex] || quizQuestions[0];
  const totalQuestions = quizQuestions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleSelectOption = (levelScore: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: levelScore
    }));
    setShowExplanation(true);
  };

  // Keyboard shortcut listener (A, B, C, D)
  useEffect(() => {
    if (isCompleted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      const optionMap: { [key: string]: number } = { A: 0, B: 1, C: 2, D: 3 };
      if (key in optionMap) {
        const optionIndex = optionMap[key];
        if (currentQuestion && currentQuestion.options[optionIndex]) {
          handleSelectOption(currentQuestion.options[optionIndex].levelScore);
        }
      } else if (e.key === 'Enter' && selectedAnswers[currentQuestion.id] !== undefined) {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isCompleted, selectedAnswers, currentQuestion]);

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePrevious = () => {
    setShowExplanation(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const finishQuiz = () => {
    setIsCompleted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setShowExplanation(false);
  };

  const handleCopyResults = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Compute final score
  const totalScore = Object.values(selectedAnswers).reduce((sum, val) => sum + val, 0);
  const finalScore = Object.keys(selectedAnswers).length > 0 ? totalScore : 18;
  const resultData: LevelResult = getLevelResult(finalScore, language);

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

      {/* Main Quiz Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isCompleted ? (
          /* Active Question Card */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#18243A]/10 shadow-lg space-y-8">
            
            {/* Progress Header & Keyboard Tip */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#516382] font-semibold">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#345BEF]" />
                  <span>{t.questionOf} {currentIndex + 1} / {totalQuestions}</span>
                </span>
                <span className="hidden sm:inline text-slate-400 font-normal">
                  {t.tipKeyboard}
                </span>
                <span>{progressPercent}{t.completePercent}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#FAF8F5] overflow-hidden border border-[#18243A]/5">
                <div
                  className="h-full bg-[#345BEF] transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question Text & Real-World Context */}
            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#18243A] leading-snug">
                {currentQuestion.question}
              </h2>
              {currentQuestion.context && (
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#18243A]/5 text-sm sm:text-base font-serif italic text-slate-800">
                  {currentQuestion.context}
                </div>
              )}
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentQuestion.id] === opt.levelScore;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(opt.levelScore)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                      isSelected
                        ? 'border-[#345BEF] bg-[#EEF2FD] shadow-xs'
                        : 'border-[#18243A]/10 bg-white hover:border-[#18243A]/30 hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-[#345BEF] text-white'
                          : 'bg-[#FAF8F5] text-[#18243A] border border-[#18243A]/10'
                      }`}
                    >
                      {opt.label}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed pt-1">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Pedagogical Explanation Reveal */}
            {showExplanation && (
              <div className="p-4 rounded-2xl bg-[#E7F0E8] border border-[#2F5238]/20 text-xs text-[#2F5238] space-y-1 animate-fade-in">
                <span className="font-bold flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                  <Sparkles className="w-3.5 h-3.5 text-[#345BEF]" /> {t.linguisticRationale}
                </span>
                <p className="leading-relaxed">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="pt-6 border-t border-[#18243A]/10 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl border border-[#18243A]/10 text-xs sm:text-sm font-semibold text-[#18243A] hover:bg-[#FAF8F5] transition-colors disabled:opacity-30 disabled:pointer-events-none"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.previousBtn}</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion.id] === undefined}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#345BEF] hover:bg-[#2646c7] text-white text-xs sm:text-sm font-bold transition-all shadow-md disabled:opacity-40 disabled:pointer-events-none"
              >
                <span>{currentIndex === totalQuestions - 1 ? t.seeResultsBtn : t.nextBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Results Screen */
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#18243A]/10 shadow-xl space-y-10">
            {/* Top Score Banner */}
            <div className="text-center space-y-4">
              <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/30">
                {t.assessmentComplete}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight">
                {t.estimatedLevel} <span className="text-[#345BEF]">{resultData.cefr}</span>
              </h2>
              <p className="font-serif text-xl text-[#18243A] font-semibold">
                {resultData.levelName}
              </p>
              <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                {resultData.summary}
              </p>
            </div>

            {/* Strengths & Growth Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#18243A]/10">
              {/* Strengths */}
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#18243A]/5 space-y-3">
                <div className="flex items-center gap-2 text-[#2F5238] font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#2F5238]" />
                  <span>{t.competenciesTitle}</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {resultData.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#345BEF] font-bold">•</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Growth Areas */}
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#18243A]/5 space-y-3">
                <div className="flex items-center gap-2 text-[#345BEF] font-bold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#345BEF]" />
                  <span>{t.targetsTitle}</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {resultData.growthAreas.map((ga, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#F4C96B] font-bold">•</span>
                      <span>{ga}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Suggested Course Box */}
            <div className="bg-[#18243A] text-white p-8 rounded-3xl border border-white/10 space-y-5">
              <span className="editorial-badge bg-[#F4C96B] text-[#18243A]">
                {t.recommendedBadge}
              </span>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {resultData.recommendedCourseTitle}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {language === 'ru'
                    ? 'Судя по вашим ответам, эта учебная программа идеально сбалансирована, чтобы раскрыть ваш потенциал, устранить грамматическую скованность и повысить авторитет на международных встречах.'
                    : 'Based on your responses, this cohort is calibrated to challenge your vocabulary, eradicate subtle grammatical hesitation, and elevate your international presence.'}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={`/courses/${resultData.recommendedCourseSlug}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#345BEF] hover:bg-[#2646c7] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md"
                >
                  <span>{t.exploreSyllabusBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to={`/book-trial?course=${resultData.recommendedCourseSlug}&level=${resultData.cefr}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all border border-white/20"
                >
                  <span>{t.bookTrialLevelBtn}</span>
                </Link>
              </div>
            </div>

            {/* Disclaimers & Retake */}
            <div className="pt-2 border-t border-[#18243A]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#345BEF] shrink-0" />
                <span>
                  {t.noteText}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyResults}
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#345BEF] font-semibold"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? t.copiedBtn : t.shareBtn}</span>
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-1.5 text-[#18243A] hover:text-[#345BEF] font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> {t.retakeBtn}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
