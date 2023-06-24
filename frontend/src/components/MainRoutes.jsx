import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashBoardPage";
import InterviewSimulatorPage from "../pages/InterviewSimulatorPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signup />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/interview" element={<InterviewSimulatorPage />} />
    </Routes>
  );
};
export default MainRoutes;
