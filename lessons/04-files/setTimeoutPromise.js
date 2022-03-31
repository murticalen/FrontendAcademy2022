const DEFAULT_TIMEOUT = 1000 // 1s

/**
 * Returns promise when timeout passed.
 */
function setTimeoutPromise(timeout = DEFAULT_TIMEOUT) {
  // notice default function param, timeout will be `DEFAULT_TIMEOUT` if arguments not provided

  // any work can be wrapped in Promise
  return new Promise((resolve, reject) => {
    // note try-catch block similar to other languages
    try {
      // throw Error('Custom error!')
      setTimeout(() => resolve(`${timeout}ms passed`), timeout)
    } catch (error) {
      reject(error)
    }
  })
}

// export function means that function can be imported from other files
module.exports = {
  setTimeoutPromise,
}

// there is newer and simpler export syntax, but then code should be transpiled
// e.g. export default setTimeoutPromise
