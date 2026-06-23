export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900">
      <div className="flex flex-col items-center gap-6">
        <div className="h-10 w-10 animate-pulse rounded-full border-2 border-gold-500" />
        <div className="flex flex-col items-center gap-2">
          <div className="h-3 w-32 animate-pulse rounded bg-navy-700" />
          <div className="h-2 w-24 animate-pulse rounded bg-navy-600" />
        </div>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-navy-700">
          <div className="h-full w-1/3 animate-pulse rounded-full bg-gold-500" />
        </div>
      </div>
    </div>
  )
}
