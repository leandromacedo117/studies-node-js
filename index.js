const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post.js')

// config 
    // Template engine 
     app.engine('handlebars',handlebars.engine())
     app.set('view engine', 'handlebars')

    //  body Parser 
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())



    // Rotas '/'
    app.get('/', (req, res) =>{
        res.render('testHome')
    })

    app.get('/home',  function(req, res){
        res.render('layouts/form')
    })

    app.post('/sub', function(req, res){
        Post.create({
            title: req.body.title,
            commit: req.body.commit
        }).then(() =>{
            res.send("post criando com sucesso!!")
        }).catch((error) =>{
            res.send(`${error} um erro em `)
        })
    })



app.listen(9000, function(){

})