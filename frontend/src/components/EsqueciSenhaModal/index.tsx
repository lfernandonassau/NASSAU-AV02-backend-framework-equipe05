import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdClose, MdEmail, MdCheckCircle } from 'react-icons/md';

// Componentes reutilizáveis
import { Button } from '../Button';
import { Input } from '../Input'; 

import {
  Overlay,
  ModalContainer,
  Header,
  Title,
  Subtitle,
  CloseButton,
  Form,
  Footer,
  SuccessContainer
} from './styles';

// Validação
const schema = yup.object({
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
}).required();

interface IEsqueciSenhaForm {
  email: string;
}

interface EsqueciSenhaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EsqueciSenhaModal: React.FC<EsqueciSenhaModalProps> = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<IEsqueciSenhaForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  });

  // Reseta o estado quando fecha
  const handleClose = () => {
    reset();
    setIsSuccess(false);
    onClose();
  };

  const onSubmit = async (data: IEsqueciSenhaForm) => {
    setIsLoading(true);
    
    // Simulação de envio para API
    console.log("Enviando link de recuperação para:", data.email);
    
    setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={handleClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        
        <Header>
          {/* Se não for sucesso, mostra título normal. Se for sucesso, esconde ou muda */}
          {!isSuccess ? (
             <div>
                <Title>Esqueceu a senha?</Title>
                <Subtitle>Digite seu e-mail abaixo para receber as instruções de recuperação.</Subtitle>
             </div>
          ) : (
             <div /> /* Espaço vazio para manter o X alinhado */
          )}
          
          <CloseButton onClick={handleClose}>
            <MdClose />
          </CloseButton>
        </Header>

        {isSuccess ? (
            /* TELA DE SUCESSO */
            <SuccessContainer>
                <MdCheckCircle />
                <h3>E-mail enviado!</h3>
                <p>
                    Verifique sua caixa de entrada (e spam). 
                    Enviamos um link para você redefinir sua senha.
                </p>
                <div style={{ width: '100%', marginTop: '20px' }}>
                    <Button 
                        title="Voltar para Login" 
                        onClick={handleClose} 
                        variant="primary" 
                    />
                </div>
            </SuccessContainer>
        ) : (
            /* FORMULÁRIO */
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input 
                        name="email" 
                        placeholder="exemplo@email.com" 
                        control={control} 
                        errorMessage={errors.email?.message}
                        leftIcon={<MdEmail size={20} color="#64748b"/>}
                        autoFocus
                    />
                </div>

                <Footer>
                    {/* Botão Cancelar */}
                    <div style={{ width: '120px' }}>
                        <Button 
                            title="Cancelar" 
                            type="button" 
                            onClick={handleClose} 
                            variant="google"
                        />
                    </div>
                    
                    {/* Botão Enviar */}
                    <div style={{ flex: 1 }}>
                        <Button 
                            title={isLoading ? "Enviando..." : "Enviar Link"} 
                            type="submit" 
                            variant="primary" 
                            disabled={isLoading}
                        />
                    </div>
                </Footer>
            </Form>
        )}

      </ModalContainer>
    </Overlay>
  );
};

export  { EsqueciSenhaModal }