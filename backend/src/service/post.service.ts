import { Provide } from '@midwayjs/core';
import { Post } from '../entity/post';
import { Circle } from '../entity/circle';

@Provide()
export class PostService {
    async getPostsByCircleId(circleId: number) {
        return await Post.find({ where: { circle: { id: circleId } as any }, relations: ['circle'] });
    }

    async createPost(postData: { circleId: number, title: string, content: string, image: string }) {
        const circle = await Circle.findOne({ where: { id: postData.circleId } as any });
        if (!circle) {
            throw new Error('Circle not found');
        }

        const post = new Post();
        post.title = postData.title;
        post.content = postData.content;
        post.image = postData.image;
        post.circle = circle;
        return await post.save();
    }
}