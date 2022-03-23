'use strict' 

// strict mode is introduced with ES5 -> it fixes some inconsistencies and discourages some bad practices

// global.name = 'GlobalName'

const topObject = {
  name: 'SofaScore',
  doMagic: function () {
    // this is topObject
    console.log('doMagic this =', this)

    const that = this // save topObject this to `that` variable

    function upperCase() {
      // this function is not part of an object so this cannot be topObject
      // this here is top level object, or undefined in strict mode

      console.log('uppercase this =', this)
      console.log('uppercase that =', that)

      return that.name.toUpperCase()
    }

    return upperCase()
  },
}

const ret = topObject.doMagic()

console.log('Result =', ret)
