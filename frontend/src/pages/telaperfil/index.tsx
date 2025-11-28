import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'

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
    PerfilBar,
    UserAvatar,
    PerfilTitleBar,
    PerfilTextSpanBar,
    PerfilTextContainer,
    PerfilTextBar,
} from './styles'

const DEFAULT_AVATAR = 'https://avatars.githubusercontent.com/u/179970243?v=4'

// Tipo do usuário autenticado (igual ao que vem do backend / token)
type AuthUser = {
    id_user: number
    name: string
    lastname: string
    email: string
    cpf?: string | null
    imagemUrl?: string | null
}

const TelaPerfil = () => {
    const navigate = useNavigate()

    // 1) Recupera o usuário salvo no localStorage (quando fez login)
    const storedUserString = localStorage.getItem('kodan_user')

    let initialUser: AuthUser | null = null
    if (storedUserString) {
        try {
            initialUser = JSON.parse(storedUserString)
        } catch (e) {
            console.error('Erro ao ler usuário do localStorage', e)
        }
    }

    // 2) Estados básicos da tela
    const [user, setUser] = useState<AuthUser | null>(initialUser)
    const [activeTab, setActiveTab] = useState('perfil')
    const [profileSubTab, setProfileSubTab] = useState<'overview' | 'projects'>(
        'overview',
    )

    // 3) Foto de perfil: começa com o que tem no localStorage ou default
    const [avatarUrl, setAvatarUrl] = useState(
        initialUser?.imagemUrl || DEFAULT_AVATAR,
    )

    // 4) Controle de abertura do modal de avatar
    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false)

    // 5) Hook do formulário
    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            // começa com o que já tem do localStorage
            nome: initialUser
                ? `${initialUser.name} ${initialUser.lastname}`
                : '',
            email: initialUser?.email || '',
            cpf: initialUser?.cpf || '',
            bio: '',
        },
    })

    // 6) Carregar dados mais recentes do backend (/users/me)
    useEffect(() => {
        async function loadProfile() {
            try {
                const { data } = await api.get('/users/me')
                // data é o usuário do backend (já com serializeBigInt)

                // Atualiza o estado user com o que veio do backend
                const loadedUser: AuthUser = {
                    id_user: data.id_user,
                    name: data.name,
                    lastname: data.lastname,
                    email: data.email,
                    cpf: data.cpf ?? null,
                    imagemUrl: data.imagemUrl ?? null,
                }

                setUser(loadedUser)
                localStorage.setItem('kodan_user', JSON.stringify(loadedUser))

                // Preenche o formulário com os dados atuais
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
    }, [setValue])

    // 7) Navegação pelas tabs do sidebar
    const handleTabChange = (tab: string) => {
        setActiveTab(tab)
        if (tab === 'projetos') navigate('/home')
        if (tab === 'painel') navigate('/painel')
    }

    // 8) Quando o usuário escolhe uma nova foto no modal
    const handleAvatarSelected = (newUrl: string) => {
        setAvatarUrl(newUrl)

        // Atualiza o estado user + localStorage
        setUser((prev) => {
            if (!prev) return prev
            const updated = { ...prev, imagemUrl: newUrl }
            localStorage.setItem('kodan_user', JSON.stringify(updated))
            return updated
        })
    }

    const handleSearch = (val: string) => console.log('Buscar:', val)

    // 9) Submit do formulário: envia alterações para o backend
    const onSubmit = async (formData: any) => {
        // quebra o nome
        const fullName = formData.nome?.trim() || ''
        const [firstName, ...rest] = fullName.split(' ')
        const lastname = rest.join(' ')

        try {
            await api.put('/users/me', {
                name: firstName,
                lastname, // passa o sobrenome separado
                email: formData.email,
                cpf: formData.cpf,
                bio: formData.bio,
                imagemUrl: avatarUrl,
            })

            alert('Perfil atualizado com sucesso!')
        } catch (err: any) {
            const message =
                err?.response?.data?.message || 'Erro ao atualizar perfil.'
            alert(message)
        }
    }

    return (
        <Wrapper>
            <ContentContainer>
                <Sidebar
                    autenticado={true}
                    activeTab={activeTab}
                    onChangeTab={handleTabChange}
                />

                <ContentWrapper>
                    <HeaderProfile userImage={avatarUrl} onSearch={handleSearch} />

                    {/* Barra superior de boas-vindas no perfil */}
                    <PerfilBar>
                        <UserAvatar src={avatarUrl} alt="Foto do usuário" />
                        <PerfilTextContainer>
                            <PerfilTitleBar>
                                👋{' '}
                                {user
                                    ? `${user.name},`
                                    : 'Usuário Kodan,'}{' '}
                                <PerfilTextSpanBar>
                                    aqui você quem manda!
                                </PerfilTextSpanBar>
                            </PerfilTitleBar>

                            <PerfilTextBar>
                                Configure do seu jeito. Como quiser.
                            </PerfilTextBar>
                        </PerfilTextContainer>
                    </PerfilBar>

                    <Container>
                        <TitleProject>Perfil do usuário</TitleProject>

                        <ProfileHeader>
                            <ProfileLeftGroup>
                                {/* Usa o estado avatarUrl */}
                                <ProfileAvatar
                                    src={avatarUrl}
                                    alt="Foto de perfil"
                                />
                                <ProfileInfo>
                                    <h2>
                                        {user
                                            ? `${user.name} ${user.lastname}`
                                            : 'Usuário Kodan'}
                                    </h2>
                                    <span>
                                        {user?.email || 'email@kodan.com'}
                                    </span>

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

                        {/* CONTEÚDO: INFORMAÇÕES */}
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

                        {/* CONTEÚDO: PROJETOS */}
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

                {/* Modal de seleção de avatar */}
                <AvatarSelectionModal
                    isOpen={isAvatarModalOpen}
                    onClose={() => setIsAvatarModalOpen(false)}
                    onSelectAvatar={handleAvatarSelected}
                />
            </ContentContainer>
        </Wrapper>
    )
}

export { TelaPerfil }
