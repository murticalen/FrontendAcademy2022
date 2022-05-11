import React from 'react'

function getIsMobile(width: number) {
  return width < 650
}

// custom hook
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(getIsMobile(window.innerWidth))

  const resizeHandler = React.useCallback(e => {
    const width = e.currentTarget.innerWidth
    const newIsMobile = getIsMobile(width)
    setIsMobile(newIsMobile)
  }, [])

  React.useEffect(() => {
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [resizeHandler])

  // return enhancements that will be used in decorated components
  return isMobile
}

export function TextCustomHook({ color }: {color: React.CSSProperties['color']}) {
  const isMobile = useIsMobile()

  return (
    <div style={{ color }}>
      <p>Is mobile: {isMobile ? 'yes' : 'no'}</p>
    </div>
  )
}
