import mongoose, { Schema, Document } from 'mongoose'
import { isEmail } from 'validator'
import { generatePasswordHash } from '../utils'

export interface IUser extends Document {
    email?: string
    fullname?: string
    password?: string
    history?: any
    confirm_hash?: string
}

const UserSchema = new Schema(
    {
        email: {
            type: String,
            require: "Email address is required",
            validate: [isEmail, "Invalid email"],
            unique: true
        },
        // fullname: {
        //     type: String,
        //     required: "Fullname is required"
        // },
        password: {
            type: String,
            required: "Password is required"
        },
        confirm_hash: String,
    },
    {
        timestamps: true
    }
)

UserSchema.set("toJSON", {
    virtuals: true
})

UserSchema.pre('save', async function(next) {
    const user: any = this
    if (!user.isModified('password')) {
            return next()
    }
    user.password = await generatePasswordHash(user.password)
    user.confirm_hash = await generatePasswordHash(new Date().toString())
})

const UserModel = mongoose.model<IUser>('User', UserSchema)

export default UserModel