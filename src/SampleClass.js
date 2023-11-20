import React, { Component } from "react";

export default class SampleClass extends Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>{this.props.param}</p>
      </div>
    );
  }
}

