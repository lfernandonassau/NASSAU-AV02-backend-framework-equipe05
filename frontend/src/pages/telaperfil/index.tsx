import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { useAuth } from '../../context/AuthContext' 

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Sidebar } from '../../components/Sidebar'
import { HeaderProfile } from '../../components/HeaderProfile'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { MdBuild } from 'react-icons/md'
import { LiaProjectDiagramSolid } from 'react-icons/lia'
import { AvatarSelectionModal } from './AvatarSelectionModal'
import { SuccessModal } from '../../components/TelaPerfilSuccessModal'
import { ErrorModal } from '../../components/TelaPerfilErrorModal'

import {
    Wrapper,
    ContentContainer,
    ContentWrapper,
    Container,
    TitleProject,
    ProfileHeader,
    ProfileLeftGroup,
    ProfileAvatar,
    ProfileInfo,
    ProfileNav,
    ProfileNavLink,
    FormGrid,
    SectionTitle,
    SaveButtonWrapper,
    EmptyStateText,
} from './styles'
import { PerfilHomeBar } from '../../components/PerfilHomeBar'

const DEFAULT_AVATAR = 'https://avatars.githubusercontent.com/u/179970243?v=4'

// DEFINIÇÃO DO SCHEMA DE VALIDAÇÃO
const profileSchema = yup.object({
    nome: yup.string().required('O nome completo é obrigatório.'),
    email: yup.string().email('Digite um e-mail válido.').required('O e-mail é obrigatório.'),
    cpf: yup.string().required('O CPF é obrigatório.'),
    bio: yup.string().required("Campo obrigatório")
})



