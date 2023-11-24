import React from 'react'

export default function NewTodo(props) {
    props.onHnadleNewTodo({title:"I am new todo"})
  return (
    <div>NewTodo</div>
  )
}
