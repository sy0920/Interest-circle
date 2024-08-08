import { Provide } from '@midwayjs/core';
import { Circle } from '../entity/circle';
import { Post } from '../entity/post';
import { User } from '../entity/user';
import { Comment } from '../entity/comment';
@Provide()
export class CircleService {
  async getAllCircles() {
    return await Circle.find();
  }

  async createCircle(name: string) {
    const circle = new Circle();
    circle.name = name;
    return await circle.save();
  }

  async getPostsByCircleId(circleId: number) {
    return await Post.find({ where: { circle: { id: circleId } as any }, relations: ['circle'] });
  }

  async getUserActivity(circleId: number) {
    const posts = await Post.find({ where: { circleId } as any, relations: ['user'] });
    const comments = await Comment.find({ where: { post: { circleId } as any }, relations: ['user'] });

    const activityMap = new Map<number, { user: User; activity: number }>();

    posts.forEach(post => {
      const userId = post.user.id;
      if (!activityMap.has(userId)) {
        activityMap.set(userId, { user: post.user, activity: 0 });
      }
      activityMap.get(userId).activity += 1;
    });

    comments.forEach(comment => {
      const userId = comment.user.id;
      if (!activityMap.has(userId)) {
        activityMap.set(userId, { user: comment.user, activity: 0 });
      }
      activityMap.get(userId).activity += 1;
    });

    return Array.from(activityMap.values()).sort((a, b) => b.activity - a.activity);
  }
}