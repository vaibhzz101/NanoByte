import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages.jsx/Signup";
import HomePage from "../pages.jsx/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signup />} />
    </Routes>
  );
};
export default MainRoutes;
