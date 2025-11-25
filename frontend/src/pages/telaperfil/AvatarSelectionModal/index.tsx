import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { MdClose, MdCloudUpload } from 'react-icons/md';

import {
  Overlay,
  ModalContainer,
  Header,
  Title,
  CloseButton,
  AvatarGrid,
  AvatarOption,
  Divider,
  UploadSection,
  UploadButton,
  HiddenInput
} from './styles';

// Lista de Avatares Pré-definidos (Exemplo)
const PRESET_AVATARS = [
  "https://avatars.githubusercontent.com/u/162740474?v=4", // Ryan
  "https://avatars.githubusercontent.com/u/122215538?v=4", // Samuel
  "https://avatars.githubusercontent.com/u/173320062?v=4", // Alandelon
  "https://avatars.githubusercontent.com/u/211064470?v=4", // Daniel
];

interface AvatarSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAvatar: (url: string) => void; // Retorna a URL escolhida
}

const AvatarSelectionModal: React.FC<AvatarSelectionModalProps> = ({ isOpen, onClose, onSelectAvatar }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Lógica para selecionar pré-definido
  const handlePresetClick = (url: string) => {
    onSelectAvatar(url);
    onClose();
  };

  // Lógica para acionar o input de arquivo
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Lógica ao selecionar arquivo do PC
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      onSelectAvatar(previewUrl);
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        
        <Header>
          <Title>Alterar Foto de Perfil</Title>
          <CloseButton onClick={onClose}>
            <MdClose />
          </CloseButton>
        </Header>

        {/* Grade de Opções */}
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>Escolha um avatar:</p>
        <AvatarGrid>
          {PRESET_AVATARS.map((url, index) => (
            <AvatarOption 
              key={index} 
              src={url} 
              alt={`Avatar ${index}`} 
              onClick={() => handlePresetClick(url)}
            />
          ))}
        </AvatarGrid>

        <Divider />

        {/* Área de Upload */}
        <UploadSection>
          <p>Ou carregue sua própria imagem:</p>
          <UploadButton onClick={handleUploadClick}>
            <MdCloudUpload size={20} />
            Carregar do dispositivo
          </UploadButton>
          
          <HiddenInput 
            type="file" 
            ref={fileInputRef} 
            accept="image/*" 
            onChange={handleFileChange} 
          />
        </UploadSection>

      </ModalContainer>
    </Overlay>,
    document.body
  );
};

export { AvatarSelectionModal }