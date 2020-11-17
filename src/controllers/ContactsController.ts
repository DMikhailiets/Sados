import express from "express"
import { validationResult } from "express-validator"
import { ContactsModel } from "../models"
import { createJWTToken } from "../utils"

class ContactsController {

    create = (req: express.Request, res: express.Response) => {
        const postData = {
            phone_number: req.body.phone_number,
            email: req.body.email,
            adress: req.body.adress
        }
        const contacts = new ContactsModel(postData)
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
            phone_number: req.body.phone_number,
            email: req.body.email,
            adress: req.body.adress
        }
        ContactsModel.findByIdAndUpdate(id, postData, (err, contacts) => {
                if (err) {
                    return res.status(404).json({
                    message: "Contact not found"
                    })
                }
                    res.json(postData)
                })
    }

    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.body.id
        ContactsModel.findOneAndRemove({ _id: id })
        .then(user => {
            if (user) {
                res.json({
                    message: `Contact deleted`
                })
            } else {
                res.json({
                    message: `Contact not found`
                })
            }
        })
        .catch(() => {
            res.json({
                message: `Contact was not deleted`
            })
        })
    }
    get = (req: express.Request, res: express.Response) => {
        ContactsModel.find({}, (err, contacts) => {
            if (err) {
                return res.status(404).json()
            }
            res.json(contacts)
        })
    }

    

}

export default ContactsController