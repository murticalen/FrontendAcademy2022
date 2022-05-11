import React from 'react'
import ReactDOM from 'react-dom'

/**
 * This component simulates index.html (where we would usually add portal root, alongside app root (`root`))
 */
export function TopLevelPortal() {
  return (
    <>
      {/* portal will be rendered here */}
      <div id="portal-root" />

      {/* app will be rendered here */}
      <div id="app-root">
        <App />
      </div>
    </>
  )
}

/**
 * With CRA this would be App.js
 */
function App() {
  const [isToastVisible, setIsToastVisible] = React.useState(false)

  const onButtonClick = React.useCallback(() => {
    setIsToastVisible(prev => !prev)
  }, [])

  return (
    <div>
      <h1>Welcome to the Portal app</h1>
      <button onClick={onButtonClick}>Toggle Toast</button>
      {isToastVisible && (
        <Toast>
          <div style={{ display: 'flex', border: '1px solid tomato' }}>
            <h4>I am the Toast</h4>
            <button style={{ marginLeft: 4 }} onClick={onButtonClick}>
              X
            </button>
          </div>
        </Toast>
      )}
    </div>
  )
}

/**
 * Note how Toast will be rendered outside hierarchy in the DOM, but will be kept in hierarchy in Virtual DOM
 */
function Toast({ children }) {
  const markup = <div style={{ right: 50, position: 'fixed', bottom: 50, background: 'whitesmoke' }}>{children}</div>

  const portalRoot = document.getElementById('portal-root')

  return ReactDOM.createPortal(markup, portalRoot)
}
