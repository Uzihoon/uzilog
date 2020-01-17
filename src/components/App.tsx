import React from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { MainPage, PostPage } from "pages";
import Intro from "components/Intro";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/post/:id" component={PostPage} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
      <Intro />
    </>
  );
}

export default App;
