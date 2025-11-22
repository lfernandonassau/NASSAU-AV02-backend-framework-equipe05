import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectCard } from '../../components/ProfileProjectCard'
import { Sidebar } from '../../components/Sidebar' 


import { 
    Wrapper,           
    ContentContainer,  
    ContentWrapper,    
    Container,         
    TitleProject, 
    CardHeader, 
    NameProject, 
    ProjectActionsRow, 
    ProjectActionButton 
} from './styles'; 
import { HeaderProfile } from '../../components/HeaderProfile';

type Project = {
    id: string;
    name: string;
}

const mockProjects: Project[] = [
    { id: '1', name: 'Kodan - Board da Faculdade' },
    { id: '2', name: 'TaskLock - O sucesso em meio ao nosso mundo capitalista' },
];

const TelaPerfil = () => {
    const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null)
    const [activeTab, setActiveTab] = useState('projetos') // Estado necessário para a Sidebar funcionar visualmente
    const navigate = useNavigate()

    

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
                    
                    <Container>
                        <TitleProject>Perfil do usuário</TitleProject>
                        
                        
                    </Container>
                </ContentWrapper>

            </ContentContainer>
        </Wrapper>
    );
}

export { TelaPerfil }