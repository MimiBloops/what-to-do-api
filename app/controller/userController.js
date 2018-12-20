'use strich'
var User = require('../model/userModel.js');
var History = require('../model/historyModel.js');

exports.list_all_user = function(req, res){
    User.getAllUsers(function(err, user){
        if(err){
            res.send(err);
        }
        res.send(user);
    });
};

exports.create_a_user = function(req, res){
    var new_user = new User(req.body);
    if(!new_user.Login || !new_user.Password){
        res.status(400).send({error:true, message: 'Please provide user'});
    }
    else{
        User.createUser(new_user, function(err, user){
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }
};

exports.read_a_user = function(req, res){
    User.getUserById(req.params.userId, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    })
};

exports.read_user_by_login = function(req, res){
    User.getUserByLogin(req.params.userLogin, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    })
};

exports.update_a_user = function(req, res){
    User.updateUserById(req.params.userId, new User(req.body), function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    })
};

exports.update_user_by_login = function(req, res){
    User.updateUserByLogin(req.params.userLogin, new User(req.body), function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    })
};

exports.delete_a_user = function(req, res){
    User.removeUserById(req.params.userId, function(err, user){
        if(err){
            res.send(err);
        }
        res.json({message: 'User successfully deleted'});
    })
};

exports.list_type_user = function(req, res){
    console.log(req.params);
    User.getUserType(req.params.userId, function(err, userType){
        if(err){
            res.send(err);
        }
        res.send(userType);
    })
};

exports.add_type_user = function(req, res){
    User.createUserType(req.body.UserId, req.body.TypeId, function(err, userType){
        if(err){
            res.send(err);
        }
        res.send(userType)
    })
};

exports.read_user_history = function(req, res){
    User.getUserHistory(req.params.userId, function(err, history){
        if(err){
            res.send(err);
        }
        res.send(history);
    })
};

exports.create_user_history = function(req, res){
    var new_history = new History(req.body);

    if(!new_history.CreatedAt || !new_history.Name){
        res.status(400).send({error:true, message: 'Please provide history'});
    }
    else{
        User.createUserHistory(new_history, function(err, history){
            if(err){
                res.send(err);
            }
            res.json(history);
        });
    }
};