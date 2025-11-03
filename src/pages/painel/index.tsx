import type { Status } from 'types/task';
import AddTaskModal from 'components/AddTaskModal';
import { Header } from 'components/Header';
import KanbanColumn from 'components/KanbanColumn';
import { useTasks } from 'context/TasksContext';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import React, { useMemo, useState } from 'react';

const USER_AVATAR = "https://avatars.githubusercontent.com/u/179970243?v=4";

const PainelPage: React.FC = () => {
    const { tasks, addTask, moveTask } = useTasks();
    const [modal, setModal] = useState<null | { status: Status; title: string }>(null);

    const columns = useMemo(() => ({
    PENDENTE:  tasks.filter(t => t.status === 'PENDENTE'),
    ANDAMENTO: tasks.filter(t => t.status === 'ANDAMENTO'),
    CONCLUIDO: tasks.filter(t => t.status === 'CONCLUIDO'),
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
    setModal({ status, title: 
        status === 'PENDENTE' ? 'Pendentes' :
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

    return (
    <>
        <Header autenticado variant="secondary" />
        <div style={{ marginTop: 64 }} />
        <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display:'flex', gap: '1rem', justifyContent:'center' }}>
            <KanbanColumn
            title="Pendentes"
            icon={<span>⏱️</span>}
            accentColor="#25B6CF"
            droppableId="PENDENTE"
            tasks={columns.PENDENTE}
            onAddTask={() => handleAdd('PENDENTE')}
            />
            <KanbanColumn
            title="Em andamento"
            icon={<span>⏳</span>}
            accentColor="#E0C02C"
            droppableId="ANDAMENTO"
            tasks={columns.ANDAMENTO}
            onAddTask={() => handleAdd('ANDAMENTO')}
            />
            <KanbanColumn
            title="Concluídos"
            icon={<span>✅</span>}
            accentColor="#24C464"
            droppableId="CONCLUIDO"
            tasks={columns.CONCLUIDO}
            onAddTask={() => handleAdd('CONCLUIDO')}
            />
        </div>
        </DragDropContext>

        {modal && (
        <AddTaskModal
            columnName={modal.title}
            userAvatar={USER_AVATAR}
            onClose={() => setModal(null)}
            onSave={handleSaveNew}
        />
        )}
    </>
    );
};

export default PainelPage;
