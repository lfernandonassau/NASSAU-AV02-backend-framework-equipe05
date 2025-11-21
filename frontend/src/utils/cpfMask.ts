export const cpfMask = (value: string | undefined | null): string => {
    if (!value) return ""; // Retorna vazio se não houver valor

    // Remove tudo que não é dígito
    value = value.replace(/\D/g, "");
    
    // Limita a 11 dígitos
    value = value.substring(0, 11);

    // Aplica a formatação
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return value;
};