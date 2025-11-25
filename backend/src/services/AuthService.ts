import bcrypt from 'bcrypt'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import UserRepository from '../repositories/UserRepository.js'
import PasswordResetTokenRepository from '../repositories/PasswordResetTokenRepository.js'
// import MailService from '../services/MailService.js'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-define-no-.env'

export default {
    async login(email: string, password: string) {
        const user = await UserRepository.findByEmail(email)
        if (!user) {
            throw new Error('Email ou senha inválidos')
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            throw new Error('Email ou senha inválidos')
        }

        const payload = {
            id_user: user.id_user,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
        }

        const token = jwt.sign(payload, JWT_SECRET, {
            expiresIn: '8h',
        })

        // não devolver password
        const { password: _p, ...safeUser } = user as any

        return { user: safeUser, token }
    },

    async requestPasswordReset(email: string) {
        const user = await UserRepository.findByEmail(email)
        // Não revela se existe ou não
        if (!user) {
            return
        }

        const rawToken = crypto.randomBytes(32).toString('hex')
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000) // 1h

        await PasswordResetTokenRepository.createToken(
            user.id_user,
            rawToken,
            expiresAt
        )

        const resetLink = `https://seu-frontend.com/reset-password?token=${rawToken}`

        // aqui entra o envio de email
        // await MailService.sendPasswordReset(user.email, resetLink)

        return
    },

    async resetPassword(token: string, newPassword: string) {
        const tokenRecord = await PasswordResetTokenRepository.findValidToken(
            token
        )

        if (!tokenRecord) {
            throw new Error('Token inválido ou expirado')
        }

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(newPassword, saltRounds)

        await UserRepository.updatePassword(
            tokenRecord.userId,
            passwordHash
        )

        // Marca token como usado
        await PasswordResetTokenRepository.markAsUsed(tokenRecord.id)

        return
    },
}
