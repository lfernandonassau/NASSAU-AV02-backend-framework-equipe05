import { CollaboratorContainer } from "./CollaboratorStatsContainer";
import {
  Wrapper,
  Row,
  LabelIcon,
  LabelText,
  Value,
  Bar,
  Fill
} from "./styles";

import { MdCheckCircle } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { MdTrendingUp } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

const total = 124;

const CollaboratorStats = () => {
  return (
    <CollaboratorContainer>
      <Wrapper>
        <h3>Acompanhamento por equipe</h3>

        {/* TOTAL — agora padronizado */}
        <Row>
          <LabelIcon><FaTasks size={18} color="#1454B8" /></LabelIcon>
          <LabelText>Total de Tarefas</LabelText>
          <Value>{total}</Value>
        </Row>
        {/* Linha invisível para manter o mesmo espaçamento */}
        <Bar style={{ opacity: 0 }} />

        {/* CONCLUÍDAS */}
        <Row>
          <LabelIcon><MdCheckCircle size={18} color="#1454B8" /></LabelIcon>
          <LabelText>Concluídas</LabelText>
          <Value>73</Value>
        </Row>
        <Bar>
          <Fill width={(73 / total) * 100} color="#1454B8" />
        </Bar>

        {/* EM ANDAMENTO */}
        <Row>
          <LabelIcon><MdTrendingUp size={18} color="#47B0F7" /></LabelIcon>
          <LabelText>Em andamento</LabelText>
          <Value>36</Value>
        </Row>
        <Bar>
          <Fill width={(36 / total) * 100} color="#47B0F7" />
        </Bar>

        {/* PENDENTES */}
        <Row>
          <LabelIcon><MdAccessTime size={18} color="#A8A8A8" /></LabelIcon>
          <LabelText>Pendentes</LabelText>
          <Value>15</Value>
        </Row>
        <Bar>
          <Fill width={(15 / total) * 100} color="#A8A8A8" />
        </Bar>
      </Wrapper>
    </CollaboratorContainer>
  );
};

export default CollaboratorStats;
