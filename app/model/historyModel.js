'user strict';
const sql = require('./database');

var History = function(history){
    this.CreatedAt = history.CreatedAt;
    this.IdUser = history.IdUser;
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

History.getHistoryById = function getHistoryById(historyId, result) {
    sql.query("Select CreatedAt, IdUser, Type, Name from History where Id = ?", historyId, function (err, res) {
        if (err) {
            console.log("error : ", err);
            result(null, err);
        }
        else {
            console.log('history : ', res);
            result(null, res);
        }
    });
};
History.updateHistoryById = function updateHistoryById(id, history, result) {
    sql.query("UPDATE History SET CreatedAt = ?, IdUser = ?, Type = ?, Name = ? WHERE id = ?",
        [history.CreatedAt, history.IdUser, history.Type, history.Name, id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
};
History.removeHistoryById = function removeHistoryById(id, result) {
    sql.query("DELETE FROM History WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = History;