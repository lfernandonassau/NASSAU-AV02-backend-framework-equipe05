import React from "react";
import {
    ColumnWrapper, ColumnHeader, ColumnTitle, CardsList, AddButtonArea, AddButton,
} from "./styles";
import CardTask from "../CardTask";
import { IKanbanColumnProps } from "./types";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const KanbanColumn: React.FC<IKanbanColumnProps> = ({
    title, icon, accentColor, droppableId, tasks = [], onAddTask
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

        <Droppable droppableId={droppableId}>
        {(provided) => (
            <CardsList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                {(prov) => (
                    <CardTask
                    id={task.id}
                    statusColor={accentColor}
                    title={task.title}
                    subtitle={task.subtitle}
                    members={task.members}
                    date={task.date}
                    innerRef={prov.innerRef}
                    draggableStyle={prov.draggableProps.style}
                    dragHandleProps={prov.dragHandleProps}
                    {...prov.draggableProps}
                    />
                )}
                </Draggable>
            ))}
            {provided.placeholder}
            </CardsList>
        )}
        </Droppable>

        <AddButtonArea>
        <AddButton onClick={onAddTask} aria-label={`Adicionar nova tarefa em ${title}`} title={`Adicionar nova tarefa em ${title}`}>
            +
        </AddButton>
        </AddButtonArea>
    </ColumnWrapper>
    );
};

export default KanbanColumn;
