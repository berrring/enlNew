import type { QuizQuestion } from '../types';

export const quizQuestionsEn: QuizQuestion[] = [
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

export const quizQuestionsRu: QuizQuestion[] = [
  {
    id: 1,
    question: 'Выберите вариант, наиболее естественно завершающий предложение:',
    context: '"I have been living in Brussels for two years, but I still _______ getting used to the unpredictable weather."',
    options: [
      { label: 'A', text: 'am not', levelScore: 2 },
      { label: 'B', text: 'haven\'t', levelScore: 1 },
      { label: 'C', text: 'haven\'t been', levelScore: 3 },
      { label: 'D', text: 'am scarcely', levelScore: 4 }
    ],
    explanation: 'Конструкция "be used to + -ing" означает процесс привыкания к ситуации. "I am still not getting used to..." передает естественное продолжающееся состояние.'
  },
  {
    id: 2,
    question: 'Какой связующий союз выражает наиболее вежливое и тонкое противопоставление в деловой дискуссии?',
    context: '"We appreciate the preliminary proposal; _______, our quarterly budget cannot accommodate additional tooling at this stage."',
    options: [
      { label: 'A', text: 'nonetheless', levelScore: 3 },
      { label: 'B', text: 'be that as it may', levelScore: 4 },
      { label: 'C', text: 'but', levelScore: 1 },
      { label: 'D', text: 'on the other side', levelScore: 1 }
    ],
    explanation: '"Be that as it may" ("как бы то ни было") и "nonetheless" ("тем не менее") — примеры дипломатической вежливости высокого уровня (C1/C2).'
  },
  {
    id: 3,
    question: 'В каком предложении английская идиома использована наиболее естественно?',
    context: 'Обсуждение компании, которой пришлось экстренно адаптироваться к изменениям рынка.',
    options: [
      { label: 'A', text: 'They had to pivot on the spur of the moment to stay afloat.', levelScore: 4 },
      { label: 'B', text: 'They had to turn around the things quickly for living.', levelScore: 1 },
      { label: 'C', text: 'They made a fast change to not sink in the water.', levelScore: 1 },
      { label: 'D', text: 'They changed the strategy in a very short minute.', levelScore: 2 }
    ],
    explanation: '"On the spur of the moment" (спонтанно / экспромтом) и "stay afloat" (оставаться на плаву) — естественные устойчивые словосочетания уровня Upper-Intermediate/Advanced.'
  },
  {
    id: 4,
    question: 'Какое условное предложение звучит наиболее естественно для нереализованного условия в прошлом?',
    context: 'Анализ итогов международного проекта.',
    options: [
      { label: 'A', text: 'If we knew the German regulations earlier, we would avoid the delay.', levelScore: 1 },
      { label: 'B', text: 'Had we known the regulations earlier, we would have avoided the delay.', levelScore: 4 },
      { label: 'C', text: 'If we would have known the regulations, we could avoid the delay.', levelScore: 2 },
      { label: 'D', text: 'Had we known the regulations, we avoided the delay completely.', levelScore: 3 }
    ],
    explanation: 'Инвертированный Third Conditional ("Had we known...") — визитная карточка продвинутого уровня (C1/C2) в деловой и академической речи.'
  },
  {
    id: 5,
    question: 'Выберите самый естественный способ вежливо вставить реплику в речь старшего коллеги на совещании:',
    options: [
      { label: 'A', text: 'Stop please, I must talk now.', levelScore: 1 },
      { label: 'B', text: 'Could I just chime in here with a quick clarification regarding the timeline?', levelScore: 4 },
      { label: 'C', text: 'I cut your word for one second.', levelScore: 1 },
      { label: 'D', text: 'May I make a question about this thing?', levelScore: 2 }
    ],
    explanation: '"Chime in with a quick clarification" — общепринятая дипломатичная и уважительная фраза в международных корпоративных кругах.'
  },
  {
    id: 6,
    question: 'Какое слово лучше всего заменяет фразу в скобках для более высокого академического регистра?',
    context: '"The research team [made smaller] the discrepancies between the two datasets."',
    options: [
      { label: 'A', text: 'downsized', levelScore: 2 },
      { label: 'B', text: 'minimized', levelScore: 3 },
      { label: 'C', text: 'reconciled', levelScore: 4 },
      { label: 'D', text: 'lowered', levelScore: 1 }
    ],
    explanation: '"Reconciled" — точный научный термин для согласования и устранения расхождений между наборами данных.'
  },
  {
    id: 7,
    question: 'В каком предложении предлоги употреблены абсолютно корректно?',
    context: 'Обсуждение ответственности за результат проекта.',
    options: [
      { label: 'A', text: 'Elena is accountable to the steering committee for delivering the sprint.', levelScore: 4 },
      { label: 'B', text: 'Elena is accountable for the committee to delivering the sprint.', levelScore: 2 },
      { label: 'C', text: 'Elena has the response with the committee on delivering.', levelScore: 1 },
      { label: 'D', text: 'Elena is responsible towards the committee to deliver.', levelScore: 2 }
    ],
    explanation: 'Правильное управление: "accountable to [кому / перед кем]" и "accountable for [за какой результат]".'
  },
  {
    id: 8,
    question: 'Какое предложение демонстрирует тонкое преуменьшение / дипломатическую сдержанность (литоту)?',
    options: [
      { label: 'A', text: 'The feedback from the board was not entirely unfavorable.', levelScore: 4 },
      { label: 'B', text: 'The feedback was very not bad from the board.', levelScore: 1 },
      { label: 'C', text: 'The board didn\'t say bad things so much.', levelScore: 1 },
      { label: 'D', text: 'The board feedback was slightly not positive.', levelScore: 2 }
    ],
    explanation: '"Not entirely unfavorable" ("не вполне неблагоприятный") — классический пример британской дипломатической сдержанности (литоты).'
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

export const getQuizQuestions = (lang: 'en' | 'ru'): QuizQuestion[] => {
  return lang === 'ru' ? quizQuestionsRu : quizQuestionsEn;
};

export const getLevelResult = (totalScore: number, lang: 'en' | 'ru' = 'en'): LevelResult => {
  const isRu = lang === 'ru';

  if (totalScore <= 15) {
    return {
      cefr: 'A2 / B1',
      levelName: isRu ? 'Pre-Intermediate / Начальный средний' : 'Pre-Intermediate / Lower Intermediate',
      tagline: isRu ? 'Хорошая база для уверенного перехода к беглой речи.' : 'Solid conversational roots ready for structured expansion.',
      summary: isRu 
        ? 'Вы ориентируетесь в знакомых бытовых ситуациях и понимаете стандартную речь. Однако сложные грамматические обороты, быстрые идиомы и спонтанные дискуссии пока вызывают паузы и внутренний перевод с родного языка.'
        : 'You have a good grasp of everyday communicative situations and familiar routines. However, complex tenses, rapid idiomatic turns of phrase, and workplace negotiations still trigger hesitation or mental translation.',
      strengths: isRu ? [
        'Способность объясниться в повседневных путешествиях и базовом быту',
        'Понимание основного смысла неспешной речи носителей',
        'Умение простыми фразами рассказать о себе и своем опыте'
      ] : [
        'Can communicate in familiar everyday social scenarios',
        'Understands the main points of clear standard speech',
        'Capable of narrating simple personal experiences'
      ],
      growthAreas: isRu ? [
        'Расширение активного словаря за рамки базовых синонимов',
        'Освоение условных предложений и правильных временных форм',
        'Преодоление страха первой реплики при разговоре с носителями'
      ] : [
        'Expanding vocabulary beyond basic core synonyms',
        'Mastering conditional structures and natural past tenses',
        'Overcoming hesitation when speaking with native speakers'
      ],
      recommendedCourseSlug: 'general-english',
      recommendedCourseTitle: isRu ? 'General English (Общий курс)' : 'General English'
    };
  } else if (totalScore <= 22) {
    return {
      cefr: 'B1 / B2',
      levelName: isRu ? 'Intermediate / Уверенный независимый' : 'Intermediate / Independent User',
      tagline: isRu ? 'Крепкая база, готовая к выходу на спонтанный деловой уровень.' : 'Strong everyday fluency, preparing for effortless professional spontaneity.',
      summary: isRu
        ? 'Вы свободно говорите на личные, культурные и профессиональные темы. Небольшие сложности возникают в тонких идиомах, письменной аргументации и отстаивании своей позиции в быстрых групповых дебатах.'
        : 'You can converse freely on a wide range of personal, cultural, and current topics. You occasionally struggle with idiomatic subtlety, complex nuance in written arguments, or asserting authority in fast-paced debates.',
      strengths: isRu ? [
        'Уверенное выражение личного мнения и аргументации',
        'Обширный пассивный словарный запас из подкастов и книг',
        'Хорошая грамматическая грамотность в спокойной обстановке'
      ] : [
        'Comfortable expressing personal opinions and viewpoints',
        'Broad passive vocabulary from English media and reading',
        'Good grammatical accuracy in standard speaking contexts'
      ],
      growthAreas: isRu ? [
        'Постановка связной беглой речи (connected speech) и фразового ударения',
        'Использование дипломатичной вежливости в деловых коммуникациях',
        'Умение шутить и говорить спонтанно без подготовки фраз в голове'
      ] : [
        'Refining connected speech and natural sentence stress',
        'Adopting diplomatic hedging in professional communications',
        'Speaking spontaneously without preparing sentences in advance'
      ],
      recommendedCourseSlug: 'conversational-english',
      recommendedCourseTitle: isRu ? 'Conversational English (Разговорный клуб)' : 'Conversational English'
    };
  } else if (totalScore <= 28) {
    return {
      cefr: 'B2 / C1',
      levelName: isRu ? 'Upper-Intermediate / Продвинутая беглость' : 'Upper-Intermediate / Operational Fluency',
      tagline: isRu ? 'Высокая операционная готовность к лидерству на международной арене.' : 'High operational competence, ready for executive polish and precision.',
      summary: isRu
        ? 'Вы эффективно работаете и общаетесь практически в любой среде. Однако вы можете чувствовать разницу между силой вашего интеллекта на родном языке и способностью звучать авторитетно и остроумно по-английски.'
        : 'You communicate effectively in almost all professional and social environments. You rarely get lost, but you may feel a gap between your native intellect and your ability to express humor, irony, and commanding authority in English.',
      strengths: isRu ? [
        'Лёгкое восприятие быстрой неадаптированной речи европейцев и носителей',
        'Умение выстраивать многоуровневую убедительную аргументацию',
        'Богатый арсенал профессиональных связующих конструкций'
      ] : [
        'Understands fast, unscripted European and native dialogue',
        'Can structure persuasive multi-point arguments',
        'Strong grasp of high-frequency idioms and connectors'
      ],
      growthAreas: isRu ? [
        'Искоренение застарелых точечных ошибок в предлогах и артиклях',
        'Тонкая калибровка речевого регистра: от неформального до официального',
        'Интонационное ведение переговоров и ораторская уверенность'
      ] : [
        'Eliminating subtle fossilized grammar and preposition errors',
        'Fine-tuning register between casual, formal, and diplomatic',
        'Vocal projection, cadence, and stress-timed rhythm'
      ],
      recommendedCourseSlug: 'business-english',
      recommendedCourseTitle: isRu ? 'Business English & Executive Presence' : 'Business English & Executive Presence'
    };
  } else {
    return {
      cefr: 'C1 / C2',
      levelName: isRu ? 'Advanced / Мастерское владение' : 'Advanced / Master Communicator',
      tagline: isRu ? 'Безупречное владение нюансами, иронией и дипломатической точностью.' : 'Exceptional command of nuance, idiom, and rhetorical precision.',
      summary: isRu
        ? 'Вы свободно ориентируетесь в сложнейших контекстах, научных статьях и скрытых культурных подтекстах. Ваш фокус — оттачивание ораторской харизмы, академические публикации или результат 8.5+ на IELTS.'
        : 'You operate with ease across high-stakes international scenarios, complex texts, and subtle cultural subtexts. Your focus is fine-tuning executive gravitas, academic publishing, or international exam excellence.',
      strengths: isRu ? [
        'Свободное восприятие абстрактных и узкоспециализированных тем',
        'Богатейший репертуар метафор и тонких идиом',
        'Умелое владение недосказанностью, модуляцией тона и иронией'
      ] : [
        'Effortless understanding of abstract, specialized topics',
        'Rich idiomatic and metaphorical repertoire',
        'Skillful use of understatement, tone modulation, and irony'
      ],
      growthAreas: isRu ? [
        'Защита проектов под давлением агрессивных вопросов стейкхолдеров',
        'Подготовка к получению наивысшего балла 8.5–9.0 по международным тестам',
        'Фонетическая шлифовка для снижения усталости голоса при долгих докладах'
      ] : [
        'High-stakes boardroom grilling and unscripted keynote defense',
        'Targeting Band 8.5+ in international language credentials',
        'Phonological refinement for effortless vocal resonance'
      ],
      recommendedCourseSlug: 'business-english',
      recommendedCourseTitle: isRu ? 'Business English & Executive Presence' : 'Business English & Executive Presence'
    };
  }
};

export const quizQuestions: QuizQuestion[] = quizQuestionsEn;
