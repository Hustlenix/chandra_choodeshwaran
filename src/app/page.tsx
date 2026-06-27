import { Hero } from '@/components/sections/Hero/Hero'
import OpeningStatement from '@/components/sections/OpeningStatement/OpeningStatement'
import HumanOS from '@/components/sections/HumanOS/HumanOS'
import FivePillars from '@/components/sections/FivePillars/FivePillars'
import { Stats } from '@/components/sections/Stats/Stats'
import Frameworks from '@/components/sections/Frameworks/Frameworks'
import RecognitionJourney from '@/components/sections/RecognitionJourney/RecognitionJourney'
import PodcastUniverse from '@/components/sections/PodcastUniverse/PodcastUniverse'
import VoicesOfChange from '@/components/sections/VoicesOfChange/VoicesOfChange'

export default function HomePage() {
  return (
    <>
      <Hero />
      <OpeningStatement />
      <HumanOS />
      <FivePillars />
      <Stats />
      <Frameworks />
      <RecognitionJourney />
      <PodcastUniverse />
      <VoicesOfChange />
    </>
  )
}
