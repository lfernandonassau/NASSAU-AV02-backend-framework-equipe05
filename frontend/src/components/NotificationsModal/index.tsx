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
  EmptyState,
  MarkAllButton,
  CheckIcon,
  TextWrapper,
  Footer
} from "./styles";

import { MdDoneAll } from "react-icons/md";
import { INotificationsModal } from "./types";

const NotificationsModal = ({ onClose, notifications = [], onRead, onReadAll }: INotificationsModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

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
            <NotificationItem
              key={item.id}
              $read={item.read}
              onClick={() => onRead && onRead(item.id)}
            >
              <TextWrapper>
                <NotificationTitle>{item.title}</NotificationTitle>
                <NotificationTime>{item.time}</NotificationTime>
              </TextWrapper>

              <CheckIcon $read={item.read}>
                <MdDoneAll />
              </CheckIcon>
            </NotificationItem>
          ))
        )}
      </Content>

      {/* ✅ Botão agora no rodapé */}
      {notifications.length > 0 && (
        <Footer>
          <MarkAllButton onClick={onReadAll}>
            Marcar todas como lidas
          </MarkAllButton>
        </Footer>
      )}
    </Container>
  );
};

export default NotificationsModal;
