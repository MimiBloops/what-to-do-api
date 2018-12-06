'user strict';
const sql = require('./database');

var Type = function(type){
    this.Type = type.Type;
    this.Name = type.Name;
};

Type.createType = function createType(newType, result){
    sql.query("INSERT INTO Type set ?", newType, function(err, res){
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

Type.getAllType = function getAllType(result){
    sql.query("Select * from Type", function(err, res){
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

Type.getTypeById = function getTypeById(typeId, result) {
    sql.query("Select Type, Name where id = ?", typeId, function (err, res) {
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

Type.updateTypeById = function updateTypeById(id, type, result) {
    sql.query("UPDATE Type SET Type = ?, Name = ? WHERE id = ?",
        [type.Type, type.Name, id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
};

Type.removeTypeById = function removeTypeById(id, result) {
    sql.query("DELETE FROM Type WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Type;