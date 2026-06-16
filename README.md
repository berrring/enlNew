# FluentBridge — Premium English Language Academy

> **"English for real life."**  
> A modern, editorial web application for **FluentBridge**, a fictional premium online English language academy targeting university students, adult learners, expats, and working professionals across Europe.

---

## 1. Project Overview

FluentBridge was designed to demonstrate high-end commercial web design and frontend engineering capabilities. Rejecting generic SaaS card templates and bland corporate aesthetics, the website embraces a **Modern Editorial Education** style inspired by prestigious European publishing houses, academic salons, and contemporary cultural institutions.

### Target Audience & Brand Characteristics
- **Audience:** European adults, Erasmus & university students, tech leads, researchers, and professionals preparing for international careers or Cambridge/IELTS exams.
- **Language:** English only.
- **Regional Alignment:** Central European Time (CET) & Western European Time (GMT) timetables, European false-friends linguistics, and CEFR-aligned learning milestones.
- **Brand Palette:**
  - **Warm Ivory:** `#F8F6F1` (Paper background)
  - **Deep Navy:** `#18243A` (Editorial authority & depth)
  - **Cobalt Blue:** `#345BEF` (Primary action accent)
  - **Muted Sage:** `#E7F0E8` (Pedagogical calmness & badges)
  - **Soft Yellow:** `#F4C96B` (Illumination & highlighting)
- **Typography:**
  - **Headline Display Font:** *Fraunces* (Google Fonts serif variable with optical sizing)
  - **Body Text:** *Plus Jakarta Sans* (High legibility modern sans-serif)

---

## 2. Implemented Pages & Core Features

### 🌟 Page 1 — Homepage (`/`)
- **Editorial Hero Section:** Asymmetric layout featuring bold typography *"English that takes you further"*, European schedule badges, social proof metrics (Max 5 per cohort, 70%+ speaking ratio, CEFR aligned), and primary/secondary CTAs.
- **Why FluentBridge:** 4 numbered pedagogical pillars (Flexible online learning, Experienced educators, Practical communication, Personalized approach).
- **Popular Learning Programs:** Spotlight showcase of 4 core courses (General English, Conversational English, Business English, IELTS Preparation).
- **How It Works (Student Journey):** 4-step structured roadmap (Choose course → Find learning level → Start learning → Track progress).
- **Interactive Behind-the-Scenes Showcase:** Dynamic tabs exploring live virtual salons, diagnostic mentorship, and simulated reality.
- **Faculty Spotlight:** Featured sample profiles of Cambridge/Oxford accredited educators.
- **Interactive FAQ Accordion:** Clean accordion with category tags and animated toggles.
- **Final Editorial Call-to-Action:** High-contrast invitation to book a free diagnostic trial or take the 5-minute quiz.

### 📚 Page 2 — Course Catalog (`/courses`)
- **Full Catalog Grid:** Comprehensive syllabi for General English, Conversational English, Business English, IELTS Preparation, Academic Writing, and Accent Clarity.
- **Working Interactive Filters:**
  - Real-time instant keyword search.
  - Category selector (*All, General, Conversation, Business, Exams, Specialized*).
  - Target English Level filter (*All, A2, B1, B2, C1, C2*).
  - Learning Format filter (*Small Cohort, 1-on-1 Mentorship, Semi-Private*).
  - Reset filters button with active counter.
- **Spotlight Banner:** Editorial highlight card showcasing the Business English program with instant schedule info.

### 🔍 Page 3 — Course Details (`/courses/:slug`)
- Dynamic routing for each syllabus with breadcrumbs.
- Full academic syllabus: Target audience, key competencies, 4-module weekly curriculum breakdown, pedagogical methodology, sample CET schedules, and sticky enrollment sidebar.
- Seamless booking trigger passing course parameters directly into the trial booking wizard.

### 🎓 Page 4 — Faculty Directory (`/teachers`)
- Sample educator profiles with portraits, locations (Oxford, London, Dublin, Edinburgh, Amsterdam, Berlin), native accents, and years of experience.
- Detailed credentials (DELTA, CELTA, MA Applied Linguistics, former examiners).
- Specialty filtering tags.
- Prominent fictional portfolio demonstration disclaimer.

### 💳 Page 5 — Tuition & Pricing (`/pricing`)
- **Three Sample Learning Plans:** *Essential* (Cohort), *Plus* (Hybrid Cohort + 1-on-1 Mentorship), *Intensive* (Executive 1-on-1).
- **Interactive Billing Cycle Toggle:** Switch between Monthly and Quarterly commitments (with automatic 15% discount calculation).
- **Comprehensive Feature Comparison Table:** Detailed side-by-side evaluation matrix across class structure, pedagogy, flexibility, credentials, and digital tools.
- Corporate sponsorship & EU VAT reimbursement FAQ accordion.

### 🏛️ Page 6 — About Us (`/about`)
- Storytelling-driven narrative explaining the academy's origins and mission to liberate European multilingual voices.
- 4 Core Academy Values: *Respect for Heritage, The Lexical Reality, Intimacy & Safety, Pragmatic Utility*.
- 70% spoken interaction ratio methodology.

