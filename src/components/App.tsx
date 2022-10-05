import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  useHistory,
} from 'react-router-dom';
import {
  MainPage,
  PostPage,
  LoginPage,
  WritePage,
  TagPage,
  PortfolioPage,
} from 'pages';
import Intro from 'components/Intro';
import PrivateRouter from 'common/PrivateRouter';
import { useStatusGet } from 'hooks/lib';
import useTagActions from 'hooks/tag/useTagActions';
import useStatusActions from 'hooks/status/useStatusActions';

function App() {
  const admin = useStatusGet('admin') as boolean;
  const history = useHistory();

  const tagActions = useTagActions();
  const statusActions = useStatusActions();

  useEffect(() => {
    tagActions.onGetTags();
    statusActions.onCheckAdmin(history);
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/post/:id' component={PostPage} />
          <Route path='/about' component={PortfolioPage} />
          authed
          <PrivateRouter
            path='/uzihoon/admin/write'
            authed={admin}
            component={WritePage}
          />
          <PrivateRouter
            path='/uzihoon/admin/tag'
            authed={admin}
            component={TagPage}
          />
          <PrivateRouter
            path='/uzihoon/admin/login'
            authed={!admin}
            component={LoginPage}
            loginPage={true}
            loc={history.location.pathname}
          />
          <Redirect to='/' />
        </Switch>
      </Router>
      <Intro />
    </>
  );
}

export default App;
