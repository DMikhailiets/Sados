import express from "express"
import { CategoryModel } from "../models"


class CategoryController {

    create = (req: express.Request, res: express.Response) => {
        const postData = {
            title: req.body.title,
            description: req.body.description,
            photoUrl: req.body.photoUrl
        }
        const contacts = new CategoryModel(postData)
        contacts
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
            photoUrl: req.body.photoUrl
        }
        CategoryModel.findByIdAndUpdate(id, postData, (err, category) => {
            if (err) {
                return res.status(404).json({
                message: "Category not found"
                })
            }else {
                return res.json('Category was updated')
            }   
        })
    }

    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.body.id
        CategoryModel.findOneAndRemove({ _id: id })
        .then(user => {
            if (user) {
                res.json({
                    message: `Category deleted`
                })
            } else {
                res.json({
                    message: `Category not found`
                })
            }
        })
        .catch(() => {
            res.json({
                message: `Contacts was not deleted`
            })
        })
    }
    get = (req: express.Request, res: express.Response) => {
        CategoryModel.find({}, (err, category) => {
            if (err) {
                return res.status(404).json()
            }
            res.json(category)
        })
    }
}

export default CategoryController