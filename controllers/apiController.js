let Todos = require('../models/todoModel');

let parser= require('body-parser');

module.exports=function(app){
    
    app.use(parser.json());
    app.use(parser.urlencoded({extended:true}));

    app.get('/api/todos/:uname',function(req,res){
           
        Todos.find({username:req.params.uname},function(err,todo){
              
            if(err) throw err;
            res.send(todo);
        });

        
    });



    app.get('/api/todo/:id',function(req,res){
        
        Todos.findById({_id:req.params.id},function(err,todo){
            if(err) throw err;
               
            res.send(todo);
        });
    });

    app.post('/api/todo',function(req,res){

        if(req.body.id){
            Todos.findByIdAndUpdate(req.body.id,{
                todo:req.body.todo,isDone:req.body.isDone,hasAttachment:req.body.hasAttachment
            },function(err,result){
                if(err)throw err;

                res.send('success');
            })
        }else{

            var newtodo= Todos({username:'test',todo:req.body.todo,isDone:req.body.isDone,hasAttachment:req.body.hasAttachment});
            newtodo.save(function(err){
                if(err)throw err;

                res.send('success'+newtodo.toString());
            });
        }
    });


    app.delete('/api/todo',function(req,res){

        Todos.findByIdAndRemove(req.body.id,function(err){

            if(err)throw err;
            res.send('success');
            
        })
    });
};