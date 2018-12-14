import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TopArticle } from "./TopArticle";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome</h1>
        </header>
          <TopArticle />
      </div>
    );
  }
}

export default App;
