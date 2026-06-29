import { PROFESSIONAL_HIGHLIGHTS } from '@/content/experience'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Card } from '@/components/ui/Card'

export function ExpertiseSection() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {PROFESSIONAL_HIGHLIGHTS.map((area, i) => (
        <ScrollReveal key={area.category} delay={i * 100}>
          <Card variant="bordered-hover" padding="lg" className="h-full">
            <h3 className="mb-4 font-serif text-heading-4 text-text-primary">{area.category}</h3>
            <ul className="space-y-3">
              {area.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  )
}
