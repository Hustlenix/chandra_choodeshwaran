declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string
    absoluteStrokeWidth?: boolean
  }
  export type Icon = FC<IconProps>
  
  export const ArrowUp: Icon
  export const ArrowRight: Icon
  export const ChevronDown: Icon
  export const Play: Icon
  export const Clock: Icon
  export const ArrowUpRight: Icon
  export const X: Icon
  export const Youtube: Icon
  export const Music2: Icon
  export const Linkedin: Icon
  export const Instagram: Icon
  export const Twitter: Icon
  export const Menu: Icon
  export const ExternalLink: Icon
  export const Quote: Icon
  export const Star: Icon
  export const MapPin: Icon
  export const Calendar: Icon
  export const Users: Icon
  export const Heart: Icon
  export const MessageCircle: Icon
  export const BookOpen: Icon
  export const Target: Icon
  export const TrendingUp: Icon
  export const Award: Icon
  export const Briefcase: Icon
  export const GraduationCap: Icon
  export const Phone: Icon
  export const Mail: Icon
  export const Send: Icon
  export const Check: Icon
  export const ChevronRight: Icon
  export const ChevronLeft: Icon
  export const Minus: Icon
  export const Plus: Icon
  export const Eye: Icon
  export const Zap: Icon
}
