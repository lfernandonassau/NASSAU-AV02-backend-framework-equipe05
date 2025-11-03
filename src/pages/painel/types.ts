/**
 * Define a estrutura de um membro da equipe em um card.
 */
export interface IMember {
  name: string;
  avatarUrl: string;
}

/**
 * Define a estrutura de uma única tarefa (card) no Kanban.
 */
export interface ITask {
  title: string;
  subtitle: string; // Ex: "Infraestrutura", "Bug"
  members: IMember[];
  date: string;
}

/**
 * Define os dados que o modal "AddTaskModal" envia ao salvar.
 */
export interface INewTaskPayload {
  title: string;
  subtitle: string;
  date: string;
}

// --- PROPS DOS COMPONENTES ---

/**
 * Props para o componente `PainelPage`.
 */
export interface IPainelPageProps {
  variant?: 'primary' | 'secondary';
}

/**
 * Props para o componente `Header`.
 */
export interface IHeaderProps {
  autenticado: boolean;
  variant?: 'primary' | 'secondary';
}

/**
 * Props para o componente `KanbanColumn`.
 */
export interface IKanbanColumnProps {
  title: string;
  icon: string; // É um emoji, mas string cobre isso
  accentColor: string;
  tasks: ITask[]; // Reutiliza a interface ITask
  onAddTask: () => void;
}

/**
 * Props para o componente `AddTaskModal`.
 */
export interface IAddTaskModel {
  columnName: string;
  onClose: () => void;
  onSave: (taskData: INewTaskPayload) => void; // Reutiliza a interface INewTaskPayload
  userAvatar: string;
}