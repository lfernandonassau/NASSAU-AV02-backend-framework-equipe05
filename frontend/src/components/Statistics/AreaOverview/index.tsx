import { ResponsiveLine } from "@nivo/line";
import { AreaOverviewContainer } from "./AreaOverviewContainer";
import { AreaContainer } from "./styles";


const data = [
  {
    id: "Tarefas",
    data: [
      { x: "S1", y: 5 },
      { x: "S2", y: 9 },
      { x: "S3", y: 14 },
      { x: "S4", y: 11 },
      { x: "S5", y: 16 },
    ],
  },
];

const AreaOverview = () => {
  return (
    <AreaOverviewContainer>
      <AreaContainer>
        <h3>Evolução Geral</h3>

        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 10, bottom: 45, left: 35 }} 
          xScale={{ type: "point" }}
          yScale={{ type: "linear" }}
          enableArea={true}
          areaOpacity={0.35}
          colors={["#1454B8"]}
          lineWidth={3}
          pointSize={10}
          pointBorderWidth={2}
          pointBorderColor="#ffffff"
          enableGridX={false}
          enableGridY={true}
          gridYValues={5}
          theme={{
            grid: {
              line: {
                stroke: "rgba(46, 46, 46, 0.2)",
                strokeWidth: 1,
              },
            },
            axis: {
              ticks: {
                text: {
                  fill: "#2E2E2E",
                },
              },
              legend: {
                text: {
                  fill: "#2E2E2E",
                },
              },
            },
          }}
          useMesh={true}
        />
      </AreaContainer>
    </AreaOverviewContainer>
  );
};

export default AreaOverview;
