class Student {
  constructor(name, year) {
    this.name = name
    this.year = year

    // bind function assigns `this` to a context of a function
    // in this line we set current `this` to be `this` in `studentStatus` function -> in `studentStatus` `this` is instance of an class (Soffy)
    // if we didn't bind, `this` would be object that called `studentStatus` (top level `window`, or event handler in React)
    this.studentStatus = this.studentStatus.bind(this)
  }

  studentStatus() {
    return `${this.name}, ${this.year} year`
  }

  // Following syntax avoids need to assign `this`, but can cause performance issues (in React components)
  // studentStatus = () => {
  //   return `${this.name}, ${this.year} year`
  // }
}

let soffy = new Student('Soffy', 1)

// Soffy has prototype for Student and prototype for Object
console.log('Is Soffy Student?', soffy instanceof Student)
console.log('Is Soffy Object?', soffy instanceof Object)

console.log('Call of Student prototype method:', soffy.studentStatus())
console.log('Call of Object prototype method:', soffy.valueOf())

// add method to prototype
Student.prototype.graduate = function() {
  this.year += 1
}

soffy.graduate()

console.log({ soffy })

// add method to prototype with existing name
Student.prototype.valueOf = function() {
  return this.year
}

console.log('Soffy value', soffy.valueOf())
