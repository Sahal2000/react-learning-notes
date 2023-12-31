import React, { Component } from 'react'

export class Card2 extends Component {
  render() {
    const {title,desc} = this.props;
    return (
      <div>
        <h1>Title: {title}</h1>
        <p>Description: {desc}</p>
      </div>
    )
  }
}

export default Card2