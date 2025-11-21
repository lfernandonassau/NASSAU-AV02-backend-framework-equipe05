export interface INewTaskPayload {
  title: string;
  subtitle: string;
  date: string;
}

export interface IAddTaskModel {
  columnName: string;
  onClose: () => void;
  onSave: (taskData: INewTaskPayload) => void;
  userAvatar: string;
}