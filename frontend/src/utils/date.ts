const MONTH_PT = [
'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
'jul', 'ago', 'set', 'out', 'nov', 'dez'
] as const;

/**
 * Formata uma string de data no formato dd/mm ou dd/mm/yyyy
 * para o padrão de exibição: "12 de dez" ou "12 de dez de 2025".
 * Inclui validações e truncamento automático.
 */
export function formatToCardDate(input: string): string {
    if (!input) return '';

    // remove espaços e normaliza separadores
    const sanitized = input.trim().replace(/[-.]/g, '/');

    // regex validando até 4 dígitos de ano (apenas números)
    const regex = /^(\d{1,2})\/(\d{1,2})(?:\/(\d{1,4}))?$/;
    const match = sanitized.match(regex);
    if (!match) return input; // retorna original se formato inválido

    let [ , ddRaw, mmRaw, yearRaw ] = match;

    // normaliza valores
    const dd = Math.min(Math.max(parseInt(ddRaw, 10), 1), 31);
    const mmIdx = Math.min(Math.max(parseInt(mmRaw, 10) - 1, 0), 11);

    // se o usuário digitou ano com mais de 4 dígitos, trunca
    if (yearRaw && yearRaw.length > 4) yearRaw = yearRaw.slice(0, 4);

    // garante que o ano seja válido (ex: >= 1900)
    const ano = yearRaw && /^\d{4}$/.test(yearRaw) && parseInt(yearRaw, 10) >= 1900
    ? yearRaw
    : null;

    const mes = MONTH_PT[mmIdx];
    return ano ? `${dd} de ${mes} de ${ano}` : `${dd} de ${mes}`;
}
