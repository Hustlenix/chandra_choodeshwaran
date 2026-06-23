// ====================================================================
// CHANDRACHOODESHWARAN M — Complete Content Constants
// ====================================================================

// ─── Navigation ────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: 'Framework', href: '#human-os' },
  { label: 'Pillars', href: '#five-pillars' },
  { label: 'Frameworks', href: '#frameworks' },
  { label: 'Journey', href: '#recognition' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Voices', href: '#voices' },
  { label: 'Connect', href: '#connect' },
]

// ─── Person Info ───────────────────────────────────────────────────
export const PERSON_FALLBACK = {
  name: 'Chandrachoodeshwaran M',
  tagline: 'Trainer · Counsellor · Emotional Intelligence Specialist',
  positioning: 'Helping people communicate, lead, and grow through emotional intelligence.',
  location: 'Hosur, Tamil Nadu',
  specialties: ['Soft Skills Training', 'Counselling', 'Emotional Intelligence', 'Instructional Design'],
}

// ─── Section 1: Opening Statement ──────────────────────────────────
export const OPENING_CONTENT = {
  badge: 'CHANDRACHOODESHWARAN M',
  headline: 'UNDERSTANDING PEOPLE CHANGES EVERYTHING',
  subtitle: 'The quality of your life follows the quality of your thinking.',
}

// ─── Section 2: The Human Operating System ─────────────────────────
export const HUMAN_OS = {
  badge: 'FRAMEWORK',
  title: 'The Human Operating System',
  subtitle: 'Five interconnected capacities that define how we navigate life, relate to others, and grow.',
  pillars: [
    {
      id: 'self-awareness',
      title: 'Self Awareness',
      description:
        'Understanding your thoughts, emotions, and behaviors is the foundation of all growth. Through evidence-based techniques and reflective practices, I help individuals develop deep self-awareness that transforms how they show up in every area of life.',
      icon: 'eye',
    },
    {
      id: 'emotional-intelligence',
      title: 'Emotional Intelligence',
      description:
        'EQ is the strongest predictor of personal and professional success. I teach practical frameworks to recognize, understand, and manage emotions — both your own and others — creating deeper connections and better decisions.',
      icon: 'heart',
    },
    {
      id: 'communication',
      title: 'Communication',
      description:
        'Clear, empathetic communication is the bridge between confusion and connection. My approach helps people express themselves with precision and confidence while truly hearing what others are saying.',
      icon: 'message-circle',
    },
    {
      id: 'leadership',
      title: 'Leadership',
      description:
        'True leadership begins with self-leadership. I mentor emerging leaders to build authentic influence, inspire teams, and create environments where people feel valued, heard, and motivated to do their best work.',
      icon: 'zap',
    },
    {
      id: 'growth',
      title: 'Growth',
      description:
        'Continuous learning and adaptability define a fulfilling life. I guide individuals and organizations to embrace growth mindsets, build systems for lasting development, and turn potential into performance.',
      icon: 'trending-up',
    },
  ],
}

// ─── Section 3: Why People Struggle To Grow ────────────────────────
export const STRUGGLE_CONTENT = {
  badge: 'THE BARRIER',
  title: 'Why People Struggle To Grow',
  subtitle: 'Growth is natural — but something blocks it. These are the four walls most people hit.',
  points: [
    {
      id: 'knowing-doing',
      number: '01',
      title: 'The Knowing–Doing Gap',
      description:
        'You understand the concept. You have read the book. You agree with the theory. But when it is time to act, something stops you. Knowledge without application is just information. The gap between knowing and doing is where most growth dies.',
      icon: 'brain',
    },
    {
      id: 'emotional-blindspots',
      number: '02',
      title: 'Emotional Blind Spots',
      description:
        'We all have patterns we cannot see. Reactions that feel automatic. Triggers we do not understand. Without someone to hold up a mirror, these blind spots remain invisible — and they keep us stuck in cycles we cannot break.',
      icon: 'eye-off',
    },
    {
      id: 'missing-frameworks',
      number: '03',
      title: 'Missing Frameworks',
      description:
        'Willpower is not a strategy. Most people try to grow without a system — relying on motivation that fades, goals that drift, and habits that never stick. Without a framework, growth becomes a series of false starts.',
      icon: 'grid',
    },
    {
      id: 'isolation',
      number: '04',
      title: 'Isolation in Growth',
      description:
        'Growth is personal, but it does not happen alone. Without accountability, feedback, and a community that challenges you, it is easy to settle. The most transformative growth happens when someone walks with you.',
      icon: 'users',
    },
  ],
}

