import bodyParser from "body-parser"
import express from "express"
import { checkAuth } from "../middleware"
import { loginValidation, registerValidation } from "../utils/validations"
import cors from 'cors'
import { UserCtrl, AboutCompanyCtrl, ContactsCtrl, VacancyCtrl } from "../controllers"


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const createRoutes = (app: express.Express) => {
    const UserController = new UserCtrl()
    const VacancyController = new VacancyCtrl()
    const ContactsController = new ContactsCtrl()
    const AboutCompanyController = new AboutCompanyCtrl()

    app.use(cors())
    app.use(bodyParser.json())
    app.use(checkAuth)
    
    app.get('/user/:id', cors(corsOptions), UserController.show)
    app.get('/users/me', cors(corsOptions), UserController.getMe)
    app.delete('/user/:id', cors(corsOptions), UserController.delete)
    app.post('/user/login', cors(corsOptions), loginValidation, UserController.login)
    app.post('/user/registration', cors(corsOptions), registerValidation, UserController.create)

    app.get('/contacts', cors(corsOptions),ContactsController.get)
    app.post('/contacts', cors(corsOptions),ContactsController.create)
    app.put('/contacts', cors(corsOptions),ContactsController.update)
    app.delete('/contacts', cors(corsOptions),ContactsController.delete)

    app.get('/vacancies', cors(corsOptions),VacancyController.get)
    app.post('/vacancies', cors(corsOptions),VacancyController.create)
    app.put('/vacancies', cors(corsOptions),VacancyController.update)
    app.delete('/vacancies', cors(corsOptions),VacancyController.delete)

    app.get('/aboutCompany', cors(corsOptions),AboutCompanyController.get)
    app.post('/aboutCompany', cors(corsOptions),AboutCompanyController.create)
    app.put('/aboutCompany', cors(corsOptions),AboutCompanyController.update)
    app.delete('/aboutCompany', cors(corsOptions),AboutCompanyController.delete)
}

export default createRoutes