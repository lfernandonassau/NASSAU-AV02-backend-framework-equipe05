import { useState } from 'react';
import { Sidebar } from '../../components/Sidebar'; 
import { HeaderProfile } from '../../components/HeaderProfile';

//  Modal de Colaborador e Projetos
import { ColaboradorModal } from '../../components/ColaboradorModal';
import { ProjetosModal } from '../../components/ProjetosModal';

import { 
    Wrapper, 
    ContentContainer, 
    ContentWrapper, 
    PerfilBar,
    PerfilTextBar,
    PerfilTitleBar,
    PerfilTextSpanBar,
    UserAvatar,
    PerfilTextContainer,
    CardTable,
    TableTitle,
    Table,
    Th, Td, Tr,
    AuthorCell, AuthorImg, AuthorInfo,
    FunctionInfo,
    StatusBadge,
    DateText,
    ActionButton,
    ProjectIcon, ProjectName, BudgetText,
    ProgressContainer, ProgressText, ProgressBarBg, ProgressBarFill,
    CardHeader,
    ViewMoreButton
} from './styles'

import { FaRocket } from 'react-icons/fa'; 
import { MdMoreVert } from 'react-icons/md';

// Interface para projetos
interface Project {
    id: number;
    name: string;
    tasks: string;
    status: string;
    completion: number;
}
// Interface para o autor
interface Author {
    id: number; 
    name: string; 
    email: string; 
    funcao: string; 
    date: string; 
    img: string;
}

