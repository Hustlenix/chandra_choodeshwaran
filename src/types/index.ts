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
