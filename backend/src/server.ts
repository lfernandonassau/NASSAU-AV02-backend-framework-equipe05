import app from './app.js'
import 'dotenv/config'
import userRoutes from './routes/user.routes.js'

app.use('/users', userRoutes)
app.listen(3000, () => {
    console.log("Server running on port 3000")
})
