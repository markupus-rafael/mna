import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter, withRouter } from "react-router-dom";
import './asset/styles/App.scss';
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/HOC/ProtectedRoute";
import Opportunities from "./pages/Opportunities/Opportunities";
import Routes from "./constants/routes";
import Container from "./components/Container/Container";
import Select from "./components/shared/Select/Select";
import Collapse from "./components/shared/Collapse/Collapse";
import DemoPage from "./pages/DemoPage";
import SidebarContainer from "./components/Sidebar/SidebarContainer";

function App() {

  return (
    <div className="App">
          <BrowserRouter>
              <SidebarContainer />
              <div className="main-wrap">
                  <Switch>
                      <Route exact path="/select" component={Select} />
                      <Route exact path="/" component={Container} />
                      <Route exact path="/table" component={null} />
                      <Route exact path="/collapse" component={DemoPage} />
                      <Route exact path={Routes.LOGIN} component={Login} />
                      <PrivateRoute exact path={Routes.OPPORTUNITIES} component={Opportunities} />
                      <PrivateRoute exact path={Routes.ACQUIRERS} component={null} />
                      <PrivateRoute exact path={Routes.ACQUIRER_CRITERIA} component={null} />
                  </Switch>
              </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
