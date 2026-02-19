/**
 * SectionWrapper - Reusable section container with fade-in animation on scroll.
 * Uses Intersection Observer to trigger animation when section enters viewport.
 */
import { useEffect, useRef, useState } from 'react'

export default function SectionWrapper({ id, children, className = '' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
    >
      {children}
    </section>
  )
}
