// src/components/CardTask/index.tsx
import React, { useEffect, useRef, useState } from "react";
import type { Member } from "types/task";
import { formatToCardDate } from "../../utils/date";

import {
    Avatar,
    AvatarsRow,
    BottomRow,
    CardContainer,
    DateText,
    OptionsButton,
    StatusBar,
    Subtitle,
    Title,
    TopRow,
    UserBlock,
    UserIcon,
    OptionsMenu,
    TextCol,
    Actions,
} from "./styles";
import { MdPerson } from "react-icons/md";
import { DelTaskButton } from "../Button/styles";

type CardTaskProps = {
    id: string;
    statusColor?: string;
    title: string;
    subtitle: string;
    members: Member[];
    /** aqui a gente guarda "dd/mm/yyyy" */
    date?: string;

    draggableStyle?: React.CSSProperties;
    dragHandleProps?: any;
    draggableProps?: any;
    innerRef?: (el: HTMLElement | null) => void;
    isDragging?: boolean;

    onRequestDelete?: (id: string) => void;
    onRequestEdit?: (
    id: string,
    data: { title: string; subtitle: string; date: string }
    ) => void;
};

const CardTask: React.FC<CardTaskProps> = ({
    id,
    statusColor = "#00b7d7",
    title,
    subtitle,
    members,
    date = "",
    draggableProps,
    draggableStyle,
    dragHandleProps,
    innerRef,
    onRequestDelete,
    onRequestEdit,
    isDragging,
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Fecha o menu ao clicar fora
    useEffect(() => {
        if (!menuOpen) return;

        const onDocClick = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setMenuOpen(false);
        }
        };

        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, [menuOpen]);

    const handleEditClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setMenuOpen(false);

        if (onRequestEdit) {
        onRequestEdit(id, {
            title,
            subtitle,
            date: date ?? "",
        });
        }
    };

    const handleDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setMenuOpen(false);
        onRequestDelete?.(id);
    };

    return (
        <CardContainer
        ref={innerRef}
        $menuOpen={menuOpen}
        style={draggableStyle}
        {...draggableProps}
        {...dragHandleProps}
        data-dragging={isDragging ? "true" : "false"}
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
                onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                }}
                onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((v) => !v);
                }}
            >
                <span />
                <span />
                <span />
            </OptionsButton>

            {menuOpen && (
                <OptionsMenu ref={menuRef}>
                <DelTaskButton title="Editar tarefa" onClick={handleEditClick}>
                    Editar tarefa
                </DelTaskButton>

                <DelTaskButton
                    title="Excluir tarefa"
                    onClick={handleDeleteClick}
                >
                    Excluir tarefa
                </DelTaskButton>
                </OptionsMenu>
            )}
            </Actions>
        </TopRow>

        <BottomRow>
            <UserBlock>
            <UserIcon>
                <MdPerson />
            </UserIcon>
            <AvatarsRow>
                {members.map((m, index) => (
                <Avatar
                    key={index}
                    src={m.avatarUrl}
                    alt={m.name}
                    title={m.name}
                />
                ))}
            </AvatarsRow>
            </UserBlock>

            {/* date está em "dd/mm/yyyy", aqui formatamos pra "12 de dez de 2025" */}
            <DateText>{formatToCardDate(date ?? "")}</DateText>
        </BottomRow>
        </CardContainer>
    );
};

export default CardTask;