// ─── Section 4: The Five Pillars ───────────────────────────────────
export const FIVE_PILLARS = [
  {
    id: 'self-awareness',
    number: 'Pillar One',
    title: 'Self Awareness',
    subtitle: 'The Foundation of All Growth',
    description:
      'Before you can lead others, communicate effectively, or manage emotions — you must first understand yourself. Self-awareness is not introspection. It is the ability to see yourself clearly, recognize your patterns, and understand how your thoughts shape your reality. This is where every transformation begins.',
    metrics: [
      { value: '500+', label: 'Individuals Trained' },
      { value: '96%', label: 'Report Improved Self-Awareness' },
      { value: '50+', label: 'Workshops Delivered' },
    ],
    variant: 'split' as const,
    visualType: 'mirror',
  },
  {
    id: 'emotional-intelligence',
    number: 'Pillar Two',
    title: 'Emotional Intelligence',
    subtitle: 'The Operating System of Human Interaction',
    description:
      'Emotional intelligence is the single strongest predictor of personal and professional success — stronger than IQ, stronger than technical skills. It is the ability to recognize, understand, and manage emotions in yourself and others. From boardrooms to classrooms, EI determines how far you go.',
    metrics: [
      { value: '300+', label: 'EI Sessions Conducted' },
      { value: '89%', label: 'Report Stronger Relationships' },
    ],
    variant: 'full-width' as const,
    visualType: 'waves',
  },
  {
    id: 'communication',
    number: 'Pillar Three',
    title: 'Communication',
    subtitle: 'Turning Confusion Into Clarity',
    description:
      'Most conflicts are not about what was said — they are about what was heard. Communication is a science and an art. It is feedback systems and accountability. It is public speaking and active listening. It is knowing when to speak and when to stay silent. My clients learn to communicate with precision, empathy, and impact.',
    metrics: [
      { value: '200+', label: 'Communication Sessions' },
      { value: '85%', label: 'Report Better Relationships' },
    ],
    variant: 'diagonal' as const,
    visualType: 'network',
  },
  {
    id: 'leadership',
    number: 'Pillar Four',
    title: 'Leadership',
    subtitle: 'From Managing to Inspiring',
    description:
      'Leadership is not a title — it is a way of being. Real leadership starts with self-leadership. Through mentorship programs and immersive workshops, emerging leaders learn to build authentic influence, navigate difficult conversations, and create cultures where people feel valued and motivated.',
    metrics: [
      { value: '100+', label: 'Leaders Mentored' },
      { value: '93%', label: 'Report Increased Confidence' },
    ],
    variant: 'grid' as const,
    visualType: 'compass',
  },
  {
    id: 'growth',
    number: 'Pillar Five',
    title: 'Growth',
    subtitle: 'A Lifelong System for Human Potential',
    description:
      'Growth is not a destination — it is a system. The ability to continuously learn, adapt, and evolve defines a fulfilling life. I guide individuals and organizations to build growth architectures: habits, feedback loops, and mindsets that compound over time to create lasting transformation.',
    metrics: [
      { value: '15+', label: 'Years of Experience' },
      { value: '1000+', label: 'Lives Impacted' },
    ],
    variant: 'split-mirrored' as const,
    visualType: 'ascent',
  },
]

// ─── Section 5: Transformation Frameworks ──────────────────────────
export const FRAMEWORKS = {
  badge: 'HOW IT WORKS',
  title: 'Transformation Frameworks',
  subtitle: 'Proven systems developed through a decade of training, counselling, and real-world application.',
  frameworks: [
    {
      id: 'accountability-ladder',
      name: 'The Accountability Ladder',
      description:
        'A five-rung framework that transforms how people take ownership of their actions. From denial to ownership — each rung represents a higher level of personal responsibility.',
      type: 'ladder' as const,
      steps: [
        { label: 'Awareness', description: 'Recognizing the situation without judgment' },
        { label: 'Acknowledgment', description: 'Accepting your role in the outcome' },
        { label: 'Acceptance', description: 'Embracing reality as it is, not as you wish it to be' },
        { label: 'Ownership', description: 'Taking full responsibility for your response' },
        { label: 'Action', description: 'Moving forward with purpose and commitment' },
      ],
    },
    {
      id: 'feedback-system',
      name: 'The Feedback System',
      description:
        'A continuous loop for giving and receiving feedback that builds trust instead of defensiveness. Used in corporate workshops and counselling sessions alike.',
      type: 'loop' as const,
      steps: [
        { label: 'Give', description: 'Frame feedback with empathy and specificity' },
        { label: 'Receive', description: 'Listen without defensiveness' },
        { label: 'Process', description: 'Separate signal from noise' },
        { label: 'Apply', description: 'Turn insight into action' },
      ],
    },
    {
      id: 'communication-matrix',
      name: 'The Communication Matrix',
      description:
        'A 2x2 framework that maps intent against impact — revealing where communication breaks down and how to rebuild it with clarity and empathy.',
      type: 'matrix' as const,
      steps: [
        { label: 'Intent', description: 'What you mean to convey' },
        { label: 'Expression', description: 'How you deliver the message' },
        { label: 'Perception', description: 'How the message is received' },
        { label: 'Impact', description: 'The actual effect on the listener' },
      ],
    },
  ],
}

