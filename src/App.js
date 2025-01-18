import React from "react";
import Form from "./pages/Form";
import "./styles/styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quine-McCluskey Simplifier</h1>
        <Form />
      </header>
    </div>
  );
}
