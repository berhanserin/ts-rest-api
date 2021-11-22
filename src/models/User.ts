import { Model, Types } from 'mongoose'
import { IUser } from '../interface/user'
const { mongoose, model, Schema } = require('mongoose')

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
    },
    { collection: 'User', timestamps: true }
)

const User: Model<IUser & Document> = model('User', UserSchema)

export { User }
