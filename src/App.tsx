import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";
import { URL } from "./constants/Urls";
import { HomePage, PostPage } from "./pages";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path={URL.PUBLIC.LANDING_HOME}
          exact={true}
          component={HomePage}
        />
        <Route path={URL.PUBLIC.POSTS} exact={true} component={PostPage} />
      </Switch>
    </Router>
  );
};

function App() {
  return <Routes />;
}

export default App;
