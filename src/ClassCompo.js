import React, { Component } from "react";

export default class ClassCompo extends Component {
  state={
    name:"Ashraf"
  }
  render() {
    return (
      <div >
        Class Component. My name is {this.state.name}
      </div>
    );
  }
}
