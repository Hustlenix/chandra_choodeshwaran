import { FRAMEWORKS_PAGE, FRAMEWORKS } from '@/content/frameworks'
import { SectionHeading } from '@/components/ui/SectionHeading'
import FrameworkStep from './FrameworkStep'

export default function Frameworks() {
  return (
    <section id="frameworks" className="py-section-lg">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeading title={FRAMEWORKS_PAGE.title} subtitle={FRAMEWORKS_PAGE.subtitle} align="center" />
      </div>

      {FRAMEWORKS.map((fw, i) => (
        <FrameworkStep key={fw.id} framework={fw} index={i} />
      ))}
    </section>
  )
}
