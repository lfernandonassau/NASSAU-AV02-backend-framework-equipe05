import React from "react";
import {
    ColumnWrapper,
    ColumnHeader,
    ColumnTitle,
    CardsList,
    AddButtonArea,
    AddButton,
} from "./styles";

import CardTask from "../CardTask";

const KanbanColumn = ({
    title,
    icon,
    accentColor,
    tasks = [],          // valor padrão evita undefined
    onAddTask
}) => {
    return (
    <ColumnWrapper>
        <ColumnHeader>
        <ColumnTitle>
            <span className="icon">{icon}</span>
            <span className="text">{title}</span>
            <span className="count">({tasks.length})</span>
        </ColumnTitle>
        </ColumnHeader>

        <CardsList>
        {tasks.map((task, index) => (
            <CardTask
            key={index}
            statusColor={accentColor}
            title={task.title}
            subtitle={task.subtitle}
            members={task.members}
            date={task.date}
            />
        ))}
        </CardsList>

        <AddButtonArea>
        <AddButton
            onClick={onAddTask}
            aria-label={`Adicionar nova tarefa em ${title}`}
            title={`Adicionar nova tarefa em ${title}`}
        >
            +
        </AddButton>
        </AddButtonArea>
    </ColumnWrapper>
    );
};

export default KanbanColumn;
