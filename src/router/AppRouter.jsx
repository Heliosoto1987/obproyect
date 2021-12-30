import React from "react";
//router
import { Routes, Route, BrowserRouter } from "react-router-dom";
//components
import { LoginScreen } from "../components/screens/login-screen/LoginScreen";
import { StudentTable } from "../components/screens/student-table-screen/StudentTable";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/table" element={<StudentTable />} />
      </Routes>
    </BrowserRouter>
  );
};
