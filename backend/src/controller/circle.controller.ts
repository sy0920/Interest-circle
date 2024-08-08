import { Controller, Get, Post, Param, Inject, Body } from '@midwayjs/core';
import { CircleService } from '../service/circle.service';

@Controller('/api/circles')
export class CircleController {
  @Inject()
  circleService: CircleService;

  @Get('/')
  async getCircles() {
    return { data: await this.circleService.getAllCircles() };
  }

  @Post('/')
  async createCircle(@Body() body: { name: string }) {
    return await this.circleService.createCircle(body.name);
  }

  @Post('/:id/join')
  async joinCircle(@Param('id') id: number) {
    // Implement logic to join circle
    return { success: true };
  }

  @Get('/:id/posts')
  async getPosts(@Param('id') id: number) {
    return { data: await this.circleService.getPostsByCircleId(id) };
  }

  @Get('/:id/activity')
  async getUserActivity(@Param('id') id: number) {
    return { data: await this.circleService.getUserActivity(id) };
  }
}