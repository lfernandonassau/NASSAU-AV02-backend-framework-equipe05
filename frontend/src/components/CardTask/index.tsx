import type { Member } from "types/task"
import React, { useEffect, useRef, useState } from "react"
import { formatToCardDate } from "../../utils/date"
import {
    Avatar, AvatarsRow, BottomRow, CardContainer, DateText,
    OptionsButton, StatusBar, Subtitle, Title, TopRow, UserBlock, UserIcon,
    OptionsMenu, TextCol, Actions, 
} from "./styles"
import { MdPerson } from "react-icons/md"
import { DelTaskButton } from "../../components/Button/styles"



type CardTaskProps = {
    id: string;
    statusColor?: string
    title: string
    subtitle: string
    members: Member[]
    date?: string
    draggableStyle?: React.CSSProperties
    dragHandleProps?: any
    draggableProps?: any
    innerRef?: (el: HTMLElement | null) => void
    isDragging?: boolean
    
    onRequestDelete?: (id: string) => void
    onRequestEdit?: (id: string, data: { title: string; subtitle: string; date: string }) => void
};

const CardTask: React.FC<CardTaskProps> = ({
    id,
    statusColor = "#00b7d7",
    title,
    subtitle,
    members,
    date = "12 de dez",
    draggableProps,
    draggableStyle,
    dragHandleProps,
    innerRef,
    onRequestDelete,
    onRequestEdit, // <--- Recebemos a função correta aqui
    isDragging,
}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null)

    // Fecha o menu ao clicar fora
    useEffect(() => {
        if (!menuOpen) return
        const onDocClick = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", onDocClick)
        return () => document.removeEventListener("mousedown", onDocClick);
    }, [menuOpen]);

    return (
        <CardContainer
            ref={innerRef}
            $menuOpen={menuOpen}
            style={draggableStyle}
            {...draggableProps}
            {...dragHandleProps}
            data-dragging={isDragging ? 'true' : 'false'}
        >

            <StatusBar style={{ backgroundColor: statusColor }} />

            <TopRow>
                <TextCol>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </TextCol>

                <Actions>
                    <OptionsButton
                        aria-label="Mais opções"
                        onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        onClick={(e) => { e.stopPropagation(); setMenuOpen(v => !v); }}
                    >
                        <span /><span /><span />
                    </OptionsButton>

                    {menuOpen && (
                        <OptionsMenu ref={menuRef}>
                            <DelTaskButton
                                title="Editar"
                                onClick={(e) => {
                                    e.stopPropagation(); // Evita cliques indesejados
                                    setMenuOpen(false);  // Fecha o menu
                                    if (onRequestEdit) {
                                        onRequestEdit(id, {
                                            title,
                                            subtitle,
                                            date: date || ''
                                        });
                                    }
                                }}
                            >
                                Editar tarefa
                            </DelTaskButton>

                            <DelTaskButton
                                title="Excluir tarefa"
                                onClick={() => { setMenuOpen(false); onRequestDelete?.(id); }}
                            >
                                Excluir tarefa
                            </DelTaskButton>
                        </OptionsMenu>
                    )}
                </Actions>
            </TopRow>

            <BottomRow>
                <UserBlock>
                    <UserIcon><MdPerson /></UserIcon>
                    <AvatarsRow>
                        {members.map((m, index) => (
                            <Avatar key={index} src={m.avatarUrl} alt={m.name} title={m.name} />
                        ))}
                    </AvatarsRow>
                </UserBlock>
                <DateText>{formatToCardDate(date ?? "")}</DateText>
            </BottomRow>
        </CardContainer>
    );
};

export default CardTask;