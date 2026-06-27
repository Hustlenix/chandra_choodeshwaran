export function HeroBackground() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Simple gradient from white to warm cream — no mesh, no particles, no interactivity */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-amber-50" />
    </div>
  )
}
