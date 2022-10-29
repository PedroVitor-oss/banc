const Sequelize = require('sequelize');
//mysql://b52fe828f28c5e:0afdacd2@us-cdbr-east-06.cleardb.net/heroku_18449ff8208c2df?reconnect=true
const sequelize = new Sequelize('heroku_18449ff8208c2df','b52fe828f28c5e','0afdacd2',{
host:'us-cdbr-east-06.cleardb.net',
dialect:'mysql',
});
module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
    }
    
