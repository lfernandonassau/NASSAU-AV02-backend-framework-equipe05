import type { Status } from 'types/task';
import AddTaskModal from '../../components/AddTaskModal';
import { Header } from '../../components/Header';
import KanbanColumn from '../../components/KanbanColumn';
import { useTasks } from '../../context/TasksContext';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import React, { useMemo, useState } from 'react';
import ConfirmDialog from '../../components/ConfirmDialog';
import {
    PageWrapper,
    BoardOuterContainer,
    BoardHeader,
    BoardInfoLeft,
    BoardInfoTitle,
    BoardInfoIcon,
    ColumnsWrapper
} from './styles';

const USER_AVATAR = "https://avatars.githubusercontent.com/u/179970243?v=4";

const PainelPage: React.FC = () => {
    const { tasks, addTask, moveTask, removeTask } = useTasks();
    const [modal, setModal] = useState<null | { status: Status; title: string }>(null);
    const [deleteId, setDeleteId] = useState<string | null>(null);

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

    return (
    <PageWrapper>
        <Header autenticado variant="secondary" />
        <BoardOuterContainer>
        <BoardHeader>
            <BoardInfoLeft>
            <BoardInfoIcon>🗂️</BoardInfoIcon>
            <BoardInfoTitle>Nome do Projeto</BoardInfoTitle>
            </BoardInfoLeft>
        </BoardHeader>

        <DragDropContext onDragEnd={onDragEnd}>
            <ColumnsWrapper>
            <KanbanColumn
                title="Pendentes"
                icon={<span>⏱️</span>}
                accentColor="#25B6CF"
                droppableId="PENDENTE"
                tasks={columns.PENDENTE}
                onAddTask={() => handleAdd('PENDENTE')}
                onRequestDelete={requestDelete}
            />
            <KanbanColumn
                title="Em andamento"
                icon={<span>⏳</span>}
                accentColor="#E0C02C"
                droppableId="ANDAMENTO"
                tasks={columns.ANDAMENTO}
                onAddTask={() => handleAdd('ANDAMENTO')}
                onRequestDelete={requestDelete}
            />
            <KanbanColumn
                title="Concluídos"
                icon={<span>✅</span>}
                accentColor="#24C464"
                droppableId="CONCLUIDO"
                tasks={columns.CONCLUIDO}
                onAddTask={() => handleAdd('CONCLUIDO')}
                onRequestDelete={requestDelete}
            />
            </ColumnsWrapper>
        </DragDropContext>
        </BoardOuterContainer>

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
        message="Tem certeza que deseja apagar esta tarefa? Esta ação não pode ser desfeita."
        confirmLabel="Apagar"
        cancelLabel="Cancelar"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
    />
    )}
</PageWrapper>
);
};

export default PainelPage;
