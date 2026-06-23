'use client'
import { useState, useEffect } from 'react'
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>('')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }) },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    sectionIds.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [sectionIds])
  return active
}
