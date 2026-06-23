'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { fadeInUp, scaleIn } from '@/lib/animations'
import ImpactVisual from './ImpactVisual'
import type { ImpactArea } from '@/types'

interface ImpactBlockProps {
  block: ImpactArea
  index: number
}

function AnimatedMetric({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [displayValue, setDisplayValue] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10)
          const suffix = value.replace(/[0-9]/g, '')
          let start = 0
          const duration = 1500
          const step = Math.max(1, Math.ceil(numericValue / 60))
          const timer = setInterval(() => {
            start += step
            if (start >= numericValue) {
              setDisplayValue(value)
              clearInterval(timer)
            } else {
              setDisplayValue(start + suffix)
            }
          }, duration / 60)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="font-serif text-3xl text-gold-500 sm:text-4xl">
        {displayValue}
      </div>
      <div className="mt-1 text-xs text-muted">{label}</div>
    </motion.div>
  )
}

export default function ImpactBlock({ block, index }: ImpactBlockProps) {
  const variant = block.variant

  return (
    <section className="relative min-h-screen overflow-hidden border-t border-white/5">
      {/* split: 50/50 text + visual */}
      {variant === 'split' && (
        <div className="mx-auto grid min-h-screen grid-cols-1 lg:grid-cols-2">
          <motion.div
            className="flex items-center justify-center px-6 py-24 sm:px-12 lg:px-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-lg">
              <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
                {block.title}
              </span>
              <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                {block.subtitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                {block.description}
              </p>
              {block.metrics && (
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {block.metrics.map((metric, i) => (
                    <AnimatedMetric
                      key={metric.label}
                      value={metric.value}
                      label={metric.label}
                      delay={i * 0.15}
                    />
                  ))}
                </div>
              )}
              <div className="mt-10">
                <Button variant="secondary" href="#contact">
                  Book a Session
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
          <div className="relative flex items-center justify-center bg-white/[0.02] px-6 py-24">
            <ImpactVisual variant={variant} blockId={block.title} />
          </div>
        </div>
      )}

      {/* full: centered text with animated metrics */}
      {variant === 'full' && (
        <div className="relative flex min-h-screen items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/3 blur-[100px]" />
          </div>
          <motion.div
            className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
              {block.title}
            </span>
            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {block.subtitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {block.description}
            </p>
            {block.metrics && (
              <div className="mt-10 flex flex-wrap justify-center gap-12">
                {block.metrics.map((metric, i) => (
                  <AnimatedMetric
                    key={metric.label}
                    value={metric.value}
                    label={metric.label}
                    delay={i * 0.15}
                  />
                ))}
              </div>
            )}
            <div className="mt-10">
              <Button variant="secondary" href="#contact">
                Book a Session
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0">
            <ImpactVisual variant={variant} blockId={block.title} />
          </div>
        </div>
      )}

      {/* diagonal: skewed split layout */}
      {variant === 'diagonal' && (
        <div className="relative mx-auto grid min-h-screen grid-cols-1 lg:grid-cols-2">
          <div className="relative order-2 flex items-center justify-center bg-white/[0.02] px-6 py-24 lg:order-1">
            <ImpactVisual variant={variant} blockId={block.title} />
          </div>
          <motion.div
            className="order-1 flex items-center justify-center px-6 py-24 sm:px-12 lg:order-2 lg:px-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-lg">
              <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
                {block.title}
              </span>
              <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                {block.subtitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                {block.description}
              </p>
              {block.metrics && (
                <div className="mt-8 flex flex-wrap gap-8">
                  {block.metrics.map((metric, i) => (
                    <AnimatedMetric
                      key={metric.label}
                      value={metric.value}
                      label={metric.label}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              )}
              <div className="mt-10">
                <Button variant="secondary" href="#contact">
                  Book a Session
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* grid: 2/3 text + 1/3 service list */}
      {variant === 'grid' && (
        <div className="relative mx-auto min-h-screen">
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-5">
            <motion.div
              className="col-span-3 flex items-center justify-center px-6 py-24 sm:px-12 lg:px-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="max-w-xl">
                <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
                  {block.title}
                </span>
                <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  {block.subtitle}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  {block.description}
                </p>
                <div className="mt-10">
                  <Button variant="primary" href="#contact">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
            <div className="col-span-2 flex items-center border-l border-white/5 bg-white/[0.02] px-6 py-24">
              <div className="w-full max-w-sm">
                {block.services && (
                  <>
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                      Services
                    </p>
                    <ul className="space-y-4">
                      {block.services.map((service, i) => (
                        <motion.li
                          key={service}
                          className="flex items-center gap-3 text-white/80"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                          <span className="text-sm">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
