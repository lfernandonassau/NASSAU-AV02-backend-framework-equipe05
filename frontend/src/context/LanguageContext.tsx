import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipos de Idioma
export type LanguageKey = 'pt-BR' | 'en-US' | 'es';

// Dicionário de Traduções Global
const translations = {
    'pt-BR': {
        // Sidebar
        'sidebar.home': 'Página inicial',
        'sidebar.projects': 'Gerenciamento de Projetos',
        'sidebar.board': 'Painel',
        'sidebar.stats': 'Estatísticas',
        'sidebar.account': 'Minha conta',
        'sidebar.notifications': 'Notificações',
        'sidebar.settings': 'Configurações',
        'sidebar.help': 'Ajuda e Suporte',
        'sidebar.logout': 'Sair',
        'sidebar.guest': 'Visitante',
        'sidebar.welcome': 'Bem-vindo ao Kodan',
        'sidebar.goHome': 'Ir para Home',
        'sidebar.login': 'Fazer Login',
        'sidebar.register': 'Cadastre-se',

        // Header Profile
        'header.search': 'Buscar...',

        // Configurações (Tela)
        'settings.title': 'Configurações da Plataforma',
        'settings.appearance': 'Aparência',
        'settings.darkMode': 'Modo Escuro (Em breve)',
        'settings.darkModeDesc': 'Alternar entre tema claro e escuro na interface. Ele virá em atualizações futuras.',
        'settings.notifications': 'Notificações',
        'settings.emailNotif': 'Notificações por E-mail',
        'settings.emailDesc': 'Receba atualizações de tarefas e projetos no seu e-mail.',
        'settings.pushNotif': 'Notificações Push',
        'settings.pushDesc': 'Receba alertas no navegador quando estiver online.',
        'settings.language': 'Idioma e Região',
        'settings.interfaceLang': 'Idioma da Interface',
        'settings.interfaceDesc': 'Selecione o idioma preferido para o Kodan.',
        'settings.account': 'Conta',
        'settings.deleteAccount': 'Excluir Conta',
        'settings.deleteDesc': 'Esta ação é permanente e removerá todos os seus projetos.',
        'settings.deleteBtn': 'Excluir minha conta',
    },
    'en-US': {
        // Sidebar
        'sidebar.home': 'Home Page',
        'sidebar.projects': 'Project Management',
        'sidebar.board': 'Board',
        'sidebar.stats': 'Statistics',
        'sidebar.account': 'My Account',
        'sidebar.notifications': 'Notifications',
        'sidebar.settings': 'Settings',
        'sidebar.help': 'Help & Support',
        'sidebar.logout': 'Logout',
        'sidebar.guest': 'Guest',
        'sidebar.welcome': 'Welcome to Kodan',
        'sidebar.goHome': 'Go to Home',
        'sidebar.login': 'Login',
        'sidebar.register': 'Sign Up',

        // Header Profile
        'header.search': 'Search...',

        // Configurações (Tela)
        'settings.title': 'Platform Settings',
        'settings.appearance': 'Appearance',
        'settings.darkMode': 'Dark Mode (Coming Soon)',
        'settings.darkModeDesc': 'Toggle between light and dark theme. Coming in future updates.',
        'settings.notifications': 'Notifications',
        'settings.emailNotif': 'Email Notifications',
        'settings.emailDesc': 'Receive task and project updates via email.',
        'settings.pushNotif': 'Push Notifications',
        'settings.pushDesc': 'Receive browser alerts when online.',
        'settings.language': 'Language & Region',
        'settings.interfaceLang': 'Interface Language',
        'settings.interfaceDesc': 'Select your preferred language for Kodan.',
        'settings.account': 'Account',
        'settings.deleteAccount': 'Delete Account',
        'settings.deleteDesc': 'This action is permanent and will remove all your projects.',
        'settings.deleteBtn': 'Delete my account',
    },
    'es': {
        // Sidebar
        'sidebar.home': 'Página de Inicio',
        'sidebar.projects': 'Gestión de Proyectos',
        'sidebar.board': 'Tablero',
        'sidebar.stats': 'Estadísticas',
        'sidebar.account': 'Mi Cuenta',
        'sidebar.notifications': 'Notificaciones',
        'sidebar.settings': 'Configuración',
        'sidebar.help': 'Ayuda y Soporte',
        'sidebar.logout': 'Cerrar Sesión',
        'sidebar.guest': 'Invitado',
        'sidebar.welcome': 'Bienvenido a Kodan',
        'sidebar.goHome': 'Ir al Inicio',
        'sidebar.login': 'Iniciar Sesión',
        'sidebar.register': 'Regístrate',

        // Header Profile
        'header.search': 'Buscar...',

        // Configurações (Tela)
        'settings.title': 'Configuración de la Plataforma',
        'settings.appearance': 'Apariencia',
        'settings.darkMode': 'Modo Oscuro (Próximamente)',
        'settings.darkModeDesc': 'Cambiar entre tema claro y oscuro. Vendrá en futuras actualizaciones.',
        'settings.notifications': 'Notificaciones',
        'settings.emailNotif': 'Notificaciones por Correo',
        'settings.emailDesc': 'Recibe actualizaciones de tareas y proyectos en tu correo.',
        'settings.pushNotif': 'Notificaciones Push',
        'settings.pushDesc': 'Recibe alertas en el navegador cuando estés en línea.',
        'settings.language': 'Idioma y Región',
        'settings.interfaceLang': 'Idioma de la Interfaz',
        'settings.interfaceDesc': 'Selecciona el idioma preferido para Kodan.',
        'settings.account': 'Cuenta',
        'settings.deleteAccount': 'Eliminar Cuenta',
        'settings.deleteDesc': 'Esta acción es permanente y eliminará todos tus proyectos.',
        'settings.deleteBtn': 'Eliminar mi cuenta',
    }
};

// Tipo das chaves de tradução (ex: 'sidebar.home')
export type TranslationKey = keyof typeof translations['pt-BR'];

interface LanguageContextType {
    language: LanguageKey;
    setLanguage: (lang: LanguageKey) => void;
    t: (key: TranslationKey) => string; // Função de tradução
}

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<LanguageKey>('pt-BR');

    // Função que busca o texto no dicionário
    const t = (key: TranslationKey): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);