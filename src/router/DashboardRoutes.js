import React from 'react';
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { Aside } from '../components/aside/Aside';
import { NavBarSearch } from '../components/navbar/NavBarSearch';
import { AddStudents } from '../components/screens/add-students-screen/AddStudents';
import { Customers } from '../components/screens/customers/Customers';
import { InterViews } from '../components/screens/interviews-screen/InterViews';
import { OfferScreen } from '../components/screens/offers/OfferScreen';
import { SkillTokens } from '../components/screens/skill-tokens-screen/SkillTokens';
import { StudentFileScreen } from '../components/screens/student-file-screen/StudentFileScreen';
import { StudentTable } from '../components/screens/student-table-screen/StudentTable';

import "../styles/router/router.css"

export const DashboardRoutes = ({history}) => {
  return <React.Fragment>
       <div className='dashboard'>
      <Aside history={history} />
      <div>
      <NavBarSearch />
          <Switch>
          <Route exact path="/table" component={StudentTable} />
          <Route exact path="/addStudents" component={AddStudents} />
          <Route exact path="/sortSelect" component={StudentFileScreen} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/offers" component={OfferScreen} />
          <Route exact path="/interviews" component={InterViews} />
          <Route exact path="/skill-tokens" component={SkillTokens} />
          <Redirect to="/table" />
          </Switch>
      </div>
      </div>
  </React.Fragment>;
};
