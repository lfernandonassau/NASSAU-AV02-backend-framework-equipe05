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
    members?: Member[];
}

// DTO (Data Transfer Object) para criar nova tarefa
export interface NewTaskData {
    id?: string; // <- opcional, usado quando vem do backend
    title: string;
    subtitle: string;
    status: Status;
    date?: string;
    members?: Member[];
}

// DTO para atualizar tarefa
export interface UpdateTaskData {
    title: string;
    subtitle: string;
    date?: string;
}
