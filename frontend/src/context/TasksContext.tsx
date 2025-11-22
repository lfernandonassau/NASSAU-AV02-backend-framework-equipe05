import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { nanoid } from 'nanoid';

// Importamos os tipos centralizados que criamos no src/types/task.ts
import { Task, NewTaskData, UpdateTaskData, Status } from '../types/task';

const STORAGE_KEY = 'kodan_tasks';

// Interface do Contexto
interface TasksContextShape {
  tasks: Task[];
  addTask: (data: NewTaskData) => void;
  removeTask: (id: string) => void;
  moveTask: (id: string, newStatus: Status) => void;
  updateTask: (id: string, data: UpdateTaskData) => void; 
}

const TasksContext = createContext<TasksContextShape>({} as TasksContextShape);

export const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  // 1. Inicialização com LocalStorage (Da sua estrutura original)
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Task[]) : [];
    } catch {
      return [];
    }
  });

  // 2. Persistência automática (Da sua estrutura original)
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Função de Adicionar (Usando nanoid e NewTaskData)
  const addTask = (data: NewTaskData) => {
    const newTask: Task = {
      id: nanoid(), // Gera ID único
      title: data.title.trim(),
      subtitle: data.subtitle.trim(),
      status: data.status,
      date: data.date,
      members: data.members ?? [],
    };
    // Adiciona no início da lista
    setTasks((prev) => [newTask, ...prev]);
  };

  // Função de Remover
  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Função de Mover (Kanban)
  const moveTask = (id: string, newStatus: Status) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  // Função de Atualizar (Adaptada para usar UpdateTaskData)
  const updateTask = (id: string, data: UpdateTaskData) => {
    setTasks((prev) =>
      prev.map((task) =>
        // Mescla os dados antigos com os novos dados (data)
        task.id === id ? { ...task, ...data } : task
      )
    );
  };

  // Memoização do valor para otimizar performance
  const value = useMemo(() => ({
    tasks,
    addTask,
    removeTask,
    moveTask,
    updateTask // Agora exportamos como updateTask
  }), [tasks]);

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
};

// Hook personalizado
export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks deve ser usado dentro de um TasksProvider');
  }
  return context;
};