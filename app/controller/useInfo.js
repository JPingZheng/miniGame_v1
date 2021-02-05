'use strict';

const Controller = require('egg').Controller;

class UserInfoController extends Controller {
  async v1() {
    const ctx = this.ctx;
    const { code } = this.ctx.request.body;
    const retData = await ctx.curl(`${ctx.app.config.WETCHAT_AUTH2}?appid=${ctx.app.config.WETCHAT_APPID}&secret=${ctx.app.config.WETCHAT_SECRET}&js_code=${code}&grant_type=authorization_code`,
      { method: 'GET', dataType: 'json' });

    /**
     * retData.data 返回值
     * {
        session_key: 'OwAWgHxFY6oZyhmGoNiWng==',
        openid: 'oLZ7_4wnfSua74_QrsnasRelI76Y'
      }
     */
    ctx.body = { code: 0, msg: '1' };
    // await this.ctx.app.redis.hmset(key, {score,value});
    // const dd = await this.ctx.app.redis.zrange(key, 0, 100, 'WITHSCORES');
    // console.log(dd);
    // const ss = await this.ctx.app.redis.zrank(key, value);
    // this.ctx.body = { code: 1, dd, ss };
  }
}
module.exports = UserInfoController;
