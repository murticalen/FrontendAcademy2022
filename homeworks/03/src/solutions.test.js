const f = require('./solutions')

describe('Objects', () => {
  test('createPrototypelessObject', () => {
    const obj = f.createPrototypelessObject()

    expect(Object.getPrototypeOf(obj)).toBeNull()
  })

  test('createObjectWithPrototype', () => {
    const proto = {
      foo() {
        return 'bar'
      },
    }

    const obj = f.createObjectWithPrototype(proto)

    expect(obj.foo()).toBe('bar')
    expect(Object.getPrototypeOf(obj)).toBe(proto)
  })

  test('createObjectWithMethod', () => {
    let value = 1
    const obj = f.createObjectWithMethod(value)

    expect(obj.value).toBe(value)
    expect(obj.getValue()).toBe(value)

    value = 2
    obj.value = value

    expect(obj.getValue()).toBe(value)
  })

  test('createEncapsulatedObject', () => {
    const obj = f.createEncapsulatedObject()
    const value = 'hehe'

    obj.setValue(value)

    expect(obj.getValue()).toBe(value)
    expect(obj.value).toBeUndefined()
  })

  test('shallowCopy', () => {
    const obj = { a: 1, b: { c: 2 } }
    const copiedObj = f.shallowCopy(obj)

    expect(copiedObj).not.toBe(obj)
    expect(copiedObj.a).toBe(obj.a)
    expect(copiedObj.b).toBe(obj.b)
    expect(copiedObj.b.c).toBe(obj.b.c)
  })

  test('deepCopy', () => {
    const obj = { a: 1, b: { c: 2 } }
    const copiedObj = f.deepCopy(obj)

    expect(copiedObj).not.toBe(obj)
    expect(copiedObj.a).toBe(obj.a)
    expect(copiedObj.b).not.toBe(obj.b)
    expect(copiedObj.b.c).toBe(obj.b.c)
  })
})

describe('Coercion', () => {
  test('looselyTrue', () => {
    const [e1, e2] = f.looselyTrue()

    expect(e1 == e2).toBeTruthy()
    expect(e1 === e2).toBeFalsy()
  })

  test('stringLooselyEqualToTrue', () => {
    const str = f.stringLooselyEqualToTrue()

    expect(typeof str).toBe('string')
    expect(str == true).toBeTruthy()
  })

  test('safeSum', () => {
    expect(f.safeSum(1, 2)).toBe(3)
    expect(f.safeSum(3, '4')).toBe(7)
    expect(f.safeSum('5', 6)).toBe(11)
    expect(f.safeSum('7', '8')).toBe(15)
  })
})

jest.useFakeTimers()

test('timeoutIncrement', () => {
  const mockFn = jest.fn()

  f.timeoutIncrement(mockFn)
  jest.runAllTimers()

  expect(mockFn.mock.calls).toEqual([[1], [2], [3]])
})

test('formatDate', () => {
  const date = new Date('1-20-2020') // mm-dd-yyyy

  expect(f.formatDate(date)).toBe('20-1-2020')
})

test('sortNumberArray', () => {
  const arr = [12, 5, -13, -21]

  f.sortNumberArray(arr)

  expect(arr).toEqual([-21, -13, 5, 12])
})

test('multiplyArrayByTwo', () => {
  const arr = [1, 2, 3]

  const multiplied = f.multiplyArrayByTwo(arr)

  expect(arr).toBe(multiplied)
  expect(multiplied).toEqual([2, 4, 6])
})

test('multiplyArrayByTwoNew', () => {
  const arr = [1, 2, 3]
  const multiplied = f.multiplyArrayByTwoNew(arr)
  expect(arr).not.toBe(multiplied)
  expect(multiplied).toEqual([2, 4, 6])
  expect(arr).toEqual([1, 2, 3])
})

test('classInheritance', () => {
  const callGetName = jest.fn()
  const callGetLanguage = jest.fn()
  const personName = 'Casual'
  const programmerName = 'Master'
  const programmerLanguage = 'JavaScript'

  const { Person, Programmer } = f.classInheritance(callGetName, callGetLanguage)

  const person = new Person(personName)
  const programmer = new Programmer(programmerName, programmerLanguage)

  expect(programmer instanceof Person).toBe(true)

  person.getName()
  expect(callGetName).toBeCalledTimes(1)
  expect(callGetName).toBeCalledWith(personName)

  programmer.getLanguage()
  expect(callGetLanguage).toBeCalledTimes(1)
  expect(callGetLanguage).toBeCalledWith(programmerLanguage)

  programmer.getName()
  expect(callGetName).toBeCalledTimes(2)
  expect(callGetName).toBeCalledWith(programmerName)
})
