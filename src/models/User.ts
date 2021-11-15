import { Model, Types } from 'mongoose'
import { IUser } from '../interface/user'
const { mongoose, model, Schema } = require('mongoose')

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
    },
    { collection: 'User', timestamps: true }
)

interface UserBaseDocument extends IUser, Document {}

const User: Model<UserBaseDocument> = model('User', UserSchema)

export { User }
