import { useEffect, useRef, useState } from 'react'

/**
 * Flags an element as visible once it scrolls into view (fires once).
 * Elements are always rendered; CSS only animates them when motion is allowed.
 */
export function useReveal<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}
