import { IoClose } from "react-icons/io5";
import { AnimatePresence, Variants } from "framer-motion";

import { 
  Overlay, 
  ModalContainer, 
  ModalHeader, 
  CloseButton, 
  ModalContent 
} from "./styles";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  
  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants: Variants = {
    hidden: { 
      y: "-40%", 
      x: "-50%", 
      opacity: 0 
    },
    visible: { 
      y: "-50%", 
      x: "-50%", 
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 500 }
    },
    exit: { 
      y: "-40%", 
      opacity: 0 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          
          <Overlay
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            onClick={onClose}
          />

          <ModalContainer
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <ModalHeader>
              <h2>Legal</h2>
              <CloseButton onClick={onClose}>
                <IoClose />
              </CloseButton>
            </ModalHeader>
            
            <ModalContent>
              <h3>Políticas de Privacidade</h3>
              <p>
                No Kodan, levamos sua privacidade a sério. Coletamos apenas os dados essenciais para o gerenciamento de seus projetos e equipes. Seus dados são criptografados e nunca serão vendidos a terceiros. Ao utilizar nossa plataforma, você concorda com o processamento de suas informações para fins de melhoria de serviço e funcionalidade do sistema Kanban.
              </p>

              <h3>Termos de Uso</h3>
              <p>
                O Kodan é uma ferramenta destinada à produtividade e gestão ágil. É proibido utilizar a plataforma para armazenar conteúdo ilícito ou que viole direitos autorais. Nos reservamos o direito de suspender contas que violem estas diretrizes. O serviço é fornecido "como está", visando a estabilidade e segurança contínua de seus dados.
              </p>
            </ModalContent>
          </ModalContainer>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;