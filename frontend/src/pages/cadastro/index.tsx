import { useEffect, useState } from 'react';
import { RegistrationProvider, useRegistration } from '../../context/RegistrationContext';

// Componentes de Passos
import { StepPersonal } from './steps/StepPersonal';
import { StepCredentials } from './steps/StepCredentials';
import { StepTerms } from './steps/StepTerms';

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
                return <StepTerms />;
            default:
                return <StepPersonal />;
        }
    };

    return (
        <FormContent>
            <FormHeader>
                <h2>{currentHeader.title}</h2>
                <p>{currentHeader.desc}</p>
            </FormHeader>

            {renderStep()}
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
