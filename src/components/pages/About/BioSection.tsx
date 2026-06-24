import { SITE } from '@/config/site'

export function BioSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-serif text-heading-3 text-text-primary">About {SITE.shortName}</h2>
      <div className="prose prose-pink max-w-none space-y-4 text-body text-text-secondary">
        <p>
          {SITE.shortName} is a certified Emotional Intelligence Trainer, Counsellor, and Public Speaking Coach
          based in {SITE.location}. With over 15 years of experience, he has dedicated his career to
          helping individuals and organizations unlock their full potential through emotional intelligence
          and human development.
        </p>
        <p>
          His approach combines evidence-based psychological frameworks with practical, real-world
          applications. Whether working with students navigating career choices, professionals seeking
          to enhance their communication skills, or leaders aspiring to build emotionally intelligent
          teams, he brings empathy, clarity, and structure to every interaction.
        </p>
        <p>
          {SITE.shortName} is fluent in {SITE.languages.join(' and ')}, allowing him to connect deeply
          with diverse audiences across South India and beyond.
        </p>
      </div>
    </section>
  )
}
