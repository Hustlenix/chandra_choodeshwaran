'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface NavContextType {
  isMobileOpen: boolean
  setMobileOpen: (open: boolean) => void
}

const NavContext = createContext<NavContextType>({
  isMobileOpen: false,
  setMobileOpen: () => {},
})

export function useNavContext() {
  return useContext(NavContext)
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <NavContext.Provider value={{ isMobileOpen, setMobileOpen }}>
      {children}
    </NavContext.Provider>
  )
}
