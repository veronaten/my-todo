import React from "react";
import "./Todos.css";

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todos-wrapper" key={todo.id}>
          <div className="todos-text">{todo.content}</div>
          <button className="todos-button" onClick={() => deleteTodo(todo.id)}>Remove</button>
        </div>
      )
    })
  ) : (
      <div>
        <div className="todos__no-text">You have not Todo.</div>
      </div>
    )

  return (
    <div>
      {todoList}
    </div>
 )
}

export default Todos;