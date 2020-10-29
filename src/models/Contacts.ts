import mongoose, { Schema, Document } from "mongoose";

export interface IContacts extends Document {
    phone_number: {
        type: string
        require: boolean
    }
    email: {
        type: string
        require: boolean
    }
    adress: {
        type: string
        require: boolean
    }
}

const ContactsSchema = new Schema(
    {
        phone_number: { type: String, require: Boolean },
        email: { type: String, require: Boolean },
        adress: { type: String, require: Boolean },
    },
    {
        timestamps: true
    }
)

const ContactsModel = mongoose.model<IContacts>("Contacts", ContactsSchema)

export default ContactsModel