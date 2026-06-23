import OpeningStatement from '@/components/sections/OpeningStatement/OpeningStatement'
import HumanOS from '@/components/sections/HumanOS/HumanOS'
import FivePillars from '@/components/sections/FivePillars/FivePillars'
import Frameworks from '@/components/sections/Frameworks/Frameworks'
import RecognitionJourney from '@/components/sections/RecognitionJourney/RecognitionJourney'
import PodcastUniverse from '@/components/sections/PodcastUniverse/PodcastUniverse'
import VoicesOfChange from '@/components/sections/VoicesOfChange/VoicesOfChange'
import BookConversation from '@/components/sections/BookConversation/BookConversation'

export default function HomePage() {
  return (
    <>
      <OpeningStatement />
      <section id="human-os">
        <HumanOS />
      </section>
      <FivePillars />
      <Frameworks />
      <RecognitionJourney />
      <PodcastUniverse />
      <VoicesOfChange />
      <BookConversation />
    </>
  )
}
