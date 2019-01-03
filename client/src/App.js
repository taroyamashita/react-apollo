import React, { Component } from "react";
import logo from "./logo.svg";
import BookList from "./components/BookList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> Taro's practice GraphQL Client </p>
        <BookList />
      </div>
    );
  }
}

export default App;
