const Sequelize = require('sequelize')
 //  conexão mySql
 const sequelize = new Sequelize('postapp', 'root', 'suaSenhaSql', {
         host: "localhost",
         dialect: 'mysql'
 })

 module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
 }
