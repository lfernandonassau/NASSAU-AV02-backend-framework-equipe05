import React from 'react';
import { MdError } from 'react-icons/md'; // Ícone de erro
import { Overlay, ModalContainer, IconWrapper, Title, Message, CloseButton } from './styles';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string; // A mensagem agora é dinâmica
}

export const ErrorModal = ({ isOpen, onClose, message }: ErrorModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <IconWrapper>
          <MdError />
        </IconWrapper>
        <Title>Ops! Algo deu errado.</Title>
        <Message>{message}</Message>
        <CloseButton onClick={onClose}>Tentar novamente</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};