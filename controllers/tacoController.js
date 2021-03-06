const express = require("express");
const router = express.Router();
const tacos = require("../models/tacoModel");

router.get("/", (req, res) => {
  tacos.all((result) => {
    res.render("index", {tacos: result});
  })
});

router.post("/", (req, res) => {
  tacos.add(req.body, () => {
    res.redirect("/");
  });
});

router.put("/", (req, res) => {
  tacos.update(req.body.id, () => {
    res.redirect("/");
  });
});

module.exports = router;