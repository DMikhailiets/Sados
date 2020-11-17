import express from "express"
import { ArticleModel } from "../models"


class ArticleController {

    create = (req: express.Request, res: express.Response) => {
        const postData = {
            title: req.body.title,
            body: req.body.body,
        }
        const article = new ArticleModel(postData)
        article
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
            body: req.body.body,
        }
        ArticleModel.findByIdAndUpdate(id, postData, (err, category) => {
            if (err) {
                return res.status(404).json({
                message: "Article not found"
                })
            }else {
                return res.json('Article was updated')
            }   
        })
    }

    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.body.id
        ArticleModel.findOneAndRemove({ _id: id })
        .then(user => {
            if (user) {
                res.json({
                    message: `Article deleted`
                })
            } else {
                res.json({
                    message: `Article not found`
                })
            }
        })
        .catch(() => {
            res.json({
                message: `Article was not deleted`
            })
        })
    }
    get = (req: express.Request, res: express.Response) => {
        ArticleModel.find({}, (err, article) => {
            if (err) {
                return res.status(404).json()
            }
            res.json(article)
        })
    }
}

export default ArticleController