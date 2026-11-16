export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqsDataEn: FAQItem[] = [
  {
    category: 'Academics',
    question: 'How is FluentBridge different from conventional language apps or schools?',
    answer: 'Most language platforms rely on isolated grammar drills or gamified flashcards that do not transfer to real-world pressure. FluentBridge operates as a modern European language salon: small cohorts (max 5 students) led by accredited educators with professional backgrounds in London, Oxford, and European capitals. Over 70% of class time is spent in unscripted spoken interaction, followed by personalized diagnostic feedback on your voice and syntax.'
  },
  {
    category: 'Academics',
    question: 'Are FluentBridge teachers native speakers and accredited?',
    answer: 'All our instructors hold recognized postgraduate credentials (such as the Cambridge DELTA, Trinity DipTESOL, or Master\'s degrees in Applied Linguistics). In addition, our business and exam tutors have direct commercial and examiner experience. (Note: On this portfolio website, all instructor profiles are realistic fictional examples designed for demonstration).'
  },
  {
    category: 'Classes & Schedule',
    question: 'What time zones are the classes scheduled in?',
    answer: 'Our timetable is synchronized with Central European Time (CET / GMT+1) and Western European Time (GMT). Classes run across early morning slots (07:30–09:00 CET), lunchtime express sessions (12:30–14:00 CET), and evening cohorts (18:00–21:00 CET) to seamlessly accommodate working professionals and university timetables.'
  },
  {
    category: 'Classes & Schedule',
    question: 'What happens if I need to miss a scheduled class?',
    answer: 'All live cohort sessions are supplemented with automated interactive transcripts, key vocabulary summaries, and tutor notes uploaded to your student portal within 2 hours. In our Plus and Intensive plans, you also have the flexibility to reschedule private 1-on-1 mentorship sessions with 12 hours\' advance notice.'
  },
  {
    category: 'Trial & Pricing',
    question: 'What actually happens during the Free Trial Lesson?',
    answer: 'Your 30-minute trial is not a sales pitch. You meet one-on-one with a senior academic coach who conducts a warm conversational assessment, diagnoses your specific phonological and grammatical roadblocks, and creates a personalized 90-day learning roadmap tailored to your career or academic goals.'
  },
  {
    category: 'Trial & Pricing',
    question: 'Is there any commitment or credit card required for the trial?',
    answer: 'None whatsoever. Booking a trial requires only your name, email, and preferred schedule. No credit card details are collected, and there is zero automatic renewal.'
  },
  {
    category: 'Trial & Pricing',
    question: 'Can my employer in the EU pay or reimburse my tuition?',
    answer: 'Yes. Over 65% of our professional students have their courses funded through corporate learning & development budgets or European continuing education tax allowances. We provide itemized EU VAT-compliant invoices and quarterly attendance/progress verification reports.'
  },
  {
    category: 'Technology',
    question: 'What equipment do I need to attend classes?',
    answer: 'A laptop or desktop computer with a reliable broadband connection, a modern web browser (Chrome, Safari, Firefox, or Edge), a clear webcam, and headphones with an integrated microphone. No special software installations are required; our virtual classrooms run directly in your browser.'
  }
];

export const faqsDataRu: FAQItem[] = [
  {
    category: 'Методика',
    question: 'Чем FluentBridge отличается от обычных приложений или языковых школ?',
    answer: 'Большинство сервисов учат изолированным грамматическим правилам или словам по карточкам, которые забываются в реальном стрессе. FluentBridge работает как разговорный салон: группы до 5 человек под руководством оксфордских и кембриджских преподавателей. Более 70% времени студенты говорят сами, получая персонализированный голосовой разбор после каждого урока.'
  },
  {
    category: 'Преподаватели',
    question: 'Все ли преподаватели сертифицированы?',
    answer: 'Да, абсолютно все педагоги имеют высшие международные дипломы (Cambridge DELTA, Trinity DipTESOL или степень магистра лингвистики). Кроме того, бизнес-тренеры имеют личный опыт работы в корпоративном секторе Лондона и европейских столиц.'
  },
  {
    category: 'Расписание',
    question: 'По какому часовому поясу проходят занятия?',
    answer: 'Расписание синхронизировано с центральноевропейским временем (CET / GMT+1) и лондонским временем (GMT). Доступны ранние утренние группы (07:30–09:00 CET), обеденные экспресс-уроки (12:30–14:00 CET) и вечерние потоки (18:00–21:00 CET).'
  },
  {
    category: 'Расписание',
    question: 'Что произойдёт, если я пропущу групповой урок?',
    answer: 'Каждое занятие сопровождается интерактивным конспектом, списком разобранных выражений и аудио-заметками преподавателя, доступными в личном кабинете в течение 2 часов. В тарифах Plus и Intensive персональные уроки можно переносить с уведомлением за 12 часов.'
  },
  {
    category: 'Пробный урок',
    question: 'Как проходит бесплатный пробный урок?',
    answer: '30-минутное вводное занятие — это не реклама курсов. Вы общаетесь 1-на-1 с академическим наставником, который определяет ваш текущий уровень по шкале CEFR, выявляет речевые зажимы и формирует индивидуальную траекторию на 90 дней.'
  },
  {
    category: 'Оплата',
    question: 'Нужно ли вводить банковскую карту для записи на пробный урок?',
    answer: 'Нет, абсолютно никаких платежных данных. Для записи нужны только ваше имя, email и удобное время в календаре. Никаких скрытых подписок и автоматических списаний.'
  },
  {
    category: 'Оплата',
    question: 'Может ли мой работодатель оплатить обучение?',
    answer: 'Да. Более 65% наших студентов оплачивают курсы за счёт корпоративного бюджета на обучение (L&D). Мы выставляем счета, соответствующие европейским стандартам (EU VAT), и предоставляем акты и табели посещаемости.'
  },
  {
    category: 'Технологии',
    question: 'Что нужно для посещения занятий?',
    answer: 'Компьютер или ноутбук с веб-камерой, наушниками с микрофоном и стабильным интернетом. Занятия проходят прямо в браузере (Chrome, Safari, Firefox), никаких сторонних программ устанавливать не требуется.'
  }
];

export const getFaqs = (lang: 'en' | 'ru'): FAQItem[] => {
  return lang === 'ru' ? faqsDataRu : faqsDataEn;
};

export const faqsData: FAQItem[] = faqsDataEn;
