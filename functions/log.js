const formatLog = require("../functions/formatLog.js");
const fs = require("fs");
module.exports = request => fs.appendFile("log/log.log", `${formatLog(request)}\n`, {
    encoding: "utf-8"
}, error => error);
