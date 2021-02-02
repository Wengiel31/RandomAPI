const time = require("./time.js");
const formatLink = require("./formatLink.js");
module.exports = request => `${time()} - ${request.ip.slice(7)} (${request.method}: ${formatLink(request)})`;
