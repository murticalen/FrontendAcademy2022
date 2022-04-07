import React from 'react'

export class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = { date: props.date || new Date() }

    this.updateDate = this.updateDate.bind(this)
  }

  // update date -> set full new Date, because we can't guarantee only 1s passed
  updateDate() {
    console.log('UPDATE')

    this.setState({ date: new Date() })
  }

  // set interval
  componentDidMount() {
    this.timerId = setInterval(this.updateDate, 1000)
  }

  // clean interval
  componentWillUnmount() {
    clearInterval(this.timerId) // what will happen if we forget to clear interval?
  }

  render() {
    const { date } = this.state

    return <h3>{date.toLocaleTimeString()}</h3>
  }
}
