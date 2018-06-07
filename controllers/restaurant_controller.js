var express = require("express");

var router = express.Router();

var restaurant = require("../models/restaurant.js");

router.get("/", function(req, res) {
    restaurant.all(function(data) {
        console.log(data);
        res.render("index", {restaurants : data});
    });
});

router.post("/api/restaurants", function(req, res) {
    restaurant.create(req.body, function(response)  {
        console.log(response);
    });
});

router.put("/api/restaurants/:id", function(req, res) {
    restaurant.update(req.params.id, req.body, function(response) {
        console.log(response);
    });
});

router.delete("/api/restaurants/:id", function(req, res) {
    restaurant.delete(req.params.id, function (response) {
        console.log(response);
    });
});