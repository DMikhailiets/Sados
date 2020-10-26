import bodyParser from "body-parser"
import express from "express"
import { checkAuth } from "../middleware"
import { loginValidation, registerValidation } from "../utils/validations"
import cors from 'cors'
import { UserCtrl, PizzaCtrl, OrderCtrl } from "../controllers"


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const createRoutes = (app: express.Express) => {
    const UserController = new UserCtrl()
    const PizzaController = new PizzaCtrl()
    const OrderController = new OrderCtrl()

    app.use(cors())
    app.use(bodyParser.json())
    app.use(checkAuth)
    
    app.get('/user/:id', cors(corsOptions), UserController.show)
    app.get('/users/me', cors(corsOptions), UserController.getMe)
    app.delete('/user/:id', cors(corsOptions), UserController.delete)
    app.post('/user/login', cors(corsOptions), loginValidation, UserController.login)
    app.post('/user/registration', cors(corsOptions), registerValidation, UserController.create)
  
    app.post('/pizza', cors(corsOptions),PizzaController.create)
    app.get('/pizza', cors(corsOptions),PizzaController.show)

    app.post('/order', cors(corsOptions), OrderController.create)
    app.get('/order', cors(corsOptions), OrderController.show)
}

export default createRoutes