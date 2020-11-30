import React, { useImperativeHandle } from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ]}
  }

  handleAdd = name => {
    this.setState({
      todos: [...this.state.todos, {task: name, id: Date.now(), completed: false}]
    });
  }

  handleToggle = e => {
    console.log(this.state);
    this.setState({
      todos: this.state.todos.map(item => {
        if (e.target.textContent === item.task) {
          return ({
            ...item,
            completed: !item.completed
          });
        } else {
          return (item);
        }
      })
    });
  }

  handleClearCompleted = e => {
    this.setState({
      todos: [...this.state.todos.filter(item => !item.completed)]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} handleToggle={this.handleToggle}/>
        <TodoForm handleAdd={this.handleAdd} handleClearCompleted={this.handleClearCompleted}/>
      </div>
    );
  }
}





const TodoList = props => {
  return props.todos.map(item => <Todo item={item} handleToggle={props.handleToggle}/>);
}




const Todo = props => {
  return (
    <div onClick={props.handleToggle}>
      {props.item.completed ? <strike>{props.item.task}</strike> : <p>{props.item.task}</p>}
    </div>
  )
}




class TodoForm extends React.Component {
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
    this.props.handleAdd(this.state.textInput);  
    this.setState({textInput: ""});
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

export default App;
