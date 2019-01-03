import React, { Component } from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:6069/graphql"
});

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <p> Taro's practice GraphQL Client </p>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
