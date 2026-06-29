export function SectionPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute -right-20 -top-20 h-64 w-64 text-accent-400/5"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <svg
        className="absolute -bottom-16 -left-16 h-48 w-48 text-accent-400/5"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="20" y="20" width="160" height="160" rx="20" stroke="currentColor" strokeWidth="0.5" />
        <rect x="50" y="50" width="100" height="100" rx="10" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  )
}
