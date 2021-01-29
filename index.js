const express = require("express");
const handleRequest = require("./handlers/request.js");
const config = require("./config/config.json");
const app = express();
app.get(config.path, handleRequest);
app.listen(config.port, () => console.log(`The server has started listening on port: ${config.port}`));
