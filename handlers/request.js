const sendResponse = require("../functions/sendResponse.js");
const log = require("../functions/log.js");
const config = require("../config/config.json");
module.exports = (request, response) => {
    response.set({
        "Access-Control-Allow-Origin": "*"
    });
    if (log(request)) sendResponse(response, 500);
    else {
        if (!request.query.min)                         sendResponse(response, 400);
        else if (!request.query.max)                    sendResponse(response, 400);
        else if (isNaN(request.query.min))              sendResponse(response, 400);
        else if (isNaN(request.query.max))              sendResponse(response, 400);
        else if (request.query.min < 0)                 sendResponse(response, 416);
        else if (request.query.min > request.query.max) sendResponse(response, 416);
        else if (!request.query.num) {
            const min = request.query.min;
            const max = request.query.max;
            const random = Math.floor(Math.random() * (max - min + 1) + min);
            response.status(200).end(random.toString());
        } else {
            if (isNaN(request.query.num))                 sendResponse(response, 400);
            else if (request.query.num < 1)               sendResponse(response, 416);
            else if (request.query.num > config.numLimit) sendResponse(response, 416);
            else {
                const min = request.query.min;
                const max = request.query.max;
                const numbers = [];
                for (let i = 0; i < request.query.num; i++) {
                    const random = Math.floor(Math.random() * (max - min + 1) + min);
                    numbers.push(random);
                }
                response.status(200).end(JSON.stringify(numbers));
            }
        }
    }
}