// ─── Section 6: Recognition Journey ────────────────────────────────
export const JOURNEY_MILESTONES = [
  {
    year: 2018,
    title: 'Microsoft Global Education Exchange',
    organization: 'Microsoft',
    description:
      'Selected to represent at the Microsoft Global Education Exchange in Singapore. Mentored a team that achieved Second Runner Up for Algorithmic Thinking — a testament to the power of guided learning and structured thinking.',
    visualAccent: 'grid',
    color: 'from-blue-500/20 to-transparent',
  },
  {
    year: 2020,
    title: 'Outstanding National Trainer',
    organization: 'ISTD',
    description:
      'Awarded Outstanding National Trainer by the Indian Society for Training and Development. Recognized for excellence in designing and delivering transformative learning experiences across India.',
    visualAccent: 'streak',
    color: 'from-gold-500/20 to-transparent',
  },
  {
    year: 2022,
    title: 'Outstanding JCI Senator',
    organization: 'JCI',
    description:
      'Recognized as an Outstanding JCI Senator for exceptional contributions to community leadership and service. A reflection of the belief that growth extends beyond the individual — it serves the community.',
    visualAccent: 'halo',
    color: 'from-tertiary-indigo/20 to-transparent',
  },
  {
    year: 2024,
    title: 'Times Edu Ex Award',
    organization: 'Times of India',
    description:
      'Received the Times Edu Ex Award for outstanding contribution to education and training. A milestone that underscores a decade-long commitment to making emotional intelligence and human development accessible to all.',
    visualAccent: 'burst',
    color: 'from-tertiary-coral/20 to-transparent',
  },
]

// ─── Section 7: Podcast Universe ───────────────────────────────────
export const PODCAST_DATA = {
  badge: 'LISTEN',
  title: 'Chandru\'s Psychology In Tamil',
  subtitle:
    'A Tamil-language podcast exploring emotional intelligence, psychology, communication, and personal growth. Each episode delivers practical insights you can apply immediately.',
  spotifyUrl: 'https://open.spotify.com/show/7jte6TL6cXPKVdqgO2jqqu',
  tamilMotto: 'மனதுக்கு ஒரு குரல்',
  themes: [
    { id: 'all', label: 'All Episodes' },
    { id: 'emotional-intelligence', label: 'Emotional Intelligence' },
    { id: 'communication', label: 'Communication' },
    { id: 'empathy', label: 'Empathy' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'psychology', label: 'Psychology' },
    { id: 'growth', label: 'Growth' },
  ],
  episodes: [
    {
      title: 'Positive Feedback',
      description: 'The art of giving constructive feedback that builds people up instead of tearing them down.',
      duration: '15 min',
      episodeNumber: 1,
      themes: ['communication', 'leadership'],
    },
    {
      title: 'The Accountability Ladder',
      description: 'Taking ownership of your actions and climbing toward personal excellence. A deep dive into the five rungs.',
      duration: '18 min',
      episodeNumber: 2,
      featured: true,
      themes: ['growth', 'leadership'],
    },
    {
      title: 'Empathy in Detail',
      description: 'Understanding others deeply — the skill that transforms relationships and builds trust.',
      duration: '22 min',
      episodeNumber: 3,
      themes: ['empathy', 'emotional-intelligence'],
    },
    {
      title: 'Types of Insecurity',
      description: 'Recognizing and overcoming the invisible barriers that hold us back from our potential.',
      duration: '20 min',
      episodeNumber: 4,
      themes: ['psychology', 'growth'],
    },
    {
      title: 'You and I Messages',
      description: 'Better communication patterns that reduce conflict and increase understanding in every relationship.',
      duration: '16 min',
      episodeNumber: 5,
      themes: ['communication', 'empathy'],
    },
    {
      title: 'Relationship Management',
      description: 'Building stronger connections through emotional awareness and intentional communication.',
      duration: '19 min',
      episodeNumber: 6,
      themes: ['emotional-intelligence', 'empathy'],
    },
    {
      title: 'The Art of Listening',
      description: 'Why most people hear but do not listen — and how to become the person others feel truly understood by.',
      duration: '21 min',
      episodeNumber: 7,
      themes: ['communication', 'empathy'],
    },
    {
      title: 'Emotional Resilience',
      description: 'Building the inner strength to navigate life\'s challenges without losing yourself.',
      duration: '17 min',
      episodeNumber: 8,
      themes: ['emotional-intelligence', 'psychology', 'growth'],
    },
    {
      title: 'Leading With Heart',
      description: 'How emotional intelligence makes you a better leader — in work, family, and community.',
      duration: '23 min',
      episodeNumber: 9,
      themes: ['leadership', 'emotional-intelligence'],
    },
  ],
}

