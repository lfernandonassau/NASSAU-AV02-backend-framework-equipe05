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
  ClearAllButton,
  Dot,
  TextWrapper,
  Footer,
} from "./styles";

import { PiTrashBold } from "react-icons/pi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoNotificationsOffCircleOutline } from "react-icons/io5";
import { INotificationsModal } from "./types";

const NotificationsModal = ({
  onClose,
  notifications = [],
  onRead,
  onReadAll,
  onClearAll,
}: INotificationsModal) => {
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

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <Container ref={containerRef} role="dialog" aria-label="Modal de notificações">
      <Header>
        <Title>Notificações</Title>
        <CloseButton onClick={onClose} aria-label="Fechar">×</CloseButton>
      </Header>

      <Content>
        {notifications.length === 0 ? (
          <EmptyState>
            <IoNotificationsOffCircleOutline />
            Nenhuma notificação no momento
          </EmptyState>
        ) : (
          notifications.map((item) => (
            <NotificationItem
              key={item.id}
              $read={item.read}
              onClick={() => onRead && onRead(item.id)}
              role="button"
              aria-pressed={!!item.read}
            >
              <TextWrapper>
                <NotificationTitle>{item.title}</NotificationTitle>
                <NotificationTime>{item.time}</NotificationTime>
              </TextWrapper>

              {!item.read ? <Dot /> : <div style={{ width: 10 }} />}
            </NotificationItem>
          ))
        )}
      </Content>

      {notifications.length > 0 && (
        <Footer>
          <ClearAllButton
            onClick={onClearAll}
            data-tooltip="Limpar notificações"
            aria-label="Limpar notificações"
          >
            <PiTrashBold />
          </ClearAllButton>

          <MarkAllButton
            onClick={onReadAll}
            data-tooltip="Marcar todas como lidas"
            aria-label="Marcar todas como lidas"
          >
            <MdOutlineMarkEmailRead />
          </MarkAllButton>
        </Footer>
      )}
    </Container>
  );
};

export default NotificationsModal;
