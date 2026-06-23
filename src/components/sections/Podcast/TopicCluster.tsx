'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TopicClusterProps {
  topics: string[]
  activeTopic: string | null
  onTopicSelect: (topic: string | null) => void
}

export default function TopicCluster({
  topics,
  activeTopic,
  onTopicSelect,
}: TopicClusterProps) {
  const uniqueTopics = [...new Set(topics)].slice(0, 12)

  if (uniqueTopics.length === 0) return null

  return (
    <div>
      <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Topics
      </h4>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onTopicSelect(null)}
          className={cn(
            'rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-300',
            activeTopic === null
              ? 'bg-gold-500/20 text-gold-400 border border-gold-500/40'
              : 'border border-white/10 text-muted hover:border-white/20 hover:text-white'
          )}
        >
          All
        </button>
        {uniqueTopics.map((topic) => (
          <motion.button
            key={topic}
            onClick={() =>
              onTopicSelect(activeTopic === topic ? null : topic)
            }
            className={cn(
              'rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-300',
              activeTopic === topic
                ? 'bg-gold-500/20 text-gold-400 border border-gold-500/40'
                : 'border border-white/10 text-muted hover:border-white/20 hover:text-white'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {topic}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
