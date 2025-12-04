import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import type { JwtPayload } from 'jsonwebtoken'

//Chave secreta usada para assinar e verificar o token.
const JWT_SECRET = (process.env.JWT_SECRET || 'dev-secret-define-no-.env') as string

//Definimos qual é o *formato* do payload do nosso token.
interface KodanJwtPayload extends JwtPayload {
    id_user: number
    name: string
    lastname: string
    email: string
}

//    middleware usado nas rotas que precisam de autenticação.
//    Ex: router.get('/me', ensureAuthenticated, UserController.me)
export function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // 5.1) Pega o header de autorização.
    //      Esperado: "Authorization: Bearer <token>"
    const authHeader = req.headers.authorization

    // 5.2) Se não existir, já retorna 401.
    if (!authHeader) {
    return res.status(401).json({ message: 'Token não fornecido.' })
    }

    // 5.3) Quebramos o header em 2 partes: "Bearer" e "<token>"
    const parts = authHeader.split(' ')

    // 5.4) Se não tiver exatamente 2 partes, tá errado.
    if (parts.length !== 2) {
    return res.status(401).json({ message: 'Token mal formatado.' })
    }

    // 5.5) Desestruturamos as partes.
    const [scheme, token] = parts

    // 5.6) Validamos se a primeira parte é literalmente "Bearer"
    //      (case-insensitive).
    if (!scheme || !/^Bearer$/i.test(scheme) || !token) {
    return res.status(401).json({ message: 'Token mal formatado.' })
    }

    // 5.7) Agora que garantimos que tem token, vamos tentar verificar.
    try {
    // jwt.verify pode retornar:
    //   - um objeto (payload)
    //   - ou uma string (casos bem específicos)
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload | string

    // 5.8) Se por algum motivo vier string, pra nós é inválido.
    if (typeof decoded === 'string') {
        return res.status(401).json({ message: 'Token inválido.' })
    }

    // 5.9) Agora tratamos como o payload que definimos (KodanJwtPayload).
    const payload = decoded as KodanJwtPayload

    // 5.10) Anexamos o usuário na requisição.
    //       Aqui entra o "index.d.ts" que criamos pra tipar req.user.
    ;(req as any).user = {
        id_user: payload.id_user,
        name: payload.name,
        lastname: payload.lastname,
        email: payload.email,
    }

    // 5.11) Segue o fluxo da requisição.
    return next()
    } catch (err) {
    // 5.12) Se der erro na verificação (token expirado, inválido, etc)
    //       respondemos com 401.
    return res.status(401).json({ message: 'Token inválido ou expirado.' })
    }
}
