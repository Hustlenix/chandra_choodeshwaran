import { Card } from '@/components/ui/Card'
import { Award, GraduationCap, BookOpen, Users } from 'lucide-react'

const credentials = [
  {
    icon: Award,
    title: 'Award-Winning Trainer',
    description: 'Recipient of the Times Edu Ex Award 2024 and ISTD Outstanding National Trainer 2020.',
  },
  {
    icon: GraduationCap,
    title: 'Certified Professional',
    description: 'Certified in Emotional Intelligence, Instructional Design, and Career Counselling.',
  },
  {
    icon: BookOpen,
    title: 'Podcast Host',
    description: "Creator and host of 'Chandru's Psychology In Tamil' — a popular Tamil podcast on EI and growth.",
  },
  {
    icon: Users,
    title: 'Community Leader',
    description: 'Outstanding JCI Senator and active contributor to community leadership and service initiatives.',
  },
]

export function CredentialsGrid() {
  return (
    <section className="mt-16">
      <h2 className="mb-8 font-serif text-heading-3 text-text-primary">Credentials & Recognition</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {credentials.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.title} variant="elevated" padding="lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50">
                <Icon className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="mb-2 font-serif text-heading-4 text-text-primary">{item.title}</h3>
              <p className="text-body-sm text-text-muted">{item.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
