import React from 'react'

export function Refs() {
  // default state for useRef hook is null (when element is not mounted or doesn't exists)
  const formRef = React.useRef(null)

  // get width of ref element and log it
  const getWidth = React.useCallback(() => {
    console.log({ formRef })

    if (formRef.current) {
      const width = formRef.current.getBoundingClientRect().width

      console.log('Form element width =', width)
    }
  }, [formRef])

  // can we recalculate heigh when it changes 🤔
  React.useEffect(() => {
    getWidth()

    window.addEventListener('resize', getWidth)

    return () => {
      window.removeEventListener('resize', getWidth)
    }
  }, [getWidth])

  return (
    <div>
      <h3>Random text</h3>
      <div ref={formRef}>
        <Form />
      </div>
    </div>
  )
}

// Form with uncontrolled input
function Form () {
  const inputRef = React.useRef(null)

  const handleSubmit = event => {
    event.preventDefault()

    console.log({ inputRef })

    const refValue = inputRef.current && inputRef.current.value

    console.log('Input value =', refValue)
  }

  return (
    <form style={{width: '80vw'}} onSubmit={handleSubmit}>
      <input style={{ width: '70%', maxWidth: 500, border: '1px solid' }} ref={inputRef} type="text" placeholder="Text" />
      <button style={{ width: '30%', maxWidth: 200, border: '1px solid' }}>Submit</button>
    </form>
  )
}