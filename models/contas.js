const db = require('db');

const contas = db.sequelize.define('contas',{
    saldo:{
        type:db.Sequelize.BOOLEAN
    },
    senha:{
        type:db.Sequelize.TEXT
    },
    agencia:{
        type:db.Sequelize.TEXT
    },
    conta:{
        type:db.Sequelize.TEXT
    }
})
