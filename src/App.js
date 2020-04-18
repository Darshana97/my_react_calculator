import React, { Component } from "react";
import "./App.css";
import Buttons from "./components/Button";
import Output from "./components/Output";

export class App extends Component {
  state = {
    result: "",
  };

  buttonPressed = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    } else
      this.setState({
        result: this.state.result + buttonName,
      });
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result),
      });
    } catch (error) {
      this.setState({
        result: "error",
      });
    }
  };

  render() {
    return (
      <div className="calc-body">
        <div className="App">
          <Output result={this.state.result} />
          <Buttons buttonPressed={this.buttonPressed} />
        </div>
      </div>
    );
  }
}

export default App;
