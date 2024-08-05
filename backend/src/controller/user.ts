// src/controller/user.ts
import { Controller, Post, Body, Inject } from '@midwayjs/decorator';
import { UserService } from '../service/user.service';

@Controller('/api/user')
export class UserController {
    @Inject()
    userService: UserService;

    @Post('/login')
    async login(@Body() body) {
        return this.userService.login(body);
    }

    @Post('/register')
    async register(@Body() body) {
        return this.userService.register(body);
    }
}
