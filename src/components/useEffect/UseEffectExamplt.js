import React, {useEffect, useState} from 'react'

const UseEffectExamplt = () => {

    const [count, setcount] = useState(0)

    useEffect(() => {
        console.log("Use effect");
    })

    const increment = () => {
        setcount((count) => {
            return count + 1
        })
    }
 
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default UseEffectExamplt


