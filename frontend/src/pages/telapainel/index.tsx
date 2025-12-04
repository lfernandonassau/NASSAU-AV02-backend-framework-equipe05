import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Tipos e Contexto
import type { Status, Task } from 'types/task';
import { useTasks } from '../../context/TasksContext';

// Componentes
import { AddTaskModal } from '../../components/AddTaskModal';
import { DeleteTaskModal } from '../../components/DeleteTaskModal';
import { EditTaskModal } from '../../components/EditTaskModal';
import { HeaderProfile } from '../../components/HeaderProfile';
import MembersModal from '../../components/MembersModal';
import { KanbanColumn } from '../../components/PainelCardsColumn';
import { PerfilHomeBar } from '../../components/PerfilHomeBar';
import { SelectProjectModal } from '../../components/SelectProjectModal';
import { Project } from '../../components/SelectProjectModal/types';
import { Sidebar } from '../../components/Sidebar';

// Ícones
import {
    MdAccessTime,
    MdAutorenew,
    MdCheckCircle,
    MdKeyboardArrowDown,
    MdPerson,
} from 'react-icons/md';

// Estilos
import {
    AddMemberButton,
    BoardHeader,
    BoardInfoLeft,
    BoardInfoTitle,
    BoardInfoTitleWrapper,
    BoardOuterContainer,
    ColumnsWrapper,
    ContentContainer,
    ContentWrapper,
    IconWrapper,
    PageWrapper,
} from './styles';

import { api } from '../../services/api';
import { brazilianToIsoDate, isoToBrazilianDate } from '../../utils/date';

const USER_AVATAR = 'https://avatars.githubusercontent.com/u/179970243?v=4';

// Tipos da API
type ApiCard = {
    id_card: number;
    title: string;
    subtitle?: string | null;
    qta_members: number;
    timeframe?: string | null;
};

type EditingTaskState = {
    id: string;
    title: string;
    subtitle: string;
    date: string;
} | null;


type ApiColumn = {
    id_column: number;
    title: string;
    subtitle?: string | null;
    status: 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDO';
    cards: ApiCard[];
};

type ApiBoard = {
    id_project: number;
    title: string;
    subtitle?: string | null;
    column: ApiColumn[];
};

// Projeto usado no front (id como string)
type FrontProject = Project;

const PainelPage: React.FC = () => {
    const [isMembersModalOpen, setIsMembersModalOpen] = useState(false);

    const {
    tasks,
    addTask,
    moveTask,
    removeTask,
    updateTask,
    setTasksFromServer,
    } = useTasks();

    const [modal, setModal] = useState<null | { status: Status; title: string }>(
        null,
    );

    const [deleteId, setDeleteId] = useState<string | null>(null);

    const [editingTask, setEditingTask] = useState<EditingTaskState>(null);


    const [activeTab, setActiveTab] = useState('projetos');
    const navigate = useNavigate();

    const [board, setBoard] = useState<ApiBoard | null>(null);

    const [statusToColumnId, setStatusToColumnId] = useState<
        Record<Status, number | null>
    >({
        PENDENTE: null,
        ANDAMENTO: null,
        CONCLUIDO: null,
    });

    // Lista de projetos do backend
    const [projects, setProjects] = useState<FrontProject[]>([]);
    const [currentProject, setCurrentProject] = useState<FrontProject | null>(
        null,
    );

    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const projectTitleRef = useRef<HTMLDivElement>(null);

    // 1) Carregar projetos quando o Painel montar
    useEffect(() => {
        async function loadProjects() {
        try {
            const { data } = await api.get('/projects');

            const mapped: FrontProject[] = data.map((p: any) => ({
            id: String(p.id_project),
            title: p.title,
            }));

            setProjects(mapped);

            if (!currentProject && mapped.length > 0) {
            setCurrentProject(mapped[0]);
            }
        } catch (err: any) {
            console.error('Erro ao carregar projetos:', err?.response || err);
            if (err?.response?.status === 401) {
            navigate('/login');
            }
        }
        }

        loadProjects();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSelectProject = (project: FrontProject) => {
        setCurrentProject(project);
        setIsProjectModalOpen(false);
    };

    // 2) Carregar board sempre que o projeto atual mudar
    useEffect(() => {
        async function loadBoard() {
        try {
            if (!currentProject?.id) {
            setBoard(null);
            setTasksFromServer([]);
            setStatusToColumnId({
                PENDENTE: null,
                ANDAMENTO: null,
                CONCLUIDO: null,
            });
            return;
            }

            const { data } = await api.get<ApiBoard>(
            `/projects/${currentProject.id}/board`,
            );

            setBoard(data);

            // Mapa Status -> id_column
            const mapStatus: Record<Status, number | null> = {
            PENDENTE: null,
            ANDAMENTO: null,
            CONCLUIDO: null,
            };

            const tasksFromApi: Task[] = [];

            data.column.forEach((col) => {
            const normalizedStatus =
                col.status === 'EM_ANDAMENTO' ? 'ANDAMENTO' : col.status;

            mapStatus[normalizedStatus as Status] = col.id_column;

            col.cards.forEach((card) => {
                tasksFromApi.push({
                id: String(card.id_card),
                title: card.title,
                subtitle: card.subtitle ?? '',
                status: normalizedStatus as Status,
                // 👉 aqui já convertemos ISO -> dd/mm/yyyy
                date: card.timeframe
                    ? isoToBrazilianDate(card.timeframe)
                    : undefined,
                members: [
                    {
                    name: 'Samuel',
                    avatarUrl: USER_AVATAR,
                    },
                ],
                });
            });
            });

            setStatusToColumnId(mapStatus);
            setTasksFromServer(tasksFromApi);
        } catch (err: any) {
            console.error('Erro ao carregar board:', err?.response || err);

            setBoard(null);
            setTasksFromServer([]);
            setStatusToColumnId({
            PENDENTE: null,
            ANDAMENTO: null,
            CONCLUIDO: null,
            });

            if (err?.response?.status === 401) {
            navigate('/login');
            }
        }
        }

        loadBoard();
    }, [currentProject?.id, navigate, setTasksFromServer]);

    // Colunas a partir do contexto (já em dd/mm/yyyy)
    const columns = useMemo(
        () => ({
        PENDENTE: tasks.filter((t) => t.status === 'PENDENTE'),
        ANDAMENTO: tasks.filter((t) => t.status === 'ANDAMENTO'),
        CONCLUIDO: tasks.filter((t) => t.status === 'CONCLUIDO'),
        }),
        [tasks],
    );

    const onDragEnd = async (result: DropResult) => {
        const { destination, source, draggableId } = result;
        if (!destination) return;

        const from = source.droppableId as Status;
        const to = destination.droppableId as Status;

        if (from === to) return;

        const targetColumnId = statusToColumnId[to];
        if (!targetColumnId) {
        console.error('ColumnId não encontrado para status', to);
        return;
        }

        moveTask(draggableId, to);

        try {
        await api.patch(`/cards/${draggableId}`, {
            columnId: targetColumnId,
        });
        } catch (err) {
        console.error('Erro ao mover card no backend:', err);
        // se quiser, rollback:
        // moveTask(draggableId, from);
        }
    };

    const handleAdd = (status: Status) => {
        setModal({
        status,
        title:
        status === 'PENDENTE'
            ? 'Pendentes'
            : status === 'ANDAMENTO'
            ? 'Em andamento'
            : 'Concluídos',
        });
    };

    const handleSaveNew = async (data: {
        title: string;
        subtitle: string;
        date?: string;
    }) => {
        if (!modal) return;

        const columnId = statusToColumnId[modal.status];
        if (!columnId) {
        console.error('ColumnId não encontrado para status', modal.status);
        return;
        }

        try {
        const body = {
            title: data.title,
            subtitle: data.subtitle,
            timeframe: brazilianToIsoDate(data.date), // 👉 dd/mm/yyyy -> ISO
            qta_members: 1,
            columnId,
        };

        const response = await api.post<ApiCard>('/cards', body);
        const created = response.data;

        addTask({
            id: String(created.id_card),
            title: created.title,
            subtitle: created.subtitle ?? '',
            status: modal.status,
            // pega a data que veio do back (ISO) e converte pra dd/mm/yyyy
            date: created.timeframe
            ? isoToBrazilianDate(created.timeframe)
            : data.date,
            members: [
            {
                name: 'Samuel',
                avatarUrl: USER_AVATAR,
            },
            ],
        });

        setModal(null);
        } catch (err) {
        console.error('Erro ao criar card:', err);
        }
    };

    const requestEdit = (
        id: string,
        data: { title: string; subtitle: string; date: string },
    ) => {
        setEditingTask({ id, ...data });
    };

    const handleSaveEdit = async (data: {
        title: string;
        subtitle: string;
        date: string;
    }) => {
        if (!editingTask) return;

        try {
        await api.patch(`/cards/${editingTask.id}`, {
            title: data.title,
            subtitle: data.subtitle,
            timeframe: brazilianToIsoDate(data.date), // 👉 dd/mm/yyyy -> ISO
        });

        updateTask(editingTask.id, {
            title: data.title,
            subtitle: data.subtitle,
            date: data.date, // no contexto mantemos dd/mm/yyyy
        });

        setEditingTask(null);
        } catch (err) {
        console.error('Erro ao atualizar card:', err);
        }
    };

    const cancelEdit = () => {
        setEditingTask(null);
    };

    const requestDelete = (id: string) => setDeleteId(id);

    const confirmDelete = async () => {
        if (!deleteId) return;

        try {
        await api.delete(`/cards/${deleteId}`);
        removeTask(deleteId);
        setDeleteId(null);
        } catch (err) {
        console.error('Erro ao deletar card:', err);
        }
    };

    const cancelDelete = () => setDeleteId(null);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);

        if (tab === 'projetos') navigate('/home');
        if (tab === 'painel') navigate('/painel');
        if (tab === 'estatisticas') navigate('/estatisticas');
    };

    const handleSearch = (val: string) => console.log('Buscar no painel:', val);

    return (
        <PageWrapper>
        <ContentContainer>
            <Sidebar
            autenticado={true}
            activeTab={activeTab}
            onChangeTab={handleTabChange}
            />

            <ContentWrapper>
            <HeaderProfile userImage={USER_AVATAR} onSearch={handleSearch} />

            <PerfilHomeBar />

            <BoardOuterContainer>
                <BoardHeader>
                <BoardInfoLeft>
                    <BoardInfoTitleWrapper
                    ref={projectTitleRef}
                    onClick={() => setIsProjectModalOpen(!isProjectModalOpen)}
                    $isOpen={isProjectModalOpen}
                    >
                    <BoardInfoTitle>
                        {currentProject?.title || 'Selecione um Projeto'}
                    </BoardInfoTitle>
                    <MdKeyboardArrowDown size={24} className="arrow-icon" />

                    <SelectProjectModal
                        isOpen={isProjectModalOpen}
                        onClose={() => setIsProjectModalOpen(false)}
                        projects={projects}
                        onSelectProject={handleSelectProject}
                        activeProjectId={currentProject?.id ?? ''}
                        triggerRef={projectTitleRef as React.RefObject<HTMLElement>}
                    />
                    </BoardInfoTitleWrapper>

                    <AddMemberButton onClick={() => setIsMembersModalOpen(true)}>
                    <MdPerson />
                    Gerenciar Colaboradores
                    </AddMemberButton>

                    <MembersModal
                    isOpen={isMembersModalOpen}
                    onClose={() => setIsMembersModalOpen(false)}
                    currentProjectId={currentProject?.id}
                    />
                </BoardInfoLeft>
                </BoardHeader>

                <DragDropContext onDragEnd={onDragEnd}>
                <ColumnsWrapper>
                    <KanbanColumn
                    title="Pendentes"
                    icon={
                        <IconWrapper $accentColor="#25B6CF">
                        <MdAccessTime />
                        </IconWrapper>
                    }
                    accentColor="#25B6CF"
                    droppableId="PENDENTE"
                    tasks={columns.PENDENTE}
                    onAddTask={() => handleAdd('PENDENTE')}
                    onRequestDelete={requestDelete}
                    onRequestEdit={requestEdit}
                    />

                    <KanbanColumn
                    title="Em andamento"
                    icon={
                        <IconWrapper $accentColor="#E0C02C">
                        <MdAutorenew />
                        </IconWrapper>
                    }
                    accentColor="#E0C02C"
                    droppableId="ANDAMENTO"
                    tasks={columns.ANDAMENTO}
                    onAddTask={() => handleAdd('ANDAMENTO')}
                    onRequestDelete={requestDelete}
                    onRequestEdit={requestEdit}
                    />

                    <KanbanColumn
                    title="Concluídos"
                    icon={
                        <IconWrapper $accentColor="#24C464">
                        <MdCheckCircle />
                        </IconWrapper>
                    }
                    accentColor="#24C464"
                    droppableId="CONCLUIDO"
                    tasks={columns.CONCLUIDO}
                    onAddTask={() => handleAdd('CONCLUIDO')}
                    onRequestDelete={requestDelete}
                    onRequestEdit={requestEdit}
                    />
                </ColumnsWrapper>
                </DragDropContext>
            </BoardOuterContainer>
            </ContentWrapper>

            {modal && (
            <AddTaskModal
                columnName={modal.title}
                userAvatar={USER_AVATAR}
                onClose={() => setModal(null)}
                onSave={handleSaveNew}
            />
            )}

            {editingTask && (
            <EditTaskModal
                initialData={{
                title: editingTask.title,
                subtitle: editingTask.subtitle,
                date: editingTask.date,
                }}
                onClose={cancelEdit}
                onSave={handleSaveEdit}
            />
            )}

            {deleteId && (
            <DeleteTaskModal
                title="Apagar card"
                message="Tem certeza que deseja apagar esta tarefa?"
                confirmLabel="Apagar"
                cancelLabel="Cancelar"
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />
            )}
        </ContentContainer>
        </PageWrapper>
    );
};

export { PainelPage };

