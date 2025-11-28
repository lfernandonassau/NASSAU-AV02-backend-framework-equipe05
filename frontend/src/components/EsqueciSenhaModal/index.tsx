// src/components/EsqueciSenhaModal/index.tsx

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdClose, MdEmail, MdCheckCircle } from 'react-icons/md';

import { api } from '../../services/api';

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
    setIsLoading(false);
    onClose();
  };

  const onSubmit = async (data: IEsqueciSenhaForm) => {
    setIsLoading(true);
    
    try {
      // Ajuste a rota conforme o backend: /forgot-password, /auth/forgot-password etc.
      await api.post('/auth/forgot-password', {
        email: data.email,
      });

      setIsSuccess(true);
    } catch (error: any) {
      console.error(error);
      const message =
        error?.response?.data?.message ||
        'Erro ao enviar e-mail de recuperação. Verifique o endereço informado.';
      alert(message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={handleClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        
        <Header>
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
                    <div style={{ width: '120px' }}>
                        <Button 
                            title="Cancelar" 
                            type="button" 
                            onClick={handleClose} 
                            variant="google"
                        />
                    </div>
                    
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

export  { EsqueciSenhaModal };
