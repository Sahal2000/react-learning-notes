import React, { useState } from 'react'

const Counter = () => {
    const handleIncrement = () => {
        setCount((count) => {
            return count+1;
        });
    }
  return (
    <div>
        <h2>Counter App</h2>
        <h3>Count : 0</h3>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter


// 1. state = count : 0
// 2. action - increment, decrement,  reset
// 3. reducers - increment -> count => count + 1
//          - decrement -> count => count - 1
//          - reset -> count => 0
// 4. store