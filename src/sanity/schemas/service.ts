import { defineType, defineField } from 'sanity'

export const serviceSchema = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'pillarCategory',
      title: 'Pillar Category',
      type: 'string',
      options: {
        list: [
          { title: 'Self Awareness', value: 'self-awareness' },
          { title: 'Communication', value: 'communication' },
          { title: 'Emotional Intelligence', value: 'emotional-intelligence' },
          { title: 'Leadership', value: 'leadership' },
          { title: 'Growth', value: 'growth' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Identifier for the icon',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    }),
  ],
})
