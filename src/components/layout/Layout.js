import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../appbar/Appbar";

export default function Layout() {
  return (
    <Fragment>
      <Appbar />
      <Outlet />
    </Fragment>
  );
}
