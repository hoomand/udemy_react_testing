import React, { Component } from "react";
import "./App.css";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Jotto</h2>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
