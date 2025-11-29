
const MONTH_PT = [
    'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
    'jul', 'ago', 'set', 'out', 'nov', 'dez'
] as const;

/**
 * Recebe "12/12" ou "12/12/2025" e retorna
 * "12 de dez" ou "12 de dez de 2025"
 */
export function formatToCardDate(input: string): string {
    if (!input) return '';

    const sanitized = input.trim().replace(/[-.]/g, '/');

    const regex = /^(\d{1,2})\/(\d{1,2})(?:\/(\d{1,4}))?$/;
    const match = sanitized.match(regex);
    if (!match) return input;

    let [, ddRaw, mmRaw, yearRaw] = match;

    const dd = Math.min(Math.max(parseInt(ddRaw, 10), 1), 31);
    const mmIdx = Math.min(Math.max(parseInt(mmRaw, 10) - 1, 0), 11);

    if (yearRaw && yearRaw.length > 4) yearRaw = yearRaw.slice(0, 4);

    const ano =
        yearRaw &&
        /^\d{4}$/.test(yearRaw) &&
        parseInt(yearRaw, 10) >= 1900
        ? yearRaw
        : null;

    const mes = MONTH_PT[mmIdx];
    return ano ? `${dd} de ${mes} de ${ano}` : `${dd} de ${mes}`;
}

/** ISO -> "dd/mm/yyyy" */
export function isoToBrazilianDate(isoString?: string | null): string {
    if (!isoString) return '';

    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '';

    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
}

/** "dd/mm/yyyy" -> ISO (ou null se inválido) */
export function brazilianToIsoDate(brDate?: string | null): string | null {
    if (!brDate) return null;

    const match = brDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (!match) return null;

    const [, dd, mm, yyyy] = match;
    const date = new Date(Number(yyyy), Number(mm) - 1, Number(dd));

    if (isNaN(date.getTime())) return null;

    return date.toISOString();
}
