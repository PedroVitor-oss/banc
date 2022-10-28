const Sequelize = require('sequelize');
//mysql://inalsyiidkovpbc2:dq1usqwptran1s4m@h1use0ulyws4lqr1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/nlfchwborp8aev43
const sequelize = new Sequelize('heroku_b9e5958297b1f74','inalsyiidkovpbc2','dq1usqwptran1s4m',{
host:'h1use0ulyws4lqr1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306',
dialect:'mysql',
});
module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
    }
    
