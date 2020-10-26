import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
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
}

const CategorySchema = new Schema(
    {
        title: { type: String, require: Boolean },
        description: { type: String, require: Boolean },
        photoUrl: { type: String, require: Boolean },
    },
    {
        timestamps: true
    }
)

const CategoryModel = mongoose.model<ICategory>("Category", CategorySchema)

export default CategoryModel