export const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Impact', href: '#impact' },
  { label: 'Journey', href: '#journey' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Stories', href: '#stories' },
  { label: 'Connect', href: '#contact' },
]

export const HERO_FALLBACK = {
  headline: 'MASTERING HUMAN POTENTIAL',
  subtitle:
    'Helping students, professionals, and leaders develop emotional intelligence, communication, and lifelong learning habits.',
  ctaPrimary: 'Book a Session',
  ctaSecondary: 'Watch Journey',
  trustItems: ['Times Edu Ex Award 2024', 'Outstanding National Trainer 2020', '500+ Lives Impacted'],
}

export const PILLARS = [
  {
    title: 'Self Awareness',
    description:
      'Understanding your thoughts, emotions, and behaviors is the foundation of all growth. Through evidence-based techniques, I help individuals develop deep self-awareness that transforms how they show up in every area of life.',
    icon: 'eye',
  },
  {
    title: 'Communication',
    description:
      'Clear, empathetic communication is the bridge between confusion and connection. My approach helps people express themselves with confidence while truly hearing others.',
    icon: 'message-circle',
  },
  {
    title: 'Emotional Intelligence',
    description:
      'EQ is the strongest predictor of personal and professional success. I teach practical frameworks to recognize, understand, and manage emotions — both your own and others.',
    icon: 'heart',
  },
  {
    title: 'Leadership',
    description:
      'True leadership begins with self-leadership. I mentor emerging leaders to build authentic influence, inspire teams, and create environments where people thrive.',
    icon: 'zap',
  },
  {
    title: 'Growth',
    description:
      'Continuous learning and adaptability define a fulfilling life. I guide individuals and organizations to embrace growth mindsets and build systems for lasting development.',
    icon: 'trending-up',
  },
]

export const IMPACT_AREAS = [
  {
    title: 'Emotional Intelligence',
    subtitle: 'The foundation of human potential',
    description:
      'Emotional intelligence is not just a skill — it is the operating system for how we navigate life. My approach combines evidence-based psychology with Tamil-first communication to make EI accessible and practical. From boardrooms to classrooms, I help people develop the self-awareness, empathy, and social skills that define exceptional individuals.',
    metrics: [
      { value: '500+', label: 'Individuals Trained' },
      { value: '96%', label: 'Report Improved EQ' },
      { value: '50+', label: 'Workshops Delivered' },
    ],
    variant: 'split' as const,
  },
  {
    title: 'Communication',
    subtitle: 'Turning confusion into clarity',
    description:
      'Most conflicts are not about what was said, but what was heard. I teach communication as a science and an art — covering everything from feedback systems and accountability to public speaking and assertive expression. My clients learn to communicate with precision, empathy, and impact.',
    metrics: [
      { value: '200+', label: 'Communication Sessions' },
      { value: '85%', label: 'Report Better Relationships' },
    ],
    variant: 'full' as const,
  },
  {
    title: 'Leadership',
    subtitle: 'From managing to inspiring',
    description:
      'Leadership is not a title — it is a way of being. Through my mentorship programs and workshops, emerging leaders learn to build authentic influence, navigate difficult conversations, and create cultures where people feel valued and motivated to do their best work.',
    metrics: [
      { value: '100+', label: 'Leaders Mentored' },
      { value: '93%', label: 'Report Increased Confidence' },
    ],
    variant: 'diagonal' as const,
  },
  {
    title: 'Counselling & Career Guidance',
    subtitle: 'Supporting life transitions',
    description:
      'Life presents challenges that require expert guidance. With a Post Graduate Diploma in Counselling Psychology and years of experience, I provide compassionate, professional support for students and professionals navigating critical life transitions — from career choices to personal well-being.',
    services: ['Student Counselling', 'Career Guidance', 'Stress Management', 'Anger Management'],
    variant: 'grid' as const,
  },
]

export const TIMELINE_FALLBACK = [
  {
    year: 2018,
    title: 'Microsoft Global Education Exchange',
    organization: 'Microsoft',
    description:
      'Participated in the Microsoft Global Education Exchange in Singapore. Mentored a team that achieved Second Runner Up for Algorithmic Thinking.',
  },
  {
    year: 2020,
    title: 'Outstanding National Trainer',
    organization: 'ISTD',
    description: 'Awarded Outstanding National Trainer in recognition of excellence in training and development.',
  },
  {
    year: 2022,
    title: 'Outstanding JCI Senator',
    organization: 'JCI',
    description: 'Recognized as an Outstanding JCI Senator for contributions to community leadership and service.',
  },
  {
    year: 2024,
    title: 'Times Edu Ex Award',
    organization: 'Times of India',
    description: 'Received the Times Edu Ex Award for outstanding contribution to education and training.',
  },
]

export const PODCAST_FALLBACK = {
  title: "Chandru's Psychology In Tamil",
  description:
    'A Tamil-language podcast exploring emotional intelligence, psychology, communication, and personal growth. Each episode delivers practical insights you can apply immediately.',
  spotifyUrl: 'https://open.spotify.com/show/chandrus-psychology-in-tamil',
  featuredEpisode: {
    title: 'The Accountability Ladder',
    description: 'Taking ownership of your actions and climbing toward personal excellence.',
    duration: '18 min',
    episodeNumber: 2,
  },
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
  {
    name: 'R. Priya',
    role: 'Student',
    organization: 'VVNKM Sr Sec School',
    quote:
      "Chandru sir's career guidance session was eye-opening. His practical advice helped me choose the right path after XII. I now feel confident about my future.",
  },
  {
    name: 'Karthik S.',
    role: 'HR Manager',
    organization: 'Corporate Client',
    quote:
      'His emotional intelligence workshop transformed how our team communicates. The practical exercises on empathy and feedback had an immediate positive impact that we still reference in our daily work.',
  },
  {
    name: 'M. Divya',
    role: 'Listener',
    organization: 'Spotify',
    quote:
      'The podcast on accountability changed how I approach my daily work. So practical and clear — I listen to every episode on my commute.',
  },
  {
    name: 'Vikram R.',
    role: 'Workshop Participant',
    quote:
      "Chandru's sessions on stress management helped me navigate a very difficult period. His compassionate approach and practical strategies made all the difference.",
  },
]

export const CONTACT_FALLBACK = {
  location: 'Hosur, Tamil Nadu, India',
  instagram: ['@chandra_choodeshwaran', '@chandrudutta'],
  clubhouse: '@chandruhsr',
  email: 'chandrachoodeshwaran@gmail.com',
}

export const PERSON_FALLBACK = {
  name: 'Chandrachoodeshwaran M',
  tagline: 'Emotional Intelligence Coach & Trainer',
  positioning: 'Helping people communicate, lead, and grow through emotional intelligence.',
  location: 'Hosur, Tamil Nadu',
  specialties: ['Soft Skills Training', 'Counselling', 'Emotional Intelligence', 'Instructional Design'],
}
