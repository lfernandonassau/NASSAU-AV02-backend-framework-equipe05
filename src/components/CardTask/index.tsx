import type { Member } from "types/task";
import React from "react";
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
    UserBlock, UserIcon
} from "./styles";

type CardTaskProps = {
  id: string;
  statusColor?: string;
  title: string;
  subtitle: string;
  members: Member[];
  date?: string;
  onOptionsClick?: () => void;
  // receber style/props se usar Draggable
  draggableStyle?: React.CSSProperties;
  dragHandleProps?: any;
  innerRef?: (el: HTMLElement | null) => void;
};

const CardTask: React.FC<CardTaskProps> = ({
  id,
  statusColor = "#00b7d7",
  title,
  subtitle,
  members,
  date = "12 de dez",
  onOptionsClick,
  draggableStyle,
  dragHandleProps,
  innerRef
}) => {
  return (
    <CardContainer ref={innerRef} style={draggableStyle}>
      <StatusBar style={{ backgroundColor: statusColor }} />
      <TopRow {...dragHandleProps}>
        <div>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </div>
        <OptionsButton onClick={onOptionsClick} aria-label="Mais opções">
          <span /><span /><span />
        </OptionsButton>
      </TopRow>
      <BottomRow>
        <UserBlock>
          <UserIcon>👤</UserIcon>
          <AvatarsRow>
            {members.map((m, index) => (
              <Avatar key={index} src={m.avatarUrl} alt={m.name} title={m.name} />
            ))}
          </AvatarsRow>
        </UserBlock>
        <DateText>{date}</DateText>
      </BottomRow>
    </CardContainer>
  );
};

export default CardTask;
