// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import BilanPage from './pages/BilanPage';
import Invoices from './pages/InvoicesPage';
import CPC from './pages/CPC';
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/bilan" element={<BilanPage />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/CPC" element={<CPC />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
