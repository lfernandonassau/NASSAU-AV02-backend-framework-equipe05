import type { Member, Status, Task } from 'types/task';
import { nanoid } from 'nanoid';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'kodan_tasks';

type AddTaskInput = {
    title: string;
    subtitle: string;
    date?: string;
    status: Status;
    members?: Member[];
};

type TasksContextShape = {
    tasks: Task[];
    addTask: (input: AddTaskInput) => void;
    editTask: (id: string, patch: Partial<Omit<Task, 'id'>>) => void;
    removeTask: (id: string) => void;
    moveTask: (id: string, newStatus: Status) => void;
};

const TasksContext = createContext<TasksContextShape | null>(null);

export const TasksProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>(() => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as Task[]) : [];
    } catch {
        return [];
    }
    });

    useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const addTask: TasksContextShape['addTask'] = (input) => {
    const t: Task = {
        id: nanoid(),
        title: input.title.trim(),
        subtitle: input.subtitle.trim(),
        status: input.status,
        date: input.date,
        members: input.members ?? [],
    };
    setTasks((prev) => [t, ...prev]);
    };

    const editTask: TasksContextShape['editTask'] = (id, patch) => {
    setTasks((prev) => prev.map(t => t.id === id ? { ...t, ...patch } : t));
    };

    const removeTask: TasksContextShape['removeTask'] = (id) => {
    setTasks((prev) => prev.filter(t => t.id !== id));
    };

    const moveTask: TasksContextShape['moveTask'] = (id, newStatus) => {
    setTasks((prev) => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
    };

    const value = useMemo(() => ({ tasks, addTask, editTask, removeTask, moveTask }), [tasks]);

    return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};

export const useTasks = () => {
    const ctx = useContext(TasksContext);
    if (!ctx) throw new Error('useTasks must be used within TasksProvider');
    return ctx;
};
