import React, { Component } from "react";

export default class Event_Binding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    // Event binding here which doesn't need while using arrow function of ES6
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 2,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>increase</button>
      </div>
    );
  }
}
