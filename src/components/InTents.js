import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import Login from "./auth/Login";
import { Register } from "./auth/Register";
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import "./InTents.css"

export const InTents = () => {

  const { isAuthenticated } = useSimpleAuth()

  return <>
    <Route
      render={() => {
        if (isAuthenticated()) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
};