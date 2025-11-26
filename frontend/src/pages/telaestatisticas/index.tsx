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
  PerfilBar,
  UserAvatar,
  PerfilTextContainer,
  PerfilTitleBar,
  PerfilTextBar,
  PerfilTextSpanBar
} from "./styles";

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
        <PerfilBar>
          <UserAvatar src={USER_AVATAR} alt="Foto do usuário" />
          <PerfilTextContainer>
            <PerfilTitleBar>
              👋 Rafael,{" "}
              <PerfilTextSpanBar>
                você está visualizando as estatísticas!
              </PerfilTextSpanBar>
            </PerfilTitleBar>

            <PerfilTextBar>
              Aqui você acompanha a evolução geral dos seus projetos.
            </PerfilTextBar>
          </PerfilTextContainer>
        </PerfilBar>

        {/* LINHA 1 — Evolução Geral + Visão Geral */}
        <ChartsRow>
          <AreaOverview />
          <ProjectOverviewPie />
        </ChartsRow>

        {/* LINHA 2 — */}
        <BottomRow>
          <CollaboratorStats />       {/* Agora à ESQUERDA (menor) */}
          <WeeklyEvolutionChart />   {/* Agora à DIREITA (maior) */}
        </BottomRow>

      </Content>
    </Container>
  );
};

export { Estatisticas };