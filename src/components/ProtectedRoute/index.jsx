import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, loggedIn, ...restProps }) {
  return loggedIn ? <Component {...restProps} /> : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
