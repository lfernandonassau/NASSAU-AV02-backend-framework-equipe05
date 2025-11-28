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





const app = express()

// habilita CORS pro front do Vite
app.use(cors({
    origin: 'http://localhost:5173',
}))

app.use(express.json())

app.use('/projects', projectRoutes)
app.use('/column', columnRoutes)
app.use('/job', jobRoutes)
app.use('/userposition',userpositionRoutes)
app.use('/cards', cardsRoutes)
app.use('/users', userRoutes)
app.use('/auth', authRoutes)
app.use('/relatory',relatoryRoutes)




export default app
