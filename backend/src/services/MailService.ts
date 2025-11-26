import nodemailer from 'nodemailer'

const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    APP_NAME = 'Kodan Project',
    FRONTEND_URL = 'http://localhost:5173',
} = process.env

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
})

export default {
    async sendPasswordReset(to: string, token: string) {
        const resetLink = `${FRONTEND_URL}/reset-password?token=${token}`

        const html = `
            <p>Olá,</p>
            <p>Recebemos um pedido para redefinir sua senha no <strong>${APP_NAME}</strong>.</p>
            <p>Clique no link abaixo para criar uma nova senha (válido por 1 hora):</p>
            <p><a href="${resetLink}">${resetLink}</a></p>
            <p>Se você não fez esse pedido, ignore este email.</p>
        `

        await transporter.sendMail({
            from: `"${APP_NAME} Suporte" <${SMTP_USER}>`,
            to,
            subject: `${APP_NAME} - Recuperação de senha`,
            html,
        })
    },
}
