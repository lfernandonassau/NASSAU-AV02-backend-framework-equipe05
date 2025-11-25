import type { Request, Response } from 'express'
import AuthService from '../services/AuthService.js'

function serializeBigInt(obj: any) {
    return JSON.parse(
        JSON.stringify(obj, (_key, value) =>
            typeof value === 'bigint' ? Number(value) : value
        )
    )
}

export default {
    async login(req: Request, res: Response) {
        const { email, password } = req.body

        try {
            const result = await AuthService.login(email, password)
            return res.json(serializeBigInt(result))
        } catch (err: any) {
            return res.status(401).json({ message: err.message })
        }
    },

    async forgotPassword(req: Request, res: Response) {
        const { email } = req.body
        await AuthService.requestPasswordReset(email)
        return res.json({
            message:
                'Se o email estiver cadastrado, enviaremos instruções para recuperação de senha.',
        })
    },

    async resetPassword(req: Request, res: Response) {
        const { token, newPassword } = req.body

        try {
            await AuthService.resetPassword(token, newPassword)
            return res.json({ message: 'Senha atualizada com sucesso.' })
        } catch (err: any) {
            return res.status(400).json({ message: err.message })
        }
    },
}
