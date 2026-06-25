import { Hero } from '@/components/sections/Hero/Hero'
import { Stats } from '@/components/sections/Stats/Stats'
import OpeningStatement from '@/components/sections/OpeningStatement/OpeningStatement'
import HumanOS from '@/components/sections/HumanOS/HumanOS'
import FivePillars from '@/components/sections/FivePillars/FivePillars'
import Frameworks from '@/components/sections/Frameworks/Frameworks'
import RecognitionJourney from '@/components/sections/RecognitionJourney/RecognitionJourney'
import PodcastUniverse from '@/components/sections/PodcastUniverse/PodcastUniverse'
import VoicesOfChange from '@/components/sections/VoicesOfChange/VoicesOfChange'
import BookConversation from '@/components/sections/BookConversation/BookConversation'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

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
