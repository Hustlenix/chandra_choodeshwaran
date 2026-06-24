// ====================================================================
// CHANDRACHOODESHWARAN M — Legacy Constants
// NOTE: Content has been migrated to src/content/* and src/config/*
// This file retains only backward-compatible references.
// ====================================================================

// ─── Person Info (backward compat) ─────────────────────────────────
export const PERSON_FALLBACK = {
  name: 'Chandra Choodeshwaran M',
  tagline: 'Emotional Intelligence Trainer · Counsellor · Public Speaking Coach',
  positioning: 'Helping people communicate, lead, and grow through emotional intelligence.',
  location: 'Hosur, Tamil Nadu',
  specialties: ['Soft Skills Training', 'Counselling', 'Emotional Intelligence', 'Instructional Design'],
}

// ─── Section content (migrated to src/content/*) ───────────────────
// These remain as backward-compatible exports for sections still
// importing from constants.ts during migration.
export const OPENING_CONTENT = {
  badge: 'CHANDRACHOODESHWARAN M',
  headline: 'UNDERSTANDING PEOPLE CHANGES EVERYTHING',
  subtitle: 'The quality of your life follows the quality of your thinking.',
}

export const HUMAN_OS = {
  badge: 'FRAMEWORK',
  title: 'The Human Operating System',
  subtitle: 'Five interconnected capacities that define how we navigate life, relate to others, and grow.',
  pillars: [
    { id: 'self-awareness', title: 'Self Awareness', description: 'Understanding your thoughts, emotions, and behaviors is the foundation of all growth.', icon: 'eye' },
    { id: 'emotional-intelligence', title: 'Emotional Intelligence', description: 'EQ is the strongest predictor of personal and professional success.', icon: 'heart' },
    { id: 'communication', title: 'Communication', description: 'Clear, empathetic communication is the bridge between confusion and connection.', icon: 'message-circle' },
    { id: 'leadership', title: 'Leadership', description: 'True leadership begins with self-leadership.', icon: 'zap' },
    { id: 'growth', title: 'Growth', description: 'Continuous learning and adaptability define a fulfilling life.', icon: 'trending-up' },
  ],
}

export const FIVE_PILLARS = [
  { id: 'self-awareness', number: 'Pillar One', title: 'Self Awareness', subtitle: 'The Foundation of All Growth', description: 'Before you can lead others, communicate effectively, or manage emotions — you must first understand yourself.', metrics: [{ value: '500+', label: 'Individuals Trained' }, { value: '96%', label: 'Report Improved Self-Awareness' }, { value: '50+', label: 'Workshops Delivered' }], variant: 'split' as const, visualType: 'mirror' },
  { id: 'emotional-intelligence', number: 'Pillar Two', title: 'Emotional Intelligence', subtitle: 'The Operating System of Human Interaction', description: 'Emotional intelligence is the single strongest predictor of personal and professional success.', metrics: [{ value: '300+', label: 'EI Sessions Conducted' }, { value: '89%', label: 'Report Stronger Relationships' }], variant: 'full-width' as const, visualType: 'waves' },
  { id: 'communication', number: 'Pillar Three', title: 'Communication', subtitle: 'Turning Confusion Into Clarity', description: 'Most conflicts are not about what was said — they are about what was heard.', metrics: [{ value: '200+', label: 'Communication Sessions' }, { value: '85%', label: 'Report Better Relationships' }], variant: 'diagonal' as const, visualType: 'network' },
  { id: 'leadership', number: 'Pillar Four', title: 'Leadership', subtitle: 'From Managing to Inspiring', description: 'Leadership is not a title — it is a way of being.', metrics: [{ value: '100+', label: 'Leaders Mentored' }, { value: '93%', label: 'Report Increased Confidence' }], variant: 'grid' as const, visualType: 'compass' },
  { id: 'growth', number: 'Pillar Five', title: 'Growth', subtitle: 'A Lifelong System for Human Potential', description: 'Growth is not a destination — it is a system.', metrics: [{ value: '15+', label: 'Years of Experience' }, { value: '1000+', label: 'Lives Impacted' }], variant: 'split-mirrored' as const, visualType: 'ascent' },
]

export const FRAMEWORKS = {
  badge: 'HOW IT WORKS',
  title: 'Transformation Frameworks',
  subtitle: 'Proven systems developed through a decade of training, counselling, and real-world application.',
  frameworks: [
    { id: 'accountability-ladder', name: 'The Accountability Ladder', description: 'A five-rung framework that transforms how people take ownership of their actions.', type: 'ladder' as const, steps: [{ label: 'Awareness', description: 'Recognizing the situation without judgment' }, { label: 'Acknowledgment', description: 'Accepting your role in the outcome' }, { label: 'Acceptance', description: 'Embracing reality as it is' }, { label: 'Ownership', description: 'Taking full responsibility' }, { label: 'Action', description: 'Moving forward with purpose' }] },
    { id: 'feedback-system', name: 'The Feedback System', description: 'A continuous loop for giving and receiving feedback that builds trust instead of defensiveness.', type: 'loop' as const, steps: [{ label: 'Give', description: 'Frame feedback with empathy' }, { label: 'Receive', description: 'Listen without defensiveness' }, { label: 'Process', description: 'Separate signal from noise' }, { label: 'Apply', description: 'Turn insight into action' }] },
    { id: 'communication-matrix', name: 'The Communication Matrix', description: 'A 2x2 framework that maps intent against impact.', type: 'matrix' as const, steps: [{ label: 'Intent', description: 'What you mean to convey' }, { label: 'Expression', description: 'How you deliver the message' }, { label: 'Perception', description: 'How the message is received' }, { label: 'Impact', description: 'The actual effect on the listener' }] },
  ],
}

