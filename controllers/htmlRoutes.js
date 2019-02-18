let express = require("express");
let router = express.Router();
let db = require("../models");

// Get route get all burgers and
router.get(`/`, function(req, res) {
  db.Burger.findAll({
    order: [["id", "DESC"]]
  }).then(function(results) {
    res.render("index", { burgers: results });
  });
});

router.post(`/new`, function(req, res) {
  let newBurger = req.body.newBurger;
  db.Burger.create({
    burger_name: newBurger
  }).then(function(results) {
    res.redirect(`/`);
  });
});

router.put(`/update`, function(req, res) {
  let update = req.body;
  db.Burger.update(
    {
      devoured: true,
      name: update.name
    },
    {
      where: {
        id: update.id
      }
    }
  ).then(function(result) {
    res.redirect(`/`);
  });
});

module.exports = router;
