import type { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'essential',
    name: 'Essential',
    subtitle: 'Steadily build conversational rhythm with weekly small-cohort immersion.',
    monthlyPrice: 139,
    quarterlyPricePerMonth: 119,
    lessonsPerMonth: '8 live sessions / month',
    lessonDuration: '60 minutes per session',
    format: 'Small Cohort (max 5 students)',
    popular: false,
    idealFor: 'Busy university students & professionals maintaining steady progress alongside full-time work.',
    features: [
      '2 live interactive sessions every week (max 5 peers)',
      'Access to curated European cultural reading & audio materials',
      'Dedicated digital study portal with lesson transcripts',
      'Weekly diagnostic grammar & vocabulary flashcard decks',
      'Monthly CEFR benchmark progress checkpoint',
      'Community discussion salon & guest speaker access'
    ],
    ctaText: 'Start with Essential'
  },
  {
    id: 'plus',
    name: 'Plus (Most Popular)',
    subtitle: 'The optimal balance of collaborative small groups and private 1-on-1 mentorship.',
    monthlyPrice: 229,
    quarterlyPricePerMonth: 195,
    lessonsPerMonth: '12 live sessions / month',
    lessonDuration: '75 minutes per session',
    format: 'Hybrid (Cohort + 1-on-1 Mentorship)',
    popular: true,
    idealFor: 'Professionals seeking rapid fluency, career advancement, or imminent exam preparation.',
    features: [
      '8 interactive cohort sessions (max 4 students) per month',
      '4 dedicated 1-on-1 private coaching sessions with senior tutor',
      'Bi-weekly line-by-line redlining on real work emails or essays',
      'Personalized acoustic pronunciation audit & speech coaching',
      'Flexible lesson rescheduling (up to 12 hours before class)',
      'Priority access to exam masterclasses (IELTS / Cambridge)',
      'Quarterly Certificate of CEFR Language Competency'
    ],
    ctaText: 'Choose Plus Mentorship'
  },
  {
    id: 'intensive',
    name: 'Intensive Executive',
    subtitle: 'Completely customized 1-on-1 language coaching for executive presence and high-stakes goals.',
    monthlyPrice: 389,
    quarterlyPricePerMonth: 330,
    lessonsPerMonth: '16 private 1-on-1 sessions / month',
    lessonDuration: '60 or 90 minutes flexible',
    format: 'Exclusive 1-on-1 Dedicated Tutor',
    popular: false,
    idealFor: 'Senior executives, founders, doctors, and academics with strict deadlines and bespoke requirements.',
    features: [
      '16 fully private 1-on-1 sessions tailored to your exact industry',
      'Dedicated lead tutor assigned exclusively to your progress',
      'Unlimited asynchronous review of presentations, speeches & papers',
      'Bespoke curriculum built around your company/research domain',
      'Same-day scheduling flexibility across European timezones (CET/GMT)',
      'Simulated board meetings, investor pitches, or academic defenses',
      'Direct WhatsApp/Slack audio feedback channel with your tutor'
    ],
    ctaText: 'Apply for Intensive'
  }
];

export interface ComparisonFeature {
  name: string;
  category: string;
  essential: boolean | string;
  plus: boolean | string;
  intensive: boolean | string;
}

export const comparisonFeatures: ComparisonFeature[] = [
  { name: 'Live sessions per month', category: 'Class Structure', essential: '8 sessions', plus: '12 sessions (8 group + 4 private)', intensive: '16 private 1-on-1' },
  { name: 'Class format', category: 'Class Structure', essential: 'Small group (max 5)', plus: 'Cohort + Private mentor', intensive: '100% Private 1-on-1' },
  { name: 'Class duration', category: 'Class Structure', essential: '60 minutes', plus: '75 minutes', intensive: '60 or 90 minutes' },
  { name: 'Dedicated personal tutor', category: 'Pedagogy', essential: false, plus: 'Senior coach', intensive: 'Executive lead coach' },
  { name: 'Work document & email review', category: 'Pedagogy', essential: false, plus: 'Bi-weekly (2 docs/mo)', intensive: 'Unlimited submissions' },
  { name: 'Acoustic pronunciation audit', category: 'Pedagogy', essential: 'Initial audit only', plus: 'Bi-monthly re-evaluations', intensive: 'Continuous acoustic feedback' },
  { name: 'Rescheduling flexibility', category: 'Flexibility', essential: '24h notice', plus: '12h notice', intensive: '4h notice / same day' },
  { name: 'CEFR certified progress certificate', category: 'Credentials', essential: 'After 6 months', plus: 'Every quarter', intensive: 'Monthly verification' },
  { name: 'Study portal & transcript notes', category: 'Digital Tools', essential: true, plus: true, intensive: true },
  { name: 'Sunday European salon & debates', category: 'Digital Tools', essential: true, plus: true, intensive: true }
];
