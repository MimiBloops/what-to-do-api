const express = require('express');
const router = express.Router();

const sql = require('./database');

var History = function(history){
    this.CreatedAt = history.CreatedAt;
    this.IdCustomer = history.IdCustomer;
    this.Type = history.Type;
    this.Name = history.Name;
};

History.createHistory = function createHistory(newHistory, result){
    sql.query("INSERT INTO History set ?", newHistory, function(err, res){
        if(err){
            console.log("error : ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

History.getAllHistory = function getAllHistory(result){
    sql.query("Select * from History", function(err, res){
        if(err){
            console.log("error : ", err);
            result(null, err);
        }
        else {
            console.log('history : ', res);
            result(null, res);
        }
    });
};

router.get('/')