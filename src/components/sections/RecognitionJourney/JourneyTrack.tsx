'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { JOURNEY_MILESTONES } from '@/content/awards'
import JourneyMilestone from './JourneyMilestone'

gsap.registerPlugin(ScrollTrigger)

// Translated milestone background colors for smooth CSS transitions
const MILESTONE_BG_COLORS = [
  'rgba(184, 90, 76, 0.06)',   // terracotta
  'rgba(244, 114, 182, 0.06)',  // pink-400
  'rgba(219, 39, 119, 0.06)',   // pink-600
  'rgba(251, 207, 232, 0.06)',  // pink-200
]

const TOTAL_PANELS = JOURNEY_MILESTONES.length + 1 // 4 milestones + end cap

export default function JourneyTrack() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const bgOverlayRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile via media query
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // GSAP horizontal scroll setup (desktop only)
  useEffect(() => {
    if (isMobile) return

    const section = sectionRef.current
    const track = trackRef.current
    const bgOverlay = bgOverlayRef.current
    if (!section || !track || !bgOverlay) return

    const ctx = gsap.context(() => {
      const getScrollDistance = () => {
        const trackWidth = track.scrollWidth
        const viewportWidth = window.innerWidth
        return -(trackWidth - viewportWidth)
      }

      // ── Main horizontal scroll ──
      gsap.to(track, {
        x: getScrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${Math.abs(getScrollDistance())}`,
          pin: true,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Clamp progress to [0, 1]
            const progress = Math.max(0, Math.min(1, self.progress))

            // Compute active milestone index
            const rawIdx = Math.floor(progress * TOTAL_PANELS)
            const idx = Math.max(0, Math.min(rawIdx, JOURNEY_MILESTONES.length - 1))
            setActiveIndex(idx)

            // Apply background color directly for smooth, render-free updates
            const color = MILESTONE_BG_COLORS[idx] ?? MILESTONE_BG_COLORS[0]
            bgOverlay.style.background =
              `linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, ${color} 50%, rgba(255, 255, 255, 0) 100%)`
          },
        },
      })

      // ── Timeline line draw ──
      const line = section.querySelector<HTMLElement>('.timeline-progress')
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
              end: () => `+=${Math.abs(getScrollDistance())}`,
              scrub: 1,
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [isMobile])

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden bg-surface-white"
    >
      {/* Background color overlay — animated by GSAP */}
      <div
        ref={bgOverlayRef}
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
      />

      {!isMobile ? (
        /* ── DESKTOP: Horizontal scroll track ── */
        <>
          {/* Glowing timeline line */}
          <div className="pointer-events-none absolute left-0 z-10 w-full" style={{ top: '65%', height: '1px' }}>
            <div className="timeline-progress h-full w-full origin-left bg-gradient-to-r from-pink-400/20 via-pink-400/60 to-pink-400 shadow-[0_0_12px_rgba(184,90,76,0.25)]" />
          </div>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex h-screen items-center"
          >
            {JOURNEY_MILESTONES.map((milestone, i) => (
              <JourneyMilestone
                key={milestone.year}
                year={milestone.year}
                title={milestone.title}
                organization={milestone.organization}
                description={milestone.description}
                index={i}
                isActive={i === activeIndex}
              />
            ))}

            {/* End cap */}
            <div className="flex w-screen flex-shrink-0 items-center justify-center px-8">
              <div className="text-center">
                <span className="font-serif text-2xl italic text-pink-400/60">
                  The journey continues&hellip;
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* ── MOBILE: Vertical stack fallback ── */
        <div className="flex flex-col">
          {JOURNEY_MILESTONES.map((milestone, i) => (
            <div key={milestone.year} className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-pink-400/20 via-pink-400/40 to-pink-400/20" />

              {/* Mobile milestone */}
              <div className="relative flex min-h-[60vh] flex-col items-start justify-center pl-20 pr-6 py-16">
                {/* Pink dot */}
                <div className="absolute left-[calc(2rem-5px)] top-1/2 z-10 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-pink-400 bg-surface-white" />

                {/* Year badge */}
                <span className="mb-3 font-mono text-4xl font-bold text-text-primary/10 sm:text-5xl">
                  {milestone.year}
                </span>

                {/* Organization */}
                <span className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-pink-500">
                  {milestone.organization}
                </span>

                {/* Title */}
                <h3 className="font-serif text-heading-3 text-text-primary sm:text-heading-2">
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-lg text-body leading-relaxed text-text-muted">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
