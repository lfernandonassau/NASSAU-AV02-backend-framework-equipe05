import type { Member } from "types/task";
import React, { useEffect, useRef, useState } from "react";
import { formatToCardDate } from "../../utils/date";
import {
  Avatar, AvatarsRow, BottomRow, CardContainer, DateText,
  OptionsButton, StatusBar, Subtitle, Title, TopRow, UserBlock, UserIcon,
  OptionsMenu, TextCol, Actions,
} from "./styles";
import { MdPerson } from "react-icons/md";
import { DelTaskButton } from "../../components/Button/styles";

type CardTaskProps = {
  id: string;
  statusColor?: string;
  title: string;
  subtitle: string;
  members: Member[];
  date?: string;
  // drag & drop
  draggableStyle?: React.CSSProperties;
  dragHandleProps?: any;
  draggableProps?: any;
  innerRef?: (el: HTMLElement | null) => void;
  isDragging?: boolean;
  // ações
  onRequestDelete?: (id: string) => void;
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
  isDragging,
}) => {
  // ---- controle do menu
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

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
                onClick={() => setMenuOpen(false)}
              >Editar tarefa</DelTaskButton>
              <DelTaskButton
                title="Excluir tarefa"
                onClick={() => { setMenuOpen(false); onRequestDelete?.(id); }}
              >Excluir tarefa</DelTaskButton>
                
            </OptionsMenu>
          )}
        </Actions>
      </TopRow>


      <BottomRow>
        <UserBlock>
          <UserIcon><MdPerson/></UserIcon>
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
