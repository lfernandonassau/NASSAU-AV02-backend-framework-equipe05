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

import ButtonImage from '../../assets/buttonmais.svg';
import { MdAdd, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const KanbanColumn: React.FC<IKanbanColumnProps> = ({
    title, 
    icon, 
    accentColor, 
    droppableId, 
    tasks = [], 
    onAddTask, 
    onRequestDelete
}) => {

    // Referência para a lista de cards
    const listRef = useRef<HTMLDivElement>(null);
    
    // Controla se o botão aparece
    const [showScrollArrow, setShowScrollArrow] = useState(false);
    
    // Controla se chegou ao final para mudar a direção da seta
    const [isAtBottom, setIsAtBottom] = useState(false);

    const checkScroll = () => {
        if (!listRef.current) return;
        
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        
        // Margem de erro pequena (5px) para garantir detecção
        const atBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 5
        const atTop = scrollTop === 0
        const hasOverflow = scrollHeight > clientHeight

        // Atualiza o estado
        setIsAtBottom(atBottom)

        // Lógica de visibilidade do botão
        if (hasOverflow && tasks.length > 4) {
            setShowScrollArrow(true);
        } else {
            setShowScrollArrow(false);
        }
    }

    useEffect(() => {
        checkScroll();
        // Adiciona listener de resize caso a janela mude
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [tasks])

    const handleScrollClick = () => {
        if (listRef.current) {
            if (isAtBottom) {
                // Se está no fundo, sobe tudo
                listRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // Se não está, desce mais um pouco
                listRef.current.scrollBy({ top: 200, behavior: 'smooth' });
            }
        }
    }

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
                        onScroll={checkScroll} // Monitora o scroll
                    >
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
                        {/* Ícone dinâmico */}
                        {isAtBottom ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </ScrollButton>
                )}
            </AddButtonArea>
        </ColumnWrapper>
    );
};

export  { KanbanColumn }