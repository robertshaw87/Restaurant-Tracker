var express = require("express");

var router = express.Router();

var restaurant = require("../models/restaurant.js");

router.get("/", function (req, res) {
    restaurant.all(function (data) {
        // console.log(data);
        res.render("index", {restaurants : data});
    });
});

router.post("/api/restaurants", function (req, res) {
    restaurant.create(req.body, function (response)  {
        res.redirect("/");
    });
});

router.put("/api/restaurants/:id", function (req, res) {
    restaurant.update(req.params.id, req.body, function (response) {
        console.log(response);
        if (response.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/restaurants/:id", function (req, res) {
    restaurant.delete(req.params.id, function (response) {
        console.log(response);
        if (response.affectedRows == 0) {
            // If no rows were deleted, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router