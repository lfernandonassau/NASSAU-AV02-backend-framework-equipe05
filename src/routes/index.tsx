import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Login } from "../pages/login";
import PainelPage from "../pages/painel";
import { TelaPerfil } from "../pages/telaperfil";

const AppRoutes = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/painel" element={<PainelPage />} />
            <Route path="/perfil" element={<TelaPerfil />} />
        </Routes>
    </BrowserRouter>
    );
};

export default AppRoutes;
