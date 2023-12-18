const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'Goku4622n&&', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo : {
        type: Sequelize.STRING
    },
    conteudo : {
        type: Sequelize.TEXT
    }

})



const Usuario = sequelize.define('usuarios', {
    name : {
        type : Sequelize.STRING
    },
    idade : {
        type: Sequelize.INTEGER
    },
    email : {
        type : Sequelize.STRING
    }
})

// Create table 
// Atualizando...
Usuario.create({
    name: "Leo",
    idade: 20,
    email:"exemplo@gmail.com"
})

// Test 
// sequelize.authenticate().then(function(){
//     console.log("funciona!!!!!")
// }).catch(function(erro){
//     console.log("SERVIDO NÂO FUNCIONA " + erro)
// })