// ─── Section 8: Voices of Change ───────────────────────────────────
export const VOICES = [
  {
    name: 'R. Priya',
    role: 'Student',
    organization: 'VVNKM Sr Sec School',
    quote:
      "Chandru sir's career guidance session was eye-opening. His practical advice helped me choose the right path after XII. I now feel confident about my future.",
    featured: true,
  },
  {
    name: 'Karthik S.',
    role: 'HR Manager',
    organization: 'Corporate Client',
    quote:
      'His emotional intelligence workshop transformed how our team communicates. The practical exercises on empathy and feedback had an immediate positive impact.',
    featured: true,
  },
  {
    name: 'M. Divya',
    role: 'Regular Listener',
    organization: 'Spotify',
    quote:
      'The podcast on accountability changed how I approach my daily work. So practical and clear — I listen to every episode on my commute.',
    featured: false,
  },
  {
    name: 'Vikram R.',
    role: 'Workshop Participant',
    quote:
      "Chandru's sessions on stress management helped me navigate a very difficult period. His compassionate approach and practical strategies made all the difference.",
    featured: false,
  },
  {
    name: 'S. Lakshmi',
    role: 'School Principal',
    organization: 'Government Higher Secondary School',
    quote:
      'The student counselling program he designed for our school brought remarkable changes. We saw improvement not just in academic performance but in overall student well-being.',
    featured: true,
  },
  {
    name: 'Arun P.',
    role: 'Team Leader',
    organization: 'IT Services Firm',
    quote:
      'I applied the communication matrix framework with my team. Within weeks, our standup meetings went from chaotic to crisp. It is now part of our team culture.',
    featured: false,
  },
  {
    name: 'Ananya M.',
    role: 'Career Counselling Client',
    quote:
      "I was stuck choosing between two career paths. One session with Chandru didn't give me the answer — it gave me the clarity to find it myself. That is real counselling.",
    featured: true,
  },
]

// ─── Section 9: Book a Conversation ────────────────────────────────
export const BOOK_CONVERSATION = {
  badge: 'BEGIN',
  title: 'Book A Conversation',
  subtitle: 'No commitment required. Just a conversation about your goals.',
  ctaLabel: 'Book a Free Discovery Call',
  ctaUrl: 'mailto:chandrachoodeshwaran@gmail.com',
  email: 'chandrachoodeshwaran@gmail.com',
  location: 'Hosur, Tamil Nadu, India',
}

// ─── Footer / Contact ──────────────────────────────────────────────
export const CONTACT_FALLBACK = {
  location: 'Hosur, Tamil Nadu, India',
  instagram: ['@chandra_choodeshwaran', '@chandrudutta'],
  clubhouse: '@chandruhsr',
  email: 'chandrachoodeshwaran@gmail.com',
}

// ─── Legacy (kept for backward compatibility) ──────────────────────
export const HERO_FALLBACK = {
  headline: 'MASTERING HUMAN POTENTIAL',
  subtitle:
    'Helping students, professionals, and leaders develop emotional intelligence, communication, and lifelong learning habits.',
  ctaPrimary: 'Book a Session',
  ctaSecondary: 'Watch Journey',
  trustItems: ['Times Edu Ex Award 2024', 'Outstanding National Trainer 2020', '500+ Lives Impacted'],
}

