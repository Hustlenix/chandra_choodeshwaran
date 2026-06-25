import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero/Hero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

const OpeningStatement = dynamic(() => import('@/components/sections/OpeningStatement/OpeningStatement'))
const HumanOS = dynamic(() => import('@/components/sections/HumanOS/HumanOS'))
const FivePillars = dynamic(() => import('@/components/sections/FivePillars/FivePillars'))
const Stats = dynamic(() => import('@/components/sections/Stats/Stats').then(m => m.Stats))
const Frameworks = dynamic(() => import('@/components/sections/Frameworks/Frameworks'))
const RecognitionJourney = dynamic(() => import('@/components/sections/RecognitionJourney/RecognitionJourney'))
const PodcastUniverse = dynamic(() => import('@/components/sections/PodcastUniverse/PodcastUniverse'))
const VoicesOfChange = dynamic(() => import('@/components/sections/VoicesOfChange/VoicesOfChange'))
const BookConversation = dynamic(() => import('@/components/sections/BookConversation/BookConversation'))

export default function HomePage() {
  return (
    <>
      <Hero />
      <OpeningStatement />
      <SectionWrapper id="human-os" noPadding>
        <HumanOS />
      </SectionWrapper>
      <SectionWrapper noPadding>
        <FivePillars />
      </SectionWrapper>
      <SectionWrapper noPadding>
        <Stats />
      </SectionWrapper>
      <SectionWrapper noPadding>
        <Frameworks />
      </SectionWrapper>
      <SectionWrapper noPadding>
        <RecognitionJourney />
      </SectionWrapper>
      <SectionWrapper noPadding>
        <PodcastUniverse />
      </SectionWrapper>
      <SectionWrapper noPadding>
        <VoicesOfChange />
      </SectionWrapper>
      <BookConversation />
    </>
  )
}
