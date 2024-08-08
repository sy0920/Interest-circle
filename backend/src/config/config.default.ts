import { MidwayConfig } from '@midwayjs/core';
import { join } from 'path';
export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1721542948340_9472',
  koa: {
    port: 7001,
  },
  cors: {
    origin: '*',
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'sqlite',
        database: join(__dirname, '../../database.sqlite'),
        synchronize: true,
        logging: false,
        entities: [
          join(__dirname, '../entity/*.ts'),
        ],
      },
    },
  },
  multer: {
    dest: 'uploads/', // 文件上传目录
  },
} as MidwayConfig;
