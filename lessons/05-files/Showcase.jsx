import React from 'react'

// React components are ALWAYS capitalized!

/**
 * Example of functional component with state hook.
 * Functional components are function of props. They return JSX markup.
 */
export function CounterHooks(props) {
  // this is useState hook
  const [counter, setCounter] = React.useState(0)

  return (
    <div>
      <div style={{ color: props.color }}>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>INCREMENT</button>
    </div>
  )
}

/**
 * Example of class component with state.
 * Class components are more complex and verbose, but they are still used in some use cases.
 */
export class CounterClass extends React.Component {
  state = { counter: 0 }

  render() {
    return (
      <div>
        <div
          style={{
            color: this.props.color,
          }}
        >
          {this.state.counter}
        </div>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>INCREMENT</button>
      </div>
    )
  }
}
