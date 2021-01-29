module.exports = (response, code) => {
    switch (code) {
        case 400:
            response.status(400).end("Bad Request", "utf-8");
            break;
        case 416:
            response.status(416).end("Range Not Satisfiable", "utf-8");
            break;
        case 500:
            response.status(500).end("Internal Server Error", "utf-8");
            break;
    }
}
