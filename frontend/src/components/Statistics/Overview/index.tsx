import { ResponsivePie } from "@nivo/pie";
import { CardContainer } from "../CardContainer";

const data = [
  { id: "Pendentes", value: 59 },
  { id: "Em andamento", value: 12 },
  { id: "Concluídas", value: 29 },
];

const ProjectOverviewPie = () => {
  return (
    <CardContainer style={{ height: 300 }}>
      <h3>Visão Geral</h3>
      <ResponsivePie
        data={data}
        innerRadius={0.65}
        padAngle={1.5}
        cornerRadius={5}
        activeOuterRadiusOffset={10}
        colors={["#47b0f7ff", "#1454B8", "#0B1B3A"]}
        margin={{ top: 20, right: 40, bottom: 40, left: 40 }}
        enableArcLabels={false}
        enableArcLinkLabels={true}
        arcLinkLabelsTextColor="#2E2E2E"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        legends={[]}
      />
    </CardContainer>
  );
};

export default ProjectOverviewPie;