export const PILLARS = [
  { title: 'Self Awareness', description: 'Understanding your thoughts, emotions, and behaviors is the foundation of all growth.', icon: 'eye' },
  { title: 'Communication', description: 'Clear, empathetic communication is the bridge between confusion and connection.', icon: 'message-circle' },
  { title: 'Emotional Intelligence', description: 'EQ is the strongest predictor of personal and professional success.', icon: 'heart' },
  { title: 'Leadership', description: 'True leadership begins with self-leadership.', icon: 'zap' },
  { title: 'Growth', description: 'Continuous learning and adaptability define a fulfilling life.', icon: 'trending-up' },
]

export const IMPACT_AREAS = [
  { title: 'Emotional Intelligence', subtitle: 'The foundation of human potential', description: 'Emotional intelligence is not just a skill — it is the operating system for how we navigate life.', metrics: [{ value: '500+', label: 'Individuals Trained' }, { value: '96%', label: 'Report Improved EQ' }, { value: '50+', label: 'Workshops Delivered' }], variant: 'split' as const },
  { title: 'Communication', subtitle: 'Turning confusion into clarity', description: 'Most conflicts are not about what was said, but what was heard.', metrics: [{ value: '200+', label: 'Communication Sessions' }, { value: '85%', label: 'Report Better Relationships' }], variant: 'full' as const },
  { title: 'Leadership', subtitle: 'From managing to inspiring', description: 'Leadership is not a title — it is a way of being.', metrics: [{ value: '100+', label: 'Leaders Mentored' }, { value: '93%', label: 'Report Increased Confidence' }], variant: 'diagonal' as const },
  { title: 'Counselling & Career Guidance', subtitle: 'Supporting life transitions', description: 'Life presents challenges that require expert guidance.', services: ['Student Counselling', 'Career Guidance', 'Stress Management', 'Anger Management'], variant: 'grid' as const },
]

export const TIMELINE_FALLBACK = [
  { year: 2018, title: 'Microsoft Global Education Exchange', organization: 'Microsoft', description: 'Participated in the Microsoft Global Education Exchange in Singapore.' },
  { year: 2020, title: 'Outstanding National Trainer', organization: 'ISTD', description: 'Awarded Outstanding National Trainer in recognition of excellence in training and development.' },
  { year: 2022, title: 'Outstanding JCI Senator', organization: 'JCI', description: 'Recognized as an Outstanding JCI Senator for contributions to community leadership and service.' },
  { year: 2024, title: 'Times Edu Ex Award', organization: 'Times of India', description: 'Received the Times Edu Ex Award for outstanding contribution to education and training.' },
]

export const PODCAST_FALLBACK = {
  title: "Chandru's Psychology In Tamil",
  description: 'A Tamil-language podcast exploring emotional intelligence, psychology, communication, and personal growth.',
  spotifyUrl: 'https://open.spotify.com/show/7jte6TL6cXPKVdqgO2jqqu',
  featuredEpisode: { title: 'The Accountability Ladder', description: 'Taking ownership of your actions and climbing toward personal excellence.', duration: '18 min', episodeNumber: 2 },
  episodes: [
    { title: 'Positive Feedback', description: 'The art of giving constructive feedback.', duration: '15 min', episodeNumber: 1 },
    { title: 'The Accountability Ladder', description: 'Taking ownership of your actions.', duration: '18 min', episodeNumber: 2, featured: true },
    { title: 'Empathy in Detail', description: 'Understanding others deeply.', duration: '22 min', episodeNumber: 3 },
    { title: 'Types of Insecurity', description: 'Recognizing and overcoming insecurity.', duration: '20 min', episodeNumber: 4 },
    { title: 'You and I Messages', description: 'Better communication patterns.', duration: '16 min', episodeNumber: 5 },
    { title: 'Relationship Management', description: 'Building stronger connections.', duration: '19 min', episodeNumber: 6 },
  ],
  topicClusters: ['Psychology', 'Communication', 'Empathy', 'Leadership', 'Growth'],
}

export const TESTIMONIALS_FALLBACK = [
  { name: 'R. Priya', role: 'Student', organization: 'VVNKM Sr Sec School', quote: "Chandru sir's career guidance session was eye-opening." },
  { name: 'Karthik S.', role: 'HR Manager', organization: 'Corporate Client', quote: 'His emotional intelligence workshop transformed how our team communicates.' },
  { name: 'M. Divya', role: 'Listener', organization: 'Spotify', quote: 'The podcast on accountability changed how I approach my daily work.' },
  { name: 'Vikram R.', role: 'Workshop Participant', quote: "Chandru's sessions on stress management helped me navigate a very difficult period." },
]
