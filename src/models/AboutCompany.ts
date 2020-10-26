import mongoose, { Schema, Document } from "mongoose";

export interface IAboutCompany extends Document {
    title: {
        type: string
        require: boolean
    }
    description: {
        type: string
        require: boolean
    }
}

const AboutCompanySchema = new Schema(
    {
        title: { type: String, require: Boolean },
        description: { type: String, require: Boolean },
    },
    {
        timestamps: true
    }
)

const AboutCompanyModel = mongoose.model<IAboutCompany>("AboutCompany", AboutCompanySchema)

export default AboutCompanyModel