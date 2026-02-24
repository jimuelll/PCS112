const express = require("express");
const mysql = require("mysql2");
const router = express.Router();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pcs112employees",
});

connection.connect();

//endpoint to handle student registration
router.get("/", (req, res) => {
  connection.query("SELECT * FROM userdata", (err, rows, fields) => {
    if (err) throw error;
    res.json(rows);
  });
});

module.exports = router;
