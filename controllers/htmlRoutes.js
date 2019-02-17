let express = require("express");
let router = express.Router();
let burger = require("../models/burger");

// Get route get all burgers and
router.get(`/`, function(req, res) {
  burger.selectAll(function(results) {
    res.render("index", { burgers: results });
  });
});

router.post(`/new`, function(req, res) {
  let newBurger = req.body.newBurger;
  burger.add(newBurger, function(results) {
    res.redirect(`/`);
  });
});

router.put(`/update`, function(req, res) {
  let id = req.body.id;
  burger.update(id, function(results) {
    res.redirect(`/`);
  });
});

module.exports = router;
