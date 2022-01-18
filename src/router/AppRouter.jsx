//vendor
import React from "react";
//router
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//screens

import { AddStudents } from "../components/screens/add-students-screen/AddStudents";
import { Customers } from "../components/screens/customers/Customers";
import { InterViews } from "../components/screens/interviews-screen/InterViews";
import { LoginScreen } from "../components/screens/login-screen/LoginScreen";
import { OfferScreen } from "../components/screens/offers/OfferScreen";
import { SkillTokens } from "../components/screens/skill-tokens-screen/SkillTokens";
import { StudentFileScreen } from "../components/screens/student-file-screen/StudentFileScreen";
import { StudentTable } from "../components/screens/student-table-screen/StudentTable";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/table" component={StudentTable} />
          <Route exact path="/addStudents" component={AddStudents} />
          <Route exact path="/sortSelect" component={StudentFileScreen} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/offers" component={OfferScreen} />
          <Route exact path="/interviews" component={InterViews} />
          <Route exact path="/skill-tokens" component={SkillTokens} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
