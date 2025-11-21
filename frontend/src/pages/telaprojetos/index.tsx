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

const TelaProjetos = () => {
    const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null)
    const [activeTab, setActiveTab] = useState('projetos') // Estado necessário para a Sidebar funcionar visualmente
    const navigate = useNavigate()

    function handleToggleProject(projectId: string) {
        setExpandedProjectId((current) =>
            current === projectId ? null : projectId
        );
    }

    function handleOpenKanban(project: Project) {
        console.log('Abrir Kanban:', project);
        navigate(`/projects/${project.id}/board`);
    }

    function handleOpenStats(project: Project) {
        console.log('Abrir Estatísticas:', project);
    }

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
                        <TitleProject>Gerenciamento de Projetos</TitleProject>
                        
                        {mockProjects.map((project) => {
                            const isExpanded = expandedProjectId === project.id;
                            return (
                                <ProjectCard
                                    key={project.id}
                                    onClick={() => handleToggleProject(project.id)}
                                >
                                    <CardHeader>
                                        <NameProject>{project.name}</NameProject>
                                    </CardHeader>

                                    {isExpanded && (
                                        <ProjectActionsRow>
                                            <ProjectActionButton
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleOpenKanban(project);
                                                }}
                                            >
                                                Painel
                                            </ProjectActionButton>
                                            <ProjectActionButton
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleOpenStats(project);
                                                }}
                                            >
                                                Estatísticas
                                            </ProjectActionButton>
                                        </ProjectActionsRow>
                                    )}
                                </ProjectCard>
                            );
                        })}
                    </Container>
                </ContentWrapper>

            </ContentContainer>
        </Wrapper>
    );
}

export { TelaProjetos }