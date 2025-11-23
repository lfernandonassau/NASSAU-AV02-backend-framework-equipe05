import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectCard } from '../../components/TelaProjectCard'
import { Sidebar } from '../../components/Sidebar'
import { HeaderProfile } from '../../components/HeaderProfile'

import {
    Wrapper,
    ContentContainer,
    ContentWrapper,
    Container,
    TitleProject,
    TitleRow,
    IconButton,
    CardHeader,
    HeaderRight,
    NameProject,
    SubtitleProject,
    ProjectActionsRow,
    ProjectActionButton,
    Overlay,
    ModalCard,
    ModalHeader,
    ModalTitle,
    ModalCloseButton,
    ModalBody,
    ModalInput,
    ModalTextArea,
    ModalCharCounter,
    ModalActions,
    ModalSecondaryButton,
    ModalPrimaryButton,
    ModalDangerButton,
    ProjectMenu,
    ProjectMenuItem,
    PerfilBar,
    UserAvatar,
    PerfilTextContainer,
    PerfilTextBar,
    PerfilTitleBar,
    PerfilTextSpanBar,
} from './styles'

import {
    MdAdd,
    MdExpandMore,
    MdExpandLess,
    MdMoreVert,
} from 'react-icons/md'

import { LuX } from "react-icons/lu";

type Project = {
    id: string
    title: string
    subtitle: string
}

// limites de caracteres
const PROJECT_TITLE_MAX = 40
const PROJECT_SUBTITLE_MAX = 120

const mockProjects: Project[] = [
    {
        id: '1',
        title: 'Kodan - Board da Faculdade',
        subtitle: 'Kanban para organizar as tarefas do grupo da disciplina de backend.',
    },
    {
        id: '2',
        title: 'TaskLock',
        subtitle: 'App de foco para limitar uso de apps e trocar tempo por tarefas concluídas.',
    },
]

