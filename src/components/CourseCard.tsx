import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  featuredLayout?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, featuredLayout = false }) => {
  return (
    <div
      className={`group bg-white rounded-3xl border border-[#18243A]/10 overflow-hidden hover:shadow-xl hover:border-[#345BEF]/40 transition-all duration-300 flex flex-col ${
        featuredLayout ? 'lg:flex-row' : ''
      }`}
    >
      {/* Course Image & Badges */}
      <div className={`relative overflow-hidden bg-[#18243A] ${featuredLayout ? 'lg:w-2/5 min-h-[280px]' : 'h-56'}`}>
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18243A]/80 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="editorial-badge bg-[#FAF8F5]/90 text-[#18243A] backdrop-blur-md shadow-xs">
            {course.category}
          </span>
          {course.popular && (
            <span className="editorial-badge bg-[#F4C96B] text-[#18243A] shadow-xs">
              Popular in EU
            </span>
          )}
        </div>

        {/* Level Overlay at Bottom of Image */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
          <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full font-medium">
            Level: {course.level}
          </span>
          <span className="bg-[#345BEF] text-white px-2.5 py-1 rounded-full font-semibold text-[11px]">
            {course.duration}
          </span>
        </div>
      </div>

      {/* Course Content Details */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-[#516382]">
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

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18243A] group-hover:text-[#345BEF] transition-colors leading-snug">
            <Link to={`/courses/${course.slug}`}>
              {course.title}
            </Link>
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
            {course.shortDescription}
          </p>

          {/* Quick learning outcomes preview */}
          <div className="pt-2 space-y-1.5 border-t border-[#18243A]/5">
            {course.learningOutcomes.slice(0, 2).map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2F5238] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Footer */}
        <div className="pt-6 mt-6 border-t border-[#18243A]/10 flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#516382] font-semibold block">
              Tuition
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#18243A]">
                €{course.indicativePrice}
              </span>
              <span className="text-xs text-[#516382]">/ month</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/courses/${course.slug}`}
              className="inline-flex items-center gap-1.5 bg-[#FAF8F5] hover:bg-[#345BEF] text-[#18243A] hover:text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border border-[#18243A]/10 hover:border-[#345BEF] group/btn"
            >
              <span>Explore Syllabus</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
