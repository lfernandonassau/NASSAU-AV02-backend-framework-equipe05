// src/types/task.ts
export type Status = 'PENDENTE' | 'ANDAMENTO' | 'CONCLUIDO';

export interface Member {
    name: string;
    avatarUrl: string;
}

export interface Task {
    id: string;
    title: string;
    subtitle: string;
    status: Status;
    date?: string;
    members: Member[];
}
