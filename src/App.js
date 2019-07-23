import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.scss';
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/vendors" component={null} />
                  <Route exact path="/oportunies" component={null} />
              </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
