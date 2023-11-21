import React, { Component, useState } from 'react'

export default class ClassStatePractice extends Component {
  render() {
    const [count, setCount] = useState(0)

    function add() {
        se
    }

    return (
      <div>
        <button onClick={subtract}>-</button>
        <div>
            <h1>{count}</h1>
        </div>
        <button onClick={add}>+</button>
      </div>
    )
  }
}
