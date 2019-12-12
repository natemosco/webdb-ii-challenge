const express = require("express");
const helmet = require("helmet");

const carsRouter = require("../cars/carsRouter");

const server = express();

const middleware = [helmet(), express.json()];
server.use(middleware);

server.use("/api/cars", carsRouter);

module.exports = server;
