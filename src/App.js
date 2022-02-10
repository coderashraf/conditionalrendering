import React, { Component } from "react";
import ClassCompo from "./ClassCompo";
import { FunctionalCompo } from "./FunctionalCompo";
import "./App.css";

export default class App extends Component {
  state = {
    showFuncCompo: false,
    showClassCompo: false,
  };
  toggleFunc = () => {
    this.setState({
      showFuncCompo: !this.state.showFuncCompo,
    });
  };
  toggleClass = () => {
    this.setState({
      showClassCompo: !this.state.showClassCompo,
    });
  };
  render() {
    return (
      <div>
        <h2>Styling using Functional and Class Component</h2>

        <div className="flex container">
          <div className="left-area">
            <button onClick={this.toggleFunc}>
              Toggle Functional Component
            </button>
            {this.state.showFuncCompo && <FunctionalCompo />}
          </div>
          <div className="right-area">
            <button onClick={this.toggleClass}>Toggle Class Component</button>
            {this.state.showClassCompo && <ClassCompo />}
          </div>
        </div>
      </div>
    );
  }
}
