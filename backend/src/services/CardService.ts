import CardRepository from "../repositories/CardsRepository.js";

interface CreateCardDTO {
    qta_members: number;
    title: string;
    subtitle?: string; // Opcional no banco
    timeframe?: Date | string; // Pode vir como string do JSON e o Prisma converte
    columnId?: bigint | number; // Foreign Key obrigatória
}

// Interface para atualização (boas práticas)
interface UpdateCardDTO {
    qta_members?: number;
    title?: string;
    subtitle?: string;
    timeframe?: Date | string;
    columnId?: bigint | number;
}

export default {

    // Criar um card
    async create(data: CreateCardDTO) {
        // Regras de negócio / Validações
        if (!data.title) {
            throw new Error("O título do card é obrigatório.");
        }

        if (!data.columnId) {
            throw new Error("O card precisa estar vinculado a uma coluna.");
        }

        // Se qta_members for undefined ou null, define como 0 ou lança erro.
        // Como no banco é Int obrigatório, garante que exista.
        if (data.qta_members === undefined || data.qta_members === null) {
            throw new Error("A quantidade de membros é obrigatória.");
        }

        const card = await CardRepository.create(data);
        return card;
    },

    // Listar todos os cards
    async list() {
        return await CardRepository.list();
    },

    // Deletar um card pelo ID
    async delete(id: number) {
        if (!id) {
            throw new Error("ID do card é necessário para exclusão.");
        }
        return await CardRepository.delete(id);
    },

    async update(id: number, data: any) {
        //  Dá para adicionar validações aqui se quiser, ex: verificar se o card existe (Verificar possibilidade depois)
        const card = await CardRepository.update(id, data);
        return card;
    }
}