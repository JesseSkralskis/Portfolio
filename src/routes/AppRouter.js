import React from "react";
import Main from "../components/Main";
import { Switch, Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
export const history = createHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact={true} component={Main} />
        </Switch>
      </div>
    </Router>
  );
}
