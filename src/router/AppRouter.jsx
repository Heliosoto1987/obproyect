import React from 'react';
//router 
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//components
import { LoginScreen } from '../components/screens/loginscreen/LoginScreen';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}