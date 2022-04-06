import React from 'react'

export function Greeting(props) {
    // Object deconstruction is very common in React. It will create variables with values from object with the same name
    // in our case:
    // `const isUppercase = this.props.isUppercase`
    // `const color = this.props.color` and so on
    const { isUppercase, color, onClick, children } = props

    // Note `children` prop that was not sent as attribute. `children` prop is special as it is equal to children of our rendered component
    // e.g. `<Magic><h1>Yo</h1></Magic>`, `Magic` component will have `children` set to `<h1>Yo</h1>`
    // `children` can be any valid React.Element (JSX, string, null, false, array, function).

    return (
      <p style={{ textTransform: isUppercase ? 'uppercase' : 'initial', color: color || 'initial' }} onClick={onClick}>
        {/* Note how `style` is object with CSS properties that also follow camelCase rule. */}
        {children}
      </p>
    )
}
