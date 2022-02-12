import React from "react";

const Todos = ({todos}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id}>
          <p>{todo.content}</p>
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