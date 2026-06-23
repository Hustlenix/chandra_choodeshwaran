'use client'

import { FRAMEWORKS } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import FrameworkStep from './FrameworkStep'

export default function Frameworks() {
  return (
    <section id="frameworks" className="py-section-lg">
      <Container>
        <SectionHeading
          badge={FRAMEWORKS.badge}
          title={FRAMEWORKS.title}
          subtitle={FRAMEWORKS.subtitle}
          align="center"
        />
      </Container>

      {FRAMEWORKS.frameworks.map((fw, i) => (
        <FrameworkStep key={fw.id} framework={fw} index={i} />
      ))}
    </section>
  )
}
