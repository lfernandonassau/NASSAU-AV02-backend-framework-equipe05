import React, { useMemo, useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { useNavigate } from 'react-router-dom';

// Tipos e Contexto
import type { Status } from 'types/task';
import { useTasks } from '../../context/TasksContext';

// Componentes
import { AddTaskModal } from '../../components/AddTaskModal';
import { KanbanColumn } from '../../components/KanbanColumn';
import {  DeleteTaskModal } from '../../components/DeleteTaskModal'; // Seu modal renomeado
import { Sidebar } from '../../components/Sidebar'; 
import { HeaderProfile } from '../../components/HeaderProfile';
import MembersModal from '../../components/MembersModal';
import { EditTaskModal } from '../../components/EditTaskModal'; 

// Ícones
import { MdAccessTime, MdAutorenew, MdCheckCircle, MdFolder } from 'react-icons/md';

// Estilos
import {
    PageWrapper,
    ContentContainer,
    BoardOuterContainer,
    BoardHeader,
    BoardInfoLeft,
    BoardInfoTitle,
    BoardInfoIcon,
    ColumnsWrapper,
    ContentWrapper,
    AddMemberButton,
    IconWrapper,
    PerfilBar,
    UserAvatar,
    PerfilTextContainer,
    PerfilTitleBar,
    PerfilTextSpanBar,
    PerfilTextBar
} from './styles';



const USER_AVATAR = "https://avatars.githubusercontent.com/u/179970243?v=4"

const PainelPage: React.FC = () => {

    

    const [isMembersModalOpen, setIsMembersModalOpen] = useState(false);


    const { tasks, addTask, moveTask, removeTask, updateTask } = useTasks();
    
    const [modal, setModal] = useState<null | { status: Status; title: string }>(null);
    
    // Lógica de Delete 
    const [deleteId, setDeleteId] = useState<string | null>(null);

    // --- LÓGICA DE EDIÇÃO ---
    // Estado para guardar a tarefa que está sendo editada (ID + Dados atuais)
    const [editingTask, setEditingTask] = useState<null | { id: string, title: string, subtitle: string, date: string }>(null);

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


    // Função chamada pelo CardTask quando clica em "Editar"
    // Ela recebe o ID e os dados atuais para preencher o modal
    const requestEdit = (id: string, data: { title: string, subtitle: string, date: string }) => {
        setEditingTask({ id, ...data });
    };

    // Função chamada pelo Modal quando clica em "Salvar"
    const handleSaveEdit = (data: { title: string; subtitle: string; date: string }) => {
        if (editingTask) {
            // Chama a função do contexto para atualizar
            updateTask(editingTask.id, data);
            // Fecha o modal
            setEditingTask(null);
        }
    };

    const cancelEdit = () => {
        setEditingTask(null);
    };
    // -------------------------------------

    const requestDelete = (id: string) => setDeleteId(id);
    
    const confirmDelete = () => {
        if (deleteId) removeTask(deleteId);
        setDeleteId(null);
    };
    
    const cancelDelete = () => setDeleteId(null);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if(tab === 'projetos') navigate('/home');
    };

    const handleSearch = (val: string) => console.log("Buscar no painel:", val);

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

                    <PerfilBar>
                        <UserAvatar src={USER_AVATAR} alt="Foto do usuário" />
                        <PerfilTextContainer>
                            <PerfilTitleBar>
                                👋 Rafael, <PerfilTextSpanBar>você está no painel!</PerfilTextSpanBar>
                            </PerfilTitleBar>
                            <PerfilTextBar>
                                Aqui você trabalhará com o nosso modelo Kodan, baseado no modelo Kanban.
                            </PerfilTextBar>
                        </PerfilTextContainer>
                    </PerfilBar>

                    <BoardOuterContainer>
                        <BoardHeader>
                            <BoardInfoLeft>
                                <BoardInfoIcon><MdFolder /></BoardInfoIcon>
                                <BoardInfoTitle>Nome do Projeto</BoardInfoTitle>
                                <AddMemberButton
                                 onClick={() => setIsMembersModalOpen(true)}>Gerenciar Colaboradores
                                 </AddMemberButton>
                                <MembersModal 
                                isOpen={isMembersModalOpen} 
                                onClose={() => setIsMembersModalOpen(false)}/>
                            </BoardInfoLeft>
                        </BoardHeader>

                        <DragDropContext onDragEnd={onDragEnd}>
                            <ColumnsWrapper>
                                {/* Coluna Pendentes */}
                                <KanbanColumn
                                    title="Pendentes"
                                    icon={<IconWrapper $accentColor="#25B6CF"><MdAccessTime /></IconWrapper>}
                                    accentColor="#25B6CF"
                                    droppableId="PENDENTE"
                                    tasks={columns.PENDENTE}
                                    onAddTask={() => handleAdd('PENDENTE')}
                                    onRequestDelete={requestDelete}
                                    onRequestEdit={requestEdit} // <--- Passa a função aqui
                                />
                                
                                {/* Coluna Em Andamento */}
                                <KanbanColumn
                                    title="Em andamento"
                                    icon={<IconWrapper $accentColor="#E0C02C"><MdAutorenew /></IconWrapper>}
                                    accentColor="#E0C02C"
                                    droppableId="ANDAMENTO"
                                    tasks={columns.ANDAMENTO}
                                    onAddTask={() => handleAdd('ANDAMENTO')}
                                    onRequestDelete={requestDelete}
                                    onRequestEdit={requestEdit} // <--- Passa a função aqui
                                />
                                
                                {/* Coluna Concluídos */}
                                <KanbanColumn
                                    title="Concluídos"
                                    icon={<IconWrapper $accentColor="#24C464"> <MdCheckCircle /> </IconWrapper>}
                                    accentColor="#24C464"
                                    droppableId="CONCLUIDO"
                                    tasks={columns.CONCLUIDO}
                                    onAddTask={() => handleAdd('CONCLUIDO')}
                                    onRequestDelete={requestDelete}
                                    onRequestEdit={requestEdit} // <--- Passa a função aqui
                                />
                            </ColumnsWrapper>
                        </DragDropContext>
                    </BoardOuterContainer>
                </ContentWrapper>

                {/* Modal de Adicionar */}
                {modal && (
                    <AddTaskModal
                        columnName={modal.title}
                        userAvatar={USER_AVATAR}
                        onClose={() => setModal(null)}
                        onSave={handleSaveNew}
                    />
                )}

                {/*  RENDERIZAÇÃO DO MODAL DE EDIÇÃO  */}
                {/* Segue a mesma lógica do deleteId: só aparece se editingTask existir */}
                {editingTask && (
                    <EditTaskModal
                        initialData={{ 
                            title: editingTask.title, 
                            subtitle: editingTask.subtitle, 
                            date: editingTask.date 
                        }}
                        onClose={cancelEdit}
                        onSave={handleSaveEdit}
                    />
                )}

                {/* Modal de Exclusão */}
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