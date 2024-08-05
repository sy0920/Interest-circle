import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { User } from '../entity/user';
import axios from 'axios';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async login(body) {
    const user = await this.userModel.findOne({ where: { username: body.username, password: body.password } });
    if (user) {
      return { success: true, message: 'Login successful' };
    } else {
      return { success: false, message: 'Invalid credentials' };
    }
  }

  async register(body) {
    const user = new User();
    user.username = body.username;
    user.password = body.password;
    await this.userModel.save(user);
    return { success: true, message: 'Registration successful' };
  }
}