export const JOURNEY_MILESTONES = [
  { year: 2018, title: 'Microsoft Global Education Exchange', organization: 'Microsoft', description: 'Selected to represent at the Microsoft Global Education Exchange in Singapore.', visualAccent: 'grid', color: 'from-pink-500/20 to-transparent' },
  { year: 2020, title: 'Outstanding National Trainer', organization: 'ISTD', description: 'Awarded Outstanding National Trainer by the Indian Society for Training and Development.', visualAccent: 'streak', color: 'from-pink-400/20 to-transparent' },
  { year: 2022, title: 'Outstanding JCI Senator', organization: 'JCI', description: 'Recognized for exceptional contributions to community leadership and service.', visualAccent: 'halo', color: 'from-pink-500/20 to-transparent' },
  { year: 2024, title: 'Times Edu Ex Award', organization: 'Times of India', description: 'Received the Times Edu Ex Award for outstanding contribution to education and training.', visualAccent: 'burst', color: 'from-pink-400/20 to-transparent' },
]

export const PODCAST_DATA = {
  badge: 'LISTEN',
  title: "Chandru's Psychology In Tamil",
  subtitle: 'A Tamil-language podcast exploring emotional intelligence, psychology, communication, and personal growth.',
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
    { title: 'Positive Feedback', description: 'The art of giving constructive feedback that builds people up instead of tearing them down.', duration: '15 min', episodeNumber: 1, themes: ['communication', 'leadership'] },
    { title: 'The Accountability Ladder', description: 'Taking ownership of your actions and climbing toward personal excellence.', duration: '18 min', episodeNumber: 2, featured: true, themes: ['growth', 'leadership'] },
    { title: 'Empathy in Detail', description: 'Understanding others deeply — the skill that transforms relationships and builds trust.', duration: '22 min', episodeNumber: 3, themes: ['empathy', 'emotional-intelligence'] },
    { title: 'Types of Insecurity', description: 'Recognizing and overcoming the invisible barriers that hold us back from our potential.', duration: '20 min', episodeNumber: 4, themes: ['psychology', 'growth'] },
    { title: 'You and I Messages', description: 'Better communication patterns that reduce conflict and increase understanding in every relationship.', duration: '16 min', episodeNumber: 5, themes: ['communication', 'empathy'] },
    { title: 'Relationship Management', description: 'Building stronger connections through emotional awareness and intentional communication.', duration: '19 min', episodeNumber: 6, themes: ['emotional-intelligence', 'empathy'] },
    { title: 'The Art of Listening', description: 'Why most people hear but do not listen — and how to become the person others feel truly understood by.', duration: '21 min', episodeNumber: 7, themes: ['communication', 'empathy'] },
    { title: 'Emotional Resilience', description: 'Building the inner strength to navigate life\'s challenges without losing yourself.', duration: '17 min', episodeNumber: 8, themes: ['emotional-intelligence', 'psychology', 'growth'] },
    { title: 'Leading With Heart', description: 'How emotional intelligence makes you a better leader — in work, family, and community.', duration: '23 min', episodeNumber: 9, themes: ['leadership', 'emotional-intelligence'] },
  ],
}

export const VOICES = [
  { name: 'R. Priya', role: 'Student', organization: 'VVNKM Sr Sec School', quote: "Chandru sir's career guidance session was eye-opening.", featured: true },
  { name: 'Karthik S.', role: 'HR Manager', organization: 'Corporate Client', quote: 'His emotional intelligence workshop transformed how our team communicates.', featured: true },
  { name: 'M. Divya', role: 'Regular Listener', organization: 'Spotify', quote: 'The podcast on accountability changed how I approach my daily work.', featured: false },
  { name: 'Vikram R.', role: 'Workshop Participant', quote: "Chandru's sessions on stress management helped me navigate a very difficult period.", featured: false },
  { name: 'S. Lakshmi', role: 'School Principal', organization: 'Government Higher Secondary School', quote: 'The student counselling program he designed for our school brought remarkable changes.', featured: true },
  { name: 'Arun P.', role: 'Team Leader', organization: 'IT Services Firm', quote: 'I applied the communication matrix framework with my team.', featured: false },
  { name: 'Ananya M.', role: 'Career Counselling Client', quote: "One session with Chandru didn't give me the answer — it gave me the clarity to find it myself.", featured: true },
]

export const BOOK_CONVERSATION = {
  badge: 'BEGIN',
  title: 'Book A Conversation',
  subtitle: 'No commitment required. Just a conversation about your goals.',
  ctaLabel: 'Book a Free Discovery Call',
  ctaUrl: 'mailto:chandrachoodeshwaran@gmail.com',
  email: 'chandrachoodeshwaran@gmail.com',
  location: 'Hosur, Tamil Nadu, India',
}

// REMOVED: CLUBHOUSE, duplicate Instagram, HERO_FALLBACK, PILLARS (legacy),
// IMPACT_AREAS, TIMELINE_FALLBACK, PODCAST_FALLBACK, TESTIMONIALS_FALLBACK
// CONTACT_FALLBACK (without clubhouse and instagram array)
// These have been migrated to src/content/* and src/config/*
