export interface IButton {
    title: string;
    type?: string;
    variant?: string;
    disabled?: boolean;
    onClick?: () => void;
    leftIcon?: React.ReactNode;
}

export interface IButtonStyled {
    variant?: string;

}