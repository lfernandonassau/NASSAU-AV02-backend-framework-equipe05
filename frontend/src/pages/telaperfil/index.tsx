import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { useAuth } from '../../context/AuthContext' // <--- IMPORTANTE

import { Sidebar } from '../../components/Sidebar'
import { HeaderProfile } from '../../components/HeaderProfile'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { MdBuild } from 'react-icons/md'
import { LiaProjectDiagramSolid } from 'react-icons/lia'
import { AvatarSelectionModal } from './AvatarSelectionModal'

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
import { ErrorModal } from '../../components/TelaPerfilErrorModal'
import { SuccessModal } from '../../components/TelaPerfilSuccessModal'

const DEFAULT_AVATAR = 'https://avatars.githubusercontent.com/u/179970243?v=4'


const TelaPerfil = () => {
    const navigate = useNavigate()
    
    // Pegamos o user e a função de atualizar do Contexto
    const { user: contextUser, updateUser } = useAuth() 

    //  Estados locais para controle de UI
    const [activeTab, setActiveTab] = useState('perfil')
    const [profileSubTab, setProfileSubTab] = useState<'overview' | 'projects'>('overview')
    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false)

    // Controle dos modais de feedback
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [avatarUrl, setAvatarUrl] = useState(contextUser?.imagemUrl || DEFAULT_AVATAR)

    //  Hook do formulário
    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            nome: contextUser ? `${contextUser.name} ${contextUser.lastname}` : '',
            email: contextUser?.email || '',
            cpf: contextUser?.cpf || '',
            bio: '', // Se tiver bio no type AuthUser
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

        console.log("BIO:", formData.bio)


        // Validação simples de bio antes do submit
        if (!formData.bio || formData.bio.trim() === '') {
            setErrorMessage('Você deve preencher o campo Bio.');
            setIsErrorModalOpen(true);
            return;
        }

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

            // Exibe modal de sucesso
            setIsSuccessModalOpen(true);

        } catch (err: any) {
            const message = err?.response?.data?.message || 'Erro ao atualizar perfil.'
            setErrorMessage(message)
            setIsErrorModalOpen(true)
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
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                name="email"
                                                placeholder="E-mail"
                                                control={control}
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                name="cpf"
                                                placeholder="CPF"
                                                control={control}
                                            />
                                        </div>
                                        <div className="full-width">
                                            <Input
                                                name="bio"
                                                placeholder="Bio / Descrição"
                                                control={control}
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

                <ErrorModal
                    isOpen={isErrorModalOpen}
                    message={errorMessage}
                    onClose={() => setIsErrorModalOpen(false)}
                />

                <SuccessModal
                    isOpen={isSuccessModalOpen}
                    onClose={() => setIsSuccessModalOpen(false)}
                />

            </ContentContainer>
        </Wrapper>
    )
}

export { TelaPerfil }
