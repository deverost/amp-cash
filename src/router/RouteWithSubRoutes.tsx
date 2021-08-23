import React from "react";
import { Redirect, Route } from "react-router-dom";

function RouteWithSubRoutes(route: any) {
  const authenticated: boolean = !!(localStorage.getItem("access_token"));

  return (
    <Route
      path={route.path}
      render={(props) => {
        if (route.redirect) {
          return <Redirect to={`${route.redirect}`} />;
        }
        if (route.private && authenticated) {
          return <route.component {...props} routes={route.routes} />;
        }
        if (route.private && !authenticated) {
          return <Redirect to={`/login`} />;
        }
        return <route.component {...props} routes={route.routes} />;
      }}
    />
  );
}

export default RouteWithSubRoutes;
