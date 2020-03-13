import React from "react";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router, Route } from "react-router-dom";
import client from "./apollo/apolloClient";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Route path="/" render={() => <div />} />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
