module.exports = request => {
    let response = "";
    request.subdomains.forEach(subdomain => response += `${subdomain}.`);
    return response;
}
