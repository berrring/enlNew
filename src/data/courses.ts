import type { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: 'general-english',
    slug: 'general-english',
    title: 'General English',
    tagline: 'Build a durable, natural foundation for daily international communication.',
    category: 'General',
    level: 'A2 to B2',
    duration: '12 Weeks',
    hoursPerWeek: '4 hours / week',
    format: 'Small Cohort (3-5)',
    indicativePrice: 165,
    popular: true,
    featured: true,
    shortDescription: 'Master spontaneous conversation, core grammar structures, and everyday idioms used across multilingual European cities.',
    fullDescription: 'Our General English program is crafted for European adults and university students who want to break free from textbook stiffness. Rather than drilling isolated grammar tables, each 90-minute session anchors new vocabulary and functional syntax in real-world scenarios: negotiating a rental lease in Dublin, hosting an international dinner, discussing news events, and writing clear personal correspondence.',
    targetAudience: [
      'Adults returning to English after school or university',
      'Erasmus students preparing for an academic exchange',
      'Professionals needing conversational ease during international travel',
      'Anyone feeling self-conscious when speaking in public'
    ],
    learningOutcomes: [
      'Express nuanced opinions and debate contemporary topics comfortably',
      'Eliminate frequent false-friend mistakes common across European languages',
      'Understand native speech in diverse British, Irish, and North American accents',
      'Master essential past, conditional, and modal structures without hesitation',
      'Compose polished personal emails, invitations, and everyday inquiries'
    ],
    curriculum: [
      {
        week: 'Weeks 1–3',
        title: 'Spontaneous Interaction & Conversational Agility',
        description: 'Overcoming hesitation, small talk protocols, asking follow-up questions, and active listening techniques.',
        keyOutcomes: ['Small talk fluency', 'Narrating personal anecdotes', 'Overcoming mental translation']
      },
      {
        week: 'Weeks 4–6',
        title: 'Idiomatic European Living & Everyday Problem Solving',
        description: 'Travel scenarios, administrative calls, expressing polite disagreement, and describing complex feelings.',
        keyOutcomes: ['Polite requests & complaints', 'Expressing doubt and certainty', 'Colloquial phrasal verbs']
      },
      {
        week: 'Weeks 7–9',
        title: 'Media Literacy & Opinion Exchange',
        description: 'Analyzing articles from The Guardian and BBC, structuring balanced arguments, and informal debates.',
        keyOutcomes: ['Debating current affairs', 'Nuanced connectors (however, whereas)', 'Critical listening']
      },
      {
        week: 'Weeks 10–12',
        title: 'Consolidation, Fluency Capstone & Live Panel',
        description: 'Simulated round-table discussions with guest tutors and personalized pronunciation audits.',
        keyOutcomes: ['30-minute unscripted conversation exam', 'Personalized grammar error blueprint', 'CEFR progress evaluation']
      }
    ],
    schedules: [
      { days: 'Tue & Thu', timeCET: '18:30 – 20:30 CET', format: 'Live Virtual Classroom' },
      { days: 'Mon & Wed', timeCET: '09:00 – 11:00 CET', format: 'Morning Cohort' },
      { days: 'Saturday Intensive', timeCET: '10:00 – 14:00 CET', format: 'Weekend Workshop' }
    ],
    methodology: 'The Lexical Approach combined with Task-Based Language Teaching (TBLT). 70% student speaking time in every session with instant transcription and corrective feedback delivered in personal study portals.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#345BEF'
  },
  {
    id: 'conversational-english',
    slug: 'conversational-english',
    title: 'Conversational English',
    tagline: 'Speak with confidence, charisma, and cultural fluency in any setting.',
    category: 'Conversation',
    level: 'B1 to C1',
    duration: '8 Weeks',
    hoursPerWeek: '3 hours / week',
    format: 'Small Cohort (3-5)',
    indicativePrice: 145,
    popular: true,
    featured: true,
    shortDescription: 'Ditch the robotic phrasing. Learn humor, idiomatic phrasing, rapid discourse markers, and real-time social confidence.',
    fullDescription: 'Do you understand 90% of English podcasts but freeze when asked your opinion at a drinks reception? This course bridges the gap between passive listening and active, expressive speech. In intimate groups of max 5 students, you will navigate humorous topics, ethical quandaries, cultural differences across Europe, and spontaneous storytelling without second-guessing every word.',
    targetAudience: [
      'Intermediate to advanced learners stuck in "good comprehension, slow speech"',
      'Expats living in Berlin, Amsterdam, Paris, or Zurich socializing in English',
      'Remote workers wanting to chat naturally with international teammates during coffee breaks',
      'People preparing for vacations, weddings, or social gatherings abroad'
    ],
    learningOutcomes: [
      'Master natural discourse markers (e.g., "mind you", "to be fair", "by all means")',
      'Tell engaging stories and jokes using rhythmic intonation and pacing',
      'Interrupt, steer, and join fast-moving conversations gracefully',
      'Handle sensitive discussions with diplomatic and indirect politeness',
      'Reduce filler sounds ("um", "uh") and replace them with natural thinking pauses'
    ],
    curriculum: [
      {
        week: 'Weeks 1–2',
        title: 'Storytelling & The Art of The Anecdote',
        description: 'Using past narrative tenses, punchlines, dramatic timing, and vivid sensory adjectives.',
        keyOutcomes: ['Engaging conversational hooks', 'Humor and dry irony', 'Narrative arc']
      },
      {
        week: 'Weeks 3–4',
        title: 'Social Banter, Cocktail Talk & Diplomatic Disagreement',
        description: 'Transitioning between casual and witty banter. Disagreeing warmly without causing friction.',
        keyOutcomes: ['Nuanced social vocabulary', 'Softening statements', 'Reading cultural subtext']
      },
      {
        week: 'Weeks 5–6',
        title: 'Modern Culture, Pop Science & Philosophy Cafe',
        description: 'Engaging in abstract intellectual exchanges on technology, psychology, art, and cinema.',
        keyOutcomes: ['Abstract concepts vocabulary', 'Synthesizing conflicting viewpoints', 'Metaphors & idioms']
      },
      {
        week: 'Weeks 7–8',
        title: 'Spontaneous Speaking Under Pressure',
        description: 'Table topics, impromptu 2-minute speeches, and dynamic simulated cocktail parties.',
        keyOutcomes: ['Speech flow continuity', 'Automaticity under time pressure', 'Final fluency recording comparison']
      }
    ],
    schedules: [
      { days: 'Wed & Fri', timeCET: '19:00 – 20:30 CET', format: 'Evening Conversation Salon' },
      { days: 'Tue & Thu', timeCET: '12:30 – 14:00 CET', format: 'Lunchtime Express' }
    ],
    methodology: 'Pure communicative immersion. No grammar worksheets during class; grammar is addressed post-class in personalized diagnostic voice notes from your instructor.',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#F4C96B'
  },
  {
    id: 'business-english',
    slug: 'business-english',
    title: 'Business English & Executive Presence',
    tagline: 'Command international boardrooms, negotiate contracts, and write crisp executive summaries.',
    category: 'Business',
    level: 'B2 to C2',
    duration: '10 Weeks',
    hoursPerWeek: '4 hours / week',
    format: '1-on-1 Mentorship',
    indicativePrice: 245,
    popular: true,
    featured: true,
    shortDescription: 'Tailored for European managers, tech leads, consultants, and founders communicating with cross-border stakeholders.',
    fullDescription: 'Corporate English in European multinational hubs requires precision, diplomacy, and persuasive clarity. Led by educators with corporate experience in London, Frankfurt, and Zurich, this course prepares you to lead cross-functional sprints, present to venture capitalists, pitch enterprise clients, and resolve escalations diplomatically.',
    targetAudience: [
      'Tech leads, project managers, and team leads at multinational firms',
      'Consultants and lawyers drafting international deliverables',
      'Founders raising funds or expanding to UK/US markets',
      'Mid-career professionals seeking promotion into senior leadership'
    ],
    learningOutcomes: [
      'Deliver persuasive 15-minute executive presentations with crisp slide narration',
      'Negotiate terms, trade-offs, and deadlines assertively without aggression',
      'Write razor-sharp memos, executive summaries, and difficult client emails',
      'Master cross-cultural business nuance between Anglo-American and European norms',
      'Handle tough Q&A grilling sessions with poise and data-driven articulation'
    ],
    curriculum: [
      {
        week: 'Weeks 1–2',
        title: 'High-Impact Executive Communication & Email Clarity',
        description: 'The BLUF (Bottom Line Up Front) principle, editing out corporate fluff, and tone calibration.',
        keyOutcomes: ['Flawless business emails', 'Executive presence tone', 'Managing upward communication']
      },
      {
        week: 'Weeks 3–5',
        title: 'Presenting Data, Vision & Strategic Roadmaps',
        description: 'Vocal projection, pausing for emphasis, narrating charts, and telling stories through figures.',
        keyOutcomes: ['Deck delivery mastery', 'Data storytelling', 'Handling disruptive questions']
      },
      {
        week: 'Weeks 6–8',
        title: 'The Art of Principled Negotiation & Conflict Mediation',
        description: 'Harvard Negotiation Project frameworks in English: anchoring, concessions, and de-escalation.',
        keyOutcomes: ['Deal-making vocabulary', 'Firm diplomacy', 'Contractual precision']
      },
      {
        week: 'Weeks 9–10',
        title: 'Simulated Boardroom Pitch & Executive Review',
        description: 'A mock investor/executive committee session with live peer feedback and video analysis.',
        keyOutcomes: ['Polished capstone presentation', 'Recorded executive performance audit', 'Certificate of Executive English']
      }
    ],
    schedules: [
      { days: 'Flexible 1-on-1', timeCET: 'Custom slots between 07:30 – 21:00 CET', format: 'Private Video Mentorship' },
      { days: 'Tue & Thu Cohort', timeCET: '08:00 – 09:30 CET', format: 'Early Executive Cohort' }
    ],
    methodology: 'Case-method learning and simulation. Students bring real presentations and email drafts (under strict NDA) to class for live executive redlining and rehearsal.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#18243A'
  },
  {
    id: 'ielts-preparation',
    slug: 'ielts-preparation',
    title: 'IELTS Academic & General Masterclass',
    tagline: 'Target Band 7.5+ with calibrated strategies from experienced British council examiners.',
    category: 'Exams',
    level: 'B1+ to C2',
    duration: '8 Weeks',
    hoursPerWeek: '5 hours / week',
    format: 'Small Cohort (3-5)',
    indicativePrice: 195,
    popular: true,
    featured: true,
    shortDescription: 'Rigorous exam strategy, timed essay grading, and mock speaking tests designed to hit target university and visa bands.',
    fullDescription: 'IELTS is not just a language test—it is a speed and strategy test. Whether you need Band 7.0 for a German or Dutch master’s degree, Band 7.5 for UK GMC medical registration, or Band 8 for Canadian express entry, our curriculum deconstructs the rubric with mathematical precision.',
    targetAudience: [
      'University applicants targeting UK, EU, or US English-taught degree programs',
      'Medical professionals, doctors, and nurses seeking GMC/NMC recognition',
      'Skilled immigrants applying for UK, Canadian, or Australian points visas',
      'Students stuck at Band 6.0/6.5 needing that final breakthrough to 7.5+'
    ],
    learningOutcomes: [
      'Master Task 1 visual descriptions (graphs, maps, processes) in under 20 minutes',
      'Structure Task 2 discursive essays with cohesive devices and sophisticated lexical resources',
      'Excel in the Part 2 Speaking "long turn" with zero hesitation or topic deviation',
      'Identify traps, distractors, and paraphrase patterns in rapid Listening sections',
      'Skim, scan, and extract answers from dense academic reading passages under strict time limits'
    ],
    curriculum: [
      {
        week: 'Weeks 1–2',
        title: 'Diagnostic Benchmark & Writing Task 1 Formulae',
        description: 'Complete baseline mock exam. Detailed breakdown of data trends, overview sentences, and comparison vocabulary.',
        keyOutcomes: ['Accurate Band diagnostic', 'Task 1 visual analysis', 'Lexical variation formulas']
      },
      {
        week: 'Weeks 3–4',
        title: 'Writing Task 2: Advanced Cohesion & Argumentation',
        description: 'Problem-solution, opinion, and two-sided essays. Using Band 8+ academic collocations without over-complication.',
        keyOutcomes: ['Band 7.5+ paragraph architecture', 'Counter-argument refutation', 'Timed essay drills']
      },
      {
        week: 'Weeks 5–6',
        title: 'Reading Traps, Speed Skimming & Listening Accuracy',
        description: 'True/False/Not Given mastery, headings matching, section 4 academic lecture tracking.',
        keyOutcomes: ['Reading speed +35%', 'Eliminating distractor errors', 'Spelling precision']
      },
      {
        week: 'Weeks 7–8',
        title: 'Full 1-on-1 Speaking Mocks & 3 Full Simulated Exams',
        description: 'Full simulation of speaking tests with recorded audio critique and two full timed mock exams.',
        keyOutcomes: ['Target band test confidence', 'Examiner rubric deconstruction', 'Exam day readiness plan']
      }
    ],
    schedules: [
      { days: 'Mon, Wed & Fri', timeCET: '18:00 – 19:40 CET', format: 'Intensive Evening Group' },
      { days: 'Sat & Sun', timeCET: '10:00 – 12:30 CET', format: 'Weekend Sprint' }
    ],
    methodology: 'Examiner-led rubric calibration with weekly blind grading of 2 written essays and 1 speaking recording per student, evaluated strictly according to official IELTS public descriptors.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#345BEF'
  },
  {
    id: 'academic-writing-and-presentation',
    slug: 'academic-writing-and-presentation',
    title: 'Academic Writing & Research Presentation',
    tagline: 'Draft publishable research papers and deliver compelling conference presentations.',
    category: 'Specialized',
    level: 'B2 to C2',
    duration: '6 Weeks',
    hoursPerWeek: '3 hours / week',
    format: 'Semi-Private (2 students)',
    indicativePrice: 175,
    popular: false,
    featured: false,
    shortDescription: 'For PhD candidates, researchers, and university lecturers submitting to peer-reviewed journals and international symposiums.',
    fullDescription: 'Publishing in international journals requires adherence to rigorous Anglo-American academic writing conventions. Learn the subtle art of academic hedging, seamless citation integration, abstract writing that captivates peer reviewers, and confident keynote delivery.',
    targetAudience: [
      'PhD researchers and postdoctoral fellows in STEM, economics, or social sciences',
      'European university faculty delivering lectures in English',
      'Master’s students preparing a high-stakes final dissertation'
    ],
    learningOutcomes: [
      'Structure IMRaD (Introduction, Methods, Results, Discussion) papers with academic rigor',
      'Deploy academic hedging ("suggests", "tends to indicate") accurately',
      'Design slide decks optimized for cognitive flow and scientific clarity',
      'Defend research methodologies during tough academic symposium panels'
    ],
    curriculum: [
      {
        week: 'Weeks 1–2',
        title: 'Abstract Writing & Academic Register',
        description: 'Writing high-impact 250-word abstracts and mastering formal vocabulary.',
        keyOutcomes: ['Abstract perfection', 'Hedging markers', 'Passive vs. active voice in journals']
      },
      {
        week: 'Weeks 3–4',
        title: 'Literature Review & Discussion Sections',
        description: 'Synthesizing conflicting studies and asserting research significance.',
        keyOutcomes: ['Citation syntax', 'Critical appraisal', 'Signposting']
      },
      {
        week: 'Weeks 5–6',
        title: 'Conference Presentation Delivery & Defense',
        description: 'Simulated 12-minute conference talk with live 3-minute faculty defense.',
        keyOutcomes: ['Voice projection', 'Slide narration', 'Handling critical reviewers']
      }
    ],
    schedules: [
      { days: 'Thursday Evenings', timeCET: '18:30 – 21:00 CET', format: 'Semi-Private Seminar' }
    ],
    methodology: 'Manuscript clinic approach where your actual research draft receives line-by-line editorial feedback and stylistic polishing.',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#2F5238'
  },
  {
    id: 'pronunciation-and-accent-clarity',
    slug: 'pronunciation-and-accent-clarity',
    title: 'Accent Clarity & Vocal Confidence',
    tagline: 'Refine intonation, connected speech, and phonetics for effortless international understanding.',
    category: 'Specialized',
    level: 'B1 to C2',
    duration: '6 Weeks',
    hoursPerWeek: '2.5 hours / week',
    format: '1-on-1 Mentorship',
    indicativePrice: 185,
    popular: false,
    featured: false,
    shortDescription: 'We celebrate your cultural identity while eliminating pronunciation friction that hinders effortless clarity in professional settings.',
    fullDescription: 'Our goal is not to erase your European heritage—it is to grant you phonological clarity, vocal stamina, and confident prosody. We focus on connected speech, word stress, linking, and vowel distinctions that prevent listeners from having to strain to understand your brilliant ideas.',
    targetAudience: [
      'Professionals whose English is grammatically sound but often asked to repeat themselves',
      'Public speakers, podcasters, and YouTube creators speaking to international audiences',
      'Executives who experience vocal fatigue after long meetings in English'
    ],
    learningOutcomes: [
      'Master English rhythm (stress-timed versus syllable-timed speech)',
      'Use linking and elision to sound fluid rather than staccato',
      'Differentiate troublesome vowel pairs (e.g., ship/sheep, bed/bad)',
      'Utilize breath support and vocal resonance for commanding presence'
    ],
    curriculum: [
      {
        week: 'Weeks 1–2',
        title: 'Phonetic Audit & Rhythm Architecture',
        description: 'Personalized acoustic analysis of your speech. Stress-timing fundamentals.',
        keyOutcomes: ['Personal phoneme error map', 'Stress-timed rhythm drills', 'Pitch variation']
      },
      {
        week: 'Weeks 3–4',
        title: 'Connected Speech & Vowel Nuance',
        description: 'Intrusive sounds, glottal stops, schwa vowel domination, and consonant clusters.',
        keyOutcomes: ['Smooth sentence linking', 'The magic of the Schwa /ə/', 'Consonant cluster mastery']
      },
      {
        week: 'Weeks 5–6',
        title: 'Intonation, Emotion & Public Resonance',
        description: 'Falling vs. rising tones for questions, authority, warmth, and public speaking projection.',
        keyOutcomes: ['Tone markers of authority', 'Vocal endurance warmup routines', 'Final before/after speech comparison']
      }
    ],
    schedules: [
      { days: 'Flexible 1-on-1', timeCET: 'Weekly 60-min private clinic + self-guided audio drills', format: 'Private Acoustic Coaching' }
    ],
    methodology: 'Acoustic waveform analysis and theatrical voice training adapted for business communicators, led by certified phoneticians.',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#18243A'
  }
];
