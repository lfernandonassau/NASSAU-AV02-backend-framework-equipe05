import React from "react";
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

const PainelPage = () => {
    const pendentesTasks = [
    {
        title: "Redesign da página inicial",
        subtitle: "Infraestrutura",
        members: [
        { name: "Sam", avatarUrl: "https://via.placeholder.com/32" },
        { name: "Ana", avatarUrl: "https://via.placeholder.com/32" },
        ],
        date: "12 de dez",
    },
    {
        title: "API de Insights",
        subtitle: "Bug",
        members: [
        { name: "Sam", avatarUrl: "https://via.placeholder.com/32" },
        ],
        date: "12 de dez",
    },
    ];

    const andamentoTasks = [
    {
        title: "Redesign da página inicial",
        subtitle: "Infraestrutura",
        members: [
        { name: "Sam", avatarUrl: "https://via.placeholder.com/32" },
        { name: "Ana", avatarUrl: "https://via.placeholder.com/32" },
        ],
        date: "12 de dez",
    },
    {
        title: "Integração com backend",
        subtitle: "Infraestrutura",
        members: [
        { name: "Sam", avatarUrl: "https://via.placeholder.com/32" },
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
        { name: "Sam", avatarUrl: "https://via.placeholder.com/32" },
        { name: "Ana", avatarUrl: "https://via.placeholder.com/32" },
        ],
        date: "12 de dez",
    },
    {
        title: "Layout da tela de Login",
        subtitle: "UI/UX",
        members: [
        { name: "Sam", avatarUrl: "https://via.placeholder.com/32" },
        ],
        date: "12 de dez",
    },
    ];

    return (
    <PageWrapper>
        <Header autenticado={true} />

      {/* Quadro branco central com tudo dentro */}
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
        />

            <KanbanColumn
            title="Em andamento"
            icon="⏳"
            accentColor="#e5c100"
            tasks={andamentoTasks}
            />

            <KanbanColumn
            title="Concluídos"
            icon="✅"
            accentColor="#00c851"
            tasks={concluidasTasks}
            />
        </ColumnsWrapper>
        </BoardOuterContainer>
    </PageWrapper>
    );
};

export default PainelPage;
