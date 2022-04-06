import React from 'react'

const defaultState = ['Hello', 'Again', 'from', 'SofaScore', 'Academy']

export function List() {

  const [words, setWords] = React.useState(defaultState)

  return (
    <div>
      <h3>
        {words.map((word, index) => (
          // key attribute is a must when returning array
          <span key={`${word}-${index}`} style={{ marginLeft: 8 }}>
            {word}
          </span>
        ))}
      </h3>

      <button
        onClick={() => {
          const wordsCopy = [...words]
          setWords(wordsCopy.sort())
        }}
      >
        SORT
      </button>
      <button
        style={{ marginLeft: 4 }}
        onClick={() => {
          setWords(defaultState)
        }}
      >
        DEFAULT
      </button>
    </div>
  )
}
