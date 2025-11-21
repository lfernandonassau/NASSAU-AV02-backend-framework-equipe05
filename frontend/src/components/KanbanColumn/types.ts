import type { Task } from 'types/task';

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
  droppableId: 'PENDENTE' | 'ANDAMENTO' | 'CONCLUIDO';
  tasks: Task[];
  onAddTask: () => void;
  onRequestDelete?: (id: string) => void;
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

