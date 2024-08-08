import { Inject, Controller, Post, Body, Get, Param, Files } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { InterestService } from '../service/interest.service';
import { PostService } from '../service/post.service';
import { CommentService } from '../service/comment.service';
import { UploadMiddleware } from '../middleware/upload.middleware';

interface UploadedFile {
    filename: string;
    // 其他需要的属性
}

@Controller('/api')
export class InterestController {
    @Inject()
    ctx: Context;

    @Inject()
    interestService: InterestService;

    @Inject()
    postService: PostService;

    @Inject()
    commentService: CommentService;

    @Get('/circles')
    async getCircles() {
        const circles = await this.interestService.getCircles();
        return { success: true, data: circles };
    }

    @Get('/circles/:id/posts')
    async getPosts(@Param('id') id: string) {
        const posts = await this.postService.getPostsByCircleId(Number(id));
        return { success: true, data: posts };
    }

    @Post('/circles/:id/posts', { middleware: [UploadMiddleware] })
    async createPost(@Param('id') id: string, @Body() body, @Files() files: UploadedFile[]) {
        const { title, content } = body;
        const file = files[0]; // 处理单个文件上传
        const post = await this.postService.createPost({ circleId: Number(id), title, content, image: file.filename });
        return { success: true, message: 'Post created successfully', data: post };
    }

    @Get('/posts/:id/comments')
    async getComments(@Param('id') id: string) {
        const comments = await this.commentService.getCommentsByPostId(Number(id));
        return { success: true, data: comments };
    }

    @Post('/posts/:id/comments')
    async createComment(@Param('id') id: string, @Body() body) {
        const { content } = body;
        const comment = await this.commentService.createComment({ postId: Number(id), content });
        return { success: true, message: 'Comment created successfully', data: comment };
    }
}