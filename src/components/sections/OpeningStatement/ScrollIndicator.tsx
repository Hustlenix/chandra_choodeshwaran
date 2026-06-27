export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted/60">
          Scroll
        </span>
        <svg
          className="h-4 w-4 animate-bounce text-accent-400/60"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}
