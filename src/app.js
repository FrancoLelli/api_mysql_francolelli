import express from 'express'
import morgan from 'morgan'

//Routes
import languageRouter from './routes/language_routes'
import userRouter from './routes/users_routes'

//Framework q corre dentro de node y nos sirve para crear serviodr web que maneje peticiones Get Post Put Delete
const app = express()


//json es para pasar de json a objeto
app.use(express.json())

//Settings
app.set("port", 8080)

//Middlewares: Son funciones intermedias entre una peticion y respuesta
app.use(morgan("dev"))

//Routes
app.use("/api/language", languageRouter)
app.use("/api/users", userRouter)

export default app