// import function from other file (module)
// new syntax would be import setTimeoutPromise from './setTimeoutPromise'
const setTimeoutPromise = require('./setTimeoutPromise').setTimeoutPromise

console.log('Start')

setTimeoutPromise()
  // then is called when promise is in fulfilled state (resolve is called from promise constructor)
  .then(text => {
    console.log(text)
  })
  // catch is called when promise is in rejected state (reject is called from promise constructor)
  .catch(error => console.error('Error:', error.message))

console.log('End')
