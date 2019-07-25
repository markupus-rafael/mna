import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter, withRouter } from "react-router-dom";
import './asset/styles/App.scss';
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/HOC/ProtectedRoute";
import Opportunities from "./pages/Opportunities/Opportunities";
import Routes from "./constants/routes";
import Container from "./components/Container/Container";

function App() {

  return (
    <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route exact path={Routes.LOGIN} component={Login} />
                  <Route exact path="/" component={Container} />
                  <PrivateRoute exact path={Routes.OPPORTUNITIES} component={Opportunities} />
                  <PrivateRoute exact path={Routes.ACQUIRERS} component={null} />
                  <PrivateRoute exact path={Routes.ACQUIRER_CRITERIA} component={null} />
              </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
