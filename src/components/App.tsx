import React, { useEffect } from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { MainPage, PostPage } from "pages";
import Intro from "components/Intro";

//TEST
import useStatusActions from "hooks/status/useStatusActions";

function App() {
  const { onFinish, onPending } = useStatusActions();
  useEffect(() => {
    onFinish();
  }, []);
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
