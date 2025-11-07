import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
    data: {
        email: "demacia@demaciadotop.com",
        name: "Demaciano"
    },
    });

    console.log("Usuário criado:", user);
}

main();
