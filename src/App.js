import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() { // Primer método que se ejecuta, apenas el componente es creado.
    super(); //  Ejecutar super para poder heredar toda la funcionalidad de React.
    this.state = {
      todos
    }
  }


  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 text-center">
          <div className="card mt-4">
            <div className= "card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className= "navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Task
            <span className="badge badge-pill badge-light ml-2">
              { this.state.todos.length }
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.hanndleAddTodo}/>
            </div>

            <div className="col-md-8">
              <div className="row">
                { todos }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
