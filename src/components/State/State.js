import React, { Component } from 'react'
import './state.module.css'


export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
         message : "Hello"
      }
    }

    handleIncrement = () => {
        this.setState({
            count : this.state.count + 1
        }) 
        console.log("clicked")
    }

    handleDecrement = () => {
        this.setState({
            count : this.state.count - 1
        }) 
    }
  render() {
    const {count,message} = this.state
    return (
      <div>
        <h1>Count : {count}</h1>
        <p>Message : {message}</p>
        <button className='stateButton' onClick={this.handleIncrement}>+</button>
        <button className='stateButton' onClick={this.handleDecrement} disabled={count===0 ? true : false}>-</button>
      </div>
    )
  }
}
