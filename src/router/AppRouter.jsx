//vendor
import React from "react";
//router
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/screens/login-screen/LoginScreen";
//screens
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = (history) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route to="/table" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
