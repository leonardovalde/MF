import React, { useState } from 'react'
import '../index.scss'

function CounterComponent() {
  const [count, setCount] = useState(0)
  return (
    <div className="counterContainer">
      Count is:
      <p>{count}</p>
      <section className="buttonsContainer">
        <button
          className="addBtn w-7 h-7 bg-green-500 rounded-r-xl"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button className="subBtn" onClick={() => setCount(count - 1)}>
          -
        </button>
      </section>
    </div>
  )
}

export default CounterComponent
