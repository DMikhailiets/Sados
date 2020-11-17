import express from "express"
import { MetaTagModel } from "../models"

class MetaTagsController {
    create = (req: express.Request, res: express.Response) => {
        const postData = {
            url: req.body.url,
            type: req.body.type,
            context: req.body.context,
        }
        const metaTag = new MetaTagModel(postData)
        metaTag
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
            url: req.body.url,
            type: req.body.type,
            context: req.body.context,
        }
        MetaTagModel.findByIdAndUpdate(id, postData, (err) => {
            if (err) {
                return res.status(404).json({
                message: "Metatag not found"
                })
            }else {
                return res.json('Metatag was updated')
            }   
        })
    }

    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.body.id
        MetaTagModel.findOneAndRemove({ _id: id })
        .then(page => {
            if (page) {
                res.json({
                    message: `Metatag was deleted`
                })
            } else {
                res.json({
                    message: `Metatag not found`
                })
            }
        })
        .catch(() => {
            res.json({
                message: `Metatag was not deleted`
            })
        })
    }
    get = (req: express.Request, res: express.Response) => {
        MetaTagModel.find({}, (err, pages) => {
            if (err) {
                return res.status(404).json()
            }
            res.json(pages)
        })
    }
}

export default MetaTagsController