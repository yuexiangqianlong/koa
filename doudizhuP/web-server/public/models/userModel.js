var Sequelize = require('sequelize');
var sequelize = require('./modelhead')();
var usersModel = sequelize.define('users', {
    id: {type:Sequelize.BIGINT,primaryKey: true},
    email: Sequelize.STRING,
    pwd: Sequelize.STRING,
    nicheng: Sequelize.STRING,
    createtime:Sequelize.DATE,
    updtime:Sequelize.DATE,
},{
        timestamps: false,
        //paranoid: true  //获取不到id的返回值
    });

module.exports = usersModel; 