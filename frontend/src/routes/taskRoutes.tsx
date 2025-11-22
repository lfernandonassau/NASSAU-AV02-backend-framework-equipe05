import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TasksProvider } from '../context/TasksContext';
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Cadastro } from "../pages/cadastro";
import { PainelPage } from "../pages/telapainel";
import { TelaProjetos } from "../pages/telaprojetos";
import { TelaGeral } from "../pages/telageral";
import { TelaPerfil } from "../pages/telaperfil";

const AppRoutes = () => {
    return (
    <BrowserRouter>
        <TasksProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/painel" element={<PainelPage />} />
                <Route path="/projetos" element={<TelaProjetos />} />
                <Route path="/geral" element={<TelaGeral />} />
                <Route path="/perfil" element={<TelaPerfil />} />
            </Routes>
        </TasksProvider>
    </BrowserRouter>
    );
};

export default AppRoutes;
