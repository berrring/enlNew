import type { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Choose the option that best completes the sentence naturally:',
    context: '"I have been living in Brussels for two years, but I still _______ getting used to the unpredictable weather."',
    options: [
      { label: 'A', text: 'am not', levelScore: 2 },
      { label: 'B', text: 'haven\'t', levelScore: 1 },
      { label: 'C', text: 'haven\'t been', levelScore: 3 },
      { label: 'D', text: 'am scarcely', levelScore: 4 }
    ],
    explanation: '"Be used to + -ing" expresses familiarity with a situation. "I am still not getting used to..." or "am not" is the natural progressive construction.'
  },
  {
    id: 2,
    question: 'Which connector expresses the most subtle and polite contrast in a business discussion?',
    context: '"We appreciate the preliminary proposal; _______, our quarterly budget cannot accommodate additional tooling at this stage."',
    options: [
      { label: 'A', text: 'nonetheless', levelScore: 3 },
      { label: 'B', text: 'be that as it may', levelScore: 4 },
      { label: 'C', text: 'but', levelScore: 1 },
      { label: 'D', text: 'on the other side', levelScore: 1 }
    ],
    explanation: '"Be that as it may" or "nonetheless" convey refined diplomatic hedging; "be that as it may" signals an advanced (C1/C2) command of rhetorical cadence.'
  },
  {
    id: 3,
    question: 'Select the sentence that uses idiomatic English accurately:',
    context: 'Discussing a company that had to adapt abruptly during market changes.',
    options: [
      { label: 'A', text: 'They had to pivot on the spur of the moment to stay afloat.', levelScore: 4 },
      { label: 'B', text: 'They had to turn around the things quickly for living.', levelScore: 1 },
      { label: 'C', text: 'They made a fast change to not sink in the water.', levelScore: 1 },
      { label: 'D', text: 'They changed the strategy in a very short minute.', levelScore: 2 }
    ],
    explanation: '"On the spur of the moment" and "stay afloat" are natural native collocations showing upper-intermediate/advanced idiomatic fluency.'
  },
  {
    id: 4,
    question: 'Which conditional sentence sounds most natural for expressing an unfulfilled past condition?',
    context: 'Reflecting on an international project outcome.',
    options: [
      { label: 'A', text: 'If we knew the German regulations earlier, we would avoid the delay.', levelScore: 1 },
      { label: 'B', text: 'Had we known the regulations earlier, we would have avoided the delay.', levelScore: 4 },
      { label: 'C', text: 'If we would have known the regulations, we could avoid the delay.', levelScore: 2 },
      { label: 'D', text: 'Had we known the regulations, we avoided the delay completely.', levelScore: 3 }
    ],
    explanation: 'Inverted third conditional ("Had we known...") is a hallmark of C1/C2 advanced proficiency in formal and professional prose.'
  },
  {
    id: 5,
    question: 'Choose the most natural way to politely interrupt a senior colleague in a meeting:',
    options: [
      { label: 'A', text: 'Stop please, I must talk now.', levelScore: 1 },
      { label: 'B', text: 'Could I just chime in here with a quick clarification regarding the timeline?', levelScore: 4 },
      { label: 'C', text: 'I cut your word for one second.', levelScore: 1 },
      { label: 'D', text: 'May I make a question about this thing?', levelScore: 2 }
    ],
    explanation: '"Chime in with a quick clarification" is idiomatic, respectful, and widely used in international corporate environments.'
  },
  {
    id: 6,
    question: 'Which word best replaces the bracketed phrase for a more sophisticated register?',
    context: '"The research team [made smaller] the discrepancies between the two datasets."',
    options: [
      { label: 'A', text: 'downsized', levelScore: 2 },
      { label: 'B', text: 'minimized', levelScore: 3 },
      { label: 'C', text: 'reconciled', levelScore: 4 },
      { label: 'D', text: 'lowered', levelScore: 1 }
    ],
    explanation: '"Reconciled" is the precise academic and technical term when addressing discrepancies between data.'
  },
  {
    id: 7,
    question: 'Identify the sentence with the correct prepositional nuance:',
    context: 'Discussing responsibility and project ownership.',
    options: [
      { label: 'A', text: 'Elena is accountable to the steering committee for delivering the sprint.', levelScore: 4 },
      { label: 'B', text: 'Elena is accountable for the committee to delivering the sprint.', levelScore: 2 },
      { label: 'C', text: 'Elena has the response with the committee on delivering.', levelScore: 1 },
      { label: 'D', text: 'Elena is responsible towards the committee to deliver.', levelScore: 2 }
    ],
    explanation: 'One is "accountable to [a person or group]" and "accountable for [an outcome]".'
  },
  {
    id: 8,
    question: 'Choose the sentence that correctly captures subtle understatement (litotes):',
    options: [
      { label: 'A', text: 'The feedback from the board was not entirely unfavorable.', levelScore: 4 },
      { label: 'B', text: 'The feedback was very not bad from the board.', levelScore: 1 },
      { label: 'C', text: 'The board didn\'t say bad things so much.', levelScore: 1 },
      { label: 'D', text: 'The board feedback was slightly not positive.', levelScore: 2 }
    ],
    explanation: '"Not entirely unfavorable" is classic British/diplomatic litotes, demonstrating high pragmatic competence.'
  }
];

