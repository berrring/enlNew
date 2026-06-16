import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemoDisclaimerBanner } from './components/DemoDisclaimerBanner';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { TeachersPage } from './pages/TeachersPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookTrialPage } from './pages/BookTrialPage';
import { QuizPage } from './pages/QuizPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F8F6F1] text-[#18243A]">
        {/* Portfolio Concept Top Disclaimer Banner */}
        <DemoDisclaimerBanner />

        {/* Global Scroll Position Reset */}
        <ScrollToTop />

        {/* Main Sticky Header */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:slug" element={<CourseDetailsPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-trial" element={<BookTrialPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Academy Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
