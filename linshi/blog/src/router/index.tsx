import React from 'react';
import * as Loadable from 'react-loadable'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from '@/App';
import loading from './loading';

const RouterList: any[] = [
  {
    component: () => App,
    path: '/'
  },
  // {
  //   component: () => App,
  //   path: '/app'
  // },
  {
    component: () => NoMatch,
    path: '*'
  },
];

const RouterMap = () => {
  return (
    <Router>
      <Switch>
        {RouterList.map(item => (
          <Route
            key={item.path}
            exact={true}
            path={item.path}
            component={item.component}
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