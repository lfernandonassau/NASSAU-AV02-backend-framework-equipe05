import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react';

import { Task, NewTaskData, UpdateTaskData, Status } from '../types/task';

interface TasksContextShape {
  tasks: Task[];

  // CRUD no estado local (UI)
  setTasksFromServer: (list: Task[]) => void;
  addTask: (task: Task) => void;
  updateTask: (id: string, data: UpdateTaskData) => void;
  removeTask: (id: string) => void;

  // Kanban movimentação local
  moveTask: (id: string, newStatus: Status) => void;
}

const TasksContext = createContext<TasksContextShape>(
  {} as TasksContextShape
);

export const TasksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Agora SEM LocalStorage — estado limpo, sempre vindo do backend
  const [tasks, setTasks] = useState<Task[]>([]);

  // 🔹 Usado quando o backend envia o board
  const setTasksFromServer = (list: Task[]) => {
    setTasks(list);
  };

  // 🔹 Adicionar card criado no backend (PainelPage faz POST → manda pra cá)
  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  // 🔹 Atualizar card
  const updateTask = (id: string, data: UpdateTaskData) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...data } : t))
    );
  };

  // 🔹 Remover card
  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // 🔹 Mover entre colunas (UI) — backend é chamado na PainelPage
  const moveTask = (id: string, newStatus: Status) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    );
  };

  const value = useMemo(
    () => ({
      tasks,
      setTasksFromServer,
      addTask,
      updateTask,
      removeTask,
      moveTask,
    }),
    [tasks]
  );

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
