import { SITE } from '@/config/site'

export function Hero() {
  return (
    <section className="min-h-[90vh] bg-surface-white">
      <div className="mx-auto flex min-h-[90vh] max-w-[1200px] flex-col justify-center px-6 py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-4 inline-block rounded-badge bg-surface-warm px-3 py-1 text-xs font-medium text-text-secondary">
              Emotional Intelligence Trainer
            </span>
            <h1 className="font-display text-display font-[300] leading-[1.08] tracking-[-0.04em] text-text-primary">
              {SITE.shortName}
            </h1>
            <p className="mt-4 text-body-lg text-text-secondary">
              {SITE.positioning}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/podcast"
                className="inline-flex items-center justify-center rounded-pill bg-text-primary px-5 py-2.5 text-sm font-medium text-text-inverse transition-opacity hover:opacity-90"
              >
                Listen to the Podcast
              </a>
              <a
                href="/philosophy"
                className="inline-flex items-center justify-center rounded-pill border border-border-light bg-surface-white px-5 py-2.5 text-sm font-medium text-text-primary shadow-control transition-colors hover:bg-surface-warm"
              >
                Explore My Philosophy
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-body leading-relaxed text-text-secondary">
              Based in {SITE.location}, I help individuals and organizations unlock their full potential through emotional intelligence, effective communication, and human development. With over 15 years of experience, my approach combines evidence-based frameworks with practical, real-world application.
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-text-muted">
              <span>15+ Years Experience</span>
              <span>500+ Workshops</span>
              <span>10,000+ Lives Impacted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
