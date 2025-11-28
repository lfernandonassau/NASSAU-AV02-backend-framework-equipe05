import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { Overlay, ModalContainer, IconWrapper, Title, Message, CloseButton } from './styles';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <IconWrapper>
          <MdCheckCircle />
        </IconWrapper>
        <Title>Atualizado!</Title>
        <Message>Seu perfil foi atualizado com sucesso!</Message>
        <CloseButton onClick={onClose}>OK</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};