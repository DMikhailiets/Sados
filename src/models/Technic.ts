import mongoose, { Schema, Document } from "mongoose";

export interface ITechnic extends Document {
    title: {
        type: string
        require: boolean
    }
    description: {
        type: string
        require: boolean
    }
    photoUrl: {
        type: string
        require: boolean
    }
    params: Array<{
        param: {
            type: string
            require: boolean
        },
        value: {
            type: string
            require: boolean
        }
    }>
}

const TechnicSchema = new Schema(
    {
        title: { type: String, require: Boolean },
        description: { type: String, require: Boolean },
        photoUrl: { type: String, require: Boolean },
        params: { type: Array, require: Boolean },
        
    },
    {
        timestamps: true
    }
)

const TechnicModel = mongoose.model<ITechnic>("Technik", TechnicSchema)

export default TechnicModel