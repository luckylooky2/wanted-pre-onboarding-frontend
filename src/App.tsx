import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "@pages/login/SignUp";
import SignIn from "@pages/login/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/signup" Component={SignUp} />
      <Route path="/signin" Component={SignIn} />
    </Routes>
  );
}

export default App;
