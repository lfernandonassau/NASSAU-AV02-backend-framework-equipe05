import React from "react";
import AppRoutes from "./routes/taskRoutes";
import { NotificationProvider } from "./context/NotificationContext";
import { LanguageProvider } from "./context/LanguageContext"; // <--- NOVO

function App() {
  return (
    <LanguageProvider>
      <NotificationProvider>
        <AppRoutes />
      </NotificationProvider>
    </LanguageProvider>
  );
}



export default App;