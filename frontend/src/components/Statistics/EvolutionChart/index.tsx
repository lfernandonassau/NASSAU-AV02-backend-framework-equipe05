import { ResponsiveLine } from "@nivo/line";
import { EvolutionContainer } from "./EvolutionChartContainer";
import { ChartWrapper } from "./styles";

const data = [
  {
    id: "Pendentes",
    data: [
      { x: "S1", y: 10 },
      { x: "S2", y: 6 },
      { x: "S3", y: 4 },
    ],
  },
  {
    id: "Em andamento",
    data: [
      { x: "S1", y: 5 },
      { x: "S2", y: 7 },
      { x: "S3", y: 8 },
    ],
  },
  {
    id: "Concluídas",
    data: [
      { x: "S1", y: 3 },
      { x: "S2", y: 8 },
      { x: "S3", y: 12 },
    ],
  },
];

const WeeklyEvolutionChart = () => {
  return (
    <EvolutionContainer>
      <ChartWrapper>
        <h3>Evolução Semanal:</h3>

        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 30, bottom: 65, left: 45 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear" }}
          colors={["#1454B8", "#0B1B3A", "#2E2E2E"]}
          lineWidth={3}
          pointSize={9}
          enableGridX={false}
          enableGridY={true}
          pointBorderWidth={2}
          pointBorderColor="#ffffff"
          useMesh={true}
          axisLeft={{
            legend: "Tarefas",
            legendOffset: -38,
            tickPadding: 6,
          }}
        />
      </ChartWrapper>
    </EvolutionContainer>
  );
};

export default WeeklyEvolutionChart;
