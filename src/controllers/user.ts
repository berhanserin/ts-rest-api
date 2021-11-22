import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
    Tags,
} from 'tsoa'
import { IUser } from '../interface/user'
import { userService } from '../services/userService'

@Route('users')
@Tags('User')
export class UsersController extends Controller {
    /**
     * Kullanıcıların bütün kayıtlarını geri döndürür
     * @summary Bütün Kullanıcıları DÖndürür
     */
    @Get('/')
    public async getAllUsers(): Promise<Array<IUser>> {
        return new userService().getAll()
    }

    /**
     * Kullanıcı verilerini almak için userId değişkenini yollamanız gerekmektedir.
     * @summary UserId verisi yollanılarak bir kullanıcıya özel veri
     * @param userId Uniq kullanıcı idsi
     */
    @Get('/{userId}')
    public async getUser(@Path() userId: String): Promise<IUser> {
        return new userService().getId(userId)
    }
}
