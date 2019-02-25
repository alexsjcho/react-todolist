import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Go to gym for 1 hour",
        completed: true
      },
      {
        id: 3,
        title: "Stare at wall for 5 minutes",
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1> Todo App</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
