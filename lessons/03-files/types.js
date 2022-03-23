console.log(`typeof 2 =`, typeof 2) // number
console.log(`typeof 'SFA' =`, typeof 'SFA') // string
console.log(`typeof { foo: 'bar' } =`, typeof { foo: 'bar' }) // object
console.log(`typeof [1, 2, 3] =`, typeof [1, 2, 3]) // object -> not array!
console.log(`typeof (() => {}) =`, typeof (() => {})) // function
console.log(`typeof null =`, typeof null) // object -> JScript bug!
console.log(`typeof NaN =`, typeof NaN) // number -> Not a number is a number :)
