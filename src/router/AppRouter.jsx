import React from "react";
//router
import { Routes, Route, BrowserRouter } from "react-router-dom";
//components
import { AddStudents } from "../components/screens/add-students-screen/AddStudents";
import { LoginScreen } from "../components/screens/login-screen/LoginScreen";
import { StudentFileScreen } from "../components/screens/student-file-screen/StudentFileScreen";
import { StudentTable } from "../components/screens/student-table-screen/StudentTable";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/table" element={<StudentTable />} />
        <Route path="/addStudents" element={<AddStudents />} />
        <Route path="/sortSelect" element={<StudentFileScreen />} />
        SortSelect
      </Routes>
    </BrowserRouter>
  );
};
