import React, { useEffect, useRef } from "react";
import {
  Container,
  Header,
  Title,
  CloseButton,
  Content,
  NotificationItem,
  NotificationTitle,
  NotificationTime,
  EmptyState
} from "./styles";
import { INotificationsModal } from "./types";

const NotificationsModal = ({ onClose, notifications = [] }: INotificationsModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <Container ref={containerRef}>
      <Header>
        <Title>Notificações</Title>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Header>

      <Content>
        {notifications.length === 0 ? (
          <EmptyState>Nenhuma notificação no momento</EmptyState>
        ) : (
          notifications.map((item) => (
            <NotificationItem key={item.id}>
              <NotificationTitle>{item.title}</NotificationTitle>
              <NotificationTime>{item.time}</NotificationTime>
            </NotificationItem>
          ))
        )}
      </Content>
    </Container>
  );
};

export default NotificationsModal;


