import React, { Component } from "react";
import "./App.css";
export default class ClassCompo extends Component {
  render() {
    return (
      <div className="classCompo card">
        <h3>This is created using Class component</h3>
        <p>This is done using external CSS</p>
        <p style={{ color: "blue" }}>This is done using inline CSS</p>
      </div>
    );
  }
}
