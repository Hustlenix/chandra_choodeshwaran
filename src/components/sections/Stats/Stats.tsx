import { SectionHeading } from '@/components/ui/SectionHeading'
import { HOME_STATS } from '@/content/home'

export function Stats() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeading title="Impact" subtitle="Numbers that reflect a decade of commitment." />

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {HOME_STATS.items.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block font-display text-display text-text-primary">
                {stat.value}{stat.suffix}
              </span>
              <span className="mt-1 block text-sm text-text-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
