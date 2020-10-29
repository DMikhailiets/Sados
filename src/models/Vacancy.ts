import mongoose, { Schema, Document } from "mongoose";

export interface IVacancy extends Document {
    title: {
        type: string
        require: boolean
    }
    description: {
        type: string
        require: boolean
    }
    requirements: {
        type: Array<{ title: string,description: string}>
        require: boolean
    }
    salary: {
        type: string
        require: boolean
    }
}

const VacancySchema = new Schema(
    {
        title: { type: String, require: Boolean },
        description: { type: String, require: Boolean },
        requirements: { type: Array, require: Boolean },
        salary: { type: String, require: Boolean },
    },
    {
        timestamps: true
    }
)

const VacancyModel = mongoose.model<IVacancy>("Vacancy", VacancySchema)

export default VacancyModel