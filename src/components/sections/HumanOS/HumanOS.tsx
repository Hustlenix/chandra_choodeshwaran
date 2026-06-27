'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HUMAN_OS, HUMAN_OS_PILLARS } from '@/content/pillars'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { Eye, Heart, MessageCircle, Zap, TrendingUp, ChevronDown } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  eye: Eye,
  heart: Heart,
  'message-circle': MessageCircle,
  zap: Zap,
  'trending-up': TrendingUp,
}

// ─── Pentagon geometry ─────────────────────────────────────────────
// Regular pentagon vertices centred at (200,200), radius 160
const VERTICES = [
  { x: 200, y: 40 },    // top
  { x: 352.2, y: 150.6 }, // top-right
  { x: 294.1, y: 329.4 }, // bottom-right
  { x: 105.9, y: 329.4 }, // bottom-left
  { x: 47.8, y: 150.6 },  // top-left
]

const CENTRE = { x: 200, y: 200 }

const PENTAGON_PATH = `M ${VERTICES.map((v) => `${v.x} ${v.y}`).join(' L ')} Z`

const WEB_PATHS = VERTICES.map((v) => `M ${CENTRE.x} ${CENTRE.y} L ${v.x} ${v.y}`)

export default function HumanOS() {
  const [activePillar, setActivePillar] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)

  const activeData = activePillar
    ? HUMAN_OS_PILLARS.find((p) => p.id === activePillar)
    : null

  return (
    <section id="human-os" className="relative overflow-hidden py-section-lg">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <SectionHeading
          badge={HUMAN_OS.badge}
          title={HUMAN_OS.title}
          subtitle={HUMAN_OS.subtitle}
          align="center"
        />
      </div>

      {/* ── Desktop: Pentagon ───────────────────────────────────── */}
      <div className="hidden md:block">
        <div className="relative mx-auto max-w-[600px]">
          {/* SVG pentagon + web lines */}
          <svg
            viewBox="0 0 400 400"
            className="h-full w-full"
            aria-hidden="true"
          >
            {/* Web lines (inner spokes) */}
            {WEB_PATHS.map((d, i) => (
              <motion.path
                key={`web-${i}`}
                d={d}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-accent-200/30"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: 'easeInOut' }}
              />
            ))}

            {/* Pentagon outline */}
            <motion.path
              d={PENTAGON_PATH}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-accent-300/50"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </svg>

          {/* Pillar nodes at vertices */}
          {HUMAN_OS_PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon]
            const isActive = activePillar === pillar.id
            const pos = VERTICES[i]

            return (
              <motion.button
                key={pillar.id}
                onClick={() =>
                  setActivePillar((prev) => (prev === pillar.id ? null : pillar.id))
                }
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
                className={cn(
                  'absolute flex -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center gap-2 transition-colors duration-300',
                  'group',
                )}
                style={{ left: `${(pos.x / 400) * 100}%`, top: `${(pos.y / 400) * 100}%` }}
              >
                <span
                  className={cn(
                    'flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300',
                    isActive
                      ? 'border-accent-400 bg-accent-100 text-accent-600'
                      : 'border-border-light bg-white text-text-muted hover:border-accent-300 hover:text-accent-500',
                  )}
                >
                  {Icon && <Icon className="h-6 w-6" />}
                </span>
                <span
                  className={cn(
                    'whitespace-nowrap text-xs font-medium transition-colors duration-300',
                    isActive ? 'text-accent-600' : 'text-text-muted group-hover:text-text-primary',
                  )}
                >
                  {pillar.title}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Active pillar detail */}
        <AnimatePresence mode="wait">
          {activeData && (
            <motion.div
              key={activeData.id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className="mx-auto mt-12 max-w-2xl text-center"
            >
              <p className="text-body-lg leading-relaxed text-text-muted">
                {activeData.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Mobile: Accordion cards ─────────────────────────────── */}
      <div className="mx-auto max-w-[600px] px-6 md:hidden">
        <div className="flex flex-col gap-3">
          {HUMAN_OS_PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon]
            const isOpen = mobileOpen === pillar.id

            return (
              <motion.div
                key={pillar.id}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <button
                  onClick={() =>
                    setMobileOpen((prev) => (prev === pillar.id ? null : pillar.id))
                  }
                  className="flex w-full items-center justify-between rounded-xl border border-border-light bg-white px-5 py-4 text-left transition-colors duration-200 hover:border-accent-300"
                >
                  <span className="flex items-center gap-3">
                    {Icon && <Icon className="h-5 w-5 text-accent-400" />}
                    <span className="text-sm font-semibold text-text-primary">
                      {pillar.title}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 text-text-muted transition-transform duration-200',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-x border-b border-border-light rounded-b-xl px-5 pb-5 pt-3">
                        <p className="text-sm leading-relaxed text-text-muted">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
