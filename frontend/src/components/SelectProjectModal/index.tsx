import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MdFolderOpen } from 'react-icons/md';
import { EmptyState, ModalContainer, ProjectItem, ProjectList } from './styles';
import { SelectProjectModalProps } from './types';



const SelectProjectModal: React.FC<SelectProjectModalProps> = ({
    isOpen,
    onClose,
    projects,
    onSelectProject,
    activeProjectId,
    triggerRef
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Fecha o modal se clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current && 
                !modalRef.current.contains(event.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose, triggerRef]);

    if (!isOpen) return null;

    return (
        <ModalContainer ref={modalRef}>
            <ProjectList>
                {projects.map(project => (
                    <ProjectItem 
                        key={project.id} 
                        onClick={() => onSelectProject(project)}
                        $isActive={project.id === activeProjectId}
                    >
                        <MdFolderOpen size={18} />
                        <span>{project.title}</span>
                    </ProjectItem>
                ))}
                {projects.length === 0 && (
                    <EmptyState>Nenhum outro projeto encontrado.</EmptyState>
                )}
            </ProjectList>
        </ModalContainer>
    );
};

export { SelectProjectModal };

