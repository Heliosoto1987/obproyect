import React from 'react';
//router 
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//components
import { LoginScreen } from '../components/screens/loginscreen/LoginScreen';
import { StudentTable } from '../components/screens/ studentablescreen/StudentTable';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/table" element={<StudentTable />} />
            </Routes>
        </BrowserRouter>
    )
}