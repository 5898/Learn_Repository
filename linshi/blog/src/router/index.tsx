import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from '@/components/App/App';
import Articles from '@/components/Articles/Articles';

const routes: any[] = [
  // {
  //   path: '/',
  //   component: App,
  // },
  {
    component: () => Articles,
    path: '/articles'
  },
  {
    path: '*',
    component: NoMatch,
  },
];

const RouterMap = () => {
  return (
    <Router>
      <App>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              exact={true}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </App>
      {/*<Switch>*/}
      {/*  <Route exact path="/">*/}
      {/*    <App />*/}
      {/*  </Route>*/}
      {/*  /!*<Route path="/about">*!/*/}
      {/*  /!*  <About />*!/*/}
      {/*  /!*</Route>*!/*/}
      {/*  <Route path="*">*/}
      {/*    <NoMatch />*/}
      {/*  </Route>*/}
      {/*</Switch>*/}
    </Router>
  )
}


function NoMatch() {
  return (
    <div>
      <h3>
        No match for <code>404</code>
      </h3>
    </div>
  );
}

export default RouterMap;