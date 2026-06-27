import { OPENING_CONTENT } from '@/content/home'
import ScrollIndicator from './ScrollIndicator'

export default function OpeningStatement() {
  const words = OPENING_CONTENT.headline.split(' ')

  return (
    <section
      id="opening"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-16">
        <div className="max-w-6xl">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-accent-400 sm:mb-8">
            {OPENING_CONTENT.badge}
          </p>

          <h2 className="font-display text-[clamp(2.8rem,8vw,8rem)] leading-[0.85] tracking-[-0.05em] text-text-primary">
            {words.map((word, i) => (
              <span key={`${word}-${i}`} className="inline-block">
                {word}
                {i < words.length - 1 && '\u00A0'}
              </span>
            ))}
          </h2>

          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-text-muted sm:mt-8 sm:text-lg md:text-xl">
            {OPENING_CONTENT.subtitle}
          </p>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
