import React, { Component } from "react";
import { connect } from "react-redux";
import { getSecretWord } from "./actions";
import "./App.css";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className="container">
        <h2>Jotto</h2>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
