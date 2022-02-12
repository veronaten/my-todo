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

  render() {
    return (
      <div>
        <InputBar />
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoTable