import React, { useMemo, useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { useNavigate } from 'react-router-dom'; // Se precisar navegar via sidebar

// Componentes e Contexto
import type { Status } from 'types/task';
import { useTasks } from '../../context/TasksContext';
import { AddTaskModal } from '../../components/AddTaskModal';
import { KanbanColumn } from '../../components/KanbanColumn';
import { ConfirmDialog } from '../../components/ConfirmDialog';

// --- MUDANÇA 1: IMPORTAR A SIDEBAR ---
import { Sidebar } from '../../components/Sidebar'; 

import {
    PageWrapper,
    ContentContainer, // <--- Novo Container de Layout
    BoardOuterContainer,
    BoardHeader,
    BoardInfoLeft,
    BoardInfoTitle,
    BoardInfoIcon,
    ColumnsWrapper,
    ContentWrapper
} from './styles';
import { MdAccessTime, MdAutorenew, MdCheckCircle, MdFolder } from 'react-icons/md';
import { HeaderProfile } from '../../components/HeaderProfile';

const USER_AVATAR = "https://avatars.githubusercontent.com/u/179970243?v=4";

const PainelPage: React.FC = () => {
    const { tasks, addTask, moveTask, removeTask } = useTasks();
    
    // hook state do Kanban
    const [modal, setModal] = useState<null | { status: Status; title: string }>(null);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    // hook state para sidebar
    const [activeTab, setActiveTab] = useState('projetos'); 
    const navigate = useNavigate();

    const columns = useMemo(() => ({
        PENDENTE:  tasks.filter((t) => t.status === 'PENDENTE'),
        ANDAMENTO: tasks.filter((t) => t.status === 'ANDAMENTO'),
        CONCLUIDO: tasks.filter((t) => t.status === 'CONCLUIDO'),
    }), [tasks]);

    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;
        if (!destination) return;
        const from = source.droppableId as Status;
        const to = destination.droppableId as Status;
        if (from === to) return;
        moveTask(draggableId, to);
    };

    const handleAdd = (status: Status) => {
        setModal({
            status,
            title: status === 'PENDENTE' ? 'Pendentes' :
                   status === 'ANDAMENTO' ? 'Em andamento' : 'Concluídos'
        });
    };

    const handleSaveNew = (data: { title: string; subtitle: string; date?: string }) => {
        if (!modal) return;
        addTask({
            ...data,
            status: modal.status,
            members: [{ name: 'Samuel', avatarUrl: USER_AVATAR }]
        });
        setModal(null);
    };

    const requestDelete = (id: string) => setDeleteId(id);
    const confirmDelete = () => {
        if (deleteId) removeTask(deleteId);
        setDeleteId(null);
    };
    const cancelDelete = () => setDeleteId(null);

    // Função para controlar a Sidebar (mesmo que esteja nesta página, a navegação pode funcionar)
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if(tab === 'projetos') navigate('/home'); // Exemplo: volta para a lista
    };

    return (
        <PageWrapper>
            <ContentContainer>

                <Sidebar 
                autenticado={true} 
                activeTab={activeTab} 
                onChangeTab={handleTabChange}
                />

                <ContentWrapper>
                    
                    <HeaderProfile/>

                    <BoardOuterContainer>
                        <BoardHeader>
                            <BoardInfoLeft>
                                <BoardInfoIcon>
                                    <MdFolder />
                                </BoardInfoIcon>
                                <BoardInfoTitle>Nome do Projeto</BoardInfoTitle>
                            </BoardInfoLeft>
                        </BoardHeader>

                        <DragDropContext onDragEnd={onDragEnd}>
                            <ColumnsWrapper>
                                <KanbanColumn
                                    title="Pendentes"
                                    icon={<MdAccessTime />}
                                    accentColor="#25B6CF"
                                    droppableId="PENDENTE"
                                    tasks={columns.PENDENTE}
                                    onAddTask={() => handleAdd('PENDENTE')}
                                    onRequestDelete={requestDelete}
                                />
                                <KanbanColumn
                                    title="Em andamento"
                                    icon={<MdAutorenew />}
                                    accentColor="#E0C02C"
                                    droppableId="ANDAMENTO"
                                    tasks={columns.ANDAMENTO}
                                    onAddTask={() => handleAdd('ANDAMENTO')}
                                    onRequestDelete={requestDelete}
                                />
                                <KanbanColumn
                                    title="Concluídos"
                                    icon={<MdCheckCircle />}
                                    accentColor="#24C464"
                                    droppableId="CONCLUIDO"
                                    tasks={columns.CONCLUIDO}
                                    onAddTask={() => handleAdd('CONCLUIDO')}
                                    onRequestDelete={requestDelete}
                                />
                            </ColumnsWrapper>
                        </DragDropContext>
                    </BoardOuterContainer>
                </ContentWrapper>

                {/* Modais */}
                {modal && (
                    <AddTaskModal
                        columnName={modal.title}
                        userAvatar={USER_AVATAR}
                        onClose={() => setModal(null)}
                        onSave={handleSaveNew}
                    />
                )}

                {deleteId && (
                    <ConfirmDialog
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

export { PainelPage }