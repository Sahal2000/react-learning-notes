import React, {useEffect, useState} from 'react'

const UseEffectExamplt = () => {

    const [count, setcount] = useState(0);
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        console.log("Use effect");
    },[count])

    const increment = () => {
        setcount((count) => {
            return count + 1
        })
    }
 
  return (
    <div>
        {console.log("rendering")}
        <h1>Count: {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={() => {
            setisLoading(!isLoading);
        }}>isLoading</button>
    </div>
  )
}

export default UseEffectExamplt


