'use strich'
var History = require('../model/historyModel');

exports.list_all_history = function(req, res){
    History.getAllHistory(function(err, history){
        console.log('get all history');
    });
};

exports.create_a_history = function(req, res){
    var new_history = new History(req.body);

    if(!new_history.CreatedAt || !new_history.Name){
        res.status(400).send({error:true, message: 'Please provide history'});
    }
    else{
        History.createHistory(new_history, function(err, history){
            if(err){
                res.send(err);
                res.json(history);
            }
        });
    }
};