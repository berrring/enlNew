import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Course } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CourseCardProps {
  course: Course;
  featuredLayout?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, featuredLayout = false }) => {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  return (
    <article
      className={`group bg-white rounded-3xl border border-[#18243A]/10 overflow-hidden card-hover-lift flex flex-col justify-between ${
        featuredLayout ? 'lg:flex-row' : ''
      }`}
    >
      <div>
        {/* Course Image & Editorial Header */}
        <div className={`relative overflow-hidden bg-[#18243A] ${featuredLayout ? 'lg:w-2/5 min-h-[300px]' : 'h-60'}`}>
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18243A]/90 via-[#18243A]/20 to-black/30" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
            <span className="editorial-badge bg-[#FAF8F5]/95 text-[#18243A] backdrop-blur-md shadow-xs">
              {course.category}
            </span>
            {course.popular && (
              <span className="editorial-badge bg-[#F4C96B] text-[#18243A] shadow-xs">
                {isRu ? 'Популярно в ЕС' : 'Popular in EU'}
              </span>
            )}
          </div>

          {/* Level Overlay at Bottom of Image */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
            <span className="bg-[#18243A]/80 backdrop-blur-md px-3 py-1 rounded-full font-medium border border-white/10">
              {isRu ? 'Уровень: ' : 'Target Level: '}<strong className="text-[#F4C96B]">{course.level}</strong>
            </span>
            <span className="bg-[#345BEF] text-white px-3 py-1 rounded-full font-semibold text-[11px] shadow-xs">
              {course.duration}
            </span>
          </div>
        </div>

        {/* Course Content Details */}
        <div className="p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 text-xs text-[#516382] font-medium">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#345BEF]" />
              {course.format}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#345BEF]" />
              {course.hoursPerWeek}
            </span>
          </div>

          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18243A] group-hover:text-[#345BEF] transition-colors leading-snug">
              <Link to={`/courses/${course.slug}`}>
                {course.title}
              </Link>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mt-2">
              {course.shortDescription}
            </p>
          </div>

          {/* Key learning outcomes preview */}
          <div className="pt-3 space-y-2 border-t border-[#18243A]/5">
            {course.learningOutcomes.slice(0, 2).map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2F5238] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & CTA Footer */}
      <div className="p-6 sm:p-7 pt-0 border-t border-[#18243A]/5 mt-4">
        <div className="pt-4 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#516382] font-bold block">
              {isRu ? 'Стоимость обучения' : 'Tuition (Indicative)'}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold font-serif text-[#18243A]">
                €{course.indicativePrice}
              </span>
              <span className="text-xs text-[#516382]">/ {isRu ? 'мес' : 'month'}</span>
            </div>
          </div>

          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1.5 bg-[#FAF8F5] hover:bg-[#18243A] text-[#18243A] hover:text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border border-[#18243A]/10 hover:border-[#18243A] group/btn shadow-2xs"
          >
            <span>{isRu ? 'Смотреть курс' : 'View Syllabus'}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};
