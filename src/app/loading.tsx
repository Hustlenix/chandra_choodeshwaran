export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-accent-200 border-t-accent-500" />
        <p className="text-sm text-text-muted animate-pulse">Loading...</p>
      </div>
    </div>
  )
}
