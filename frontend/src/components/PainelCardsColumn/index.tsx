import { Draggable, Droppable } from "@hello-pangea/dnd";
import React, { useEffect, useRef, useState } from "react";
import CardTask from "../CardTask";
import {
    AddButton,
    AddButtonArea,
    CardsList,
    ColumnHeader, 
    ColumnTitle,
    ColumnWrapper,
    ScrollButton,
} from "./styles";
import { IKanbanColumnProps } from "./types";

import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdAdd } from "react-icons/md"; 

const KanbanColumn: React.FC<IKanbanColumnProps> = ({
    title, 
    icon, 
    accentColor, 
    droppableId, 
    tasks = [], 
    onAddTask, 
    onRequestDelete,
    onRequestEdit 
}) => {

    const listRef = useRef<HTMLDivElement>(null);
    const [showScrollArrow, setShowScrollArrow] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    const checkScroll = () => {
        if (!listRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        const atBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 5;
        const hasOverflow = scrollHeight > clientHeight;
        setIsAtBottom(atBottom);

        if (hasOverflow && tasks.length > 3) {
            setShowScrollArrow(true);
        } else {
            setShowScrollArrow(false);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [tasks]);

    const handleScrollClick = () => {
        if (listRef.current) {
            if (isAtBottom) {
                listRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                listRef.current.scrollBy({ top: 200, behavior: 'smooth' });
            }
        }
    };

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
                    <CardsList 
                        ref={(element) => {
                            provided.innerRef(element);
                            listRef.current = element;
                        }}
                        {...provided.droppableProps}
                        onScroll={checkScroll}
                    >
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(prov, snapshot) => (
                                    <CardTask
                                        id={task.id}
                                        statusColor={accentColor}
                                        title={task.title}
                                        subtitle={task.subtitle}
                                        members={task.members || []}
                                        date={task.date}
                                        innerRef={prov.innerRef}
                                        draggableProps={prov.draggableProps}
                                        dragHandleProps={prov.dragHandleProps}
                                        isDragging={snapshot.isDragging}
                                        
                                        // AÇÕES
                                        onRequestDelete={onRequestDelete}
                                        onRequestEdit={onRequestEdit} 
                                    />
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </CardsList>
                )}
            </Droppable>

            <AddButtonArea>
                <AddButton 
                    onClick={onAddTask} 
                    aria-label={`Adicionar nova tarefa em ${title}`} 
                    title="Adicionar Tarefa"
                >
                    <MdAdd />
                </AddButton>

                {showScrollArrow && (
                    <ScrollButton 
                        onClick={handleScrollClick}
                        aria-label={isAtBottom ? "Voltar ao topo" : "Ver mais tarefas"}
                        title={isAtBottom ? "Voltar ao topo" : "Ver mais tarefas"}
                    >
                        {isAtBottom ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </ScrollButton>
                )}
            </AddButtonArea>
        </ColumnWrapper>
    );
};

export  { KanbanColumn }