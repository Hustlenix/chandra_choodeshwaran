'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-surface-white px-4">
      <h1 className="font-serif text-6xl text-accent-500 md:text-8xl">Oops!</h1>
      <p className="mt-4 max-w-md text-center text-text-muted">
        Something went wrong. Please try again or come back later.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent-400/30 px-8 py-3 text-sm font-medium text-accent-500 transition-colors hover:bg-accent-50"
      >
        Try Again
      </button>
    </main>
  )
}
