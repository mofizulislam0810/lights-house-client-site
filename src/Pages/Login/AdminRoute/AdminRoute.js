import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, loading } = useAuth();
  if (loading) {
    return (
      <div className="spinner-border text-primary m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  console.log(admin);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
