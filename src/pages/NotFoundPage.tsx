import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#EEF2FD] text-[#345BEF] flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-8 h-8" />
        </div>
        <span className="editorial-badge bg-[#FAF8F5] text-[#516382] border border-[#18243A]/10">
          404 Error
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#18243A] tracking-tight">
          Page not found.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          The seminar, syllabus, or resource you are looking for may have been moved or updated.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#345BEF] hover:bg-[#2646c7] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-slate-200 text-[#18243A] px-6 py-3 rounded-xl font-semibold text-sm transition-colors border border-[#18243A]/10"
          >
            <span>Browse Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
