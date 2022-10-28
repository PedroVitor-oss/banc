const db = require('./db.js');

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
    },
    dono:{
        type:db.Sequelize.TEXT
    }
})

contas.sync({force:true});


