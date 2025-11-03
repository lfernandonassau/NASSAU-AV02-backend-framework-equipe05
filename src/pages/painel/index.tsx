import React, { useState } from "react";
import { Header } from "../../components/Header";
import KanbanColumn from "../../components/KanbanColumn";
import {
    PageWrapper,
    BoardOuterContainer,
    BoardHeader,
    BoardInfoLeft,
    BoardInfoTitle,
    BoardInfoIcon,
    ColumnsWrapper
} from "./styles";

import AddTaskModal from "../../components/AddTaskModal";
import { INewTaskPayload, IPainelPageProps } from "./types";

const PainelPage: React.FC<IPainelPageProps> = ({variant = 'secondary'}) => {
  // MOCKS: por enquanto ainda estático
    const pendentesTasks = [
    {
        title: "Redesign da página inicial",
        subtitle: "Infraestrutura",
        members: [
        { name: "Sam", avatarUrl: "https://avatars.githubusercontent.com/u/179970243?v=4" },
        { name: "Ana", avatarUrl: "https://via.placeholder.com/32" },
        ],
        date: "12 de dez",
    },
    {
        title: "API de Insights",
        subtitle: "Bug",
        members: [
        { name: "Sam", avatarUrl: "https://avatars.githubusercontent.com/u/179970243?v=4" },
        ],
        date: "12 de dez",
    },
    ];

    const andamentoTasks = [
    {
        title: "Redesign da página inicial",
        subtitle: "Infraestrutura",
        members: [
        { name: "Sam", avatarUrl: "https://avatars.githubusercontent.com/u/179970243?v=4" },
        { name: "Ana", avatarUrl: "https://via.placeholder.com/32" },
        ],
        date: "12 de dez",
    },
    {
        title: "Integração com backend",
        subtitle: "Infraestrutura",
        members: [
        { name: "Sam", avatarUrl: "https://avatars.githubusercontent.com/u/179970243?v=4" },
        ],
        date: "12 de dez",
    },
    {
        title: "Refinamento de acessibilidade",
        subtitle: "Acessibilidade",
        members: [
        { name: "Ana", avatarUrl: "https://via.placeholder.com/32" },
        ],
        date: "12 de dez",
    },
    ];

    const concluidasTasks = [
    {
        title: "Definição de paleta de cores",
        subtitle: "Infraestrutura",
        members: [
        { name: "Sam", avatarUrl: "https://avatars.githubusercontent.com/u/179970243?v=4" },
        { name: "Ana", avatarUrl: "https://via.placeholder.com/32" },
        ],
        date: "12 de dez",
    },
    {
        title: "Layout da tela de Login",
        subtitle: "UI/UX",
        members: [
        { name: "Sam", avatarUrl: "https://avatars.githubusercontent.com/u/179970243?v=4" },
        ],
        date: "12 de dez",
    },
    ];

    // ESTADO: modal aberto/fechado
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // ESTADO: qual coluna chamou a criação
    const [targetColumn, setTargetColumn] = useState<string | null>(null);

  // Avatar do usuário autenticado (do Header)
    const currentUserAvatar: string = "https://avatars.githubusercontent.com/u/179970243?v=4";

    // abre modal e marca de qual coluna veio
    const handleOpenModal = (columnName: string) => {
    setTargetColumn(columnName);
    setIsModalOpen(true);
    };

    // fecha modal
    const handleCloseModal = () => {
    setIsModalOpen(false);
    setTargetColumn(null);
    };

  // salvar tarefa (por enquanto só console.log)
    const handleSaveTask = (taskData: INewTaskPayload) => {
        console.log("Salvar tarefa nova:", {
            ...taskData,
            coluna: targetColumn,
            createdBy: currentUserAvatar,
        });

        // inserir no array de tasks via setState
        // e mandar para o backend/prisma.

        setIsModalOpen(false);
        setTargetColumn(null);
    };

    return (
    <PageWrapper>
        <Header autenticado={true} variant={variant} />

        <BoardOuterContainer>
        <BoardHeader>
            <BoardInfoLeft>
            <BoardInfoTitle>
                Nome do Projeto Kanban
                <BoardInfoIcon role="img" aria-label="documento">📋</BoardInfoIcon>
            </BoardInfoTitle>
            </BoardInfoLeft>
        </BoardHeader>

        <ColumnsWrapper>
            <KanbanColumn
            title="Pendentes"
            icon="🕒"
            accentColor="#00b7d7"
            tasks={pendentesTasks}
            onAddTask={() => handleOpenModal("Pendentes")}
            />

            <KanbanColumn
            title="Em andamento"
            icon="⏳"
            accentColor="#e5c100"
            tasks={andamentoTasks}
            onAddTask={() => handleOpenModal("Em andamento")}
            />

            <KanbanColumn
            title="Concluídos"
            icon="✅"
            accentColor="#00c851"
            tasks={concluidasTasks}
            onAddTask={() => handleOpenModal("Concluídos")}
            />
        </ColumnsWrapper>
        </BoardOuterContainer>
    
        {isModalOpen && targetColumn && (
        <AddTaskModal
            columnName={targetColumn}
            onClose={handleCloseModal}
            onSave={handleSaveTask}
            userAvatar={currentUserAvatar}
        />
        )}
    </PageWrapper>
    );
};

export default PainelPage;
