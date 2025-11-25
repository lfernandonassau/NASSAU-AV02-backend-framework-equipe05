import { createContext, useContext, useState, ReactNode } from "react";
import { INotification } from "../components/NotificationsModal/types";

interface INotificationContext {
  notifications: INotification[];
  unreadCount: number;
  markAsRead: (id: string | number) => void;
  markAllAsRead: () => void;
  addNotification: (notification: INotification) => void;
  clearNotifications: () => void; // ✅ NOVO
}

const NotificationContext = createContext<INotificationContext | null>(null);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<INotification[]>([
    { id: 1, title: "Nova tarefa atribuída", time: "Há 2 horas", type: "task", read: false },
    { id: 2, title: "Projeto atualizado", time: "Ontem", type: "update", read: false },
    { id: 3, title: "Você recebeu acesso", time: "Há 3 dias", type: "access", read: true },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string | number) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const addNotification = (notification: INotification) => {
    setNotifications(prev => [notification, ...prev]);
  };

  // ✅ Limpa todas as notificações (para mostrar o empty state)
  const clearNotifications = () => setNotifications([]);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        addNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("useNotifications deve ser usado dentro do NotificationProvider");
  return context;
};
