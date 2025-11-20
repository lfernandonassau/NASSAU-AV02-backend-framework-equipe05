export interface INotification {
  id: string | number;
  title: string;
  time: string;
}

export interface INotificationsModal {
  onClose: () => void;
  notifications: INotification[];
}
