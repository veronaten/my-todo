import React from "react";

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id}>
          <p>{todo.content}</p>
          <button onClick={() => deleteTodo(todo.id)}>Remove</button>
        </div>
      )
    })
  ) : (
      <div>
        <p>You have not todo</p>
      </div>
    )

  return (
    <div>
      {todoList}
    </div>
 )
}

export default Todos;