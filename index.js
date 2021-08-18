const express = require('express')
const bodyParser = require('body-parser')
const {initDatabase} = require('./service/db')
const addRoutes = require('./route');

const app = express();

app.use(bodyParser.json());

initDatabase((err, {db, todoModel}) => {
    if (err) {
        console.error(err);
    }

    addRoutes(app, db, todoModel);

    app.listen(6001, function () {
        console.log("Running on: 6001");
    })
});
