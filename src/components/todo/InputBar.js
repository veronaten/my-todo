import React from "react";
import "./InputBar.css";

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ''}
    this.handleChange = this.handleChange.bind(this)
    this.buttonHandle = this.buttonHandle.bind(this)
  }

  handleChange(e) {
    this.setState({content: e.target.value})
  }

  buttonHandle() {
    this.setState({content: ''});
    this.props.addTodo(this.state)
  }

  render() {
    return (
      <div className="inputbar-wrapper">
        <h3>Enter your Todo:</h3>
        <input 
          className="inputbar-input" 
          value={this.state.content} 
          onChange={this.handleChange}/>
        <button className="inputbar-button" type="button" onClick={this.buttonHandle} >Add Todo</button>
      </div>
    )
  }
}

export default InputBar