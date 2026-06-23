'use client'

import { IMPACT_AREAS } from '@/lib/constants'
import ImpactBlock from './ImpactBlock'

export default function Impact() {
  return (
    <section id="impact">
      {IMPACT_AREAS.map((block, index) => (
        <ImpactBlock key={block.title} block={block} index={index} />
      ))}
    </section>
  )
}
