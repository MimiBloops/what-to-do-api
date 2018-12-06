'use strich'
var History = require('../model/historyModel.js');

exports.list_all_history = function(req, res){
    History.getAllHistory(function(err, history){
        console.log('get all history');
        if(err){
            res.send(err);
        }
        console.log('res', history);
        res.send(history);
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
            }
            res.json(history);
        });
    }
};

exports.read_a_history = function(req, res){
    History.getHistoryById(req.params.historyId, function(err, history){
        if(err){
            res.send(err);
        }
        res.json(history);
    })
};

exports.update_a_history = function(req, res){
    History.updateHistoryById(req.params.historyId, new History(req.body), function(err, history){
        if(err){
            res.send(err);
        }
        res.json(history);
    })
};

exports.delete_a_history = function(req, res){
    History.removeHistoryById(req.params.historyId, function(err, history){
        if(err){
            res.send(err);
        }
        res.json({message: 'History successfully deleted'});
    })
};