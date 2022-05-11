import React from 'react'

function getIsMobile(width: number) {
  return width < 650
}

// Calculates if isMobile
export function BloatedText({ color }: {color: string}) {
  // isMobile calculation logic is encapsulated in Text component and cannot be reused
  const [isMobile, setIsMobile] = React.useState(getIsMobile(window.innerWidth))

  // we could refactor this handler into one place and reuse it,
  // but we would still need to handle resize listeners and state manipulation each time
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

  return (
    <div style={{ color }}>
      <p>Is mobile: {isMobile ? 'yes' : 'no'}</p>
    </div>
  )
}
