import express from "express"
import AboutCompanyModel from "../models/AboutCompany"

class PizzaController {
    show = (req: express.Request, res: express.Response) => {
        AboutCompanyModel.find({}, (err, user) => {
            if (err) {
                return res.status(404).json()
            }
            res.json(user)
        })
    }

    create = (req: express.Request, res: express.Response) => {
        const postData = {
            title: req.body.title,
            description: req.body.description,
            photoUrl: req.body.photoUrl,
            photoUrlMini: req.body.photoUrlMini,
            costInDollars: req.body.costInDollars,
            costInEuro: req.body.costInEuro,
        }
        const pizza = new AboutCompanyModel(postData)
        pizza
        .save()
        .then((obj: any) => {
            res.json(obj)
        })
        .catch(reason => {
            res.status(422).json(reason)
        })
    }
}

export default PizzaController