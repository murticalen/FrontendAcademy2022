import React from 'react'

function takeLongToReturnRandomNumber(searchDetailLevel) {
  console.log('Starting search for number with detail level =', searchDetailLevel)

  // do complex work
  for (let i = 0; i < searchDetailLevel; i += 1) {}

  const number = Math.round(Math.random() * 1000)

  console.log('Finished search', number)

  return number
}

export function UseMemo() {
  // used to update component and provide values to memo
  const [searchDetailLevel, setSearchDetailLevel] = React.useState(1e3)
  const [fullyRandomNumber, setFullyRandomNumber] = React.useState()

  // memoize function result, return same value until variable in dependency arrays changes
  const result = React.useMemo(() => takeLongToReturnRandomNumber(searchDetailLevel), [searchDetailLevel])

  console.log('Result =', result)

  return (
    <div>
      <p>Result: {result}</p>
      {/* if same level used memo value will return */}
      <button onClick={() => setSearchDetailLevel(searchDetailLevel)}>Same level</button>{' '}
      <button onClick={() => setFullyRandomNumber(Math.random())}>Trigger re-render</button>{' '}
      <button onClick={() => setSearchDetailLevel(searchDetailLevel * 10)}>Next level</button>
    </div>
  )
}
