const express = require('express');
const route = require('./../routes/route');
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api_v1", route(express));

module.exports = app;