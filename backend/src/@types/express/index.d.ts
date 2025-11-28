// src/@types/express/index.d.ts

import 'express'

// 1) Fazemos "module augmentation" da lib de tipos do Express.
//    Estamos dizendo: "além do que o Express já conhece, o Request
//    também tem um campo `user` com esses dados".
declare module 'express-serve-static-core' {
    interface Request {
        user?: {
            id_user: number
            name: string
            lastname: string
            email: string
        }
    }
}
