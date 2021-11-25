import { Switch, Route } from "react-router-dom";
import Home from "../../Components/Component";
import React from "react";

function Routing() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routing;
