import { Draggable, Droppable } from "@hello-pangea/dnd";
import React from "react";
import CardTask from "../CardTask";
import {
    AddButton,
    AddButtonArea,
    CardsList,
    ColumnHeader, ColumnTitle,
    ColumnWrapper,
} from "./styles";
import { IKanbanColumnProps } from "./types";

import ButtonImage from '../../assets/buttonmais.svg';

const KanbanColumn: React.FC<IKanbanColumnProps> = ({title, icon, accentColor, droppableId, tasks = [], onAddTask, onRequestDelete}) => {
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
                {(prov, snapshot) => (
                    <CardTask
                        id={task.id}
                        statusColor={accentColor}
                        title={task.title}
                        subtitle={task.subtitle}
                        members={task.members}
                        date={task.date}
                        innerRef={prov.innerRef}
                        draggableProps={prov.draggableProps}
                        draggableStyle={prov.draggableProps.style}
                        dragHandleProps={prov.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        onRequestDelete={onRequestDelete}
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
            <img src={ButtonImage} alt="Button X" />
        </AddButton>
        </AddButtonArea>
    </ColumnWrapper>
    );
};

export default KanbanColumn;
