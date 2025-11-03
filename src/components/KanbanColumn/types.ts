// (Você já deve ter isso no seu types.ts)
export interface IMember {
  name: string;
  avatarUrl: string;
}

// (Você já deve ter isso no seu types.ts)
export interface ITask {
  title: string;
  subtitle: string;
  members: IMember[];
  date: string;
}

/**
 * Props para o componente `KanbanColumn`.
 */
export interface IKanbanColumnProps {
  title: string;
  icon: string;
  accentColor: string;
  tasks: ITask[];
  onAddTask: () => void;
}

/**
 * Props para o componente `CardTask` (descoberto no KanbanColumn).
 */
export interface ICardTaskProps {
  statusColor: string;
  title: string;
  subtitle: string;
  members: IMember[];
  date: string;
}