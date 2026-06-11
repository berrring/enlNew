import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  RotateCcw,
  Clock,
  Users
} from 'lucide-react';
import { coursesData } from '../data/courses';
import { CourseCard } from '../components/CourseCard';

export const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedFormat, setSelectedFormat] = useState<string>('All');

  const categories = ['All', 'General', 'Conversation', 'Business', 'Exams', 'Specialized'];
  const levels = ['All', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const formats = ['All', 'Small Cohort (3-5)', '1-on-1 Mentorship', 'Semi-Private (2 students)'];

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      // Search
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      // Category
      const matchesCategory =
        selectedCategory === 'All' || course.category === selectedCategory;

      // Level
      const matchesLevel =
        selectedLevel === 'All' || course.level.includes(selectedLevel);

      // Format
      const matchesFormat =
        selectedFormat === 'All' || course.format === selectedFormat;

      return matchesSearch && matchesCategory && matchesLevel && matchesFormat;
    });
  }, [searchQuery, selectedCategory, selectedLevel, selectedFormat]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLevel('All');
    setSelectedFormat('All');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'All' ||
    selectedLevel !== 'All' ||
    selectedFormat !== 'All';

  // Find a featured course to highlight editorially
  const featuredCourse = coursesData.find((c) => c.id === 'business-english') || coursesData[0];

  return (
    <div className="pb-24 space-y-16">
      {/* Editorial Header */}
      <section className="bg-[#FAF8F5] border-b border-[#18243A]/10 py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="editorial-badge bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/20">
              Academic Syllabi & Programs
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#18243A] tracking-tight">
              Curriculum designed for real life across Europe.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
              Every course is structured for small cohorts (max 5) or intensive 1-on-1 mentorship, with hours tailored around European working rhythms.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Course Spotlight Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18243A] rounded-3xl p-8 sm:p-12 text-white border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="editorial-badge bg-[#F4C96B] text-[#18243A]">
                Spotlight Program
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Level: {featuredCourse.level} • {featuredCourse.format}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {featuredCourse.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {featuredCourse.tagline} {featuredCourse.shortDescription}
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-300 pt-2">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F4C96B]" /> {featuredCourse.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#F4C96B]" /> {featuredCourse.hoursPerWeek}
              </span>
              <span className="font-bold text-white text-sm">
                €{featuredCourse.indicativePrice} <span className="font-normal text-xs text-slate-400">/ mo</span>
              </span>
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to={`/courses/${featuredCourse.slug}`}
                className="inline-flex items-center gap-2 bg-[#345BEF] hover:bg-[#2646c7] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                <span>View Full Syllabus & Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/book-trial"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors border border-white/20"
              >
                <span>Book Diagnostic Trial</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] border-2 border-white/20 shadow-2xl relative">
              <img
                src={featuredCourse.imageUrl}
                alt={featuredCourse.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18243A]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 text-[#18243A] p-3 rounded-xl backdrop-blur-sm text-xs font-medium">
                🎯 Top rated among tech leads in Berlin, Amsterdam, and Stockholm.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter Toolbar & Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Interactive Filter Control Bar */}
        <div className="bg-white p-6 rounded-3xl border border-[#18243A]/10 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, skills, or keywords (e.g. IELTS, Business, Fluency)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#18243A]/10 text-sm text-[#18243A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#345BEF]"
              />
            </div>

            {/* Quick Level Quiz Pill */}
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 bg-[#E7F0E8] text-[#2F5238] border border-[#2F5238]/30 px-4 py-3 rounded-xl text-xs font-semibold hover:bg-[#d8e6da] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#345BEF]" />
              <span>Not sure what level fits you? Take our CEFR quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Filter Pills Rows */}
          <div className="space-y-4 pt-4 border-t border-[#18243A]/5">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-[#516382] mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#345BEF]" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#18243A] text-white shadow-xs'
                      : 'bg-[#FAF8F5] text-[#18243A] hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Level Filter */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-[#516382] mr-2">Target Level:</span>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                    selectedLevel === lvl
                      ? 'bg-[#345BEF] text-white shadow-xs'
                      : 'bg-[#FAF8F5] text-[#18243A] hover:bg-slate-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Format Filter & Reset Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-[#516382] mr-2">Format:</span>
                {formats.map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                      selectedFormat === fmt
                        ? 'bg-[#2F5238] text-white shadow-xs'
                        : 'bg-[#FAF8F5] text-[#18243A] hover:bg-slate-200'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 text-[#345BEF] hover:underline font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset all filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between text-sm text-[#516382] px-2">
          <span>
            Showing <strong className="text-[#18243A]">{filteredCourses.length}</strong> available programs
          </span>
          <span className="text-xs">All syllabi aligned with CEFR standards</span>
        </div>

        {/* Courses Catalog Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#18243A]/10 space-y-4">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#18243A]">
              No courses matched your filter criteria
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Try broadening your category or level criteria, or reset your filters to see all academic courses.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#18243A] text-white text-sm font-semibold hover:bg-[#345BEF] transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Level Placement CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E7F0E8] border border-[#2F5238]/20 rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <span className="editorial-badge bg-white text-[#2F5238] border border-[#2F5238]/30">
              Interactive Placement
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18243A]">
              Still wondering which course aligns with your current level?
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Take our 8-question placement diagnostic. It tests vocabulary nuance, business connectors, and grammar to suggest your optimal starting course.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 bg-[#18243A] hover:bg-[#345BEF] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm"
            >
              <span>Take Level Quiz (5 min)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
