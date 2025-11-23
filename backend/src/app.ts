import express from 'express'
import projectRoutes from './routes/project.routes.js'
import userRoutes from './routes/user.routes.js'


const app = express()
app.use(express.json())

app.use('/projects', projectRoutes)
app.use('/user', userRoutes)

export default app
