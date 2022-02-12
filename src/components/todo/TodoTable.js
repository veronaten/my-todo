import React from "react"
import Todos from "./Todos"
import InputBar from "./InputBar"

class TodoTable extends React.Component {
  render() {
    return (
      <div>
        <InputBar />
        <Todos />
      </div>
    )
  }
}

export default TodoTable