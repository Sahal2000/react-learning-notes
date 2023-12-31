import React from 'react'

function Card1(props) {
  const {title,desc} = props;
  return (
    <div>
      <h1>Title: {title}</h1>
      <p>Description: {desc}</p>
    </div>
  )
}

export default Card1
