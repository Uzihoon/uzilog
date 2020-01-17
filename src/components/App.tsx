import React from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { MainPage } from "pages";
import Intro from "components/Intro";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exec component={MainPage} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
      <Intro />
    </>
  );
}

export default App;
