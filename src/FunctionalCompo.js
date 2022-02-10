import React from "react";
import "./App.css";
export const FunctionalCompo = () => {
  return (
    <div className="funcCompo card">
      <h2>This is created using Functional component</h2>
      <p>This is done using external CSS</p>
      <p style={{ color: "blue" }}>This is done using inline CSS</p>
    </div>
  );
};
