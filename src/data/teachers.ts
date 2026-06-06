import type { Teacher } from '../types';

export const teachersData: Teacher[] = [
  {
    id: 'dr-eleanor-vance',
    name: 'Dr. Eleanor Vance',
    role: 'Head of Academic Pedagogy & IELTS Lead',
    location: 'Oxford, United Kingdom',
    accent: 'Standard Southern British (RP)',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    experienceYears: 14,
    qualifications: [
      'Ph.D. in Applied Linguistics, University of Oxford',
      'Cambridge DELTA (Distinction)',
      'Former Senior IELTS Speaking & Writing Examiner (British Council)'
    ],
    specialties: ['IELTS Preparation (Academic)', 'Academic Writing', 'Phonology & Intonation'],
    bio: 'Eleanor has spent over a decade guiding European graduate students into Cambridge, Oxford, INSEAD, and ETH Zurich. Her sessions dismantle the linguistic anxiety students feel around native speakers, transforming mechanical grammar knowledge into instinctive, authoritative academic and professional discourse.',
    teachingStyle: 'Analytical, encouraging, and razor-sharp on precision. She believes errors are the most valuable data points in a lesson and provides real-time phonetic adjustments.',
    favoriteQuote: '"Language is not an ornament of thought; it is the thought itself."',
    featured: true
  },
  {
    id: 'marcus-reid',
    name: 'Marcus Reid',
    role: 'Lead Business Communication Coach',
    location: 'London & Zurich',
    accent: 'Modern British / International Business',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    experienceYears: 11,
    qualifications: [
      'M.A. International Business Communication, London School of Economics',
      'Cambridge CELTA certified',
      'Ex-Strategy Consultant at FTSE 100 enterprise'
    ],
    specialties: ['Executive English', 'High-Stakes Negotiations', 'Cross-Cultural Boardroom Dynamics'],
    bio: 'Marcus bridges commercial strategy and linguistic nuance. Before joining FluentBridge, he spent six years in London management consulting, coaching non-native executives on M&A presentations and board disputes. He understands the real cost of ambiguous phrasing in corporate contracts and pitches.',
    teachingStyle: 'Direct, pragmatic, and simulation-heavy. Marcus treats every session like a confidential strategy sprint with zero passive listening.',
    favoriteQuote: '"Clarity is the ultimate expression of courtesy in business."',
    featured: true
  },
  {
    id: 'claire-dubois-kavanagh',
    name: 'Claire Kavanagh',
    role: 'Senior Conversational Fluency Specialist',
    location: 'Dublin, Ireland',
    accent: 'Warm Irish (Dublin Standard)',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    experienceYears: 9,
    qualifications: [
      'B.A. English Literature & Drama, Trinity College Dublin',
      'Trinity DipTESOL (Level 7)',
      'Certified Speech & Improvisation Practitioner'
    ],
    specialties: ['Conversational Ease', 'Humor & Idiomatic Nuance', 'Overcoming Speaking Anxiety'],
    bio: 'Claire combines her theater arts background with linguistic pedagogy to unlock spontaneous, colorful conversation. Having lived and taught in Berlin and Barcelona, she has an uncanny empathy for the cognitive fatigue European professionals feel when switching into English for evening social events.',
    teachingStyle: 'Warm, theatrical, and infectious. She uses conversational improvisation drills that make students laugh and forget that they are speaking in a second language.',
    favoriteQuote: '"Fluency is not the absence of mistakes; it is the presence of connection."',
    featured: true
  },
  {
    id: 'alistair-macintyre',
    name: 'Alistair MacIntyre',
    role: 'Accent & Vocal Presence Specialist',
    location: 'Edinburgh, Scotland',
    accent: 'Standard Scottish / British Neutral',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    experienceYears: 12,
    qualifications: [
      'M.A. Phonetics & Speech Science, University of Edinburgh',
      'Vocal Arts Diploma, Royal Conservatoire of Scotland',
      'Cambridge CELTA'
    ],
    specialties: ['Connected Speech', 'Acoustic Clarity', 'Public Speaking & Vocal Endurance'],
    bio: 'Alistair trains voice actors, diplomats, and international researchers to speak English with maximum acoustic clarity and effortless resonance. He demystifies the English stress-timed rhythm and helps European speakers overcome the breath exhaustion typical of fast-paced multinational meetings.',
    teachingStyle: 'Diagnostic, physical, and deeply practical. Alistair uses acoustic waveform software and physical posture adjustments to create rapid, noticeable clarity gains.',
    favoriteQuote: '"When your articulation is effortless, your listener can focus entirely on the brilliance of your message."',
    featured: true
  },
  {
    id: 'sophia-van-der-meer',
    name: 'Sophia van der Meer',
    role: 'Bilingual Pedagogy Lead (Dutch/English)',
    location: 'Amsterdam, Netherlands',
    accent: 'International English (Near-Native Oxford)',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    experienceYears: 8,
    qualifications: [
      'M.Sc. Language Acquisition, University of Amsterdam',
      'Cambridge DELTA Module 1 & 2',
      'Specialist in Germanic and Romance false friends'
    ],
    specialties: ['General English (Intermediate to Advanced)', 'European False Friends', 'Erasmus & University Transition'],
    bio: 'Raised bilingually between Rotterdam and Bristol, Sophia has dedicated her career to the psychology of European adult language learners. She specializes in untangling the subtle grammar interferences between French, German, Italian, Spanish, Dutch, and English.',
    teachingStyle: 'Empathetic, structured, and linguistically illuminating. She explains the "why" behind English irregularities with clarity and warmth.',
    favoriteQuote: '"To learn another language is to possess a second soul."',
    featured: false
  },
  {
    id: 'david-sterling',
    name: 'David Sterling',
    role: 'Tech & Engineering English Coach',
    location: 'Berlin & Cambridge',
    accent: 'Clear British Transatlantic',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    experienceYears: 10,
    qualifications: [
      'B.Sc. Computer Science & Linguistics, Cambridge',
      'CELTA certified with Corporate Specialism',
      'Former Technical Writer at European Tech Unicorn'
    ],
    specialties: ['Technical Architecture Demos', 'Agile Standups & Sprint Reviews', 'Engineering Leadership'],
    bio: 'David coaches software engineers, product managers, and CTOs across Berlin, Stockholm, and Munich. He helps developers translate dense architectural decisions into crisp English that business stakeholders and US venture investors understand instantly.',
    teachingStyle: 'Structured, analytical, and jargon-busting. Sessions focus on code reviews, RFC defenses, and concise async pull-request documentation.',
    favoriteQuote: '"Simple code is great. Simple, unambiguous English about code is unstoppable."',
    featured: false
  }
];
