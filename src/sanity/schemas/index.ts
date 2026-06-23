import { personSchema } from './person'
import { serviceSchema } from './service'
import { testimonialSchema } from './testimonial'
import { podcastEpisodeSchema } from './podcastEpisode'
import { awardSchema } from './award'
import { experienceSchema } from './experience'
import { contactMessageSchema } from './contactMessage'
import type { SchemaTypeDefinition } from 'sanity'

export const schemaTypes: SchemaTypeDefinition[] = [
  personSchema,
  serviceSchema,
  testimonialSchema,
  podcastEpisodeSchema,
  awardSchema,
  experienceSchema,
  contactMessageSchema,
]
