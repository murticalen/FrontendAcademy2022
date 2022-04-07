import React from 'react'

const defaultState = ['Hello', 'Again', 'SofaScore', 'Academy']

export class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = { words: defaultState }
  }

  render() {
    const { words } = this.state

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
            this.setState({ words: wordsCopy.sort() })
          }}
        >
          SORT
        </button>
        <button
          style={{ marginLeft: 4 }}
          onClick={() => {
            this.setState({ words: defaultState })
          }}
        >
          REVERT
        </button>
      </div>
    )
  }
}
