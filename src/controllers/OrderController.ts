import express from "express"
import { OrderModel, UserModel } from "../models"

class OrderControler {

    show = (req: express.Request, res: express.Response) => {
        OrderModel.find({}, (err, user) => {
            if (err) {
                return res.status(404).json()
            }
                res.json(user)
        })
    }
  
    create = (req: any, res: express.Response) => {
        const postData = req.body
        const order = new OrderModel(postData)
        order
        .save()
        .then((obj: any) => {
            res.json(obj)
        })
        .catch(reason => {
            res.status(422).json(reason)
        })
        if(req.user){
            const id: string = req.user._id
            UserModel.findById(id, (err, user) => {
                if (err || user === null) {
                    return res.status(404).json({
                    message: "User not found"
                    })
                }else{
                    user.history = [...user.history, order]
                    user.save().catch(reason => {
                        res.json(reason)
                    })
                }  
            })
        } 
    }
}

export default OrderControler