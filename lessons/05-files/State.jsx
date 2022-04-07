import React from 'react'

const specialButtonStyle = {
  color: 'white',
  backgroundColor: 'tomato',
}

function Button(props) {
  const { isActive, value, name, onClick, children } = props

  return (
    <button style={isActive ? specialButtonStyle : {}} value={value} name={name} onClick={onClick}>
      {children}
    </button>
  )
}

export function Counter(props) {
  const [counter, setCounter] = React.useState(0)
  const [lastClicked, setLastClicked] = React.useState() //undefined by default

  const updateCounter = (event) => {
    const { name, value } = event.currentTarget

    setCounter(counter + Number(value))
    setLastClicked(name)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button isActive={lastClicked === 'decrement'} value={-1} name="decrement" onClick={updateCounter}>
        -
      </Button>

      <div style={{ minWidth: 80, textAlign: 'center' }}>{counter}</div>

      <Button isActive={lastClicked === 'increment'} value={1} name="increment" onClick={updateCounter}>
        +
      </Button>
    </div>
  )
}
