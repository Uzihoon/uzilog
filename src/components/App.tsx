import React, { useEffect } from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { MainPage, PostPage, LoginPage, WritePage } from "pages";
import Intro from "components/Intro";
import PrivateRouter from "common/PrivateRouter";

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
          <PrivateRouter
            path="/uzihoon/admin/write"
            authed={true}
            component={WritePage}
          />
          <Route path="/uzihoon/admin/login" component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
      <Intro />
    </>
  );
}

export default App;
