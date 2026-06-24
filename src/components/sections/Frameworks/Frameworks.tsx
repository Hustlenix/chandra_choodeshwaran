'use client'

import { FRAMEWORKS_PAGE, FRAMEWORKS } from '@/content/frameworks'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import FrameworkStep from './FrameworkStep'

export default function Frameworks() {
  return (
    <section id="frameworks" className="py-section-lg">
      <Container>
        <SectionHeading
          badge={FRAMEWORKS_PAGE.badge}
          title={FRAMEWORKS_PAGE.title}
          subtitle={FRAMEWORKS_PAGE.subtitle}
          align="center"
        />
      </Container>

      {FRAMEWORKS.map((fw, i) => (
        <FrameworkStep key={fw.id} framework={fw} index={i} />
      ))}
    </section>
  )
}
