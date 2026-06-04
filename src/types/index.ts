export type EnglishLevel = 'A1 Beginner' | 'A2 Elementary' | 'B1 Intermediate' | 'B2 Upper-Intermediate' | 'C1 Advanced' | 'C2 Mastery';

export type CourseFormat = '1-on-1 Mentorship' | 'Small Cohort (3-5)' | 'Semi-Private (2 students)' | 'Hybrid Workshop';

export interface CurriculumModule {
  week: string;
  title: string;
  description: string;
  keyOutcomes: string[];
}

export interface ScheduleOption {
  days: string;
  timeCET: string;
  format: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'General' | 'Conversation' | 'Business' | 'Exams' | 'Specialized';
  level: EnglishLevel | string;
  duration: string;
  hoursPerWeek: string;
  format: CourseFormat;
  indicativePrice: number; // EUR per month
  popular?: boolean;
  featured?: boolean;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string[];
  learningOutcomes: string[];
  curriculum: CurriculumModule[];
  schedules: ScheduleOption[];
  methodology: string;
  imageUrl: string;
  accentColor: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  location: string;
  accent: string;
  avatarUrl: string;
  experienceYears: number;
  qualifications: string[];
  specialties: string[];
  bio: string;
  teachingStyle: string;
  favoriteQuote: string;
  featured?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  quarterlyPricePerMonth: number;
  lessonsPerMonth: string;
  lessonDuration: string;
  format: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
  ctaText: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  context?: string;
  options: {
    label: string;
    text: string;
    levelScore: number; // 1 (A1/A2), 2 (B1), 3 (B2), 4 (C1/C2)
  }[];
  explanation: string;
}
