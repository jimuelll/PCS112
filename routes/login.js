const express = require("express");
const router = express.Router();

//endpoint to handle student registration
router.get("/", (req, res) => {
  res.send("Student Login Endpoint");
});

module.exports = router;
