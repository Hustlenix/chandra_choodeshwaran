export interface NavItem {
  label: string
  href: string
  isActive: (pathname: string) => boolean
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    isActive: (pathname) => pathname === '/',
  },
  {
    label: 'About',
    href: '/about',
    isActive: (pathname) => pathname === '/about',
  },
  {
    label: 'Philosophy',
    href: '/philosophy',
    isActive: (pathname) => pathname.startsWith('/philosophy'),
  },
  {
    label: 'Podcast',
    href: '/podcast',
    isActive: (pathname) => pathname.startsWith('/podcast'),
  },
  {
    label: 'Journey',
    href: '/journey',
    isActive: (pathname) => pathname === '/journey',
  },
  {
    label: 'Connect',
    href: '/connect',
    isActive: (pathname) => pathname === '/connect',
  },
]
