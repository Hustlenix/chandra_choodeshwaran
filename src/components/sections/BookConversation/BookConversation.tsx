'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { BOOK_CONVERSATION } from '@/content/contact'
import { staggerContainer, fadeSlideUp } from '@/lib/animations'

export default function BookConversation() {
  return (
    <section
      id="connect"
      className="relative min-h-screen overflow-hidden bg-surface-white"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Pink radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-pink-400/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 md:px-8 lg:px-12">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.span
            variants={fadeSlideUp}
            className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-pink-500"
          >
            {BOOK_CONVERSATION.badge}
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={fadeSlideUp}
            className="font-serif text-heading-1 leading-tight text-text-primary"
          >
            {BOOK_CONVERSATION.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeSlideUp}
            className="mt-6 text-body-lg text-text-muted"
          >
            {BOOK_CONVERSATION.subtitle}
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            variants={fadeSlideUp}
            className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-pink-400/50 to-transparent"
          />

          {/* CTA Button */}
          <motion.div variants={fadeSlideUp} className="mt-12">
            <Button
              variant="primary"
              size="lg"
              href={BOOK_CONVERSATION.ctaUrl}
              className="group text-base"
            >
              {BOOK_CONVERSATION.ctaLabel}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Email */}
          <motion.p
            variants={fadeSlideUp}
            className="mt-8 text-micro text-text-muted"
          >
            {BOOK_CONVERSATION.email}
          </motion.p>

          {/* Location */}
          <motion.p
            variants={fadeSlideUp}
            className="mt-1 text-micro text-text-muted"
          >
            {BOOK_CONVERSATION.location}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
