import { useState, useEffect } from 'react'

interface WindowDim {
  width: number
  height: number
}

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowDim>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

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
