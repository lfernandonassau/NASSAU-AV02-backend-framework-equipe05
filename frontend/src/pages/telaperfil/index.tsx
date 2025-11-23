import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form' 

import { Sidebar } from '../../components/Sidebar'
import { HeaderProfile } from '../../components/HeaderProfile'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { MdBuild } from 'react-icons/md'; 
import { FaBoxOpen, FaInfoCircle } from 'react-icons/fa'; 

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
} from './styles'; 




const USER_AVATAR = "https://avatars.githubusercontent.com/u/179970243?v=4";

const TelaPerfil = () => {
    const [activeTab, setActiveTab] = useState('perfil');
    
    // Controla qual conteúdo aparece (Overview ou Projects)
    const [profileSubTab, setProfileSubTab] = useState('overview'); 

    const navigate = useNavigate();

    const { control, handleSubmit } = useForm({
        defaultValues: {
            nome: "Rafael Alexandre",
            email: "rafael@kodan.com",
            telefone: "",
            bio: ""
        }
    });

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if (tab === 'projetos') navigate('/home');
        if (tab === 'painel') navigate('/painel');
    };

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
                    <HeaderProfile userImage={USER_AVATAR} onSearch={handleSearch} />
                    
                    <Container>
                        <TitleProject>Perfil do usuário</TitleProject>
                        
                        <ProfileHeader>
                            <ProfileLeftGroup>
                                <ProfileAvatar src={USER_AVATAR} alt="Foto de perfil" />
                                <ProfileInfo>
                                    <h2>Rafael Alexandre</h2>
                                    <span>rafael@kodan.com</span>
                                </ProfileInfo>
                            </ProfileLeftGroup>

                            <ProfileNav>
                                {/* 1. Botão para voltar para Informações Pessoais */}
                                <ProfileNavLink 
                                    $active={profileSubTab === 'overview'} 
                                    onClick={() => setProfileSubTab('overview')}
                                    
                                >
                                    <FaInfoCircle />
                                    INFORMAÇÕES
                                </ProfileNavLink>

                                {/* 2. Botão para ver Projetos */}
                                <ProfileNavLink 
                                    $active={profileSubTab === 'projects'} 
                                    onClick={() => setProfileSubTab('projects')}
                                >
                                    <MdBuild /> PROJETOS
                                </ProfileNavLink>
                            </ProfileNav>
                        </ProfileHeader>

                        {/* CONTEÚDO: OVERVIEW (Formulário) */}
                        {profileSubTab === 'overview' && (
                            <>
                                <SectionTitle>Informações pessoais</SectionTitle>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <FormGrid>
                                        <div className="full-width">
                                            <Input name="nome" placeholder="Nome Completo" control={control} />
                                        </div>
                                        <div>
                                            <Input name="email" placeholder="E-mail" control={control} />
                                        </div>
                                        <div>
                                            <Input name="telefone" placeholder="Telefone" control={control} />
                                        </div>
                                        <div className="full-width">
                                            <Input name="bio" placeholder="Bio / Descrição" control={control} />
                                        </div>
                                    </FormGrid>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                                        <Button title="Salvar Alterações" variant="primary" type="submit" />
                                    </div>
                                </form>
                            </>
                        )}

                        {/* CONTEÚDO: PROJECTS (Lista ou Placeholder) */}
                        {profileSubTab === 'projects' && (
                            <div>
                                <SectionTitle>Meus Projetos</SectionTitle>
                                <p style={{ color: '#666' }}>
                                    Aqui você pode listar os projetos específicos deste usuário ou configurações de projetos.
                                </p>
                                {/* Você pode importar o componente de lista de projetos aqui se quiser */}
                            </div>
                        )}
                        
                    </Container>
                </ContentWrapper>

            </ContentContainer>
        </Wrapper>
    );
}

export { TelaPerfil }