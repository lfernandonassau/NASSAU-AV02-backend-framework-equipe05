import { RegisterOptions } from "react-hook-form";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    control: any
    errorMessage?: string;
    variant?: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    name: string;
    placeholder?: string;

    // Função de máscara
    mask?: (value: string) => string;
    // Validação de senha
    rules?: RegisterOptions;
}

export interface IInputStyled {
    variant?: string;
}