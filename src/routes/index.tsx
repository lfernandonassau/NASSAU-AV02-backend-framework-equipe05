import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TasksProvider } from 'context/TasksContext';
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import PainelPage from "../pages/painel";
import { TelaPerfil } from "../pages/telaperfil";

const AppRoutes = () => {
    return (
    <BrowserRouter>
        <TasksProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/painel" element={<PainelPage />} />
                <Route path="/perfil" element={<TelaPerfil />} />
            </Routes>
        </TasksProvider>
    </BrowserRouter>
    );
};

export default AppRoutes;
