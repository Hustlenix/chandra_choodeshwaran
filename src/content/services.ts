// ====================================================================
// SERVICES PAGE — Five Pillars as Service Offerings
// ====================================================================

export const SERVICES_PAGE = {
  badge: 'SERVICES',
  title: 'What I Offer',
  subtitle:
    'Proven frameworks and personalized guidance across five core areas of human development.',
}

export const SERVICE_OFFERINGS = [
  {
    id: 'self-awareness',
    title: 'Self Awareness',
    subtitle: 'The Foundation of All Growth',
    description:
      'Before you can lead others, communicate effectively, or manage emotions — you must first understand yourself. Self-awareness is not introspection. It is the ability to see yourself clearly, recognize your patterns, and understand how your thoughts shape your reality. This is where every transformation begins.',
    icon: 'eye',
    metrics: [
      { value: '500+', label: 'Individuals Trained' },
      { value: '96%', label: 'Report Improved Self-Awareness' },
      { value: '50+', label: 'Workshops Delivered' },
    ],
    variant: 'split',
    visualType: 'mirror',
  },
  {
    id: 'emotional-intelligence',
    title: 'Emotional Intelligence',
    subtitle: 'The Operating System of Human Interaction',
    description:
      'Emotional intelligence is the single strongest predictor of personal and professional success — stronger than IQ, stronger than technical skills. It is the ability to recognize, understand, and manage emotions in yourself and others. From boardrooms to classrooms, EI determines how far you go.',
    icon: 'heart',
    metrics: [
      { value: '300+', label: 'EI Sessions Conducted' },
      { value: '89%', label: 'Report Stronger Relationships' },
    ],
    variant: 'full-width',
    visualType: 'waves',
  },
  {
    id: 'communication',
    title: 'Communication',
    subtitle: 'Turning Confusion Into Clarity',
    description:
      "Most conflicts are not about what was said — they are about what was heard. Communication is a science and an art. It is feedback systems and accountability. It is public speaking and active listening. It is knowing when to speak and when to stay silent. My clients learn to communicate with precision, empathy, and impact.",
    icon: 'message-circle',
    metrics: [
      { value: '200+', label: 'Communication Sessions' },
      { value: '85%', label: 'Report Better Relationships' },
    ],
    variant: 'diagonal',
    visualType: 'network',
  },
  {
    id: 'leadership',
    title: 'Leadership',
    subtitle: 'From Managing to Inspiring',
    description:
      'Leadership is not a title — it is a way of being. Real leadership starts with self-leadership. Through mentorship programs and immersive workshops, emerging leaders learn to build authentic influence, navigate difficult conversations, and create cultures where people feel valued and motivated.',
    icon: 'zap',
    metrics: [
      { value: '100+', label: 'Leaders Mentored' },
      { value: '93%', label: 'Report Increased Confidence' },
    ],
    variant: 'grid',
    visualType: 'compass',
  },
  {
    id: 'growth',
    title: 'Growth',
    subtitle: 'A Lifelong System for Human Potential',
    description:
      'Growth is not a destination — it is a system. The ability to continuously learn, adapt, and evolve defines a fulfilling life. I guide individuals and organizations to build growth architectures: habits, feedback loops, and mindsets that compound over time to create lasting transformation.',
    icon: 'trending-up',
    metrics: [
      { value: '15+', label: 'Years of Experience' },
      { value: '1000+', label: 'Lives Impacted' },
    ],
    variant: 'split-mirrored',
    visualType: 'ascent',
  },
]

/**
 * Lucide icon name mapping for each service.
 * Use these to dynamically render the correct icon component.
 */
export const SERVICE_ICON_MAP: Record<string, string> = {
  'self-awareness': 'eye',
  'emotional-intelligence': 'heart',
  'communication': 'message-circle',
  'leadership': 'zap',
  'growth': 'trending-up',
}
