import React, { Component } from "react";

export default class ComponentDidMount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: 
        {
          id: 0,
          title: "",
          userId: 0,
          body: ""
        },
      
    };
  }

  componentDidMount() {
    console.log("ComponentDIDMOunt");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          character: data,
        });
      });
  }
  render() {
    return (
      <div>
        <p>{this.state.character.title}</p>
        {console.log("Render")}
      </div>
    );
  }
}
