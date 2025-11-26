import { ResponsivePie } from "@nivo/pie";
import { OverviewChartContainer } from "./OverviewChartContainer";
import { PieWrapper } from "./styles"; 

const data = [
  { id: "Pendentes", value: 59 },
  { id: "Em andamento", value: 12 },
  { id: "Concluídas", value: 29 },
];

const ProjectOverviewPie = () => {
  return (
    <OverviewChartContainer style={{ height: 330 }}>

      <PieWrapper>
        <h3>Visão Geral</h3> 
        <div style={{ width: "100%", height: "260px" }}>
          <ResponsivePie
            data={data}
            innerRadius={0.55}
            padAngle={1.2}
            cornerRadius={5}
            activeOuterRadiusOffset={8}
            /* cores do tamanho da barra */
            colors={["#47B0F7", "#1454B8", "#0B1B3A"]} 
            margin={{ top: 20, right: 140, bottom: 20, left: 20 }}

            enableArcLabels={false}
            arcLinkLabelsSkipAngle={999}

            legends={[
              {
                anchor: "right",
                direction: "column",
                translateX: 40,
                itemWidth: 20,
                itemHeight: 20,
                symbolSize: 12,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
      </PieWrapper>

    </OverviewChartContainer>
  );
};

export default ProjectOverviewPie;
