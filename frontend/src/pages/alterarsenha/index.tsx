import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '../../services/api';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Copyright } from '../../components/Copyright';
import logo from '../../assets/logo.svg';

import { 
    PageWrapper, 
    ResetCard, 
    Header, 
    LogoImage, 
    Title, 
    Subtitle, 
    Form,
    ButtonGroup,
    LockIcon,
    MagicEye,
    MagicEyeOff,
    SuccessContent,
    SuccessIcon,
    SuccessTitle,
    SuccessMessage,
    RedirectText,
    FooterArea
} from './styles';

// Schema Yup
const schema = yup.object({
    password: yup.string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('Campo obrigatório'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirmação obrigatória'),
}).required();

interface IResetForm {
    password: string;
    confirmPassword: string;
}

const AlterarSenha = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // token vindo do link enviado por e-mail: /reset-password?token=XYZ
    const token = searchParams.get('token');

    // Estados Lógicos
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<IResetForm>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (data: IResetForm) => {
        if (!token) {
            alert('Link de redefinição inválido ou expirado.');
            navigate('/login');
            return;
        }

        setIsLoading(true);
        
        try {
            // Ajuste a rota conforme seu backend: /reset-password, /auth/reset-password etc.
            await api.post('/auth/reset-password', {
                token,
                password: data.password,
            });

            // Ativa a tela de sucesso
            setIsSuccess(true);

        } catch (error: any) {
            console.error(error);
            const message =
                error?.response?.data?.message ||
                'Erro ao alterar senha. Tente novamente.';
            alert(message);
            setIsLoading(false);
        }
    };

    // Redirecionamento Automático após sucesso
    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                navigate('/login');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isSuccess, navigate]);

    return (
        <PageWrapper>
            <ResetCard>
                {/* Se sucesso = true, mostra tela de sucesso */}
                {isSuccess ? (
                    <SuccessContent>
                        <SuccessIcon />
                        <SuccessTitle>Senha Alterada!</SuccessTitle>
                        <SuccessMessage>
                            Sua senha foi redefinida com sucesso. Você será redirecionado para o login em instantes.
                        </SuccessMessage>
                        <RedirectText>Redirecionando...</RedirectText>
                    </SuccessContent>
                ) : (
                    <>
                        <Header>
                            <LogoImage src={logo} alt="Logo Kodan" />
                            <Title>Nova Senha</Title>
                            <Subtitle>
                                Crie uma senha forte e segura para proteger sua conta.
                            </Subtitle>
                        </Header>

                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Input 
                                name="password"
                                placeholder="Nova senha"
                                control={control}
                                errorMessage={errors.password?.message}
                                type={showPassword ? 'text' : 'password'}
                                leftIcon={<LockIcon />}
                                rightIcon={
                                    showPassword 
                                        ? <MagicEye onClick={() => setShowPassword(false)} /> 
                                        : <MagicEyeOff onClick={() => setShowPassword(true)} />
                                }
                            />

                            <Input 
                                name="confirmPassword"
                                placeholder="Confirme a nova senha"
                                control={control}
                                errorMessage={errors.confirmPassword?.message}
                                type={showConfirmPassword ? 'text' : 'password'}
                                leftIcon={<LockIcon />}
                                rightIcon={
                                    showConfirmPassword 
                                        ? <MagicEye onClick={() => setShowConfirmPassword(false)} /> 
                                        : <MagicEyeOff onClick={() => setShowConfirmPassword(true)} />
                                }
                            />

                            <ButtonGroup>
                                <Button 
                                    title={isLoading ? "Alterando..." : "Redefinir Senha"} 
                                    type="submit" 
                                    variant="primary"
                                    disabled={isLoading}
                                />
                            </ButtonGroup>
                        </Form>
                    </>
                )}
            </ResetCard>

            <FooterArea>
                <Copyright />
            </FooterArea>
        </PageWrapper>
    );
};

export { AlterarSenha };
