// Required dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

// Configure bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Listen for port
app.listen(PORT, function() {
    console.log(`Server now on port ${PORT}`);
});