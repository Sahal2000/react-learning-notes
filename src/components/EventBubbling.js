import React from 'react'


export default function EventBubbling() {

    const handleParentClick = (event) => {
        console.log("parent event :", event)
    }

    const handleClick = (event) => {
        event.stopPropagation()
        console.log("chlid event :", event)
    }

  return (

    <div className='parent' onClick={handleParentClick}>
        <h1>Welcone Everyone</h1>
        <button onClick={handleClick}>+</button>
    </div>
  )
}
