'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;
  return app.modelSequelize.define('userInfo', {
    id: {
      type: STRING(32),
      primaryKey: true,
    },
    user_info: {
      type: STRING(32),
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
    comment: '账号',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
};
