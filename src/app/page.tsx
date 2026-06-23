import Hero from '@/components/sections/Hero/Hero'
import HumanOS from '@/components/sections/HumanOS/HumanOS'
import Impact from '@/components/sections/Impact/Impact'
import Timeline from '@/components/sections/Timeline/Timeline'
import Podcast from '@/components/sections/Podcast/Podcast'
import Testimonials from '@/components/sections/Testimonials/Testimonials'
import CTA from '@/components/sections/CTA/CTA'

export const revalidate = 60

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="philosophy">
        <HumanOS />
      </section>

      <section id="impact">
        <Impact />
      </section>

      <section id="journey">
        <Timeline />
      </section>

      <section id="podcast">
        <Podcast />
      </section>

      <section id="stories">
        <Testimonials />
      </section>

      <section id="contact">
        <CTA />
      </section>
    </>
  )
}
