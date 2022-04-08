import React from 'react'

export function Clock() {

  const [date, setDate] = React.useState()

    // update date -> set full new Date, because we can't guarantee only 1s passed
  const updateDate = () => setDate(new Date())

  //console.log('Before any effect hooks')

  React.useEffect(() => {
    console.log('Set interval')
    //NOTE: no need to store this timeId variable in component state, in fact, it's wrong
    const timerId = setInterval(updateDate, 1000)
  
    // cleanup after effect, what happens if we don't?
    return () => {
      console.log('Clear interval')
      clearInterval(timerId) 
    }
  }, [])

  //console.log('After first useEffect')

  React.useEffect(() => {
    //console.log('logging to console')
  }, [])

  return <h3>{date ? date.toLocaleTimeString() : 'default'}</h3>
}
