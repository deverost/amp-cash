import React from 'react';
import { Switch } from "react-router"
import {IRoute, routes} from "./router.config";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

function Router() {
  return (
    <>
      <div className="container">
        <Switch>
          {routes.map((route: IRoute) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    </>
  );
}

export default Router;
