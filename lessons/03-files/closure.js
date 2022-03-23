const add = (function() {
  // encapsulate counter to add function. Only add function can access counter variable
  let counter = 0

  // return function to add + 1 to counter
  return function() {
    counter += 1

    return counter
  }
})()

add()

add()

console.log(add())
