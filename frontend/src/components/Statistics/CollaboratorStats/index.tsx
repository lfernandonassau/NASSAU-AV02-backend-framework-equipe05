import { CardContainer } from "../CardContainer";
import { MdCheckCircle, MdAccessTime, MdTrendingUp } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { StatsContainer, StatsList, StatItem } from "./styles";

const CollaboratorStats = () => {
  return (
    <CardContainer>
      <StatsContainer>
        <h3>Acompanhamento por equipe</h3>

        <StatsList>
          <StatItem>
            <span>
              <FaTasks color="#4A4A4A" size={16} /> Total de Tarefas
            </span>
            <strong>124</strong>
          </StatItem>

          <StatItem>
            <span>
              <MdCheckCircle color="#4CAF50" size={18} /> Concluídas
            </span>
            <strong>73</strong>
          </StatItem>

          <StatItem>
            <span>
              <MdTrendingUp color="#FFC94D" size={18} /> Em andamento
            </span>
            <strong>36</strong>
          </StatItem>

          <StatItem>
            <span>
              <MdAccessTime color="#FF6B6B" size={18} /> Pendentes
            </span>
            <strong>15</strong>
          </StatItem>
        </StatsList>
      </StatsContainer>
    </CardContainer>
  );
};

export default CollaboratorStats;
