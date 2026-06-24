import { SPOTIFY_EMBED_URL } from '@/config/social'

export function SpotifyEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-2xl">
      <iframe
        src={SPOTIFY_EMBED_URL}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="border-0"
        title="Chandru's Psychology In Tamil on Spotify"
      />
    </div>
  )
}
