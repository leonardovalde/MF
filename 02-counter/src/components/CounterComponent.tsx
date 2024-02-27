import React, { useState } from 'react'
import '../index.scss'

function CounterComponent() {
    const [count, setCount] = useState(0)
  return (
    <div>
        Count is:        
        <p>{count}</p>
        <button className='w-7 h-7 bg-green-500 rounded-r-xl' onClick={() => setCount(count + 1)}>+</button>
        <button className='w-7 h-7 bg-red-400 rounded-md' onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default CounterComponent