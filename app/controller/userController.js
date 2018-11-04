'use strich'
var User = require('../model/userModel');

exports.list_all_user = function(req, res){
    User.getAllUsers(function(err, history){
        console.log('get all history');
    });
};

exports.create_a_user = function(req, res){
    var new_user = new User(req.body);

    if(!new_user.CreatedAt || !new_user.Name){
        res.status(400).send({error:true, message: 'Please provide user'});
    }
    else{
        User.createUser(new_user, function(err, user){
            if(err){
                res.send(err);
                res.json(user);
            }
        });
    }
};