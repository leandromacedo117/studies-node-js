const Sequelize = require('sequelize')
 //  conexão mySql
 const sequelize = new Sequelize('postapp', 'root', 'Goku4622n&&', {
         host: "localhost",
         dialect: 'mysql'
 })

 module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
 }