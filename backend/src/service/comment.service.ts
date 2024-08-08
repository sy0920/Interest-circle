import { Provide } from '@midwayjs/core';
import { Comment } from '../entity/comment';
import { Post } from '../entity/post';

@Provide()
export class CommentService {
    async getCommentsByPostId(postId: number) {
        return await Comment.find({ where: { post: { id: postId } as any }, relations: ['post'] });
    }

    async createComment(commentData: { postId: number, content: string }) {
        const post = await Post.findOne({ where: { id: commentData.postId } as any });
        if (!post) {
            throw new Error('Post not found');
        }

        const comment = new Comment();
        comment.content = commentData.content;
        comment.post = post;
        return await comment.save();
    }
}