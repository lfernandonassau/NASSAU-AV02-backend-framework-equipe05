import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Sidebar } from '../../components/Sidebar';
import { HeaderProfile } from '../../components/HeaderProfile';

// Ícones
import { MdNotifications, MdLanguage, MdPalette, MdSecurity } from 'react-icons/md';

// --- IMPORTAR O CONTEXTO DE IDIOMA ---
import { useLanguage, LanguageKey } from '../../context/LanguageContext';


import {
    Wrapper,
    ContentContainer,
    ContentWrapper,
    SettingsContainer,
    PageTitle,
    SettingsSection,
    SectionHeader,
    SettingRow,
    SettingInfo,
    SwitchLabel,
    SwitchInput,
    SwitchSlider,
    StyledSelect,
    DangerZone,
    DangerButton,
    PerfilBar,
    UserAvatar,
    PerfilTextContainer,
    PerfilTextSpanBar,
    PerfilTitleBar,
    PerfilTextBar
} from './styles';

const USER_AVATAR = "https://avatars.githubusercontent.com/u/179970243?v=4";



const TelaConfig = () => {
    const [activeTab, setActiveTab] = useState('configuracoes');
    const navigate = useNavigate();

    // Estados de exemplo para as configurações
    const [emailNotif, setEmailNotif] = useState(true);
    const [pushNotif, setPushNotif] = useState(false);
    const [darkMode, setDarkMode] = useState(false); // Em breve
    // --- USAR O CONTEXTO GLOBAL ---
    // 'language': valor atual ('pt-BR', 'en-US'...)
    // 'setLanguage': função para trocar o idioma globalmente
    // 't': função tradutora que busca a chave no dicionário global
    const { language, setLanguage, t } = useLanguage();

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if (tab === 'projetos') navigate('/home');
        if (tab === 'painel') navigate('/painel');
        if (tab === 'perfil') navigate('/perfil');
    };

    const handleSearch = (val: string) => console.log("Buscar:", val);

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


                    {/* PERFIL */}
                    <PerfilBar>
                        <UserAvatar src={USER_AVATAR} alt="Foto do usuário" />
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
                    <SettingsContainer>
                        {/* Título Traduzido */}
                        <PageTitle>{t('settings.title')}</PageTitle>

                        {/* SEÇÃO 1: APARÊNCIA */}
                        <SettingsSection>
                            <SectionHeader>
                                <MdPalette />
                                <h2>{t('settings.appearance')}</h2>
                            </SectionHeader>
                            
                            <SettingRow>
                                <SettingInfo>
                                    <h3>{t('settings.darkMode')}</h3>
                                    <p>{t('settings.darkModeDesc')}</p>
                                </SettingInfo>
                                <SwitchLabel>
                                    <SwitchInput 
                                        type="checkbox" 
                                        checked={darkMode}
                                        onChange={() => setDarkMode(!darkMode)}
                                        disabled 
                                    />
                                    <SwitchSlider style={{ opacity: 0.6 }} />
                                </SwitchLabel>
                            </SettingRow>
                        </SettingsSection>

                        {/* SEÇÃO 2: NOTIFICAÇÕES */}
                        <SettingsSection>
                            <SectionHeader>
                                <MdNotifications />
                                <h2>{t('settings.notifications')}</h2>
                            </SectionHeader>

                            <SettingRow>
                                <SettingInfo>
                                    <h3>{t('settings.emailNotif')}</h3>
                                    <p>{t('settings.emailDesc')}</p>
                                </SettingInfo>
                                <SwitchLabel>
                                    <SwitchInput 
                                        type="checkbox" 
                                        checked={emailNotif} 
                                        onChange={() => setEmailNotif(!emailNotif)}
                                    />
                                    <SwitchSlider />
                                </SwitchLabel>
                            </SettingRow>

                            <SettingRow>
                                <SettingInfo>
                                    <h3>{t('settings.pushNotif')}</h3>
                                    <p>{t('settings.pushDesc')}</p>
                                </SettingInfo>
                                <SwitchLabel>
                                    <SwitchInput 
                                        type="checkbox" 
                                        checked={pushNotif}
                                        onChange={() => setPushNotif(!pushNotif)}
                                    />
                                    <SwitchSlider />
                                </SwitchLabel>
                            </SettingRow>
                        </SettingsSection>

                        {/* SEÇÃO 3: IDIOMA E REGIÃO */}
                        <SettingsSection>
                            <SectionHeader>
                                <MdLanguage />
                                <h2>{t('settings.language')}</h2>
                            </SectionHeader>

                            <SettingRow>
                                <SettingInfo>
                                    <h3>{t('settings.interfaceLang')}</h3>
                                    <p>{t('settings.interfaceDesc')}</p>
                                </SettingInfo>
                                
                                {/* --- SELECT QUE TROCA O IDIOMA GLOBALMENTE --- */}
                                <StyledSelect 
                                    value={language} 
                                    onChange={(e) => setLanguage(e.target.value as LanguageKey)}
                                >
                                    <option value="pt-BR">Português (Brasil)</option>
                                    <option value="en-US">English (US)</option>
                                    <option value="es">Español</option>
                                </StyledSelect>
                            </SettingRow>
                        </SettingsSection>

                        {/* SEÇÃO 4: ZONA DE PERIGO */}
                        <SettingsSection>
                            <SectionHeader>
                                <MdSecurity />
                                <h2>{t('settings.account')}</h2>
                            </SectionHeader>

                            <DangerZone>
                                <div>
                                    <h4>{t('settings.deleteAccount')}</h4>
                                    <p>{t('settings.deleteDesc')}</p>
                                </div>
                                <DangerButton onClick={() => alert("Tem certeza? :(")}>
                                    {t('settings.deleteBtn')}
                                </DangerButton>
                            </DangerZone>
                        </SettingsSection>

                    </SettingsContainer>
                </ContentWrapper>
            </ContentContainer>
        </Wrapper>
    );
};

export { TelaConfig };