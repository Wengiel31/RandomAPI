const formatSubdomains = require("./formatSubdomains.js");
module.exports = request => `${request.protocol}://${formatSubdomains(request)}${request.hostname}${request.originalUrl}`;
