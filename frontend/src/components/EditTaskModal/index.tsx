import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Button } from '../Button';
import {
    Overlay,
    ModalCard,
    ModalHeader,
    ModalTitle,
    CloseButton,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input
} from './styles';

interface EditTaskModalProps {
    initialData: {
        title: string;
        subtitle: string;
        date?: string;
    };
    onClose: () => void;
    onSave: (data: { title: string; subtitle: string; date: string }) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ initialData, onClose, onSave }) => {
    const [title, setTitle] = useState(initialData.title);
    const [subtitle, setSubtitle] = useState(initialData.subtitle);
    const [date, setDate] = useState(initialData.date || '');

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let v = e.target.value.replace(/\D/g, '');
        if (v.length >= 5) v = v.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
        else if (v.length >= 3) v = v.replace(/(\d{2})(\d+)/, '$1/$2');
        setDate(v.slice(0, 10));
    };

    const handleSave = () => {
        if (!title.trim()) return alert("O título é obrigatório");
        onSave({ title, subtitle, date });
    };

    return (
        <Overlay role="dialog" aria-modal="true">
            
            <ModalCard>
                
                <ModalHeader>
                    <ModalTitle>Editar Tarefa</ModalTitle>
                    <CloseButton 
                        onClick={onClose} 
                        aria-label="Fechar"
                    >
                        <MdClose />
                    </CloseButton>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <Label>Título</Label>
                        <Input 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder="Ex: Ajustar API"
                            autoFocus
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Categoria / Área</Label>
                        <Input 
                            value={subtitle} 
                            onChange={(e) => setSubtitle(e.target.value)} 
                            placeholder="Ex: Front-end"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Prazo</Label>
                        <Input 
                            value={date} 
                            onChange={handleDateChange} 
                            placeholder="DD/MM/AAAA"
                            maxLength={10}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    {/* Botão Cancelar fecha o modal */}
                    <Button 
                        title="Cancelar" 
                        onClick={onClose} 
                        variant="taskbutton"
                    />
                    {/* Botão Salvar executa a lógica e deve fechar via componente pai */}
                    <Button 
                        title="Salvar" 
                        onClick={handleSave} 
                        variant="taskbutton"
                    />
                </ModalFooter>
                
            </ModalCard>
        </Overlay>
    );
};

export { EditTaskModal };