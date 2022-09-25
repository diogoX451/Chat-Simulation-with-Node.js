const express = require("express");
const router = express.Router();
router
  .get("/chat", (req, res) => {
    res.render("chat");
    const teste = req.query;
    console.log(teste);
  })
  .post("/chatCreate", (req, res) => {});
module.exports = router;
