import React from "react";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router, Route } from "react-router-dom";
import client from "./apollo/apolloClient";
import MainAdminWrap from "./pages/MainAdminWrap";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Route path="/" render={() => <Login />} />
          <Route path="/dashboard" render={() => <MainAdminWrap />} />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
