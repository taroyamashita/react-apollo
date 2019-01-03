import React, { Component } from "react";
import logo from "./logo.svg";
import BookList from "./components/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:6069/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <p> Taro's practice GraphQL Client </p>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
