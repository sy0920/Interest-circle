import { MidwayConfig } from '@midwayjs/core';
import { join } from 'path';
export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1721543925464_1971',
  koa: {
    port: 7001,
  },
  cors: {
    origin: '*',
  },
  jsonp: {
    callback: 'jsonp',
    limit: 512,
  },
  typeorm: {
    dataSource: {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'interest_circle',
      synchronize: true,
      logging: false,
      entities: [join(__dirname, '../entity/*.ts')],
    },
  } as MidwayConfig;
