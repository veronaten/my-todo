import React from "react"
import Todos from "./Todos"
import InputBar from "./InputBar"

class TodoTable extends React.Component {
  state = {
    todos: [
      {id: 1, content: 'do tasks'},
      {id: 2, content: 'learn React'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({todos: todos})
  }

  render() {
    return (
      <div>
        <InputBar />
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoTable