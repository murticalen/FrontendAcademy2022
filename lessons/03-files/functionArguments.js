let number = 10
let obj1 = { a: 'unchanged' }
let obj2 = { a: 'unchanged' }

function assignNewValues(number, obj1, obj2) {
  number = number ** 2 // ** is exponential -> 10^2, numbers are pass by value -> no change
  obj1.a = 'changed' // direct assignment of a property -> changes reference object -> call by reference
  obj2 = { a: 'changed' } // new object assignment -> creates new object, doesn't change reference object -> call by value
}

console.log('Before', { number, obj1, obj2 })

assignNewValues(number, obj1, obj2)

console.log('After', { number, obj1, obj2 })
