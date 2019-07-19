import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/vendors" component={null} />
                  <Route exact path="/oportunies" component={null} />
                  {/*<Route component={NotFoundPage} />*/}
              </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
