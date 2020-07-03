import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
  };

  incrementCounter = (e) => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };
  render() {
    const { counter } = this.state;
    return (
      <div data-test="component-app">
        <div data-test="counter-display">
          The counter is currently {counter}
        </div>
        <button
          data-test="increment-button"
          type="button"
          onClick={(e) => this.incrementCounter()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default App;
