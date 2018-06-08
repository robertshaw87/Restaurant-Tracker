// Import MySQL connection.
var connection = require("../config/connection.js");

//export orm for use by the model
var orm = module.exports = {};

orm.all = function (table, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (error, result) {
        if (error) throw error;
        callback(result);
    });
};

orm.select = function (table, conditionObj, callback) {
    var queryString = "SELECT * FROM ?? WHERE ?";
    connection.query(queryString, [table, conditionObj], function (error, result) {
        if (error) throw error;
        callback(result);
    });
};

orm.create = function (table, newObj, callback) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, newObj], function (error, result) {
        if (error) throw error;
        callback(result);
    });
};

orm.update = function (table, conditionObj, updateObj, callback) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    connection.query(queryString, [table, updateObj, conditionObj], function (error, result) {
        if (error) throw error;
        callback(result);
    });
};

orm.delete = function (table, conditionObj, callback) {
    var queryString = "DELETE FROM ?? WHERE ?";
    connection.query(queryString, [table, conditionObj], function (error, result) {
        if (error) throw error;
        callback(result);
    });
};