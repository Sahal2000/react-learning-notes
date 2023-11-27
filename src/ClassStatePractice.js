import React, { Component, useState } from "react";

// export default function ClassStatePractice() {
//   const [count, setCount] = useState(0)
//   function add() {
//     setCount((count) =>{
//       return count + 1
//     })
//   }
//   function subtract() {
//     setCount((count) =>{
//       return count - 1
//     })
//   }
//   return (
//     <div>
//       <h1>count: {count}</h1>
//       <button onClick={add}>+</button>
//       <button onClick={subtract}>-</button>
//     </div>
//   )
// }

export default class ClassStatePractice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  subtract() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
      </div>
    );
  }
}
