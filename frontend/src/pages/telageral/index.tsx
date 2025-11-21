
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
    PerfilTextSpanBar
} from './styles'

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
                    <PerfilBar>
                        <PerfilTitleBar>
                            Bem-vindo, <PerfilTextSpanBar>Rafael</PerfilTextSpanBar>
                        </PerfilTitleBar>
                        <PerfilTextBar>
                            É hora de começar a trabalhar!
                        </PerfilTextBar>
                    </PerfilBar>
                    <Container>
                        
                    </Container>
                </ContentWrapper>

            </ContentContainer>
        </Wrapper>
    );
}

export { TelaGeral };