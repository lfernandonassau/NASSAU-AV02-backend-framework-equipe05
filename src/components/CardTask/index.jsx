import React from "react";
import { 
  CardContainer,
  StatusBar,
  TopRow,
  Title,
  OptionsButton,
  Subtitle,
  BottomRow,
  UserBlock,
  UserIcon,
  AvatarsRow,
  Avatar,
  DateText
} from "./styles";

const CardTask = ({
  statusColor = "#00b7d7",   // cor da barrinha no topo (azul, amarelo, etc.)
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
      {/* Barrinha no topo indicando tipo/status */}
      <StatusBar style={{ backgroundColor: statusColor }} />

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

      {/* Rodapé com ícone usuários, avatares e data */}
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
