'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// ─── Types ──────────────────────────────────────────────────────────
interface FrameworkStep {
  label: string
  description: string
}

interface FrameworkData {
  id: string
  name: string
  description: string
  type: 'ladder' | 'loop' | 'matrix'
  steps: FrameworkStep[]
}

interface FrameworkStepProps {
  framework: FrameworkData
  index: number
}

// ─── Component ──────────────────────────────────────────────────────
export default function FrameworkStep({ framework, index }: FrameworkStepProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const diagramRef = useRef<HTMLDivElement>(null)

  // ── GSAP ScrollTrigger step reveal ──────────────────────────────
  useEffect(() => {
    const section = sectionRef.current
    const diagram = diagramRef.current
    if (!section || !diagram) return

    const steps = diagram.querySelectorAll<HTMLElement>('[data-fw-step]')
    const lines = diagram.querySelectorAll<HTMLElement>('[data-fw-line]')
    if (!steps.length) return

    // Initial muted state
    gsap.set(steps, {
      opacity: 0.2,
      scale: 0.92,
      borderColor: 'rgba(0,0,0,0.08)',
      backgroundColor: 'rgba(236,72,153,0.03)',
    })

    gsap.set(lines, {
      scaleX: 0,
      scaleY: 0,
      opacity: 0,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    })

    steps.forEach((el, i) => {
      tl.to(
        el,
        {
          opacity: 1,
          scale: 1,
          borderColor: '#ec4899',
          backgroundColor: 'rgba(236, 72, 153, 0.12)',
          duration: 0.5,
          ease: 'power2.out',
        },
        i * 0.25,
      )

      if (i < lines.length) {
        const line = lines[i]
        const vert = line.dataset.dir === 'v'
        tl.to(
          line,
          {
            [vert ? 'scaleY' : 'scaleX']: 1,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
          },
          i * 0.25 + 0.2,
        )
      }
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Render: LADDER ──────────────────────────────────────────────
  const renderLadder = () => (
    <div className="relative mx-auto max-w-2xl">
      {/* Vertical centre rail (decorative background) */}
      <div className="absolute left-6 top-0 h-full w-px bg-text-muted/10 md:left-1/2 md:-translate-x-1/2" />

      <div className="relative flex flex-col">
        {framework.steps.map((step, i) => {
          const isLeft = i % 2 === 0
          return (
            <div key={i} className="relative flex items-center py-5 md:py-6">
              {/* Vertical connecting line to previous step */}
              {i > 0 && (
                <div
                  data-fw-line={i - 1}
                  data-dir="v"
                  className="absolute left-6 top-0 h-5 w-px -translate-y-0 bg-text-muted/20 md:left-1/2 md:-translate-x-1/2"
                />
              )}

              <div
                className={cn(
                  'flex flex-1 items-center gap-5 md:gap-8',
                  isLeft ? 'flex-row' : 'flex-row md:flex-row-reverse',
                )}
              >
                {/* Text side */}
                <div
                  className={cn(
                    'flex-1',
                    isLeft ? 'text-right' : 'text-right md:text-left',
                  )}
                >
                  <p className="text-sm font-semibold text-text-primary md:text-base">
                    {step.label}
                  </p>
                  <p className="mt-0.5 text-xs text-text-muted/70 md:text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Step circle */}
                <div
                  data-fw-step
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-base font-bold text-text-primary transition-all duration-500 md:h-14 md:w-14 md:text-lg"
                >
                  {i + 1}
                </div>

                {/* Spacer */}
                <div className="hidden flex-1 md:block" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  // ── Render: LOOP ────────────────────────────────────────────────
  const renderLoopDesktop = () => {
    const count = framework.steps.length
    const radiusPct = 32
    const positions = framework.steps.map((_, i) => {
      const angleDeg = (i * 360) / count - 90
      const rad = (angleDeg * Math.PI) / 180
      return {
        top: 50 + radiusPct * Math.sin(rad),
        left: 50 + radiusPct * Math.cos(rad),
        angle: angleDeg,
      }
    })

    return (
      <div className="relative mx-auto hidden aspect-square w-full max-w-md md:block">
        {/* Circular track — acts as the connecting line */}
        <svg
          className="absolute inset-[6%] h-[88%] w-[88%] -rotate-90"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          {/* Golden arc accent (static, complements step reveal) */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="#ec4899"
            strokeWidth="1"
            strokeDasharray="4 8"
            strokeLinecap="round"
            opacity="0.15"
          />
        </svg>

        {/* Centre rotating direction indicator */}
        <div className="absolute inset-[22%] flex items-center justify-center">
          <div
            className="flex items-center justify-center"
            style={{
              animation: 'spin 10s linear infinite',
            }}
          >
            <svg className="h-10 w-10 text-pink-400/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
            </svg>
          </div>
        </div>

        {/* Centre label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted/40">
            Continuous<br />Feedback<br />Cycle
          </span>
        </div>

        {/* Steps positioned in a circle */}
        {framework.steps.map((step, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: `${positions[i].top}%`, left: `${positions[i].left}%` }}
          >
            <div
              data-fw-step
              className="flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full border-2 bg-pink-50/30 text-center transition-all duration-500"
            >
              <span className="text-lg font-bold leading-none text-text-primary">{i + 1}</span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-text-primary/70">
                {step.label}
              </span>
            </div>

            {/* Direction arrow next to step */}
            <div
              className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center"
              style={{
                transform: `rotate(${positions[(i + 1) % count].angle - 90}deg)`,
              }}
            >
              <ArrowRight className="h-3 w-3 text-pink-400/40" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderLoopMobile = () => (
    <div className="flex flex-col items-center gap-5 md:hidden">
      {framework.steps.map((step, i) => (
        <div key={i} className="flex w-full max-w-sm items-center gap-4">
          <div
            data-fw-step
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 bg-pink-50/30 text-base font-bold text-text-primary transition-all duration-500"
          >
            {i + 1}
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-text-primary">{step.label}</p>
            <p className="text-xs text-text-muted/70">{step.description}</p>
          </div>
          {i < framework.steps.length - 1 && (
            <div data-fw-line={i} data-dir="v" className="h-6 w-px bg-text-muted/20" />
          )}
        </div>
      ))}
      <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-widest text-text-muted/40">
        <svg className="h-3 w-3 text-text-muted/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg> Continuous Cycle
      </div>
    </div>
  )

  // ── Render: MATRIX ──────────────────────────────────────────────
  const renderMatrix = () => {
    const gridLabels = [
      { axisX: 'Intent', axisY: 'Self' },
      { axisX: 'Expression', axisY: 'Self' },
      { axisX: 'Perception', axisY: 'Other' },
      { axisX: 'Impact', axisY: 'Outcome' },
    ]

    return (
      <div className="mx-auto max-w-xl">
        {/* Column headers */}
        <div className="mb-2 hidden grid-cols-2 gap-4 md:grid">
          <div className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted/40">
            Sender
          </div>
          <div className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted/40">
            Message
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {framework.steps.map((step, i) => (
            <div
              key={i}
              data-fw-step
              className="group relative overflow-hidden rounded-xl border-2 bg-pink-50/20 p-5 text-center transition-all duration-500 md:p-7"
            >
              {/* Corner accent */}
              <div className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-pink-50/20" />

              {/* Number badge */}
              <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border-light bg-pink-50/30 text-sm font-bold text-text-primary transition-all duration-500">
                {i + 1}
              </span>

              <h4 className="text-sm font-semibold text-text-primary md:text-base">{step.label}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-text-muted/70 md:text-sm">
                {step.description}
              </p>

              {/* Grid axis hint */}
              <span className="mt-3 block font-mono text-[9px] uppercase tracking-[0.15em] text-text-muted/30">
                {gridLabels[i].axisY} &middot; {gridLabels[i].axisX}
              </span>
            </div>
          ))}
        </div>

        {/* Row labels */}
        <div className="mt-3 hidden grid-cols-2 gap-4 md:grid">
          <div className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted/40">
            Receiver
          </div>
          <div className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted/40">
            Outcome
          </div>
        </div>

        {/* Flow legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-text-muted/50">
          <span className="flex items-center gap-1">
            Intent <ArrowRight className="h-3 w-3" /> Expression
          </span>
          <span className="hidden text-text-muted/20 sm:inline">|</span>
          <span className="flex items-center gap-1">
            Perception <ArrowRight className="h-3 w-3" /> Impact
          </span>
          <span className="hidden text-text-muted/20 sm:inline">|</span>
          <span className="flex items-center gap-1">
            Intent <ArrowRight className="h-3 w-3" /> Impact
          </span>
        </div>
      </div>
    )
  }

  // ── Return ───────────────────────────────────────────────────────
  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      className="min-h-[70vh] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.25em] text-pink-400/60">
            Framework {String(index + 1).padStart(2, '0')}
          </span>
          <h2 className="font-serif text-heading-2 leading-tight text-text-primary">
            {framework.name}
          </h2>
          <p className="mt-4 max-w-2xl text-body-lg text-text-muted">
            {framework.description}
          </p>
        </motion.div>

        {/* Diagram */}
        <motion.div
          ref={diagramRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {framework.type === 'ladder' && renderLadder()}
          {framework.type === 'loop' && (
            <>
              {renderLoopDesktop()}
              {renderLoopMobile()}
            </>
          )}
          {framework.type === 'matrix' && renderMatrix()}
        </motion.div>
      </div>
    </motion.section>
  )
}
