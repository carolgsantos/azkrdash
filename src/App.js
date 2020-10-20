import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LogIn from "./pages2/LogIn";
import AuthRoute from "./utils/AuthRoute";
import ThemeLayout from './layouts/ThemeLayout'
import { Auth } from '../pages'

function App() {
  let authenticated = true;
  return (
    <Switch>
      <AuthRoute
        exact
        authenticated={authenticated}
        path={["/signin", "/signup", "/signup/verify"]}
        component={LogIn}
      />
      <Route
        path="/"
        render={() => (authenticated ? <ThemeLayout/> : <Redirect to="/signin" />)}
      />
    </Switch>
  );
}

export default App;
