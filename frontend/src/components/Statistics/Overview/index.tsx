import { ResponsivePie } from "@nivo/pie";
import { CardContainer } from "../CardContainer";
import { ChartWrapper } from "./styles";

const data = [
  { id: "Pendentes", value: 59 },
  { id: "Em andamento", value: 12 },
  { id: "Concluídas", value: 29 },
];

const ProjectOverviewPie = () => {
  return (
    <CardContainer>
      <ChartWrapper>
        <h3>Visão Geral</h3>

        <ResponsivePie
          data={data}
          innerRadius={0.65}
          padAngle={1.5}
          cornerRadius={5}
          activeOuterRadiusOffset={10}
          colors={["#47B0F7", "#1454B8", "#0B1B3A"]}
          margin={{ top: 20, right: 90, bottom: 40, left: 40 }}
          enableArcLabels={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#2E2E2E"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          legends={[]}
        />

      </ChartWrapper>
    </CardContainer>
  );
};

export default ProjectOverviewPie;
