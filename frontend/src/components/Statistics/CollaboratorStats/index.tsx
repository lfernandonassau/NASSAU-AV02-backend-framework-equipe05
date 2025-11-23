import { CardContainer } from "../CardContainer";
import { MdCheckCircle, MdAccessTime, MdTrendingUp } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

const CollaboratorStats = () => {
  return (
    <CardContainer style={{ padding: "20px" }}>
      <h3 style={{ color: "#1f1f1f", marginBottom: "16px" }}>
        Acompanhamento por equipe
      </h3>

      <ul style={{ 
        listStyle: "none",
        padding: 0,
        margin: 0,
        color: "#1f1f1f",
        fontSize: "14px",
        fontWeight: 500
      }}>
        
        <li style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaTasks color="#4a4a4a" size={16} /> Total de Tarefas
          </span>
          <strong>124</strong>
        </li>

        <li style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <MdCheckCircle color="#4CAF50" size={18} /> Concluídas
          </span>
          <strong>73</strong>
        </li>

        <li style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <MdTrendingUp color="#FFC94D" size={18} /> Em andamento
          </span>
          <strong>36</strong>
        </li>

        <li style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <MdAccessTime color="#FF6B6B" size={18} /> Pendentes
          </span>
          <strong>15</strong>
        </li>

      </ul>
    </CardContainer>
  );
};

export default CollaboratorStats;
