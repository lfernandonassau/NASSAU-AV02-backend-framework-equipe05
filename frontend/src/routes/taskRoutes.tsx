import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TasksProvider } from '../context/TasksContext';
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Cadastro } from "../pages/cadastro";
import { PainelPage } from "../pages/telapainel";
import { TelaProjetos } from "../pages/telaprojetos";
import { TelaDashboard } from "../pages/teladashboard";
import { TelaPerfil } from "../pages/telaperfil";
import { TelaEstatisticas } from "../pages/telaestatisticas";
import { TelaConfig } from "../pages/telaconfiguracoes";

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
                <Route path="/dashboard" element={<TelaDashboard />} />
                <Route path="/perfil" element={<TelaPerfil />} />
                <Route path="/estatisticas" element={<TelaEstatisticas />} />
                <Route path="/configuracoes" element={<TelaConfig />} />
            </Routes>
        </TasksProvider>
    </BrowserRouter>
    );
};

export default AppRoutes;
