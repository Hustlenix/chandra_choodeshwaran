export function PillarIllustration({ type }: { type: string }) {
  const cls = 'w-full h-full'

  switch (type) {
    case 'mirror':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden="true">
          <ellipse cx="100" cy="100" rx="60" ry="80" className="stroke-accent-400/30" strokeWidth="1.5" />
          <ellipse cx="100" cy="100" rx="40" ry="55" className="stroke-accent-400/20" strokeWidth="1" />
          <line x1="100" y1="20" x2="100" y2="180" className="stroke-accent-400/40" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="8" className="fill-accent-400/40" />
        </svg>
      )
    case 'waves':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden="true">
          <path d="M20 140 Q50 100 80 140 T140 140 T200 140" className="stroke-accent-400/30" strokeWidth="2" fill="none" />
          <path d="M20 120 Q50 80 80 120 T140 120 T200 120" className="stroke-accent-400/20" strokeWidth="1.5" fill="none" />
          <path d="M20 160 Q50 120 80 160 T140 160 T200 160" className="stroke-accent-400/15" strokeWidth="1" fill="none" />
          <circle cx="60" cy="115" r="3" className="fill-accent-400/40" />
          <circle cx="140" cy="135" r="3" className="fill-accent-400/30" />
        </svg>
      )
    case 'network':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden="true">
          <circle cx="100" cy="40" r="12" className="stroke-accent-400/40 fill-accent-400/10" strokeWidth="1.5" />
          <circle cx="40" cy="140" r="12" className="stroke-accent-400/30 fill-accent-400/10" strokeWidth="1.5" />
          <circle cx="160" cy="140" r="12" className="stroke-accent-400/30 fill-accent-400/10" strokeWidth="1.5" />
          <circle cx="100" cy="170" r="12" className="stroke-accent-400/40 fill-accent-400/10" strokeWidth="1.5" />
          <line x1="100" y1="52" x2="52" y2="128" className="stroke-accent-400/20" strokeWidth="1" />
          <line x1="100" y1="52" x2="148" y2="128" className="stroke-accent-400/20" strokeWidth="1" />
          <line x1="52" y1="140" x2="100" y2="158" className="stroke-accent-400/20" strokeWidth="1" />
          <line x1="148" y1="140" x2="100" y2="158" className="stroke-accent-400/20" strokeWidth="1" />
        </svg>
      )
    case 'compass':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden="true">
          <circle cx="100" cy="100" r="70" className="stroke-accent-400/30" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="45" className="stroke-accent-400/20" strokeWidth="1" />
          <line x1="100" y1="30" x2="100" y2="170" className="stroke-accent-400/40" strokeWidth="1.5" />
          <line x1="30" y1="100" x2="170" y2="100" className="stroke-accent-400/40" strokeWidth="1.5" />
          <polygon points="100,40 94,70 106,70" className="fill-accent-400/40" />
          <polygon points="100,160 94,130 106,130" className="fill-accent-400/20" />
          <polygon points="40,100 70,94 70,106" className="fill-accent-400/20" />
          <polygon points="160,100 130,94 130,106" className="fill-accent-400/20" />
        </svg>
      )
    case 'ascent':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden="true">
          <polyline points="20,160 60,130 100,90 140,50 180,30" className="stroke-accent-400/40" strokeWidth="2" fill="none" />
          <polyline points="20,175 60,150 100,115 140,80 180,60" className="stroke-accent-400/20" strokeWidth="1" fill="none" />
          <circle cx="180" cy="30" r="6" className="fill-accent-400/50" />
          <circle cx="140" cy="50" r="4" className="fill-accent-400/30" />
          <circle cx="100" cy="90" r="4" className="fill-accent-400/30" />
          <circle cx="60" cy="130" r="4" className="fill-accent-400/20" />
          <circle cx="20" cy="160" r="4" className="fill-accent-400/15" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden="true">
          <circle cx="100" cy="100" r="60" className="stroke-accent-400/30" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="30" className="stroke-accent-400/20" strokeWidth="1" />
          <circle cx="100" cy="100" r="8" className="fill-accent-400/40" />
        </svg>
      )
  }
}
