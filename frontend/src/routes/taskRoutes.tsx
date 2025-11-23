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
<<<<<<< HEAD
import Estatisticas from "../pages/telaEstatisticas";

=======
import { TelaEstatisticas } from "../pages/telaestatisticas";
import { TelaConfig } from "../pages/telaconfiguracoes";
>>>>>>> 181d88d1a7827d78ba3f13312dbb8b9748e7f59d

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
<<<<<<< HEAD
                <Route path="/estatisticas" element={<Estatisticas />} />
=======
                <Route path="/estatisticas" element={<TelaEstatisticas />} />
                <Route path="/configuracoes" element={<TelaConfig />} />
>>>>>>> 181d88d1a7827d78ba3f13312dbb8b9748e7f59d
            </Routes>
        </TasksProvider>
    </BrowserRouter>
    );
};

export default AppRoutes;
