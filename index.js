
const express = require("express");
const app = express();
const router = require('express').Router()
const http = require('http')
const server = require('./src/frameworks_drivers/server/server')
const sequelize = require('./src/frameworks_drivers/database/sequelize')
const cors = require("cors");

const port = process.env.PORT || 5555

let myserver = http.Server(server);

app.use(cors('*'));

try {
    ("step1")
   
    sequelize.sync()
   
} catch (error) {
   
}
try {
    console.log("server running on ",port)

    myserver.listen(port)
} catch (error) {
    console.log('failed to start the server')
}
