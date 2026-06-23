export interface Person {
  _id?: string
  name: string
  tagline: string
  positioning: string
  bio?: string
  location: string
  specialties: string[]
}

export interface Service {
  _id?: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  _id?: string
  name: string
  role?: string
  organization?: string
  quote: string
  source?: string
}

export interface PodcastEpisode {
  _id?: string
  title: string
  description: string
  episodeNumber: number
  duration?: string
  featured?: boolean
  topics?: string[]
}

export interface Award {
  _id?: string
  title: string
  year: number
  organization?: string
  description?: string
}

export interface ExperienceItem {
  _id?: string
  title: string
  year: number
  organization?: string
  description?: string
}

export interface NavItem {
  label: string
  href: string
}

export interface Pillar {
  title: string
  description: string
  icon: string
}

export interface ImpactArea {
  title: string
  subtitle: string
  description: string
  metrics?: { value: string; label: string }[]
  services?: string[]
  variant: 'split' | 'full' | 'diagonal' | 'grid'
}

export interface ContactMessage {
  name: string
  email: string
  subject?: string
  message: string
}

// === NEW TYPES FOR REDESIGN ===

export interface OpeningStatementContent {
  headline: string
  subtitle: string
  badge: string
}

export interface StrugglePoint {
  id: string
  number: string
  title: string
  description: string
  icon: string
}

export interface PillarDetail {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  metrics: { value: string; label: string }[]
  variant: 'split' | 'full-width' | 'diagonal' | 'grid' | 'split-mirrored'
  visualType: string
}

export interface Framework {
  id: string
  name: string
  description: string
  type: 'ladder' | 'loop' | 'matrix'
  steps: { label: string; description: string }[]
}

export interface JourneyMilestone {
  year: number
  title: string
  organization: string
  description: string
  visualAccent: string
  color: string
}

export interface PodcastTheme {
  id: string
  label: string
}

export interface VoiceCard {
  name: string
  role: string
  organization?: string
  quote: string
  featured?: boolean
}
