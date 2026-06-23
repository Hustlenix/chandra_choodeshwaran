'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HUMAN_OS } from '@/lib/constants'
import { staggerContainer } from '@/lib/animations'
import PillarCard from './PillarCard'
import PillarIcon from './PillarIcon'

// ─── Pentagon geometry (percentage-based, viewBox 0-100) ──────────
const NODE_POSITIONS = [
  { x: 50, y: 15 },     // 0: top
  { x: 83.3, y: 39.2 }, // 1: top-right
  { x: 70.6, y: 78.3 }, // 2: bottom-right
  { x: 29.4, y: 78.3 }, // 3: bottom-left
  { x: 16.7, y: 39.2 }, // 4: top-left
]

const CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 0], // perimeter
  [0, 2], [2, 4], [4, 1], [1, 3], [3, 0], // star (pentagram)
]

const CENTER = { x: 50, y: 50 }

// ─── Curved path helper ──────────────────────────────────────────
function getCurvedPath(
  ax: number,
  ay: number,
  bx: number,
  by: number,
  cx: number,
  cy: number,
): string {
  const mx = (ax + bx) / 2
  const my = (ay + by) / 2
  // Direction from centre to midpoint → push outward
  const dx = mx - cx
  const dy = my - cy
  const len = Math.sqrt(dx * dx + dy * dy)
  if (len < 0.01) {
    // Edge passes through centre — offset perpendicular
    const px = -(by - ay)
    const py = bx - ax
    const pl = Math.sqrt(px * px + py * py) || 1
    const curve = Math.sqrt((bx - ax) ** 2 + (by - ay) ** 2) * 0.15
    return `M ${ax} ${ay} Q ${mx + (px / pl) * curve} ${my + (py / pl) * curve} ${bx} ${by}`
  }
  const nx = dx / len
  const ny = dy / len
  const curve = Math.sqrt((bx - ax) ** 2 + (by - ay) ** 2) * 0.12
  return `M ${ax} ${ay} Q ${mx + nx * curve} ${my + ny * curve} ${bx} ${by}`
}

// Pre-compute paths
const LINE_PATHS = CONNECTIONS.map(([i, j]) =>
  getCurvedPath(
    NODE_POSITIONS[i].x,
    NODE_POSITIONS[i].y,
    NODE_POSITIONS[j].x,
    NODE_POSITIONS[j].y,
    CENTER.x,
    CENTER.y,
  ),
)

// ─── Sub-components ──────────────────────────────────────────────

