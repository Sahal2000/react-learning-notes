import React from 'react'

export default function Child(props) {

    const data = "I am from child app";

    props.onChildData(data);

   

  return (
    <div>
        <p>I am child component</p>
        <p>{props.data} </p>
    </div>

  )
}
