/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1612319887378_6226';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.cluster = {
    listen: {
      port: 1001,
      hostname: '127.0.0.1',
    },
  };
  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: 'feHwr6b5gsxhvRkl',
      db: 0,
    },
  };

  config.mysql = {
    clients: {
      bussiness: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'mini-rank',
      },
    },
    app: true, // 是否加载到 app 上，默认开启
    agent: false, // 是否加载到 agent 上，默认关闭
  };

  config.sequelize = {
    delegate: 'modelSequelize',
    baseDir: 'modelSequelize',
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 33061,
    username: 'root',
    password: 'root',
    database: 'mini-rank',
    timezone: '+08:00',
    logging: false, // 默认console.log，会将查询字段输出
  };


  config.cors = {
    origin: [ '*' ],
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };

  config.security = {
    csrf: {
      enable: false,
    },
    methodnoallow: {
      enable: false,
    },
  };

  config.WETCHAT_AUTH2 = 'https://api.weixin.qq.com/sns/jscode2session'; // 微信登录凭证校验
  config.WETCHAT_SECRET = '87a8b0ed1977f70b5e32e6aeef2ee513'; // 微信小程序密钥
  config.WETCHAT_APPID = 'wxcb60b24abbf2680c'; // 微信小程序appid
  return {
    ...config,
    ...userConfig,
  };
};

