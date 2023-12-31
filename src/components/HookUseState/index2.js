import React,{useState} from 'react'

export default function Hook_UseState2() {
const [count,setCount] = useState(0)

const handleIncrement = () => {
    setCount((count)=>count+1)
    setCount((count)=>count+1)
    setCount((prevCount) => {
      return prevCount+1;
    })
}

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
