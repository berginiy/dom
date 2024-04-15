import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '@/pages/MainPage';
import RegInPage from '@/pages/RegInPage'
import ErrorPage from '@/pages/ErrorPage'
import LogInPage from '@/pages/LogInPage'
import LogOutPage from '@/pages/LogOutPage';
import ProfilePage from '@/pages/ProfilePafe';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/reg" element={<RegInPage />} />
                <Route path="/log" element={<LogInPage />} />
                <Route path='/logout' element={<LogOutPage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path='/home' element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;