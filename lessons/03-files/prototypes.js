/**
 * Constructor function.
 *
 * @param {string} name student's name
 * @param {number} year study year
 */
function Student(name, year) {
  // what is `this` in this example
  this.name = name
  this.year = year

  this.studentStatus = () => `${this.name}, ${this.year} year` // this is template string, it's used to generate string from values without concatenation. Between ${} any JS expression is valid (e.g. ternary operator)
}

let soffy = new Student('Soffy', 1) // new is important -> it sets this to soffy

// Soffy has prototype for Student and prototype for Object
console.log('Is Soffy Student?', soffy instanceof Student)
console.log('Is Soffy Object?', soffy instanceof Object)

console.log('Call of Student prototype method:', soffy.studentStatus())
console.log('Call of Object prototype method:', soffy.valueOf())

// add new method to student prototype -> DYNAMIC, visible on all student objects
Student.prototype.graduate = function() {
  this.year += 1
}

soffy.graduate()

console.log({ soffy }) // object syntax is used to show nice console output -> this is object shorthand used when key and value are the same ({ soffy: soffy } is the same as { soffy })

// add new method to prototype, this time it has the same name as method from Object prototype
Student.prototype.valueOf = function() {
  return this.year
}

console.log('Soffy value', soffy.valueOf())
