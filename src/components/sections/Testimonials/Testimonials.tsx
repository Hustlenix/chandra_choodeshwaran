'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import QuoteWall from './QuoteWall'
import { TESTIMONIALS_FALLBACK } from '@/lib/constants'
import type { Testimonial } from '@/types'

interface TestimonialsProps {
  testimonials?: Testimonial[]
}

export default function Testimonials({
  testimonials: sanityTestimonials,
}: TestimonialsProps) {
  const testimonials =
    sanityTestimonials && sanityTestimonials.length > 0
      ? sanityTestimonials
      : TESTIMONIALS_FALLBACK

  return (
    <section id="stories" className="relative bg-navy-800 py-section-lg">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gold-500/3 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <SectionHeading
          badge="Stories"
          title="What People Say"
          subtitle="Real stories from individuals and organizations who have experienced transformation through emotional intelligence."
          align="center"
        />

        <QuoteWall testimonials={testimonials} />
      </div>
    </section>
  )
}
