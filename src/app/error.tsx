'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-900 px-4">
      <h1 className="font-serif text-6xl text-gold-500 md:text-8xl">Oops!</h1>
      <p className="mt-4 max-w-md text-center text-muted">
        Something went wrong. Please try again or come back later.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-8 py-3 text-sm font-medium text-gold-400 transition-colors hover:bg-gold-500/10"
      >
        Try Again
      </button>
    </main>
  )
}
