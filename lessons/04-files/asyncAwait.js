const setTimeoutPromise = require('./setTimeoutPromise').setTimeoutPromise

async function runAsync() {
  console.log('Start')

  // always in try-catch
  try {
    const text = await setTimeoutPromise(1000)
    console.log(text)
  } catch (error) {
    console.error('Error:', error.message)
  }

  console.log('End')
}

console.log('Before async')

runAsync()

console.log('After async')
