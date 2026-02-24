const express = require("express");
const app = express();

const studentRegistration = require("./routes/registration");
const getEmployees = require("./routes/getemployees");
const studentLogin = require("./routes/login");

const PORT = process.env.PORT || 7000;

//endpoint for student registration
app.use("/registration", studentRegistration);
app.use("/login", studentLogin);
app.use("/getemployees", getEmployees);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
