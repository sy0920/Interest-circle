import { Inject, Controller, Post, Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/api/user')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/login')
  async login(@Body() body) {
    const { username } = body;
    if (!username) {
      return { success: false, message: 'Username cannot be empty' };
    }
    // Assuming userService.login just checks if the user exists
    const result = await this.userService.login({ username });
    return { success: true, message: 'Login successful', data: result };
  }
}