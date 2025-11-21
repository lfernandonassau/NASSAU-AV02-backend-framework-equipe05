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
  UserAssignmentText, 
  FormGroup
} from "./styles";

import { AiFillCloseCircle } from "react-icons/ai";
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
          <CloseButton 
          onClick={onClose} 
          title="Fechar">
            <AiFillCloseCircle />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <Row>
              <AvatarPreview src={userAvatar} alt="avatar do usuário" />
              <UserAssignmentText>
                  Atribuído a você
              </UserAssignmentText>
          </Row>

          <FormGroup>
              <Label htmlFor="task-title">Título da tarefa <span style={{color: 'red'}}>*</span></Label>
              <TextInput
                  id="task-title" 
                  ref={titleInputRef} 
                  placeholder="Ex: Ajustar API de Insights"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  hasError={!!errors.title} 
              />
              {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
              <Label htmlFor="task-subtitle">Categoria / Área</Label>
              <TextInput
                  id="task-subtitle"
                  placeholder="Ex: Backend, Design, Bug..."
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
              />
          </FormGroup>

          <FormGroup>
              <Label htmlFor="task-date">Prazo</Label>
              <TextInput
                  id="task-date"
                  placeholder="DD/MM/AAAA"
                  value={date}
                  onChange={handleDateInput}
                  maxLength={10} // Limita caracteres da data
              />
          </FormGroup>
      </ModalBody>

      <ModalFooter>
          
          <Button
              title="Cancelar"
              onClick={onClose}
              variant="taskbutton"
          />
          <Button
              title="Criar Tarefa"
              onClick={handleSubmit}
              variant="taskbutton" 
          />
      </ModalFooter>
      </ModalCard>
    </Overlay>
  );
};

export { AddTaskModal }