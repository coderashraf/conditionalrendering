import React, { Component } from "react";
import "./App.css";
import ClassCompo from "./ClassCompo";
import FunctionalCompo  from "./FunctionalCompo";
export default class App extends Component {
  state = {
    showFuncCompo: true,
  };
  render() {
    return (
      <div>
        <ClassCompo/>
        {this.state.showFuncCompo && <FunctionalCompo/>}
        {this.state.showFuncCompo?(
          <FunctionalCompo/>
        ):(<p>Functional Component is hidden</p>)}
        <button onClick={()=>this.setState({showFuncCompo:!this.state.showFuncCompo})}>CLick</button>
      </div>
    );
  }
}
