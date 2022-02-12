import React from "react"
import Todos from "./Todos"
import InputBar from "./InputBar"

class TodoTable extends React.Component {
  state = {
    todos: []
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({todos: todos})
  }

  addTodo = (todo) => {
    todo.id = new Date().toString();
    const todos = [...this.state.todos, todo]
    this.setState({todos: todos})
  }

  render() {
    return (
      <div>
        <InputBar addTodo={this.addTodo}/>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoTable