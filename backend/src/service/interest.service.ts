import { Provide } from '@midwayjs/core';
import { Circle } from '../entity/circle';

@Provide()
export class InterestService {
    async getCircles() {
        return await Circle.find();
    }
}