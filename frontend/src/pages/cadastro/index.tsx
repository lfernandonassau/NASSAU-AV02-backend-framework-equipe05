import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegistrationProvider, useRegistration } from '../../context/RegistrationContext';
import { api } from '../../services/api'; // Importe sua API

// Componentes de Passos
import { StepPersonal } from './steps/StepPersonal';
import { StepCredentials } from './steps/StepCredentials';
import { StepTerms } from './steps/StepTerms';
import { IFormData } from './types';

import logo from '../../assets/logo.svg';

// Estilos
import {
    PageWrapper,
    CardContainer,
    SidebarContainer,
    FormContent,
    StepItem,
    StepNumber,
    StepTexts,
    FormHeader,
    LogoContainer,
    LogoImage,
    LogoText,
    SuccessContent,
    SuccessIcon,
    SuccessTitle,
    SuccessMessage,
    RedirectText,
    CenteredContainer,
    LoadingText
} from './styles';

const SidebarSteps = () => {
    const { currentStep } = useRegistration();

    const steps = [
        { label: 'PASSO 1', title: 'Nome e CPF' },
        { label: 'PASSO 2', title: 'Senha e E-mail' },
        { label: 'PASSO 3', title: 'Termos de Uso' },
    ];

    return (
        <SidebarContainer>
            <LogoContainer>
                <LogoImage src={logo} alt="Kodan Logo" />
                <LogoText>kodan.</LogoText>
            </LogoContainer>

            {steps.map((step, index) => (
                <StepItem key={index}>
                    <StepNumber $active={currentStep === index}>
                        {index + 1}
                    </StepNumber>
                    <StepTexts>
                        <span className="step-label">{step.label}</span>
                        <span className="step-title">{step.title}</span>
                    </StepTexts>
                </StepItem>
            ))}
        </SidebarContainer>
    );
};

const FormArea = () => {
    const { currentStep } = useRegistration();
    const navigate = useNavigate();
    
    // Estado para controlar a tela de sucesso
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Efeito para redirecionar automaticamente após o sucesso
    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                navigate('/login');
            }, 3000); // 3 segundos para o usuário ver a mensagem
            return () => clearTimeout(timer);
        }
    }, [isSuccess, navigate]);

    // Função que será chamada quando o usuário clicar em "Confirmar" no Step 3
    const handleFinalSubmit = async (fullData: IFormData) => {
        setIsLoading(true);
        try {
            // Remove confirmação de senha e termos antes de enviar para API
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { confirmPassword, terms, ...userData } = fullData;

            // Simulação de delay (opcional, para UX)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Chamada real para a API
            const { data } = await api.post(`users`, userData); 
            // Ajustar a rota 'users' conforme o backend. Se for users?email=... manter como estava.
            
            // Se chegou aqui sem erro, ativamos o sucesso
            setIsSuccess(true);

        } catch (error) {
            console.error(error);
            alert('Houve um erro ao realizar o cadastro. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    // Títulos dinâmicos baseados no passo
    const headerContent = [
        { title: 'Suas Informações', desc: 'Por favor, forneça seu nome, sobrenome e CPF.' },
        { title: 'Credenciais de Acesso', desc: 'Defina seu e-mail e uma senha segura.' },
        { title: 'Termos de Uso', desc: 'Confirme seus dados e aceite os termos para finalizar.' }
    ];

    const currentHeader = headerContent[currentStep];

    const renderStep = () => {
        switch (currentStep) {
            case 0: 
                return <StepPersonal />;
            case 1: 
                return <StepCredentials />;
            case 2: 
                // Passado a função de submit final para o StepTerms
                return <StepTerms onFinalSubmit={handleFinalSubmit} />;
            default: 
                return <StepPersonal />;
        }
    };

    // RENDERIZAÇÃO CONDICIONAL
    
    // Se o cadastro foi um sucesso, mostra APENAS a tela de sucesso
    if (isSuccess) {
        return (
            <FormContent>
                <SuccessContent>
                    <SuccessIcon />
                    <SuccessTitle>Cadastro Realizado!</SuccessTitle>
                    <SuccessMessage>
                        Sua conta foi criada com sucesso. <br/>
                        Bem-vindo ao Kodan.
                    </SuccessMessage>
                    <RedirectText>Redirecionando para o login...</RedirectText>
                </SuccessContent>
            </FormContent>
        );
    }

    // Caso contrário, mostra o formulário normal (Header + Inputs)
    return (
        <FormContent>
            <FormHeader>
                <h2>{currentHeader.title}</h2>
                <p>{currentHeader.desc}</p>
            </FormHeader>

            {/* Se estiver carregando o envio final, você pode travar a tela ou passar loading prop */}
            {isLoading ? (
                <CenteredContainer>
                    <LoadingText>Finalizando cadastro...</LoadingText>
                </CenteredContainer>
            ) : (
                renderStep()
            )}
        </FormContent>
    );
};

const Cadastro = () => {
    const [estaVisivel, setEstaVisivel] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setEstaVisivel(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <RegistrationProvider>
            <PageWrapper>
                <CardContainer $visivel={estaVisivel}>
                    <SidebarSteps />
                    <FormArea />
                </CardContainer>
            </PageWrapper>
        </RegistrationProvider>
    );
};

export { Cadastro };