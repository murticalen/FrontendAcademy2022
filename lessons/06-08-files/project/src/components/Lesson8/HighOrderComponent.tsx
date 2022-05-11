import React from 'react'

function getIsMobile(width: number) {
  return width < 650
}

function withIsMobile(Component: typeof Text) {
  // Props here would be props assigned to Component
  return function WithIsMobile(props: {color: string}) {
    // what happens if we name our functional component?
    // isMobile that will be passed to provided Component
    const [isMobile, setIsMobile] = React.useState(getIsMobile(window.innerWidth))

    function resizeHandler() {
      const width = window.innerWidth
      const newIsMobile = getIsMobile(width)
      setIsMobile(newIsMobile)
    }

    React.useEffect(() => {
      window.addEventListener('resize', resizeHandler)

      return () => {
        window.removeEventListener('resize', resizeHandler)
      }
    }, [])

    // return received component decorated with isMobile prop and all own props
    return <Component isMobile={isMobile} {...props} />
  }
}

function Text({ isMobile, color }: {isMobile: boolean, color: string}) {
  return (
    <div style={{ color }}>
      <p>Is mobile: {isMobile ? 'yes' : 'no'}</p>
    </div>
  )
}

// component is decorated with isMobile props
export const TextWithIsMobile = withIsMobile(Text)
