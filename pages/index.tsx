import type { NextPage } from "next";
import React from "react";

import Login from "./login";
import Profile from "./profile";

const Home: NextPage = (): JSX.Element => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("isAuth") ? <Profile /> : <Login />;
  }
  return <Login />;
};

export default Home;
