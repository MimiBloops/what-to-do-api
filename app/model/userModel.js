'user strict';
const sql = require('./database');

var User = function (user) {
    this.CreatedAt = user.CreatedAt;
    this.Login = user.Login;
    this.Password = user.Password;
    this.SteamLogin = user.SteamLogin;
    this.SteamPassword = user.SteamPassword;
    this.TwitchLogin = user.TwithLogin;
    this.TwitchPassword = user.TwitchPassword
};

User.createUser = function createUser(newUser, result) {
    sql.query("INSERT INTO User set ?", newUser, function (err, res) {
        if (err) {
            console.log("error : ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.getAllUsers = function getAllUsers(result) {
    sql.query("Select * from User", function (err, res) {
        if (err) {
            console.log("error : ", err);
            result(null, err);
        }
        else {
            console.log('users : ', res);
            result(null, res);
        }
    });
};

User.getUserById = function getUserById(userId, result) {
    sql.query("Select CreatedAt, Login, Password, SteamLogin, SteamPassword, TwitchLogin, TwitchPassword from User where id = ?", userId, function (err, res) {
        if (err) {
            console.log("error : ", err);
            result(null, err);
        }
        else {
            console.log('user : ', res);
            result(null, res);
        }
    });
};

User.updateUserById = function updateUserById(id, user, result) {
    sql.query("UPDATE User SET CreatedAt = ?, Login = ?, Password = ?, SteamLogin = ?, SteamPassword = ?, TwitchLogin = ?, TwitchPassword = ? WHERE id = ?",
        [user.CreatedAt, user.Login, user.Password, user.SteamLogin, user.SteamPassword, user.TwithLogin, user.TwitchPassword, id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
};

User.removeUserById = function removeUserById(id, result) {
    sql.query("DELETE FROM User WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.getUserType = function getUserType(userId, result){
    var sqlQuery = "SELECT t.Type, t.Name FROM Type AS t LEFT JOIN UserType AS ut ON ut.UserId = ? WHERE t.Id = ut.TypeId";
    sql.query(sqlQuery, userId, function(err, res){
        if(err){
            console.log("error ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

User.createUserType = function createUserType(userId, typeId, result){
    var sqlQuery = "INSERT INTO UserType (UserId, TypeId) VALUES (?, ?)";
    sql.query(sqlQuery, [userId, typeId], function(err, res){
        if(err){
            console.log("error ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = User;