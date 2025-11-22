import React from 'react'
import { MdClose } from 'react-icons/md'
import {
    Overlay,
    ModalCard,
    ModalHeader,
    ModalTitle,
    CloseButton,
    ModalBody,
    ModalFooter,
} from './styles';
import { Button } from '../../components/Button'

type ConfirmDialogProps = {
    title?: string
    message: string | React.ReactNode
    confirmLabel?: string
    cancelLabel?: string
    onConfirm: () => void
    onCancel: () => void
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    title = 'Confirmar ação',
    message,
    confirmLabel = 'Confirmar',
    cancelLabel = 'Cancelar',
    onConfirm,
    onCancel,
}) => {
    return (
        <Overlay role="dialog" aria-modal="true" onClick={onCancel}>
            <ModalCard onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                    
                    <CloseButton 
                        onClick={onCancel} 
                        aria-label="Fechar"
                    >
                        <MdClose />
                    </CloseButton>
                </ModalHeader>

                <ModalBody>{message}</ModalBody>

                <ModalFooter>
                    <Button 
                        title={cancelLabel} 
                        onClick={onCancel}
                        variant='taskbutton' 
                    />
                    <Button
                        title={confirmLabel}
                        onClick={onConfirm}
                        variant='taskbutton' 
                    />
                </ModalFooter>
            </ModalCard>
        </Overlay>
    )
}

export  { ConfirmDialog }