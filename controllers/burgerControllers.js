var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.Burger(function(burger){
    res.render('index', {burger: burger});
})
    });

router.post("/api/burgers", function (req, res) {
  burger.create(req.body.burger, function (result) {
      res.json({ id: result.insertId });
    }); 
});

router.put("/api/burgers/:id", function (req, res) {
  burger.update(req.params.id, function (data) {
    res.json(data);
  })
});

module.exports = router;
