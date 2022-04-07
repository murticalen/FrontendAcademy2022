import React from 'react'

const specialButtonStyle = {
  color: 'white',
  backgroundColor: 'tomato',
}

class Button extends React.Component {
  render() {
    const { isActive, value, name, onClick, children } = this.props

    return (
      <button style={isActive ? specialButtonStyle : {}} value={value} name={name} onClick={onClick}>
        {children}
      </button>
    )
  }
}

export class Counter extends React.Component {
  // constructor is always called with props
  constructor(props) {
    // super should always be called with props
    super(props)

    // initialize state, if we omit this step, `this.state` would be `undefined`
    this.state = { counter: 0, lastClicked: '' }

    // classic JS bind
    this.updateCounter = this.updateCounter.bind(this)
  }

  // state should be changed only via `this.setState(stateFragment)` method.
  // `stateFragment` is changed part of state. This object will be merged with existing state to create new state.
  // this allows us to only specify what changed and avoid state copying on each state change.
  // there are tutorials that still copy whole state -> that is anti-pattern and will result in unnecessary renders.
  // `this.setState({ ...this.state, counter: 1 })` should be avoided in favor of `this.setState({ counter: 1 })`

  updateCounter(event) {
    const { name, value } = event.currentTarget

    // alert(typeof value) // -> common mistake, value is HTML property which are `string` in specification

    this.setState({ lastClicked: name, counter: this.state.counter + Number(value) })
  }

  render() {
    const { lastClicked, counter } = this.state

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button isActive={lastClicked === 'decrement'} value={-1} name="decrement" onClick={this.updateCounter}>
          -
        </Button>

        <div style={{ minWidth: 80, textAlign: 'center' }}>{counter}</div>

        <Button isActive={lastClicked === 'increment'} value={1} name="increment" onClick={this.updateCounter}>
          +
        </Button>
      </div>
    )
  }
}
