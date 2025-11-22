import React from "react";
import AppRoutes from "./routes/taskRoutes";
import { NotificationProvider } from "./context/NotificationContext";

function App() {
  return (
    <NotificationProvider>
      <AppRoutes />
    </NotificationProvider>
  );
}

export default App;