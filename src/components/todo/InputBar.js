import React from "react";

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({content: e.target.value})
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <p>Enter your Todo:</p>
        <input value={this.state.content} onChange={this.handleChange}/>
        <button type="button" >Add Todo</button>
      </div>
    )
  }
}

export default InputBar