import type { Status, Task } from 'types/task';

export interface IMember {
  name: string;
  avatarUrl: string;
}

export interface ITask {
  title: string;
  subtitle: string;
  members: IMember[];
  date: string;
}

/**
  Props para o componente `KanbanColumn`.
 */

export interface IKanbanColumnProps {
    title: string;
    icon: React.ReactNode;
    accentColor: string;
    // Agora usamos o tipo Status para garantir que seja apenas um dos valores válidos
    droppableId: Status; 
    tasks: Task[];
    onAddTask: () => void;
    // Agora opcional, pois pode haver colunas onde não se pode deletar
    onRequestDelete?: (id: string) => void;
    // Opcional para edição
    onRequestEdit?: (id: string, data: { title: string; subtitle: string; date: string }) => void;
}


/**
  Props para o componente `CardTask`
 */
export interface ICardTaskProps {
  statusColor: string;
  title: string;
  subtitle: string;
  members: IMember[];
  date: string;
}