const TelaDashboard = () => {

    const [activeTab, setActiveTab] = useState('painel')
    const userImage = "https://avatars.githubusercontent.com/u/179970243?v=4"
    
    // Estados para controlar qual autor está selecionado no modal e Projetos
    const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const authors = [
        { id: 1, name: "Rafael Alexandre", email: "rafael@kodan.com", funcao: "Fullstack Dev",  date: "14/06/21", img: "https://avatars.githubusercontent.com/u/179970243?v=4" },
        { id: 2, name: "Ryan", email: "ryan@kodan.com", funcao: " Frontend Dev", date: "14/06/21", img: "https://avatars.githubusercontent.com/u/162740474?v=4" },
        { id: 3, name: "Samuel", email: "sadosan@kodan.com", funcao: "Backend Dev", date: "14/06/21", img: "https://avatars.githubusercontent.com/u/122215538?v=4" },
        { id: 4, name: "Alandelon", email: "alandelon@kodan.com", funcao: "Fullstack Dev", date: "14/06/21", img: "https://avatars.githubusercontent.com/u/173320062?v=4" },
        { id: 5, name: "Daniel", email: "daniel@kodan.com", funcao: " Frontend Dev", date: "14/06/21", img: "https://avatars.githubusercontent.com/u/211064470?v=4" },
    ]

    const projects = [
        { id: 1, name: "TaskLock", tasks: "10", status: "Em processo", completion: 60 },
        { id: 2, name: "Kodan", tasks: "20", status: "Em processo", completion: 10 },
        { id: 3, name: "Cadastrado ou não cadastrado", tasks: "0", status: "Finalizado", completion: 100 },
        { id: 4, name: "Paraíso Alagoano", tasks: "200", status: "Finalizado", completion: 100 },
    ]

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
                    <HeaderProfile userImage={userImage} />
                    
                    <PerfilBar>
                        <UserAvatar src={userImage} alt="Foto do usuário" />
                        <PerfilTextContainer>
                            <PerfilTitleBar>
                                👋 Ei, <PerfilTextSpanBar>Rafael!</PerfilTextSpanBar>
                            </PerfilTitleBar>
                            <PerfilTextBar>
                                Bem-vindo ao seu painel de controle.
                            </PerfilTextBar>
                        </PerfilTextContainer>
                    </PerfilBar>

                    {/* TABELA 1: Painel de atividades */}
                    <CardTable>
                        <TableTitle>Painel de atividades entre projetos</TableTitle>
                        
                        <Table>
                            <thead>
                                <tr>
                                    <Th>COLABORADORES</Th>
                                    
                                    {/* Colunas que somem no mobile (< 740px) */}
                                    <Th $hideOnMobile>FUNÇÃO</Th>
                                    <Th $hideOnMobile>ÚLTIMO REVIEW</Th>
                                    
                                    <Th>PROJETO</Th>
                                </tr>
                            </thead>
                            <tbody>
                                {authors.map((author) => (
                                    <Tr key={author.id}>
                                        <Td>
                                            <AuthorCell>
                                                <AuthorImg src={author.img} alt={author.name} />
                                                <AuthorInfo>
                                                    <strong>{author.name}</strong>
                                                    <span>{author.email}</span>
                                                </AuthorInfo>
                                            </AuthorCell>
                                        </Td>
                                        
                                        {/* Células que somem junto com o Header */}
                                        <Td $hideOnMobile>
                                            <FunctionInfo>
                                                <span>{author.funcao}</span>
                                            </FunctionInfo>
                                        </Td>
                                        
                                        
                                        <Td $hideOnMobile>
                                            <DateText>{author.date}</DateText>
                                        </Td>
                                        
                                        {/* Célula de Ação: Alterna entre "TaskLock" e "Ver mais" */}
                                        <Td>
                                            {/* Visível apenas em Desktop */}
                                            <ActionButton>TaskLock</ActionButton>
                                            
                                            {/* Visível apenas em Mobile */}
                                            <ViewMoreButton onClick={() => setSelectedAuthor(author)}>
                                                Ver mais
                                            </ViewMoreButton>
                                        </Td>
                                    </Tr>
                                ))}
                            </tbody>
                        </Table>
                    </CardTable>

                    {/* TABELA 2: PROJETOS */}
                    <CardTable>
                        <CardHeader>
                            <TableTitle>Projetos em andamento</TableTitle>
                        </CardHeader>
                        
                        <Table>
                            <thead>
                                <tr>
                                    <Th>TÍTULO DO PROJETO</Th>
                                    
                                    {/* 3. Esconder Tarefas, Status e Andamento no Mobile */}
                                    <Th $hideOnMobile>TAREFAS</Th>
                                    <Th $hideOnMobile>STATUS</Th>
                                    <Th $hideOnMobile>ANDAMENTO</Th>
                                    
                                    <Th></Th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((proj) => (
                                    <Tr key={proj.id}>
                                        <Td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <ProjectIcon>
                                                    <FaRocket />
                                                </ProjectIcon>
                                                <ProjectName>{proj.name}</ProjectName>
                                            </div>
                                        </Td>
                                        
                                        <Td $hideOnMobile>
                                            <BudgetText>{proj.tasks}</BudgetText>
                                        </Td>
                                        
                                        <Td $hideOnMobile>
                                            <DateText style={{ fontSize: 12 }}>{proj.status}</DateText>
                                        </Td>
                                        
                                        <Td $hideOnMobile>
                                            <ProgressContainer>
                                                <ProgressText>{proj.completion}%</ProgressText>
                                                <ProgressBarBg>
                                                    <ProgressBarFill $width={proj.completion} />
                                                </ProgressBarBg>
                                            </ProgressContainer>
                                        </Td>
                                        
                                        <Td>
                                            {/*  Botão de Ação Alternativo */}
                                            {/* Desktop: 3 pontos */}
                                            <ActionButton>
                                                <MdMoreVert size={20} />
                                            </ActionButton>
                                            
                                            {/* Mobile: Ver mais */}
                                            <ViewMoreButton onClick={() => setSelectedProject(proj)}>
                                                Ver mais
                                            </ViewMoreButton>
                                        </Td>
                                    </Tr>
                                ))}
                            </tbody>
                        </Table>
                    </CardTable>

                </ContentWrapper>

            </ContentContainer>
            
            {/* Renderização do Modal de Colaboradores */}
            <ColaboradorModal 
                author={selectedAuthor} 
                onClose={() => setSelectedAuthor(null)} 
            />

            {/* Renderização do Modal de Projetos */}
            <ProjetosModal 
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />

        </Wrapper>
    )
}

export { TelaDashboard }