### 📬 Page 7 — Contact & Inquiries (`/contact`)
- Contact form with client-side validation (Full Name, Email format, Subject, Inquiry Topic, Message length).
- Realistic demo submission confirmation state showing simulated dispatch details.
- European headquarters contact info, CET operating hours, and email/phone mock details.

### 📅 Page 8 — Book a Free Trial (`/book-trial`)
- 4-step trial booking wizard:
  1. Personal contact information.
  2. Course of interest (pre-populated via query parameter) and estimated proficiency level.
  3. Preferred date picker (with minimum date restriction) and CET time window.
  4. Personal challenges and goals.
- Strict client-side validation.
- Interactive demo booking confirmation card with celebratory confetti animation (`canvas-confetti`).

### 🧠 Page 9 — English Level Quiz (`/quiz`)
- 8 curated CEFR questions testing subtle connectors, litotes, business interruption etiquette, and conditionals.
- Real-time progress bar and question numbering.
- Previous/Next navigation with option selection validation.
- Educational rationale explanation reveal for each question.
- CEFR Level Result card (A2/B1, B1/B2, B2/C1, or C1/C2) with demonstrated strengths, growth areas, recommended course, and trial lesson booking shortcut.

---

## 3. Technology Stack & Architecture

- **React 19 & TypeScript:** Strict type safety, clean component hierarchy, and zero `any` types.
- **Vite 8:** Lightning-fast HMR and optimized production bundling.
- **Tailwind CSS v4 (`@tailwindcss/vite`):** Modern CSS engine with custom design tokens (`--color-ivory`, `--color-navy`, `--color-cobalt`, `--font-serif`, etc.).
- **React Router 7 (`react-router-dom`):** Declarative client-side routing, query parameter handling, and automatic scroll-to-top on route transition.
- **Lucide React:** Modern, lightweight icon system.
- **Canvas Confetti:** Tasteful celebratory micro-interaction on quiz and booking completion.

---

## 4. Getting Started

### Prerequisites
- **Node.js:** v18.0.0 or later (v20+ recommended)
- **npm:** v9.0.0 or later

### Installation
1. Clone or extract the project repository:
   ```bash
   cd FluentBridge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To launch the development server with live reload:
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### Production Build & Preview
To run the TypeScript compiler and build the optimized production assets:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```
Open your browser at `http://localhost:4173/`.

---

## 5. Project Structure

```
FluentBridge/
├── public/
│   └── favicon.svg           # Custom FluentBridge architectural bridge icon
├── src/
│   ├── assets/               # Static assets
│   ├── components/           # Reusable UI components
│   │   ├── Accordion.tsx     # Animated FAQ accordion
│   │   ├── CourseCard.tsx    # Editorial course card with badges & pricing
│   │   ├── DemoDisclaimerBanner.tsx # Portfolio showcase top banner
│   │   ├── Footer.tsx        # European academy footer with newsletter demo
│   │   ├── Logo.tsx          # Custom SVG geometric logo & wordmark
│   │   ├── Navbar.tsx        # Sticky header with mobile drawer
│   │   ├── ScrollToTop.tsx   # Global scroll restoration on route change
│   │   └── TeacherCard.tsx   # Faculty portrait card with credentials
│   ├── data/                 # Realistic dataset
│   │   ├── courses.ts        # 6 detailed course syllabi & modules
│   │   ├── faqs.ts           # Categorized FAQ questions & answers
│   │   ├── pricingPlans.ts   # 3 pricing tiers & comparison matrix
│   │   ├── quizQuestions.ts  # 8 calibrated CEFR questions & scoring
│   │   └── teachers.ts       # Fictional European educator profiles
│   ├── pages/                # Page views
│   │   ├── AboutPage.tsx     # Academy story & pedagogical manifesto
│   │   ├── BookTrialPage.tsx # Trial lesson request wizard
│   │   ├── CourseDetailsPage.tsx # Dynamic syllabus breakdown
│   │   ├── CoursesPage.tsx   # Catalog with working search & multi-filters
│   │   ├── HomePage.tsx      # Editorial landing page
│   │   ├── NotFoundPage.tsx  # 404 handler
│   │   ├── PricingPage.tsx   # Plans & quarterly discount calculator
│   │   ├── QuizPage.tsx      # CEFR interactive placement quiz
│   │   └── TeachersPage.tsx  # Faculty directory with specialty filter
│   ├── types/
│   │   └── index.ts          # Core TypeScript models & interfaces
│   ├── App.tsx               # Route definitions & application layout
│   ├── index.css             # Tailwind v4 theme & typography styling
│   └── main.tsx              # React DOM entry point
├── index.html                # Google Fonts & SEO metadata
├── package.json              # Project manifest & dependencies
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite + Tailwind v4 build plugin
```

---

## 6. Portfolio Scope & Disclaimer Notice

*FluentBridge is a fictional commercial concept website developed strictly for portfolio demonstration purposes.*  
All instructor biographies, customer quotations, course timetables, and pricing figures are illustrative examples crafted to showcase UI/UX design, interactive frontend engineering, and European brand identity. No real financial transactions or commercial reservations are processed.
