import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-surface-white px-4">
      <h1 className="font-serif text-[12rem] leading-none text-pink-400 md:text-[18rem]">404</h1>
      <p className="mt-4 text-center text-lg text-text-muted md:text-xl">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-8">
        <Button variant="primary" size="lg">
          <span aria-hidden="true">&larr;</span> Back to Home
        </Button>
      </Link>
    </main>
  )
}
