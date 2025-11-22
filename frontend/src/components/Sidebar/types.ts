export interface IProfileSidebar {
    activeTab: string;
    onChangeTab: (tab: string) => void; // Função que recebe o nome da aba
    autenticado?: boolean
}
// Adicionamos 'logout', 'primary' (destaque) e 'secondary'
export type MenuItemVariant = 'default' | 'logout'| 'primary' | 'highlight'

export interface IMenuItemStyled {
    $active?: boolean;
    $variant?: MenuItemVariant; // Nova prop opcional
}

export interface ISidebarContainerStyled {
    $isOpen: boolean
}