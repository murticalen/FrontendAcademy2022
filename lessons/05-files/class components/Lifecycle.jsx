import React from 'react'

function log(name) {
  console.log(name)
  alert(name)
}

export class Lifecycle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    log('constructor')
  }

  static getDerivedStateFromProps() {
    log('getDerivedStateFromProps')

    return null
  }

  render() {
    log('render')

    return <div>Lifecycle demo</div>
  }

  componentDidMount() {
    log('componentDidMount')
  }

  shouldComponentUpdate() {
    return true
  }

  getSnapshotBeforeUpdate() {
    log('getSnapshotBeforeUpdate')

    return null
  }

  componentDidUpdate() {
    log('componentDidUpdate')
  }

  componentWillUnmount() {
    log('componentWillUnmount')
  }
}
