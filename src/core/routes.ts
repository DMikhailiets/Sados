import bodyParser from "body-parser"
import express from "express"
import { checkAuth } from "../middleware"
import { loginValidation, registerValidation } from "../utils/validations"
import cors from 'cors'
import { UserCtrl, AboutCompanyCtrl, ArticleCtrl, CategoryCtrl, ContactsCtrl, VacancyCtrl, MetaTagsCtrl, TechnicsCtrl } from "../controllers"


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const createRoutes = (app: express.Express) => {
    const UserController = new UserCtrl()
    const VacancyController = new VacancyCtrl()
    const ContactsController = new ContactsCtrl()
    const AboutCompanyController = new AboutCompanyCtrl()
    const MetaTagsController = new MetaTagsCtrl()
    const TechnicsController = new TechnicsCtrl()
    const CategoryCjntroller = new CategoryCtrl()
    const ArticleController = new ArticleCtrl()

    app.use(cors())
    app.use(bodyParser.json())
    app.use(checkAuth)
    
    app.get('/API/user/:id', cors(corsOptions), UserController.show)
    app.get('/API/users/me', cors(corsOptions), UserController.getMe)
    app.delete('/API/user/:id', cors(corsOptions), UserController.delete)
    app.post('/API/user/login', cors(corsOptions), loginValidation, UserController.login)
    app.post('/API/user/registration', cors(corsOptions), registerValidation, UserController.create)

    app.get('/API/contacts', cors(corsOptions),ContactsController.get)
    app.post('/API/contacts', cors(corsOptions),ContactsController.create)
    app.put('/API/contacts', cors(corsOptions),ContactsController.update)
    app.delete('/API/contacts', cors(corsOptions),ContactsController.delete)

    app.get('/API/vacancies', cors(corsOptions),VacancyController.get)
    app.post('/API/vacancies', cors(corsOptions),VacancyController.create)
    app.put('/API/vacancies', cors(corsOptions),VacancyController.update)
    app.delete('/API/vacancies', cors(corsOptions),VacancyController.delete)

    app.get('/API/aboutCompany', cors(corsOptions),AboutCompanyController.get)
    app.post('/API/aboutCompany', cors(corsOptions),AboutCompanyController.create)
    app.put('/API/aboutCompany', cors(corsOptions),AboutCompanyController.update)
    app.delete('/API/aboutCompany', cors(corsOptions),AboutCompanyController.delete)

    app.get('/API/metaTags', cors(corsOptions),MetaTagsController.get)
    app.post('/API/metaTags', cors(corsOptions),MetaTagsController.create)
    app.put('/API/metaTags', cors(corsOptions),MetaTagsController.update)
    app.delete('/API/metaTags', cors(corsOptions),MetaTagsController.delete)

    app.get('/API/technic', cors(corsOptions),TechnicsController.get)
    app.post('/API/technic', cors(corsOptions),TechnicsController.create)
    app.put('/API/technic', cors(corsOptions),TechnicsController.update)
    app.delete('/API/technic', cors(corsOptions),TechnicsController.delete)

    app.get('/API/category', cors(corsOptions),CategoryCjntroller.get)
    app.post('/API/category', cors(corsOptions),CategoryCjntroller.create)
    app.put('/API/category', cors(corsOptions),CategoryCjntroller.update)
    app.delete('/API/category', cors(corsOptions),CategoryCjntroller.delete)

    app.get('/API/articles', cors(corsOptions),ArticleController.get)
    app.post('/API/articles', cors(corsOptions),ArticleController.create)
    app.put('/API/articles', cors(corsOptions),ArticleController.update)
    app.delete('/API/articles', cors(corsOptions),ArticleController.delete)
}



export default createRoutes