import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }
    }

    componentDidMount(){
        console.log("Mount");
    }

    componentDidUpdate(){
        console.log("Update");
    }

  render() {
    console.log("render");
    return (
      <div>
        {this.state.count}
        <button>+</button>
      </div>
    )
  }
}
