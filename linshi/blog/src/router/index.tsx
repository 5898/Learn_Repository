import React from 'react';
import * as Loadable from 'react-loadable'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from '@/App';
import loading from './loading';

const routes: any[] = [
  {
    path: '/',
    component: App,
  },
  // {
  //   component: () => App,
  //   path: '/app'
  // },
  {
    path: '*',
    component: NoMatch,
  },
];

const RouterMap = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            exact={true}
            path={route.path}
            component={route.component}
            // component={Loadable({
            //   loader: route.component,
            //   loading
            // })}
          />
        ))}
      </Switch>
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