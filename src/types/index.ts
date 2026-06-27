export interface PillarDetail {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  metrics: { value: string; label: string }[]
  variant: string
  visualType: string
}
