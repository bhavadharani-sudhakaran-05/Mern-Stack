import React, { useState } from 'react'

const State = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>UseState example</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default State