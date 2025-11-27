import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form' 
import { Sidebar } from '../../components/Sidebar'
import { HeaderProfile } from '../../components/HeaderProfile'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { MdBuild } from 'react-icons/md'; 
import { LiaProjectDiagramSolid } from 'react-icons/lia'
import { AvatarSelectionModal } from './AvatarSelectionModal';

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
    PerfilTextBar
} from './styles'; 

const DEFAULT_AVATAR = "https://avatars.githubusercontent.com/u/179970243?v=4";

type AuthUser = {
    id_user: number
    name: string
    lastname: string
    email: string
    cpf?: string | null
    imagemUrl?: string | null
}

const TelaPerfil = () => {

    // RECUPERA USUÁRIO LOGADO DO LOCALSTORAGE
    const storedUserString = localStorage.getItem('kodan_user')

    let initialUser: AuthUser | null = null
    if (storedUserString) {
        try {
            initialUser = JSON.parse(storedUserString)
        } catch (e) {
            console.error('Erro ao ler usuário do localStorage', e)
        }
    }

    const [user, setUser] = useState<AuthUser | null>(initialUser)
    const [activeTab, setActiveTab] = useState('perfil');
    const [profileSubTab, setProfileSubTab] = useState('overview'); 
    
    // --- LÓGICA DA FOTO ---
    const [avatarUrl, setAvatarUrl] = useState(
        initialUser?.imagemUrl || DEFAULT_AVATAR
    )
    
    // Estado para controlar o modal
    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

    const navigate = useNavigate();

    const { control, handleSubmit } = useForm({
        defaultValues: {
            nome: initialUser
                ? `${initialUser.name} ${initialUser.lastname}`
                : '',
            email: initialUser?.email || '',
            cpf: initialUser?.cpf || '',
            bio: '',
        },
    })

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if (tab === 'projetos') navigate('/home');
        if (tab === 'painel') navigate('/painel');
    };

    // Função chamada pelo Modal quando uma imagem é escolhida
    const handleAvatarSelected = (newUrl: string) => {
        setAvatarUrl(newUrl)

        setUser((prev) => {
            if (!prev) return prev
            const updated = { ...prev, imagemUrl: newUrl }
            localStorage.setItem('kodan_user', JSON.stringify(updated))
            return updated
        })
    }

    const handleSearch = (val: string) => console.log("Buscar:", val);
    const onSubmit = (data: any) => console.log("Dados salvos:", data);

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
                    

                    {/* PERFIL */}
                    <PerfilBar>
                        <UserAvatar src={DEFAULT_AVATAR} alt="Foto do usuário" />
                        <PerfilTextContainer>
                        <PerfilTitleBar>
                            👋 Rafael,{" "}
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
                                <ProfileAvatar src={avatarUrl} alt="Foto de perfil" />
                                <ProfileInfo>
                                    <h2>{user ? `${user.name} ${user.lastname}` : 'Usuário Kodan'}</h2>
                                    <span>{user?.email || 'email@kodan.com'}</span>

                                    <button type="button" onClick={() => setIsAvatarModalOpen(true)}>
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
                                            <Input name="nome" placeholder="Nome Completo" control={control} />
                                        </div>
                                        <div>
                                            <Input name="email" placeholder="E-mail" control={control} />
                                        </div>
                                        <div>
                                            <Input name="cpf" placeholder="CPF" control={control} />
                                        </div>
                                        <div className="full-width">
                                            <Input name="bio" placeholder="Bio / Descrição" control={control} />
                                        </div>
                                    </FormGrid>
                                    
                                    <SaveButtonWrapper>
                                        <Button title="Salvar Alterações" variant="primary" type="submit" />
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

                <AvatarSelectionModal 
                    isOpen={isAvatarModalOpen}
                    onClose={() => setIsAvatarModalOpen(false)}
                    onSelectAvatar={handleAvatarSelected}
                />

            </ContentContainer>
        </Wrapper>
    );
}

export { TelaPerfil }