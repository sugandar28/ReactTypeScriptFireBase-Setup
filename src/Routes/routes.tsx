import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, AboutPage } from '../Pages';

const routesObj = {
  home: {
    path: '/',
    title: 'Home',
    component: <Home />,
  },
  about: {
    path: '/about',
    title: 'About Page',
    component: <AboutPage />,
  }
};

const routes = [
  routesObj.about,  
];
// ensure home is the last item in the list
routes.push(routesObj.home);


const Routes = () => (
  <Switch>
    {routes.map((route, key) => (
      <Route key={`route${key}`} path={route.path}>
        {route.component}
      </Route>
    ))}
  </Switch>
);

export { Routes };