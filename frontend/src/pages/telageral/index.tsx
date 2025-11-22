
import { useState } from 'react';
import { Sidebar } from '../../components/Sidebar'; // Sua Sidebar
import { 
    Wrapper, 
    ContentContainer, 
    ContentWrapper, 
    Container,
    PerfilBar,
    PerfilTextBar,
    PerfilTitleBar,
    PerfilTextSpanBar,
    UserAvatar,
    PerfilTextContainer
} from './styles'
import { HeaderProfile } from '../../components/HeaderProfile';

const TelaGeral = () => {

    const [activeTab, setActiveTab] = useState('projetos'); // Estado necessário para a Sidebar funcionar visualmente
    
    return (
        <Wrapper>
            <ContentContainer>
                <Sidebar 
                    autenticado={true}
                    activeTab={activeTab} 
                    onChangeTab={setActiveTab} 
                />

                {/* CONTEÚDO DA DIREITA */}
                <ContentWrapper>
                    <HeaderProfile/>
                    <PerfilBar>
                        <PerfilTextContainer>
                            <PerfilTitleBar>
                                👋 Ei, <PerfilTextSpanBar>Rafael!</PerfilTextSpanBar>
                            </PerfilTitleBar>
                            <PerfilTextBar>
                                Comece a trabalhar em um projeto agora
                            </PerfilTextBar>
                        </PerfilTextContainer>
                    </PerfilBar>
                    <Container>
                        
                    </Container>
                </ContentWrapper>

            </ContentContainer>
        </Wrapper>
    );
}

export { TelaGeral };