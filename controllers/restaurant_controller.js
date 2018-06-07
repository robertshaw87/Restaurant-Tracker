var express = require("express");

var router = express.Router();

var movie = require("../models/movie.js");

router.get("/", function (req, res) {
    movie.all(function (data) {
        console.log(data);
        res.render("index", {movies : data});
    });
});

router.post("/api/movies", function (req, res) {
    movie.create(req.body, function (response)  {
        console.log(response);
    });
});

router.put("/api/movies/:id", function (req, res) {
    movie.update(req.params.id, req.body, function (response) {
        console.log(response);
    });
});

router.delete("/api/movies/:id", function (req, res) {
    movie.delete(req.params.id, function (response) {
        console.log(response);
    });
});