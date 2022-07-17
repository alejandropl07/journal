import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isLogged }) => {
  return isLogged ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
