const express = require("express");
const router = express.Router();

//endpoint to handle student registration
router.get("/", (req, res) => {
  res.send("Student Registration Endpoint");
});

module.exports = router;
