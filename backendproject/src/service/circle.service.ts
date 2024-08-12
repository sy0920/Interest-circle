import { Provide } from '@midwayjs/core';
// import { Circle } from '../entity/circle';
// import { Post } from '../entity/post';
// import { User } from '../entity/user';
// import { Comment } from '../entity/comment';
import { data } from '../controller/circle.controller';
@Provide()
export class CircleService {
  async getAllCircles() {
    return data.circles;
  }

  async createCircle(name: string) {
    const newCircle = {
      id: data.circles.length + 1,
      name: name,
      members: [],
      posts: [],
    };
    data.circles.push(newCircle);
    return newCircle;
  }

  async getCircleById(circleId: number) {
    console.log('data.circles: ', data.circles);
    return data.circles.find(circle => circle.id === circleId);
  }

}