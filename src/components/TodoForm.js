import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
      super();
      this.state = {
        textInput: ""
      }
    }
  
    handleText = e => {
      this.setState({
        textInput: e.target.value
      });
    }
  
    handleSubmit = e => {
      e.preventDefault();
      if(this.state.textInput !== ""){
          this.props.handleAdd(this.state.textInput);  
          this.setState({textInput: ""});
      }
    }
  
    render() {
      return (
        <div>
          <form onSubmit={e => e.preventDefault()}>
            <input value={this.state.textInput} onChange={this.handleText} type="text" name="item"></input>
            <button onClick={this.handleSubmit} type="submit">Add Todo</button>
            <button onClick={this.props.handleClearCompleted}>Clear Completed</button>
          </form>
        </div>
      )
    }
}