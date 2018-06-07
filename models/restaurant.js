// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var restaurant = module.exports = {};

restaurant.all = function (callback) {
    orm.all("restaurants", function (res) {
        callback(res);
    });
};

restaurant.select = function (selectionObj, callback) {
    orm.select("restaurants", selectionObj, function(res) {
        callback(res);
    });
};

restaurant.create = function (restaurantObj, callback) {
    orm.select("restaurants", restaurantObj, function(res) {
        callback(res);
    });
};

restaurant.update = function (id, updateObj, callback) {
    var conditionObj = {"id": id};
    orm.select("restaurants", conditionObj, updateObj, function (res) {
        callback(res);
    });
};

restaurant.delete = function (id, callback) {
    var conditionObj = {"id": id};
    orm.delete("restaurants", conditionObj, function (res) {
        callback(res);
    });
};