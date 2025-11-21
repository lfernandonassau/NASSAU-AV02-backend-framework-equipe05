import { useState } from 'react'
import { ProjectCard } from '../../components/ProfileProjectCard'
import { Header } from '../../components/Header'
import { MdSearch } from 'react-icons/md'

import {
    Wrapper,
    Container,
    TitleProject,
    CardHeader,
    NameProject,
    ProjectActionsRow,
    ProjectActionButton,
} from './styles'

type Project = {
    id: string
    name: string
}

const mockProjects: Project[] = [
    { id: '1', name: 'Kodan - Board da Faculdade' },
    { id: '2', name: 'TaskLock - O sucesso em meio ao nosso mundo capitalista e cercado de hiperestímulos' },
]

const TelaPerfil = ({ variant = 'secondary' }) => {
    const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null)

    function handleToggleProject(projectId: string) {
        setExpandedProjectId((current) =>
            current === projectId ? null : projectId
        )
    }

    function handleOpenKanban(project: Project) {
        console.log('Abrir Kanban do projeto:', project)
        // navigate(`/projects/${project.id}/board`)
    }

    function handleOpenStats(project: Project) {
        console.log('Abrir Estatísticas do projeto:', project)
        // navigate(`/projects/${project.id}/stats`)
    }

    return (
    <Wrapper>
        <Header autenticado={true} variant={variant} />
        <Container>
        <TitleProject>Gerenciamento de Times</TitleProject>

        {mockProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id

            return (
            <ProjectCard
                key={project.id}
                onClick={() => handleToggleProject(project.id)}
                >
                <CardHeader>
                    <NameProject>{project.name}</NameProject>

                    {/* aqui depois entram as bolinhas de status e o ícone de pessoas */}
                </CardHeader>

                {isExpanded && (
                    <ProjectActionsRow>
                    <ProjectActionButton
                        onClick={(event) => {
                        event.stopPropagation()
                        handleOpenKanban(project)
                        }}
                    >
                        Painel
                    </ProjectActionButton>

                    <ProjectActionButton
                        onClick={(event) => {
                        event.stopPropagation()
                        handleOpenStats(project)
                        }}
                    >
                        Estatísticas
                    </ProjectActionButton>
                    </ProjectActionsRow>
                )}
                </ProjectCard>

            )
        })}
        </Container>
    </Wrapper>
    )
}

export { TelaPerfil }
