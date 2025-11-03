import React, { useState } from "react";
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
} from "./styles";

import { Button } from "../Button";
import { IAddTaskModel } from "./types";

const AddTaskModal = ({ columnName, onClose, onSave, userAvatar }:IAddTaskModel) => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState(""); // tipo / área / tag
    const [date, setDate] = useState("");

    const handleSubmit = () => {
    if (!title.trim()) return; // validação básica
    onSave({
        title,
        subtitle,
        date,
    });
    };

    return (
    <Overlay>
        <ModalCard>
        <ModalHeader>
            <ModalTitle>Nova tarefa em {columnName}</ModalTitle>

            <CloseButton onClick={onClose} title="Fechar">
            ✕
            </CloseButton>
        </ModalHeader>

        <ModalBody>
            <Row>
            <AvatarPreview src={userAvatar} alt="avatar do usuário" />
            <span style={{ fontSize: "0.8rem", color: "#475569" }}>
                Atribuído inicialmente
            </span>
            </Row>

            <Label>Título da tarefa</Label>
            <TextInput
            placeholder="Ex: Ajustar API de Insights"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <Label>Categoria / Área</Label>
            <TextInput
            placeholder="Ex: Infraestrutura, Bug, Acessibilidade..."
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            />

            <Label>Prazo (opcional)</Label>
            <TextInput
            placeholder="Ex: 14 de dez"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
        </ModalBody>

        <ModalFooter>
            <Button
            title="Cancelar"
            variant="secondary"
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
