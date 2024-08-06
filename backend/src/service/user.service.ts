import { Provide } from '@midwayjs/core';

@Provide()
export class UserService {
  async login({ username }: { username: string }) {
    // 模拟用户存在检查
    // 在实际应用中，你可能会查询数据库或其他数据源
    if (username) {
      return { username };
    } else {
      throw new Error('User does not exist');
    }
  }
}