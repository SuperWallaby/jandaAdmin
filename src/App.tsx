import React from "react";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import client from "./apollo/apolloClient";
import MainAdminWrap from "./pages/MainAdminWrap";
import Login from "./pages/login/Login";
import { Toast } from "@janda-com/front";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/login" render={() => <Login />} />
            {/* <Route
              path="/dashboard"
              render={prop => <MainAdminWrap {...prop} />}
            /> */}
          </Switch>
        </Router>
      </ApolloProvider>
      <Toast />
    </div>
  );
}

export default App;
