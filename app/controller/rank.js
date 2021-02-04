'use strict';

const Controller = require('egg').Controller;

class RankController extends Controller {
  async v1() {
    const { score, value, key } = this.ctx.request.body;
    // await this.ctx.app.redis.zadd(key, value, score);
    // await this.ctx.app.redis.hmset(key, {score,value});
    // const dd = await this.ctx.app.redis.zrange(key, 0, 100, 'WITHSCORES');
    // console.log(dd);
    // const ss = await this.ctx.app.redis.zrank(key, value);
    // this.ctx.body = { code: 1, dd, ss };
  }
}
module.exports = RankController;
