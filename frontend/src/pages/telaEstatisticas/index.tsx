import { Sidebar } from "../../components/Sidebar";
import { HeaderProfile } from "../../components/HeaderProfile";

import { 
  PageWrapper,
  Container, 
  Title,
  Content, 
  ChartsRow, 
  BottomRow 
} from "./styles";

import WeeklyEvolutionChart from "../../components/Statistics/EvolutionChart";
import ProjectOverviewPie from "../../components/Statistics/Overview";
import CollaboratorStats from "../../components/Statistics/CollaboratorStats";
import AreaOverview from "../../components/Statistics/AreaOverview";

const USER_AVATAR = "https://avatars.githubusercontent.com/u/179970243?v=4";

const Estatisticas = () => {

  const handleSearch = (value: string) => {
    console.log("Buscar:", value);
  };

  return (
    <PageWrapper>
      <Sidebar autenticado={true} activeTab="estatisticas" onChangeTab={() => {}} />

      <Container>
        <HeaderProfile 
          userImage={USER_AVATAR}
          onSearch={handleSearch}
        />

        <Title>Estatísticas do Projeto</Title>

        <Content>

          <ChartsRow>
            <WeeklyEvolutionChart />
            <ProjectOverviewPie />
          </ChartsRow>

          <BottomRow>
            <AreaOverview />
          </BottomRow>

          {/* ✅ Agora embaixo e com largura total */}
          <BottomRow>
            <CollaboratorStats />
          </BottomRow>

        </Content>
      </Container>
    </PageWrapper>
  );
};

export default Estatisticas;
