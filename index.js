//jshint esversion: 6
const express = require('express'),
    bodyparser = require('body-parser'),
    path = require('path'),
    process = require('process');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/location/moshood', (req, res) => {
    res.sendFile(__dirname + '/public/location/moshood.html');
});
app.get('/location/law-school', (req, res) => {
    res.sendFile(__dirname + '/public/location/law-school.html');
});
app.get('/location/landmark', (req, res) => {
    res.sendFile(__dirname + '/public/location/landmark.html');
});
app.get('/location/jide-oki', (req, res) => {
    res.sendFile(__dirname + '/public/location/jide-oki.html');
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("App listening on port " + port));