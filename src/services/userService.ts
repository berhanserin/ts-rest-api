import { IUser } from '../interface/user'
import { User } from '../models/User'

export class userService {
    public async getAll(): Promise<Array<IUser>> {
        return await User.find({})
    }
    public async getId(id: String): Promise<IUser> {
        const data = await User.findOne({
            _id: id,
        })
        return { _id: data?._id, name: '' }
    }
}
