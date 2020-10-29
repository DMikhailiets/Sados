import express from "express"
import { AboutCompanyModel } from "../models"


class AboutCompany {
    create = (req: express.Request, res: express.Response) => {
        const postData = {
            title: req.body.title,
            description: req.body.description,
        }
        const vacancy = new AboutCompanyModel(postData)
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
        }
        AboutCompanyModel.findByIdAndUpdate(id, postData, (err) => {
                if (err) {
                    return res.status(404).json({
                    message: "Page not found"
                    })
                }
                    res.json(postData)
                })
    }

    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.body.id
        AboutCompanyModel.findOneAndRemove({ _id: id })
        .then(page => {
            if (page) {
                res.json({
                    message: `Page was deleted`
                })
            }
        })
        .catch(() => {
            res.json({
                message: `Page not found`
            })
        })
    }
    get = (req: express.Request, res: express.Response) => {
        AboutCompanyModel.find({}, (err, pages) => {
            if (err) {
                return res.status(404).json()
            }
            res.json(pages)
        })
    }
}

export default AboutCompany