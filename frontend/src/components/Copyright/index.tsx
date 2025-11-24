import React, { useState } from 'react'

import { CopyrightBar, PrivacyTrigger } from './styles'

import PrivacyModal from '../footer/PrivacyModal'
// Interface para receber a função de aceitar termos da página pai
export interface CopyrightProps {
    onAcceptTerms?: () => void;
    variant?: string;
}

const Copyright = ( { onAcceptTerms, variant = "normal" }: CopyrightProps) => {

  // hook para controlar se o modal está aberto ou fechado
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAccept = () => {
        if (onAcceptTerms) {
            onAcceptTerms(); // Executa a função do React Hook Form (marcar checkbox)
        }
        setIsModalOpen(false); // Fecha o modal
    }
    
  return (
        <>
            <CopyrightBar variant={variant}>
                © {new Date().getFullYear()} Kodan. Todos os direitos reservados.
                <br />
                
                <PrivacyTrigger variant={variant} onClick={() => setIsModalOpen(true)} type="button">
                    Políticas de Privacidade & Termos de Uso
                </PrivacyTrigger>
            </CopyrightBar>

            {/* O Copyright gerencia a exibição do Modal */}
            <PrivacyModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAcceptTerms={onAcceptTerms ? handleAccept : undefined}
            />
        </>
    )
}

export { Copyright }