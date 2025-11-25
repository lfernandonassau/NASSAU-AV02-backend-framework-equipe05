export interface Project {
    id: string;
    title: string;
}

export interface SelectProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    projects: Project[];
    onSelectProject: (project: Project) => void;
    activeProjectId?: string; // Para destacar o projeto atual
    triggerRef: React.RefObject<HTMLElement | null>; // Referência do botão que abriu o modal
}