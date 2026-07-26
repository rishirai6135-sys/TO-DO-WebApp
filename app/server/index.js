const express = require("express");
const app = express();
const path = require('path');

let port = 8080;
~
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/js', express.static(path.join(__dirname, '../js')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'))
});

app.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'))
});

app.get("/forget-password.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/forget-password.html'))
});

app.get("/terms.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/terms.html'))
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});