export interface LevelResult {
  cefr: string;
  levelName: string;
  tagline: string;
  summary: string;
  strengths: string[];
  growthAreas: string[];
  recommendedCourseSlug: string;
  recommendedCourseTitle: string;
}

export const getLevelResult = (totalScore: number): LevelResult => {
  // Score range: 8 to 32
  if (totalScore <= 15) {
    return {
      cefr: 'A2 / B1',
      levelName: 'Pre-Intermediate / Lower Intermediate',
      tagline: 'Solid conversational roots ready for structured expansion.',
      summary: 'You have a good grasp of everyday communicative situations and familiar routines. However, complex tenses, rapid idiomatic turns of phrase, and workplace negotiations still trigger hesitation or mental translation.',
      strengths: [
        'Can communicate in familiar everyday social scenarios',
        'Understands the main points of clear standard speech',
        'Capable of narrating simple personal experiences'
      ],
      growthAreas: [
        'Expanding vocabulary beyond basic core synonyms',
        'Mastering conditional structures and natural past tenses',
        'Overcoming hesitation when speaking with native speakers'
      ],
      recommendedCourseSlug: 'general-english',
      recommendedCourseTitle: 'General English'
    };
  } else if (totalScore <= 22) {
    return {
      cefr: 'B1 / B2',
      levelName: 'Intermediate / Independent User',
      tagline: 'Strong everyday fluency, preparing for effortless professional spontaneity.',
      summary: 'You can converse freely on a wide range of personal, cultural, and current topics. You occasionally struggle with idiomatic subtlety, complex nuance in written arguments, or asserting authority in fast-paced debates.',
      strengths: [
        'Comfortable expressing personal opinions and viewpoints',
        'Broad passive vocabulary from English media and reading',
        'Good grammatical accuracy in standard speaking contexts'
      ],
      growthAreas: [
        'Refining connected speech and natural sentence stress',
        'Adopting diplomatic hedging in professional communications',
        'Speaking spontaneously without preparing sentences in advance'
      ],
      recommendedCourseSlug: 'conversational-english',
      recommendedCourseTitle: 'Conversational English'
    };
  } else if (totalScore <= 28) {
    return {
      cefr: 'B2 / C1',
      levelName: 'Upper-Intermediate / Operational Fluency',
      tagline: 'High operational competence, ready for executive polish and precision.',
      summary: 'You communicate effectively in almost all professional and social environments. You rarely get lost, but you may feel a gap between your native intellect and your ability to express humor, irony, and commanding authority in English.',
      strengths: [
        'Understands fast, unscripted European and native dialogue',
        'Can structure persuasive multi-point arguments',
        'Strong grasp of high-frequency idioms and connectors'
      ],
      growthAreas: [
        'Eliminating subtle fossilized grammar and preposition errors',
        'Fine-tuning register between casual, formal, and diplomatic',
        'Vocal projection, cadence, and stress-timed rhythm'
      ],
      recommendedCourseSlug: 'business-english',
      recommendedCourseTitle: 'Business English & Executive Presence'
    };
  } else {
    return {
      cefr: 'C1 / C2',
      levelName: 'Advanced / Master Communicator',
      tagline: 'Exceptional command of nuance, idiom, and rhetorical precision.',
      summary: 'You operate with ease across high-stakes international scenarios, complex texts, and subtle cultural subtexts. Your focus is fine-tuning executive gravitas, academic publishing, or international exam excellence.',
      strengths: [
        'Effortless understanding of abstract, specialized topics',
        'Rich idiomatic and metaphorical repertoire',
        'Skillful use of understatement, tone modulation, and irony'
      ],
      growthAreas: [
        'High-stakes boardroom grilling and unscripted keynote defense',
        'Targeting Band 8.5+ in international language credentials',
        'Phonological refinement for effortless vocal resonance'
      ],
      recommendedCourseSlug: 'business-english',
      recommendedCourseTitle: 'Business English & Executive Presence'
    };
  }
};
