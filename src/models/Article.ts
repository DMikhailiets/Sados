import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
    title: {
        type: string
        require: boolean
    }
    description: {
        type: string
        require: boolean
    }
    body: {
        type: string
        require: boolean
    }
}

const ArticleSchema = new Schema(
    {
        title: { type: String, require: Boolean },
        description: { type: String, require: Boolean },
        body: { type: String, require: Boolean },
    },
    {
        timestamps: true
    }
)

const ArticleModel = mongoose.model<IArticle>("Article", ArticleSchema)

export default ArticleModel