const TelaProjetos = () => {

    const USER_AVATAR = "https://avatars.githubusercontent.com/u/179970243?v=4"
    

    // de mock Projetos
    const [projects, setProjects] = useState<Project[]>(mockProjects)

    // Modal de criar
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [newProjectTitle, setNewProjectTitle] = useState('')
    const [newProjectSubtitle, setNewProjectSubtitle] = useState('')

    // Modal de editar
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [projectToEdit, setProjectToEdit] = useState<Project | null>(null)
    const [editProjectTitle, setEditProjectTitle] = useState('')
    const [editProjectSubtitle, setEditProjectSubtitle] = useState('')

    // Modal de deletar
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [projectToDelete, setProjectToDelete] = useState<Project | null>(null)

    const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null)
    const [activeTab, setActiveTab] = useState('projetos')
    const [menuProjectId, setMenuProjectId] = useState<string | null>(null)

    const navigate = useNavigate()

    // -------- helpers de texto com limite --------
    function handleChangeNewTitle(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.slice(0, PROJECT_TITLE_MAX)
        setNewProjectTitle(value)
    }

    function handleChangeNewSubtitle(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value.slice(0, PROJECT_SUBTITLE_MAX)
        setNewProjectSubtitle(value)
    }

    function handleChangeEditTitle(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.slice(0, PROJECT_TITLE_MAX)
        setEditProjectTitle(value)
    }

    function handleChangeEditSubtitle(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value.slice(0, PROJECT_SUBTITLE_MAX)
        setEditProjectSubtitle(value)
    }

    function formatTitle(title: string) {
        if (title.length <= PROJECT_TITLE_MAX) return title
        return title.slice(0, PROJECT_TITLE_MAX - 3) + '...'
    }

    // -------- criar projeto --------
    function openCreateModal() {
        setNewProjectTitle('')
        setNewProjectSubtitle('')
        setIsCreateModalOpen(true)
    }

    function closeCreateModal() {
        setIsCreateModalOpen(false)
        setNewProjectTitle('')
        setNewProjectSubtitle('')
    }

    function handleCreateProject(e: React.FormEvent) {
        e.preventDefault()

        const title = newProjectTitle.trim()
        const subtitle = newProjectSubtitle.trim()

        if (!title) return

        const newProject: Project = {
            id: String(Date.now()),
            title,
            subtitle,
        }

        setProjects(prev => [...prev, newProject])
        closeCreateModal()
    }

    // -------- editar projeto --------
    function openEditModal(project: Project) {
        setProjectToEdit(project)
        setEditProjectTitle(project.title)
        setEditProjectSubtitle(project.subtitle)
        setIsEditModalOpen(true)
        setMenuProjectId(null)
    }

    function closeEditModal() {
        setIsEditModalOpen(false)
        setProjectToEdit(null)
        setEditProjectTitle('')
        setEditProjectSubtitle('')
    }

    function handleEditProject(e: React.FormEvent) {
        e.preventDefault()
        if (!projectToEdit) return

        const title = editProjectTitle.trim()
        const subtitle = editProjectSubtitle.trim()

        if (!title) return

        const updated = projects.map(p =>
            p.id === projectToEdit.id
                ? { ...p, title, subtitle }
                : p
        )

        setProjects(updated)
        closeEditModal()
    }

    // -------- deletar projeto --------
    function openDeleteModal(project: Project) {
        setProjectToDelete(project)
        setIsDeleteModalOpen(true)
        setMenuProjectId(null)
    }

    function closeDeleteModal() {
        setIsDeleteModalOpen(false)
        setProjectToDelete(null)
    }

    function handleDeleteProject() {
        if (!projectToDelete) return

        setProjects(prev => prev.filter(p => p.id !== projectToDelete.id))

        setExpandedProjectId(current =>
            current === projectToDelete.id ? null : current
        )

        closeDeleteModal()
    }

    // -------- expandir / recolher --------
    function handleToggleProject(projectId: string) {
        setExpandedProjectId(current => (current === projectId ? null : projectId))
    }

    // -------- menu 3 pontos --------
    function handleToggleMenu(
        projectId: string,
        e: React.MouseEvent<HTMLButtonElement>
    ) {
        e.stopPropagation()
        setMenuProjectId(current => current === projectId ? null : projectId)
    }

    function handleOpenKanban(project: Project) {
        navigate(`/projects/${project.id}/board`)
    }

    function handleOpenStats(project: Project) {
        console.log('Abrir Estatísticas:', project)
    }

    return (
        <Wrapper>
            <ContentContainer>
                <Sidebar
                    autenticado={true}
                    activeTab={activeTab}
                    onChangeTab={setActiveTab}
                />

                <ContentWrapper>
                    <HeaderProfile />

                    <PerfilBar>
                        <UserAvatar src={USER_AVATAR} alt="Foto do usuário" />
                        <PerfilTextContainer>
                            <PerfilTitleBar>
                                👋 Rafael, <PerfilTextSpanBar>você está olhando para os projetos!</PerfilTextSpanBar>
                            </PerfilTitleBar>
                            <PerfilTextBar>
                                Essa é a lista de projetos que você está colaborando. Clique em um projeto para ver mais detalhes.
                            </PerfilTextBar>
                        </PerfilTextContainer>
                    </PerfilBar>

                    <Container>
                        <TitleRow>
                            <TitleProject>Gerenciamento de Projetos</TitleProject>

                            <IconButton
                                type="button"
                                aria-label="Adicionar projeto"
                                onClick={openCreateModal}
                            >
                                <MdAdd size={30} />
                            </IconButton>
                        </TitleRow>

                        {projects.map(project => {
                            const isExpanded = expandedProjectId === project.id
                            // Verifica se este projeto específico está com o menu aberto
                            const menuOpen = menuProjectId === project.id

                            return (
                                <ProjectCard
                                    key={project.id}
                                    onClick={() => handleToggleProject(project.id)}
                                    
                                    // Aplicado z-index alto se o menu estiver aberto, senão 1
                                    style={{ 
                                        zIndex: menuOpen ? 50 : 1, 
                                        position: 'relative' 
                                    }}
                                    // -----------------------------
                                >
                                    <CardHeader>
                                        <div>
                                            <NameProject>{formatTitle(project.title)}</NameProject>
                                            {isExpanded && project.subtitle && (
                                                <SubtitleProject>{project.subtitle}</SubtitleProject>
                                            )}
                                        </div>

                                        <HeaderRight>
                                            {/* seta de expandir/recolher */}
                                            <IconButton
                                                type="button"
                                                aria-label={isExpanded ? 'Recolher' : 'Expandir'}
                                                onClick={e => {
                                                    e.stopPropagation()
                                                    handleToggleProject(project.id)
                                                }}
                                            >
                                                {isExpanded ? (
                                                    <MdExpandLess size={20} />
                                                ) : (
                                                    <MdExpandMore size={20} />
                                                )}
                                            </IconButton>

                                            {/* três pontinhos */}
                                            <IconButton
                                                type="button"
                                                aria-label="Opções do projeto"
                                                onClick={e => handleToggleMenu(project.id, e)}
                                            >
                                                <MdMoreVert size={20} />
                                            </IconButton>

                                            {menuOpen && (
                                                <ProjectMenu
                                                    onClick={e => {
                                                        e.stopPropagation()
                                                    }}
                                                >
                                                    <ProjectMenuItem
                                                        type="button"
                                                        onClick={() => openEditModal(project)}
                                                    >
                                                        Editar
                                                    </ProjectMenuItem>
                                                    <ProjectMenuItem
                                                        type="button"
                                                        onClick={() => openDeleteModal(project)}
                                                    >
                                                        Excluir
                                                    </ProjectMenuItem>
                                                </ProjectMenu>
                                            )}
                                        </HeaderRight>
                                    </CardHeader>

                                    {isExpanded && (
                                        <ProjectActionsRow>
                                            <ProjectActionButton
                                                type="button"
                                                onClick={e => {
                                                    e.stopPropagation()
                                                    handleOpenKanban(project)
                                                }}
                                            >
                                                Painel
                                            </ProjectActionButton>

                                            <ProjectActionButton
                                                type="button"
                                                onClick={e => {
                                                    e.stopPropagation()
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
                </ContentWrapper>
            </ContentContainer>

            {/* MODAL: CRIAR */}
            {isCreateModalOpen && (
                <Overlay onClick={closeCreateModal}>
                    <ModalCard onClick={e => e.stopPropagation()}>
                        <ModalHeader>
                            <ModalTitle>Novo projeto</ModalTitle>
                            <ModalCloseButton type="button" onClick={closeCreateModal}>
                                <LuX/>
                            </ModalCloseButton>
                        </ModalHeader>

                        <ModalBody>
                            <form onSubmit={handleCreateProject}>
                                <ModalInput
                                    type="text"
                                    placeholder="Título do projeto"
                                    value={newProjectTitle}
                                    onChange={handleChangeNewTitle}
                                />
                                <ModalCharCounter>
                                    {newProjectTitle.length}/{PROJECT_TITLE_MAX}
                                </ModalCharCounter>

                                <ModalTextArea
                                    placeholder="Subtítulo / descrição curta (opcional)"
                                    value={newProjectSubtitle}
                                    onChange={handleChangeNewSubtitle}
                                    rows={3}
                                />
                                <ModalCharCounter>
                                    {newProjectSubtitle.length}/{PROJECT_SUBTITLE_MAX}
                                </ModalCharCounter>

                                <ModalActions>
                                    <ModalSecondaryButton type="button" onClick={closeCreateModal}>
                                        Cancelar
                                    </ModalSecondaryButton>
                                    <ModalPrimaryButton type="submit">
                                        Criar
                                    </ModalPrimaryButton>
                                </ModalActions>
                            </form>
                        </ModalBody>
                    </ModalCard>
                </Overlay>
            )}

            {/* MODAL: EDITAR */}
            {isEditModalOpen && projectToEdit && (
                <Overlay onClick={closeEditModal}>
                    <ModalCard onClick={e => e.stopPropagation()}>
                        <ModalHeader>
                            <ModalTitle>Editar projeto</ModalTitle>
                            <ModalCloseButton type="button" onClick={closeEditModal}>
                                <LuX/>
                            </ModalCloseButton>
                        </ModalHeader>

                        <ModalBody>
                            <form onSubmit={handleEditProject}>
                                <ModalInput
                                    type="text"
                                    value={editProjectTitle}
                                    onChange={handleChangeEditTitle}
                                />
                                <ModalCharCounter>
                                    {editProjectTitle.length}/{PROJECT_TITLE_MAX}
                                </ModalCharCounter>

                                <ModalTextArea
                                    value={editProjectSubtitle}
                                    onChange={handleChangeEditSubtitle}
                                    rows={3}
                                />
                                <ModalCharCounter>
                                    {editProjectSubtitle.length}/{PROJECT_SUBTITLE_MAX}
                                </ModalCharCounter>

                                <ModalActions>
                                    <ModalSecondaryButton type="button" onClick={closeEditModal}>
                                        Cancelar
                                    </ModalSecondaryButton>
                                    <ModalPrimaryButton type="submit">
                                        Salvar
                                    </ModalPrimaryButton>
                                </ModalActions>
                            </form>
                        </ModalBody>
                    </ModalCard>
                </Overlay>
            )}

            {/* MODAL: EXCLUIR */}
            {isDeleteModalOpen && projectToDelete && (
                <Overlay onClick={closeDeleteModal}>
                    <ModalCard onClick={e => e.stopPropagation()}>
                        <ModalHeader>
                            <ModalTitle>Excluir projeto</ModalTitle>
                            <ModalCloseButton type="button" onClick={closeDeleteModal}>
                                <LuX/>
                            </ModalCloseButton>
                        </ModalHeader>

                        <ModalBody>
                            <p>
                                Tem certeza que deseja excluir o projeto{' '}
                                <strong>{projectToDelete.title}</strong>?
                            </p>

                            <ModalActions>
                                <ModalSecondaryButton type="button" onClick={closeDeleteModal}>
                                    Cancelar
                                </ModalSecondaryButton>
                                <ModalDangerButton type="button" onClick={handleDeleteProject}>
                                    Excluir
                                </ModalDangerButton>
                            </ModalActions>
                        </ModalBody>
                    </ModalCard>
                </Overlay>
            )}
        </Wrapper>
    )
}

export { TelaProjetos }