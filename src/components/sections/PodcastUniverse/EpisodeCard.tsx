import { cn } from '@/lib/utils'

interface Episode {
  title: string
  description: string
  duration: string
  episodeNumber: number
  featured?: boolean
  themes: string[]
}

interface EpisodeCardProps {
  episode: Episode
  spotifyUrl: string
  featured?: boolean
}

export default function EpisodeCard({
  episode,
  spotifyUrl,
  featured = false,
}: EpisodeCardProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-border-light bg-surface-white p-6 transition-shadow hover:shadow-card',
        featured && 'border-l-[6px] border-accent-400 p-8',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-micro uppercase tracking-widest text-accent-500/70">
              EP {String(episode.episodeNumber).padStart(2, '0')}
            </span>
            {featured && (
              <span className="rounded-pill bg-accent-100/50 px-3 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-accent-500">
                Featured
              </span>
            )}
          </div>

          <h3
            className={cn(
              'font-display text-text-primary',
              featured ? 'text-heading-2' : 'text-heading-3',
            )}
          >
            {episode.title}
          </h3>

          <p className="text-body-sm leading-relaxed text-text-muted">
            {episode.description}
          </p>
        </div>

        <span className="shrink-0 whitespace-nowrap font-mono text-micro uppercase tracking-wider text-text-primary/30">
          {episode.duration}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {episode.themes.map((theme) => (
            <span
              key={theme}
              className="rounded-pill border border-border-light px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-text-muted/60"
            >
              {theme}
            </span>
          ))}
        </div>

        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-1.5 rounded-pill px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider transition-colors',
            featured
              ? 'bg-accent-100/50 text-accent-500 hover:bg-accent-100/80'
              : 'border border-border-light text-text-muted/60 hover:border-border-medium hover:text-text-primary',
          )}
        >
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          Listen on Spotify
        </a>
      </div>
    </div>
  )
}
