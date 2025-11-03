import React from "react";
import { 
  CardContainer,
  StatusBar,
  TopRow,
  Title,
  Subtitle,
  OptionsButton,
  BottomRow,
  UserBlock,
  UserIcon,
  AvatarsRow,
  Avatar,
  DateText
} from "./styles";

const CardTask = ({
  statusColor = "#00b7d7",
  title = "Redesign da página inicial",
  subtitle = "Infraestrutura",
  members = [
    { name: "Samuel", avatarUrl: "https://via.placeholder.com/32" },
    { name: "Hen", avatarUrl: "https://via.placeholder.com/32" },
  ],
  date = "12 de dez",
  onOptionsClick = () => {},
}) => {
  return (
    <CardContainer>
      {/* Barrinha colorida do topo */}
      <StatusBar style={{ backgroundColor: statusColor }} />

      {/* Título + botão de opções */}
      <TopRow>
        <div>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </div>

        <OptionsButton onClick={onOptionsClick} aria-label="Mais opções">
          <span />
          <span />
          <span />
        </OptionsButton>
      </TopRow>

      {/* Rodapé */}
      <BottomRow>
        <UserBlock>
          <UserIcon>👤</UserIcon>
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

        <DateText>{date}</DateText>
      </BottomRow>
    </CardContainer>
  );
};

export default CardTask;
