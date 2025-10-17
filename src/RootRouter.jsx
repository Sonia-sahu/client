import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./core/components/layout/Landing";
import AuthRouter from "./auth/router/AuthRouter";
import DashboardRouter from "./dashboard/router/DashboardRouter";
import ProfileRouter from "./profiles/router/ProfileRouter";

const RootRouter = () => {
  //useMatch = is a hook provided by React Router v6 that allows you to match the current URL against a specific path pattern.

  return (
    <>
      <Routes>
        <Route path="" element={<Landing />}></Route>
        <Route path="/auth/*" element={<AuthRouter />}></Route>

        <Route path="/dashboard/*" element={<DashboardRouter />}></Route>
        <Route path="/profile/*" element={<ProfileRouter />}></Route>
      </Routes>
    </>
  );
};

export default RootRouter;

//need to install react router dom
