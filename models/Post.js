const data = require('./data')

const Post = data.sequelize.define('post' , {
    title : {
        type : data.Sequelize.STRING
    },
    commit : {
        type: data.Sequelize.TEXT
    }

})

module.exports = Post;
// Post.sync({force : true})