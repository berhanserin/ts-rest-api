import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
} from 'tsoa'
import { IUser } from '../interface/user'
import { userService } from '../services/userService'

@Route('users')
export class UsersController extends Controller {
    @Get('/')
    public async getAllUsers(): Promise<Array<IUser>> {
        return new userService().getAll()
    }

    @Get('/{userId}')
    public async getUser(@Path() userId: number):  Promise<IUser> {
        return new userService().getId(userId)
    }
}
