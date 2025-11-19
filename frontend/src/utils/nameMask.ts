export const nameMask = (value: string | undefined | null): string => {
    if (!value) return "";

    // Substitui qualquer caractere que NÃO seja letra ou espaço por vazio.
    // O range \u00C0-\u00FF inclui caracteres acentuados (á, ã, ç, etc.) comuns em PT-BR
    let formatted = value.replace(/[^a-zA-Z\u00C0-\u00FF\s]/g, "");

    // Capitalizar a primeira letra de cada palavra
    // \b pega o início da palavra, \w pega a letra.
    formatted = formatted.toLowerCase().replace(/(?:^|\s|['"-])\S/g, (l) => l.toUpperCase());

    return formatted;
};