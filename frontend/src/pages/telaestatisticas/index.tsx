import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { HeaderProfile } from "../../components/HeaderProfile";

import WeeklyEvolutionChart from "../../components/Statistics/EvolutionChart";
import ProjectOverviewPie from "../../components/Statistics/Overview";
import CollaboratorStats from "../../components/Statistics/CollaboratorStats";
import AreaOverview from "../../components/Statistics/AreaOverview";

import {
  Container,
  Content,
  ChartsRow,
  BottomRow,
  CollaboratorSection,
  PerfilBar,
  UserAvatar,
  PerfilTextContainer,
  PerfilTitleBar,
  PerfilTextBar,
  PerfilTextSpanBar,
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
        {/* PERFIL BAR */}
        <PerfilBar>
            <UserAvatar src={USER_AVATAR} alt="Foto do usuário" />
            <PerfilTextContainer>
                <PerfilTitleBar>
                    👋 Rafael, <PerfilTextSpanBar>você está visualizando as estatisticas!</PerfilTextSpanBar>
                </PerfilTitleBar>
                <PerfilTextBar>
                    Essa é a parte em que você acompanhará a evolução geral dos seus projetos.
                </PerfilTextBar>
            </PerfilTextContainer>
        </PerfilBar>

        {/* Daqui para baixo continua os gráficos */}
        <ChartsRow>
            <WeeklyEvolutionChart />
            <ProjectOverviewPie />
        </ChartsRow>

        <BottomRow>
            <AreaOverview />
        </BottomRow>

        <CollaboratorSection>
            <CollaboratorStats />
        </CollaboratorSection>
        </Content>
    </Container>
    );
};

export { Estatisticas };
