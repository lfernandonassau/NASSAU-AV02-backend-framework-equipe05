import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import {useAuth} from '../../context/AuthContext'

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  // Se estiver autenticado (isAuthenticated for true), retorna o conteúdo da rota (<Outlet/>).
  // Caso contrário, redireciona para a página de login.
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}