import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { HeaderProfile } from "../../components/HeaderProfile";

import AreaOverview from "../../components/Statistics/AreaOverview";
import ProjectOverviewPie from "../../components/Statistics/OverviewChart";
import WeeklyEvolutionChart from "../../components/Statistics/EvolutionChart";
import CollaboratorStats from "../../components/Statistics/CollaboratorStats";

import {
  Container,
  Content,
  ChartsRow,
  BottomRow,
} from "./styles";
import { PerfilHomeBar } from "../../components/PerfilHomeBar";

const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/179970243?v=4";

const Estatisticas = () => {
  const [activeTab, setActiveTab] = useState("estatisticas");

  return (
    <Container>
      <Sidebar
        autenticado={true}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
      />

      <HeaderProfile
        userImage={USER_AVATAR}
        onSearch={(v: string) => console.log("Buscar:", v)}
      />

      <Content>

        {/* PERFIL */}
        <PerfilHomeBar />

       <ChartsRow>
        <WeeklyEvolutionChart />
        <ProjectOverviewPie />
      </ChartsRow>

      <BottomRow>
        <CollaboratorStats />
        <AreaOverview />
      </BottomRow>


      </Content>
    </Container>
  );
};

export { Estatisticas };