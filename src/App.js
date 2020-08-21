import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person() {
  const personStyle = {
    border: "2px solid red",
    margin: "10px",
  };

  return (
    <div style={personStyle}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        dicta, iusto quisquam ea numquam accusamus deserunt voluptatum quo
        nesciunt cum ullam rem perferendis quod necessitatibus quam molestiae,
        tenetur quis! Debitis.
      </p>
    </div>
  );
}

export default App;
