import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-900 px-4">
      <h1 className="font-serif text-[12rem] leading-none text-gold-500 md:text-[18rem]">404</h1>
      <p className="mt-4 text-center text-lg text-muted md:text-xl">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-8 py-3 text-sm font-medium text-gold-400 transition-colors hover:bg-gold-500/10"
      >
        <span aria-hidden="true">&larr;</span> Back to Home
      </Link>
    </main>
  )
}
