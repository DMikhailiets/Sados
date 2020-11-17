import express from "express"
import { VacancyModel } from "../models"

class VacancyController {
    create = (req: express.Request, res: express.Response) => {
        const postData = {
            title: req.body.title,
            description: req.body.description,
            requirements: req.body.requirements,
            salary: req.body.salary
        }    
        const vacancy = new VacancyModel(postData)
        vacancy
        .save()
        .then((obj: any) => {
            res.json(obj)
        })
        .catch(reason => {
            res.status(422).json(reason)
        })
    }



    update = (req: express.Request, res: express.Response) => {
        const id: string = req.body.id
        const postData = {
            title: req.body.title,
            description: req.body.description,
            requirements: req.body.requirements,
            salary: req.body.salary
        }    
        VacancyModel.findByIdAndUpdate(id, postData, (err) => {
            if (err) {
                return res.status(404).json({
                message: "Vacancy not found"
                })
            } else {
                return res.json('Vacancy was updated')
            }   
        })
    }

    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.body.id
        VacancyModel.findOneAndRemove({ _id: id })
        .then(vacancy => {
            if (vacancy) {
                res.json({
                    message: `Vacancy was deleted`
                })
            } else {
                res.json({
                    message: `Vacancy not found`
                })
            }
        })
        .catch(() => {
            res.json({
                message: `Vacancy was not deleted`
            })
        })
    }
    get = (req: express.Request, res: express.Response) => {
        VacancyModel.find({}, (err, contacts) => {
            if (err) {
                return res.status(404).json()
            }
            res.json(contacts)
        })
    }
}

export default VacancyController