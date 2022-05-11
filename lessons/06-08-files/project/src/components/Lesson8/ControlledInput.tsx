import React, { useState } from 'react'

const Input = ({ value, onChange }: {value: string, onChange: (input: string) => void}) => (
  <input
    value={value}
    type="text"
    onChange={event => {
      onChange(event.target.value)
    }}
  />
)

export function Form() {
  const [value, setValue] = useState('')

  return (
    <div>
      <Input value={value} onChange={setValue} />
      <button disabled={!value} onClick={() => alert(value)}>
        Submit
      </button>
    </div>
  )
}
