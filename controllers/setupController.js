let Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos',function(req,res){

        let starterTodos =[{
            username:'test',
            todo:'bbuy milk',
            isDone:false,
            hasAttachment :false
        }];

        Todos.create(starterTodos,function(err,results){
            if(err) throw err;
            res.send(results);
        });
    })
}