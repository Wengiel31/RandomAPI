# RandomAPI
RandomAPI is a super simple express API generating random numbers
# Usage
### URL queries
1. `min` (required) - min random number (inclusive) [must be >= 0 & < max]
1. `max` (required) - max random number (exclusive) [must be > min]
1. `num` (optional) - amount of random number to generate (default: 1e5)<br /><br />
Feel free to edit `config/config.json` to change: server port, request path, `num` limit
### HTTP Headers
**Request**<br />
`GET /?`min`=1&`max`=10&`num`=100 HTTP/1.1`<br /><br />
**Response**<br />
`HTTP/1.1 200 OK`<br />
### Response body
*Randomly generated array of numbers:*
<br />
`[0,9,1,9,5,...0,9,4,4,6]`<br /><br />
The amout of numbers is defined in the `num` request header
# Changelog
02.02.2021. - Added logging & fixed readme typo
29.01.2021. - Initial release
