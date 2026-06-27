import { Hero } from '@/components/sections/Hero/Hero'
import { WhoIsChandra } from '@/components/sections/Home/WhoIsChandra'
import { PhilosophyPreview } from '@/components/sections/Home/PhilosophyPreview'
import { FeaturedPodcast } from '@/components/sections/Home/FeaturedPodcast'
import { SpeakingCounselling } from '@/components/sections/Home/SpeakingCounselling'
import { TrustSocialProof } from '@/components/sections/Home/TrustSocialProof'
import { FinalCTA } from '@/components/sections/Home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoIsChandra />
      <PhilosophyPreview />
      <FeaturedPodcast />
      <SpeakingCounselling />
      <TrustSocialProof />
      <FinalCTA />
    </>
  )
}
