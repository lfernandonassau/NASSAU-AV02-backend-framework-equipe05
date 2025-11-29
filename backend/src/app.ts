import express from 'express'
import cors from 'cors'
import projectRoutes from './routes/project.routes.js'
import userRoutes from './routes/user.routes.js'
import columnRoutes from './routes/column.routes.js'
import jobRoutes from './routes/job.routes.js'
import userpositionRoutes from './routes/userposition.routes.js'
import cardsRoutes from './routes/cards.routes.js'
import authRoutes from './routes/auth.routes.js'
import relatoryRoutes from './routes/relatory.routes.js'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated.js'
import projectInviteRoutes from './routes/projectInvite.routes.js'

const app = express()

app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions))

// rotas privadas
app.use('/projects', ensureAuthenticated, projectRoutes)
app.use('/column', ensureAuthenticated, columnRoutes)
app.use('/job', ensureAuthenticated, jobRoutes)
app.use('/userposition', ensureAuthenticated, userpositionRoutes)
app.use('/cards', ensureAuthenticated, cardsRoutes)
app.use('/relatory', ensureAuthenticated, relatoryRoutes)
app.use('/invites', ensureAuthenticated, projectInviteRoutes)

// rotas públicas
app.use('/users', userRoutes)
app.use('/auth', authRoutes)

export default app
