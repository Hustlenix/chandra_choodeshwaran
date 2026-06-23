'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TIMELINE_FALLBACK } from '@/lib/constants'
import TimelineItem from './TimelineItem'

gsap.registerPlugin(ScrollTrigger)

export default function TimelineTrack() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      const trackWidth = track.scrollWidth
      const viewportWidth = window.innerWidth
      const scrollDistance = -(trackWidth - viewportWidth + 100)

      gsap.to(track, {
        x: scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${trackWidth - viewportWidth + 400}`,
          pin: true,
          anticipatePin: 1,
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      })

      const line = section.querySelector('.timeline-line') as HTMLElement
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: () => `+=${trackWidth - viewportWidth + 400}`,
              scrub: 1,
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-navy-900"
    >
      {/* Connecting line */}
      <div className="absolute left-[calc(50%-2px)] top-1/2 z-0 h-px w-1/2 -translate-y-1/2 sm:left-[calc(50%-1px)]">
        <div className="timeline-line h-full w-full origin-left bg-gradient-to-r from-gold-500/20 via-gold-500/50 to-gold-500" />
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="absolute left-12 top-0 flex h-full items-center gap-8 sm:left-20 lg:left-32"
      >
        {TIMELINE_FALLBACK.map((milestone, i) => (
          <TimelineItem
            key={milestone.year}
            year={milestone.year}
            title={milestone.title}
            organization={milestone.organization || ''}
            description={milestone.description || ''}
            index={i}
          />
        ))}

        <div className="flex w-[250px] flex-shrink-0 items-center justify-center px-8">
          <div className="text-center">
            <span className="font-serif text-2xl italic text-gold-500/60">
              The journey continues&hellip;
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
