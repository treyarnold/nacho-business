const express = require("express");
const router = express.Router();
const tacos = require("../models/tacoModel");

router.get("/", (req, res) => {
  tacos.all((result) => {
    console.log(result);
    res.render("index", {tacos: result});
  })
});

module.exports = router;