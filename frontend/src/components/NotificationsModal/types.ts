export interface INotification {
  id: string | number;
  title: string;
  time: string;
  type?: "task" | "update" | "access"; 
  read?: boolean; 
}

export interface INotificationsModal {
  onClose: () => void;
  notifications: INotification[];
  onRead?: (id: string | number) => void;
  onReadAll?: () => void;
}
