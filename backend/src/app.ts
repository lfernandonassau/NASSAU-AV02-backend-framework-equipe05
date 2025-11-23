import express from 'express'
import projectRoutes from './routes/project.routes.js'
import userRoutes from './routes/user.routes.js'
import columnRoutes from './routes/column.routes.js'


const app = express()
app.use(express.json())

app.use('/project', projectRoutes)
app.use('/user', userRoutes)
app.use('/column', columnRoutes)

export default app
