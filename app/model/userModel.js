const express = require('express');
const router = express.Router();

const sql = require('./database');

var User = function(user){
    this.CreatedAt = user.CreatedAt;
    this.Login = user.Login;
    this.Password = user.Password;
    this.SteamLogin = user.SteamLogin;
    this.SteamPassword = user.SteamPassword;
    this.TwithLogin = user.TwithLogin;
    this.TwitchPassword = user.TwitchPassword
};

User.createUser = function createUser(newUser, result){
    sql.query("INSERT INTO User set ?", newUser, function(err, res){
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

User.getAllUsers = function getAllUsers(result){
    sql.query("Select * from User", function(err, res){
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