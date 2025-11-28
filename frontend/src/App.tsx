import React from "react";
import AppRoutes from "./routes/taskRoutes";
import { NotificationProvider } from "./context/NotificationContext";
import { LanguageProvider } from "./context/LanguageContext"; // <--- NOVO
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <NotificationProvider>
          <AppRoutes />
        </NotificationProvider>
      </LanguageProvider>
    </AuthProvider>
    
  );
}



export default App;