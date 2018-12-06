'use strich'
var Type = require('../model/typeModel.js');

exports.list_all_type = function(req, res){
    Type.getAllType(function(err, type){
        console.log('get all type');
        if(err){
            res.send(err);
        }
        console.log('res', type);
        res.send(type);
    });
};

exports.create_a_type = function(req, res){
    var new_type = new Type(req.body);

    if(!new_type.Type || !new_type.Name){
        res.status(400).send({error:true, message: 'Please provide a type'});
    }
    else{
        Type.createType(new_type, function(err, type){
            if(err){
                res.send(err);
            }
            res.json(type);
        });
    }
};

exports.read_a_type = function(req, res){
    Type.getTypeById(req.params.typeId, function(err, type){
        if(err){
            res.send(err);
        }
        res.json(type);
    })
};

exports.update_a_type = function(req, res){
    Type.updateTypeById(req.params.typeId, new Type(req.body), function(err, type){
        if(err){
            res.send(err);
        }
        res.json(type);
    })
};

exports.delete_a_type = function(req, res){
    Type.removeTypeById(req.params.typeId, function(err, type){
        if(err){
            res.send(err);
        }
        res.json({message: 'Type successfully deleted'});
    })
};