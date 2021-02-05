'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.post('/api/user/score', controller.rank.v1);
  router.post('/api/user/info', controller.useInfo.v1);
};
