import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../Pages/Home";

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/" />
      </Switch>
    </BrowserRouter>
  );
}
