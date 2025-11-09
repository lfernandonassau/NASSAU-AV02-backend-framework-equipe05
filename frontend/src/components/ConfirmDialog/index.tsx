import React from 'react';
import {
    Overlay,
    ModalCard,
    ModalHeader,
    ModalTitle,
    CloseButton,
    ModalBody,
    ModalFooter,
} from './styles';
import { Button } from '../../components/Button';

type ConfirmDialogProps = {
    title?: string;
    message: string | React.ReactNode;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    onCancel: () => void;
};

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    title = 'Confirmar ação',
    message,
    confirmLabel = 'Confirmar',
    cancelLabel = 'Cancelar',
    onConfirm,
    onCancel,
}) => {
    return (
    <Overlay role="dialog" aria-modal="true">
        <ModalCard>
        <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <CloseButton onClick={onCancel} aria-label="Fechar">✕</CloseButton>
        </ModalHeader>

        <ModalBody>{message}</ModalBody>

        <ModalFooter>
            <Button title={cancelLabel} onClick={onCancel} />
            <Button
            title={confirmLabel}
            onClick={onConfirm}
            />
        </ModalFooter>
        </ModalCard>
    </Overlay>
    );
};

export default ConfirmDialog;
