import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/FogetPassword";
import CreatePwd from "../pages/Authentication/CreatePassword";

// Dashboard
import Dashboard from "../pages/Dashboard";

import Home from "../pages/Home";


const authProtectedRoutes = [
  // Dashboard
  { path: "/manage/dashboard", component: Dashboard },
  { path: "/manage/", exact: true, component: () => <Redirect to="/manage/dashboard" /> },
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forget-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/create-password", component: CreatePwd},
  { path: "/", component: Home },
];

export { authProtectedRoutes, publicRoutes };