import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  useHistory
} from 'react-router-dom';
import { MainPage, PostPage, LoginPage, WritePage, TagPage } from 'pages';
import Intro from 'components/Intro';
import PrivateRouter from 'common/PrivateRouter';
import { useStatusGet } from 'hooks/lib';

function App() {
  const admin = useStatusGet('admin') as boolean;
  const history = useHistory();

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/post/:id' component={PostPage} />
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
