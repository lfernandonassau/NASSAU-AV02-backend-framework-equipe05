import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectCard } from '../../components/TelaProjectCard'
import { Sidebar } from '../../components/Sidebar'
import { HeaderProfile } from '../../components/HeaderProfile'
import { PerfilHomeBar } from '../../components/PerfilHomeBar'
import { api } from '../../services/api'

import {
    Wrapper,
    ContentContainer,
    ContentWrapper,
    Container,
    TitleProject,
    TitleRow,
    IconButton,
    CardHeader,
    ProjectInfoGroup, 
    ProjectIconBox,   
    ProjectTexts,     
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
    CreateButton,
    EmptyStateMessage,
} from './styles'

import {
    MdAdd,
    MdExpandMore,
    MdExpandLess,
    MdMoreVert,
} from 'react-icons/md'

import { LuKanban, LuX } from "react-icons/lu";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";

type Project = {
    id: string
    title: string
    subtitle: string
}

// limites de caracteres
const PROJECT_TITLE_MAX = 40
const PROJECT_SUBTITLE_MAX = 120

const TelaProjetos = () => {

    const USER_AVATAR = "https://avatars.githubusercontent.com/u/179970243?v=4"
    
    const [projects, setProjects] = useState<Project[]>([])
    const [userAvatar, setUserAvatar] = useState(USER_AVATAR)

    // Modais States
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [newProjectTitle, setNewProjectTitle] = useState('')
    const [newProjectSubtitle, setNewProjectSubtitle] = useState('')

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [projectToEdit, setProjectToEdit] = useState<Project | null>(null)
    const [editProjectTitle, setEditProjectTitle] = useState('')
    const [editProjectSubtitle, setEditProjectSubtitle] = useState('')

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [projectToDelete, setProjectToDelete] = useState<Project | null>(null)

    const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null)
    const [activeTab, setActiveTab] = useState('projetos')
    const [menuProjectId, setMenuProjectId] = useState<string | null>(null)

    const navigate = useNavigate()

    // carrega usuário logado para avatar (e garante que está autenticado)
    useEffect(() => {
        const storedUser = localStorage.getItem('kodan_user')

        if (!storedUser) {
            navigate('/login')
            return
        }

        try {
            const parsed = JSON.parse(storedUser)
            if (parsed?.imagemUrl) {
                setUserAvatar(parsed.imagemUrl)
            }
        } catch (err) {
            console.error('Erro ao ler usuário do localStorage:', err)
        }
    }, [navigate])

    useEffect(() => {
        async function loadProjects() {
            try {
                // usa a instância do axios com baseURL e interceptors
                const { data } = await api.get('/projects')

                const mapped = data.map((p: any) => ({
                    id: String(p.id_project ?? p.id),
                    title: p.title,
                    subtitle: p.subtitle ?? '',
                }))

                setProjects(mapped)
            } catch (err: any) {
                console.error("Erro ao carregar projetos:", err)
                if (err?.response?.status === 401) {
                    alert('Sessão expirada. Faça login novamente.')
                    navigate('/login')
                }
            }
        }

        loadProjects()
    }, [navigate])

    // helpers de texto
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

    // Create
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
    async function handleCreateProject(e: React.FormEvent) {
        e.preventDefault()

        const title = newProjectTitle.trim()
        const subtitle = newProjectSubtitle.trim()

        if (!title) return

        try {
            const { data: created } = await api.post('/projects', {
                title,
                subtitle,
            })

            const newProject: Project = {
                id: String(created.id_project),
                title: created.title,
                subtitle: created.subtitle ?? '',
            }

            setProjects(prev => [...prev, newProject])
            closeCreateModal()
        } catch (err: any) {
            console.error("Erro ao criar projeto:", err)
            if (err?.response?.status === 401) {
                alert('Sessão expirada. Faça login novamente.')
                navigate('/login')
                return
            }
            alert('Erro ao criar projeto.')
        }
    }

    // Edit
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
    async function handleEditProject(e: React.FormEvent) {
        e.preventDefault()
        if (!projectToEdit) return

        const title = editProjectTitle.trim()
        const subtitle = editProjectSubtitle.trim()

        if (!title) return

        try {
            const { data: updated } = await api.patch(
                `/projects/${projectToEdit.id}`,
                { title, subtitle }
            )

            setProjects(prev =>
                prev.map(p =>
                    p.id === projectToEdit.id
                        ? { ...p, title: updated.title, subtitle: updated.subtitle ?? '' }
                        : p
                )
            )

            closeEditModal()
        } catch (err: any) {
            console.error("Erro ao editar:", err)
            if (err?.response?.status === 401) {
                alert('Sessão expirada. Faça login novamente.')
                navigate('/login')
                return
            }
            alert('Erro ao editar projeto.')
        }
    }

    // Delete
    function openDeleteModal(project: Project) {
        setProjectToDelete(project)
        setIsDeleteModalOpen(true)
        setMenuProjectId(null)
    }
    function closeDeleteModal() {
        setIsDeleteModalOpen(false)
        setProjectToDelete(null)
    }
    async function handleDeleteProject() {
        if (!projectToDelete) return

        try {
            await api.delete(`/projects/${projectToDelete.id}`)

            setProjects(prev => prev.filter(p => p.id !== projectToDelete.id))
            setExpandedProjectId(current =>
                current === projectToDelete.id ? null : current
            )

            closeDeleteModal()
        } catch (err: any) {
            console.error("Erro ao excluir:", err)
            if (err?.response?.status === 401) {
                alert('Sessão expirada. Faça login novamente.')
                navigate('/login')
                return
            }
            alert('Erro ao excluir projeto.')
        }
    }

    function handleToggleProject(projectId: string) {
        setExpandedProjectId(current => (current === projectId ? null : projectId))
    }
    function handleToggleMenu(projectId: string, e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation()
        setMenuProjectId(current => current === projectId ? null : projectId)
    }

    const handleSearch = (val: string) => console.log("Buscar:", val);

    return (
        <Wrapper>
            <ContentContainer>
                <Sidebar
                    autenticado={true}
                    activeTab={activeTab}
                    onChangeTab={setActiveTab}
                />

                <ContentWrapper>
                    <HeaderProfile userImage={userAvatar} onSearch={handleSearch} />
                    
                    <PerfilHomeBar />

                    <Container>
                        <TitleRow>
                            <TitleProject>Gerenciamento de Projetos</TitleProject>
                            <CreateButton type="button" aria-label="Adicionar projeto" onClick={openCreateModal}>
                                <MdAdd/> Adicionar projeto
                            </CreateButton>
                        </TitleRow>

                        {/* <--- LÓGICA PARA EMPTY MESSAGE ---> */}
                        {projects.length === 0 ? (
                            // SE NÃO TIVER PROJETOS, MOSTRA ISSO:
                            <EmptyStateMessage>
                                <BsEmojiSmileUpsideDown/>
                                <p>Você ainda não criou um projeto</p>
                            </EmptyStateMessage>
                        ) : (
                            // SE TIVER PROJETOS, MOSTRA A LISTA DE CARDS:
                            projects.map(project => {
                                const isExpanded = expandedProjectId === project.id
                                const menuOpen = menuProjectId === project.id

                                return (
                                    <ProjectCard
                                        key={project.id}
                                        onClick={() => handleToggleProject(project.id)}
                                        style={{ zIndex: menuOpen ? 50 : 1, position: 'relative' }}
                                    >
                                        <CardHeader>
                                            {/* GRUPO ESQUERDA: ÍCONE + TEXTOS */}
                                            <ProjectInfoGroup>
                                                <ProjectIconBox>
                                                    <LuKanban /> 
                                                </ProjectIconBox>
                                                
                                                <ProjectTexts>
                                                    <NameProject>{formatTitle(project.title)}</NameProject>
                                                    {project.subtitle && (
                                                        <SubtitleProject>{project.subtitle}</SubtitleProject>
                                                    )}
                                                </ProjectTexts>
                                            </ProjectInfoGroup>

                                            {/* GRUPO DIREITA: AÇÕES */}
                                            <HeaderRight>
                                                <IconButton
                                                    type="button"
                                                    onClick={e => { e.stopPropagation(); handleToggleProject(project.id); }}
                                                >
                                                    {isExpanded ? <MdExpandLess size={22} /> : <MdExpandMore size={22} />}
                                                </IconButton>

                                                <IconButton
                                                    type="button"
                                                    onClick={e => handleToggleMenu(project.id, e)}
                                                >
                                                    <MdMoreVert size={22} />
                                                </IconButton>

                                                {menuOpen && (
                                                    <ProjectMenu onClick={e => e.stopPropagation()}>
                                                        <ProjectMenuItem type="button" onClick={() => openEditModal(project)}>
                                                            Editar
                                                        </ProjectMenuItem>
                                                        <ProjectMenuItem type="button" onClick={() => openDeleteModal(project)}>
                                                            Excluir
                                                        </ProjectMenuItem>
                                                    </ProjectMenu>
                                                )}
                                            </HeaderRight>
                                        </CardHeader>

                                        {/* RODAPÉ DO CARD */}
                                        {isExpanded && (
                                            <ProjectActionsRow onClick={(e) => e.stopPropagation()}>
                                                <ProjectActionButton type="button" onClick={() => navigate(`/projects/${project.id}/board`)}>
                                                    Abrir Painel
                                                </ProjectActionButton>
                                                <ProjectActionButton type="button" onClick={() => console.log("Stats")}>
                                                    Ver Estatísticas
                                                </ProjectActionButton>
                                            </ProjectActionsRow>
                                        )}
                                    </ProjectCard>
                                )
                            })
                        )}
                    </Container>
                </ContentWrapper>
            </ContentContainer>

            {/* MODAL: CRIAR */}
            {isCreateModalOpen && (
                <Overlay onClick={closeCreateModal}>
                    <ModalCard onClick={e => e.stopPropagation()}>
                        <ModalHeader>
                            <ModalTitle>Novo projeto</ModalTitle>
                            <ModalCloseButton onClick={closeCreateModal}><LuX/></ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={handleCreateProject}>
                                <ModalInput type="text" placeholder="Título" value={newProjectTitle} onChange={handleChangeNewTitle} />
                                <ModalCharCounter>{newProjectTitle.length}/{PROJECT_TITLE_MAX}</ModalCharCounter>
                                <ModalTextArea placeholder="Descrição" value={newProjectSubtitle} onChange={handleChangeNewSubtitle} rows={3} />
                                <ModalCharCounter>{newProjectSubtitle.length}/{PROJECT_SUBTITLE_MAX}</ModalCharCounter>
                                <ModalActions>
                                    <ModalSecondaryButton type="button" onClick={closeCreateModal}>Cancelar</ModalSecondaryButton>
                                    <ModalPrimaryButton type="submit">Criar</ModalPrimaryButton>
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
                            <ModalCloseButton onClick={closeEditModal}><LuX/></ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={handleEditProject}>
                                <ModalInput type="text" value={editProjectTitle} onChange={handleChangeEditTitle} />
                                <ModalCharCounter>{editProjectTitle.length}/{PROJECT_TITLE_MAX}</ModalCharCounter>
                                <ModalTextArea value={editProjectSubtitle} onChange={handleChangeEditSubtitle} rows={3} />
                                <ModalCharCounter>{editProjectSubtitle.length}/{PROJECT_SUBTITLE_MAX}</ModalCharCounter>
                                <ModalActions>
                                    <ModalSecondaryButton type="button" onClick={closeEditModal}>Cancelar</ModalSecondaryButton>
                                    <ModalPrimaryButton type="submit">Salvar</ModalPrimaryButton>
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
                            <ModalCloseButton onClick={closeDeleteModal}><LuX/></ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>
                            <p>Tem certeza que deseja excluir <strong>{projectToDelete.title}</strong>?</p>
                            <ModalActions>
                                <ModalSecondaryButton onClick={closeDeleteModal}>Cancelar</ModalSecondaryButton>
                                <ModalDangerButton onClick={handleDeleteProject}>Excluir</ModalDangerButton>
                            </ModalActions>
                        </ModalBody>
                    </ModalCard>
                </Overlay>
            )}
        </Wrapper>
    )
}

export { TelaProjetos }
