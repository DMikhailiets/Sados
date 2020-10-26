import mongoose, { Schema, Document } from 'mongoose'

export interface IOrder extends Document {
    userId?: string
    adress?: string
    totalPrice?: number
    email?: string
    order?: any
}

const OrderSchema = new Schema(
  {
    userId: {
      type: String,
    },
    adress: {
        type: String,
      },
    totalPrice: {
        type: Number,
    },
    email: {
        type: String,
    },
    order: {
        type: Object,
    },
  },
  {
    timestamps: true
  }
)

OrderSchema.set("toJSON", {
  virtuals: true
})

const OrderModel = mongoose.model<IOrder>('Order', OrderSchema)

export default OrderModel