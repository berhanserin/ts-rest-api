import { User } from '../models/User'
import { IUser } from '../interface/user'

export class userService {
    public async getAll(): Promise<Array<IUser>> {
        return await User.find({})
    }
    public async getId(id: number): Promise<IUser> {
        return await User.findOne({ _id: id })
    }
}