const TelaPerfil = () => {
    const navigate = useNavigate()

    // Hook state para modal de success
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

    // Hooks state para o ErrorModal
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    
    // Pegamos o user e a função de atualizar do Contexto
    const { user: contextUser, updateUser } = useAuth() 

    //  Estados locais para controle de UI
    const [activeTab, setActiveTab] = useState('perfil')
    const [profileSubTab, setProfileSubTab] = useState<'overview' | 'projects'>('overview')
    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false)

    const [avatarUrl, setAvatarUrl] = useState(contextUser?.imagemUrl || DEFAULT_AVATAR)

    //  Hook do formulário
    const { 
        control, 
        handleSubmit, 
        setValue, 
        formState: { errors } // <--- Pegamos os erros aqui
    } = useForm({
        resolver: yupResolver(profileSchema), // <--- Conectamos o Yup
        defaultValues: {
            nome: contextUser ? `${contextUser.name} ${contextUser.lastname}` : '',
            email: contextUser?.email || '',
            cpf: contextUser?.cpf || '',
            bio: '',
        },
    })

    //  Carregar dados mais recentes do backend (/users/me) ao entrar na tela
    useEffect(() => {
        let isMounted = true; // Flag para evitar atualizações em componentes desmontados

        async function loadProfile() {
            try {
                const { data } = await api.get('/users/me')
                
                // Só executa se o componente ainda estiver na tela
                if (!isMounted) return;

                const loadedUser = {
                    id_user: data.id_user,
                    name: data.name,
                    lastname: data.lastname,
                    email: data.email,
                    cpf: data.cpf ?? null,
                    imagemUrl: data.imagemUrl ?? null,
                }

                // Atualiza o contexto APENAS se os dados forem diferentes (opcional, mas boa prática)
                
                if (updateUser) {
                    updateUser(loadedUser) 
                }

                // Preenche o formulário
                setValue('nome', `${data.name} ${data.lastname}`)
                setValue('email', data.email)
                setValue('cpf', data.cpf || '')
                setValue('bio', data.bio || '')

                if (data.imagemUrl) {
                    setAvatarUrl(data.imagemUrl)
                }
            } catch (err) {
                console.error('Erro ao carregar perfil /users/me', err)
            }
        }

        loadProfile()

        // Função de limpeza
        return () => {
            isMounted = false;
        }

    }, [])

    const handleTabChange = (tab: string) => {
        setActiveTab(tab)
        if (tab === 'projetos') navigate('/home')
        if (tab === 'painel') navigate('/painel')
    }

    // 5) Alterar foto
    const handleAvatarSelected = (newUrl: string) => {
        setAvatarUrl(newUrl) // Atualiza visual na tela atual

        // Atualiza o contexto global para refletir no Header imediatamente
        if (contextUser && updateUser) {
             const updatedUser = { ...contextUser, imagemUrl: newUrl };
             updateUser(updatedUser);
        }
    }

    const handleSearch = (val: string) => console.log('Buscar:', val)

    // 6) Submit do formulário
    const onSubmit = async (formData: any) => {
        const fullName = formData.nome?.trim() || ''
        const [firstName, ...rest] = fullName.split(' ')
        const lastname = rest.join(' ')

        try {
            await api.put('/users/me', {
                name: firstName,
                lastname,
                email: formData.email,
                cpf: formData.cpf,
                bio: formData.bio,
                imagemUrl: avatarUrl,
            })

            // Atualiza o contexto global após sucesso no backend
            if (contextUser && updateUser) {
                const updatedUser = {
                    ...contextUser,
                    name: firstName,
                    lastname: lastname,
                    email: formData.email,
                    cpf: formData.cpf,
                    imagemUrl: avatarUrl
                };
                updateUser(updatedUser);
            }

            setIsSuccessModalOpen(true)
        } catch (err: any) {
            // Lógica de Erro
            const message = err?.response?.data?.message || 'Ocorreu um erro ao atualizar o perfil. Tente novamente.';
            
            setErrorMessage(message); // Define a mensagem que veio do backend
            setIsErrorModalOpen(true); // Abre o modal vermelho
        }
    }

    // Usamos contextUser para exibição, com fallback para segurança
    const displayName = contextUser ? `${contextUser.name} ${contextUser.lastname}` : 'Usuário Kodan';
    const displayEmail = contextUser?.email || 'email@kodan.com';

    return (
        <Wrapper>
            <ContentContainer>
                <Sidebar
                    autenticado={true}
                    activeTab={activeTab}
                    onChangeTab={handleTabChange}
                />

                <ContentWrapper>
                    {/* O HeaderProfile agora recebe os dados atualizados via Contexto automaticamente */}
                    <HeaderProfile onSearch={handleSearch} />

                    <PerfilHomeBar/>

                    <Container>
                        <TitleProject>Perfil do usuário</TitleProject>

                        <ProfileHeader>
                            <ProfileLeftGroup>
                                <ProfileAvatar src={avatarUrl} alt="Foto de perfil" />
                                <ProfileInfo>
                                    <h2>{displayName}</h2>
                                    <span>{displayEmail}</span>
                                    <button
                                        type="button"
                                        onClick={() => setIsAvatarModalOpen(true)}
                                    >
                                        Alterar foto
                                    </button>
                                </ProfileInfo>
                            </ProfileLeftGroup>

                            <ProfileNav>
                                <ProfileNavLink
                                    $active={profileSubTab === 'overview'}
                                    onClick={() => setProfileSubTab('overview')}
                                >
                                    <MdBuild /> INFORMAÇÕES
                                </ProfileNavLink>
                                <ProfileNavLink
                                    $active={profileSubTab === 'projects'}
                                    onClick={() => setProfileSubTab('projects')}
                                >
                                    <LiaProjectDiagramSolid /> PROJETOS
                                </ProfileNavLink>
                            </ProfileNav>
                        </ProfileHeader>

                        {profileSubTab === 'overview' && (
                            <>
                                <SectionTitle>Informações Pessoais</SectionTitle>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <FormGrid>
                                        <div className="full-width">
                                            <Input
                                                name="nome"
                                                placeholder="Nome Completo"
                                                control={control}
                                                error={errors.nome?.message}
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                name="email"
                                                placeholder="E-mail"
                                                control={control}
                                                error={errors.email?.message}
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                name="cpf"
                                                placeholder="CPF"
                                                control={control}
                                                error={errors.cpf?.message}
                                            />
                                        </div>
                                        <div className="full-width">
                                            <Input
                                                name="bio"
                                                placeholder="Bio / Descrição"
                                                control={control}
                                                error={errors.bio?.message}
                                            />
                                        </div>
                                    </FormGrid>

                                    <SaveButtonWrapper>
                                        <Button
                                            title="Salvar Alterações"
                                            variant="primary"
                                            type="submit"
                                        />
                                    </SaveButtonWrapper>
                                </form>
                            </>
                        )}

                        {profileSubTab === 'projects' && (
                            <div>
                                <SectionTitle>Meus Projetos</SectionTitle>
                                <EmptyStateText>
                                    Lista de projetos específicos deste usuário.
                                </EmptyStateText>
                            </div>
                        )}
                    </Container>
                </ContentWrapper>

                <AvatarSelectionModal
                    isOpen={isAvatarModalOpen}
                    onClose={() => setIsAvatarModalOpen(false)}
                    onSelectAvatar={handleAvatarSelected}
                />
                {/* MODAL DE SUCESSO AQUI */}
                <SuccessModal 
                    isOpen={isSuccessModalOpen}
                    onClose={() => setIsSuccessModalOpen(false)}
                />
                {/* ErrorModal aqui */}
                <ErrorModal 
                    isOpen={isErrorModalOpen}
                    onClose={() => setIsErrorModalOpen(false)}
                    message={errorMessage}
                />
            </ContentContainer>
        </Wrapper>
    )
}

export { TelaPerfil }