const express = require("express");
const app = express();
const path = require('path');

let port = 8080;

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/forgot-password", (req, res) => {
    res.render("forget-password");
});

app.get("/main", (req, res) => {
    res.render("main");
});

app.get("/terms", (req, res) => {
    res.render("terms");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
