import React, { useState, useEffect, useRef } from "react";
import {
  Overlay,
  ModalCard,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  Label,
  TextInput,
  Row,
  AvatarPreview,
  ModalFooter,
  ErrorMessage,
  UserAssignmentText 
} from "./styles";

import { Button } from "../Button";
import { IAddTaskModel, INewTaskPayload } from "./types";

const AddTaskModal = ({ columnName, onClose, onSave, userAvatar }: IAddTaskModel) => {
  
  // Ref para focar o input de título
  const titleInputRef = useRef<HTMLInputElement>(null);

  // Estados do Formulário
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [date, setDate] = useState("");
  
  // Estado para armazenar mensagens de erro
  const [errors, setErrors] = useState<{ title?: string }>({});

  const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, ''); 
    
    if (v.length >= 5) v = v.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
    else if (v.length >= 3) v = v.replace(/(\d{2})(\d+)/, '$1/$2');
    
    setDate(v.slice(0, 10)); 
  };

  const handleSubmit = () => {
    const newErrors: { title?: string } = {};

    // Validação do Título (obrigatório)
    if (!title.trim()) {
      newErrors.title = "O título da tarefa é obrigatório.";
    }

    // Se houver erros, define o estado de erros e interrompe
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Limpa erros e chama onSave
    setErrors({});
    onSave({
      title,
      subtitle,
      date,
    });
  };

  // Efeito para Foco e Acessibilidade (Escape)
  useEffect(() => {
    //  Focar o primeiro input ao abrir
    if (titleInputRef.current) {
        titleInputRef.current.focus();
    }
    
    // Fechar o modal com a tecla ESC
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    // Fechamento do modal ao clicar no Overlay 
    <Overlay onClick={onClose}>
      <ModalCard 
        role="dialog" 
        aria-modal="true"
        // Impede que o clique dentro do cartão feche o modal
        onClick={(e: React.MouseEvent) => e.stopPropagation()} 
      >
        <ModalHeader>
          <ModalTitle>Nova tarefa em {columnName}</ModalTitle>
          <CloseButton onClick={onClose} title="Fechar">
            X
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <Row>
            <AvatarPreview src={userAvatar} alt="avatar do usuário" />

            <UserAssignmentText>
              Atribuído inicialmente
            </UserAssignmentText>
          </Row>

          <Label htmlFor="task-title">Título da tarefa</Label>
          <TextInput
            id="task-title" 
            type="text"
            ref={titleInputRef} 
            placeholder="Ex: Ajustar API de Insights"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            hasError={!!errors.title} 
          />
          {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}

          <Label htmlFor="task-subtitle">Categoria / Área</Label>
          <TextInput
            id="task-subtitle"
            type="text"
            placeholder="Ex: Infraestrutura, Bug, Acessibilidade..."
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />

          <Label htmlFor="task-date">Prazo (opcional)</Label>
          <TextInput
            id="task-date"
            type="text" // Mantido como text por causa da máscara
            placeholder="Ex: 14/12/2025"
            value={date}
            onChange={handleDateInput}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            title="Cancelar"
            onClick={onClose}
          />
          <Button
            title="Criar tarefa"
            onClick={handleSubmit}
          />
        </ModalFooter>
      </ModalCard>
    </Overlay>
  );
};

export default AddTaskModal;