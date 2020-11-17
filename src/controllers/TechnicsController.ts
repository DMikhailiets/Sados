import express from "express"
import { TechnicModel } from "../models"


class Technics {
    create = (req: express.Request, res: express.Response) => {
        const postData = {
            title: req.body.title,
            description: req.body.description,
            photoUrl: req.body.photoUrl,
            params: req.body.params
        }
        const technic = new TechnicModel(postData)
        technic
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
            photoUrl: req.body.photoUrl,
            params: req.body.params
        }
        TechnicModel.findByIdAndUpdate(id, postData, (err) => {
            if (err) {
                return res.status(404).json({
                message: "Technic not found"
                })
            }else {
                return res.json('Technic was updated')
            }   
        })
    }

    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.body.id
        TechnicModel.findOneAndRemove({ _id: id })
        .then(page => {
            if (page) {
                res.json({
                    message: `Technic was deleted`
                })
            } else {
                res.json({
                    message: `Techic not found`
                })
            }
        })
        .catch(() => {
            res.json({
                message: `Technic was not deleted`
            })
        })
    }
    get = (req: express.Request, res: express.Response) => {
        TechnicModel.find({}, (err, technics) => {
            if (err) {
                return res.status(404).json()
            }
            res.json(technics)
        })
    }
}

export default Technics