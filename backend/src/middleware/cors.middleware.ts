import * as cors from '@koa/cors';

export const corsMiddleware = cors({
    origin: '*', // 允许的前端地址
    allowHeaders: ['Content-Type', 'Authorization', 'user'], // 允许的请求头
});