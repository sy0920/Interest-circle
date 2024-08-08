import 'dotenv/config';
import { createConnection, getConnectionOptions } from 'typeorm';
import { User } from './entity/user';
import { Circle } from './entity/circle';
import { Post } from './entity/post';
import { Comment } from './entity/comment';
import 'dotenv/config';
async function seedDatabase() {
    const connectionOptions = await getConnectionOptions();
    const connection = await createConnection(connectionOptions);

    // 创建用户
    const user = new User();
    user.name = 'John Doe';
    await user.save();

    // 创建兴趣圈
    const circle = new Circle();
    circle.name = 'Tech Enthusiasts';
    await circle.save();

    // 创建帖子
    const post = new Post();
    post.content = 'This is the first post in the Tech Enthusiasts circle.';
    post.circle = circle;
    post.user = user;
    await post.save();

    // 创建评论
    const comment = new Comment();
    comment.content = 'This is a comment on the first post.';
    comment.post = post;
    comment.user = user;
    await comment.save();

    await connection.close();
}

seedDatabase().catch(error => console.log(error));