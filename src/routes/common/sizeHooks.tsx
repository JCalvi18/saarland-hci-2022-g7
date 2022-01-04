import { useState, useEffect } from 'react'


/**
 * When breakPointDim is greater than the innerWidth of the display this return true 
 * @param breakPointDim 
 * @returns boolean
 */
export function useBreakPoint(breakPointDim: number) {
  const [breakPoint, setBreakPoint] = useState<boolean>(window.innerWidth < breakPointDim)

  useEffect(() => {
    function handleResize() {

      const newBreakPointVal = window.innerWidth < breakPointDim

      setBreakPoint(newBreakPointVal)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return breakPoint
}

export function useMobileBreakPoint() {
  const shouldBreak = useBreakPoint(600)

  return shouldBreak
}