function HumanOSDiagram({
  activePillar,
  onActivate,
}: {
  activePillar: number
  onActivate: (i: number) => void
}) {
  const linesRef = useRef<(SVGPathElement | null)[]>([])
  const hasDrawn = useRef(false)

  // GSAP: initial line draw
  useEffect(() => {
    const els = linesRef.current.filter(Boolean) as SVGPathElement[]
    if (els.length === 0 || hasDrawn.current) return
    hasDrawn.current = true

    els.forEach((el) => {
      const len = el.getTotalLength()
      gsap.set(el, { strokeDasharray: len, strokeDashoffset: len })
    })

    gsap.to(els, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.04,
    })
  }, [])

  // GSAP: highlight lines connected to active pillar
  useEffect(() => {
    const els = linesRef.current.filter(Boolean) as SVGPathElement[]
    if (els.length === 0) return

    gsap.to(els, {
      attr: {
        stroke: (i: number) => {
          const [a, b] = CONNECTIONS[i]
          return a === activePillar || b === activePillar
            ? '#D4AF37'
            : 'rgba(255,255,255,0.1)'
        },
        'stroke-width': (i: number) => {
          const [a, b] = CONNECTIONS[i]
          return a === activePillar || b === activePillar ? 2 : 0.5
        },
      },
      duration: 0.5,
      ease: 'power2.out',
    })
  }, [activePillar])

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="relative mx-auto aspect-square w-full max-w-[460px]"
    >
      {/* SVG lines layer */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        {LINE_PATHS.map((d, i) => (
          <path
            key={i}
            ref={(el) => {
              linesRef.current[i] = el
            }}
            d={d}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Nodes layer */}
      <div className="absolute inset-0 h-full w-full">
        {HUMAN_OS.pillars.map((pillar, i) => {
          const pos = NODE_POSITIONS[i]
          return (
            <motion.button
              key={pillar.id}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: i * 0.15,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  },
                },
              }}
              className={cn(
                'absolute -translate-x-1/2 -translate-y-1/2',
                'flex items-center justify-center',
                'h-14 w-14 rounded-full sm:h-16 sm:w-16',
                'border-2 transition-colors duration-300',
                activePillar === i
                  ? 'border-gold-500 bg-gold-500/20 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'border-white/20 bg-navy-800/80 hover:border-white/40',
              )}
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              onClick={() => onActivate(i)}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              animate={
                activePillar === i
                  ? {
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        '0 0 15px rgba(212,175,55,0.3)',
                        '0 0 30px rgba(212,175,55,0.5)',
                        '0 0 15px rgba(212,175,55,0.3)',
                      ],
                    }
                  : { scale: 1, boxShadow: '0 0 0px rgba(212,175,55,0)' }
              }
              transition={
                activePillar === i
                  ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                  : { duration: 0.3 }
              }
            >
              <PillarIcon
                icon={pillar.icon}
                isActive={activePillar === i}
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}

function DetailPanel({
  pillars,
  activePillar,
  onActivate,
}: {
  pillars: typeof HUMAN_OS.pillars
  activePillar: number
  onActivate: (i: number) => void
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="flex h-[320px] overflow-hidden rounded-lg border border-white/5"
    >
      {pillars.map((pillar, i) => (
        <PillarCard
          key={pillar.id}
          title={pillar.title}
          description={pillar.description}
          icon={pillar.icon}
          isActive={activePillar === i}
          onActivate={() => onActivate(i)}
          index={i}
        />
      ))}
    </motion.div>
  )
}

// ─── Mobile accordion (preserved from original) ──────────────────
function PillarCardMobile({
  title,
  description,
  icon,
  isActive,
  onActivate,
}: {
  title: string
  description: string
  icon: string
  isActive: boolean
  onActivate: () => void
  index: number
}) {
  return (
    <motion.button
      className={cn(
        'w-full border border-white/10 px-6 py-5 text-left transition-all duration-300',
        isActive ? 'border-gold-500/30 bg-gold-500/10' : 'bg-white/[0.02]',
      )}
      onClick={onActivate}
      layout
    >
      <div className="flex items-center gap-4">
        <PillarIcon icon={icon} isActive={isActive} />
        <h3
          className={cn(
            'font-serif text-lg transition-colors duration-300',
            isActive ? 'text-gold-400' : 'text-white/80',
          )}
        >
          {title}
        </h3>
      </div>
      <motion.div
        className="overflow-hidden"
        initial={false}
        animate={{
          height: isActive ? 'auto' : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {description}
        </p>
      </motion.div>
    </motion.button>
  )
}

// ─── Main component ──────────────────────────────────────────────
export default function HumanOS() {
  const [activePillar, setActivePillar] = useState<number>(0)

  const handleActivate = useCallback((index: number) => {
    setActivePillar(index)
  }, [])

  const { badge, title, subtitle, pillars } = HUMAN_OS

  return (
    <section
      id="philosophy"
      className="relative min-h-screen bg-navy-900 py-section-lg"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gold-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
        />

        {/* ── Desktop ─────────────────────────────────────────── */}

        {/* Pentagon diagram */}
        <div className="hidden md:block">
          <HumanOSDiagram
            activePillar={activePillar}
            onActivate={handleActivate}
          />
        </div>

        {/* Detail panel with selected description */}
        <div className="hidden md:mt-10 md:block">
          <DetailPanel
            pillars={pillars}
            activePillar={activePillar}
            onActivate={handleActivate}
          />
        </div>

        {/* ── Mobile: vertical accordion ──────────────────────── */}
        <div className="flex flex-col gap-2 md:hidden">
          {pillars.map((pillar, i) => (
            <PillarCardMobile
              key={pillar.id}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              isActive={activePillar === i}
              onActivate={() =>
                handleActivate(activePillar === i ? -1 : i)
              }
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
