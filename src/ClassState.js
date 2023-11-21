import React, { Component } from "react";

export default class ClassState extends Component {
  state = {
    goOut: "Yes"
  }

  toggleGoOut = () => {
    this.setState(prevState => {
      return  {
        goOut: prevState.goOut === "YES" ? "No" : "Yes"
      }
    });
  }

  render() {
    return (
      <div>
        <h1 className="state--title">Should I go out tonight?</h1>
        <div className="state--value" onClick={this.toggleGoOut}>
          <h1>{this.state.goOut}</h1>
        </div>
      </div>
    );
  }
}
