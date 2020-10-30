import mongoose, { Schema, Document } from 'mongoose'

export interface IMetaTeg extends Document {
  url: {
    type: string
    require: boolean
}
  type: {
    type: string
    require: boolean
}
  context: {
    type: string
    require: boolean
}
}

const MetaTegSchema = new Schema(
  {
    url: { type: String, require: Boolean },
    type: { type: String, require: Boolean },
    context: { type: String, require: Boolean },
},
{
    timestamps: true
}
)

MetaTegSchema.set("toJSON", {
  virtuals: true
})

const MetaTagModel = mongoose.model<IMetaTeg>('MetaTag', MetaTegSchema)

export default MetaTagModel

