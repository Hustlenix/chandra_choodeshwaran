import { cn } from '@/lib/utils'
const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/chandra_choodeshwaran', icon: 'IG' },
  { label: 'Instagram', href: 'https://instagram.com/chandrudutta', icon: 'IG2' },
  { label: 'Clubhouse', href: 'https://clubhouse.com/@chandruhsr', icon: 'CH' },
  { label: 'Spotify', href: 'https://open.spotify.com/show/chandrus-psychology-in-tamil', icon: 'SP' },
]
export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex gap-4', className)}>
      {SOCIALS.map((s) => (
        <a
          key={s.label + s.href}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs font-mono text-muted hover:text-gold-400 hover:border-gold-500/50 transition-all duration-300"
          aria-label={s.label}
        >
          {s.icon}
        </a>
      ))}
    </div>
  )
}
