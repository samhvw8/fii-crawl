var http = require("https");

var options = {
    "method": "GET",
    "hostname": "technical.fiintrade.vn",
    "port": null,
    "path": "/PriceDepth/GetPriceDepth?language=vi&Code=HAMIS",
    "headers": {
        "accept": "application/json, text/plain, */*",
        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkY4MDA1REIxQkI0MzY4Q0Q3RkJFMUUxRTlEQjkwMTg2MUY5NEFGMTEiLCJ0eXAiOiJKV1QiLCJ4NXQiOiItQUJkc2J0RGFNMV92aDRlbmJrQmhoLVVyeEUifQ.eyJuYmYiOjE2NDA4NjkzMTQsImV4cCI6MTY0MDg5NzkxNCwiaXNzIjoiaHR0cHM6Ly9hdXRoLmZpaW50cmFkZS52biIsImF1ZCI6WyJodHRwczovL2F1dGguZmlpbnRyYWRlLnZuL3Jlc291cmNlcyIsIkZpaW5UcmFkZS5NYXJrZXQiLCJGaWluVHJhZGUuQ29yZSIsIkZpaW5UcmFkZS5SZWFsdGltZSIsIkZpaW5UcmFkZS5GdW5kYW1lbnRhbCJdLCJjbGllbnRfaWQiOiJTdG94UGx1cy5GaWluVHJhZGUuU1BBIiwic3ViIjoiMTgzMjgzIiwiYXV0aF90aW1lIjoxNjQwODY5MzE0LCJpZHAiOiJsb2NhbCIsInVzZXJfaWQiOiIxODMyODMiLCJ1c2VyX25hbWUiOiJmZXdzbWl0aDg3QGdtYWlsLmNvbSIsIm5hbWUiOiIiLCJnaXZlbl9uYW1lIjoiRmV3IiwiZmFtaWx5X25hbWUiOiJTbWl0aCIsIm1pZGRsZV9uYW1lIjoiIiwiZW1haWwiOiJmZXdzbWl0aDg3QGdtYWlsLmNvbSIsInNlcnZpY2VfdHlwZSI6IkZpaW5Hcm91cC5GaWluVHJhZGUiLCJsaXN0X3BhY2thZ2UiOiJGaWluVHJhZGUuVHJpYWwiLCJsaXN0X2ZlYXR1cmUiOiIiLCJsaXN0X2FwaSI6IiIsInJvbGUiOiJDVVNUT01FUiIsImdyb3VwX25hbWUiOiJJbmRpdmlkdWFsIiwic3RhcnRfZGF0ZSI6IjMwLzEyLzIwMjEiLCJlbmRfZGF0ZSI6IjEzLzAxLzIwMjIiLCJoaXRjb3VudF9wZXJtb250aCI6IjAiLCJjb21ncm91cF9saW1pdCI6IiIsInRpY2tlcl9saW1pdCI6IiIsInRpbWVyYW5nZV9saW1pdCI6IjAiLCJkYXRhcmFuZ2VfbGltaXQiOiIwIiwicGVyX21pbnV0ZSI6IjAiLCJwZXJfaG91ciI6IjAiLCJwZXJfZGF5IjoiMCIsInBlcl9tb250aCI6IjAiLCJlbmFibGVkIjoiVHJ1ZSIsImxhc3RfYXR0ZW1wdCI6IjEyLzMwLzIwMjEgNDo1NDoyMSBQTSIsImxhc3RfYXR0ZW1wdF9zdGF0dXMiOiJTVUNDRVNTIiwiZmluZ2VycHJpbnQiOiI0MDExOWI5OWViOTgzNjE4NDMwYmUyNDE2ZTA3YmMxNyIsImNsaWVudHR5cGUiOiJXRUJDTElFTlQiLCJzY29wZSI6WyJvcGVuaWQiLCJGaWluVHJhZGUuTWFya2V0IiwiRmlpblRyYWRlLkNvcmUiLCJGaWluVHJhZGUuUmVhbHRpbWUiLCJGaWluVHJhZGUuRnVuZGFtZW50YWwiXSwiYW1yIjpbInB3ZCJdfQ.ZXijIY6A2N5mFIqaMuhu5XZWb6HIEcjnFaSjapF-og-mFZF6YJbumXGtF8P14ugyMM7vWVStXMA0txxINr98PEpbg8ZD7ge2jGuZ8oYKVc63wts0wgD-e3bacjMLQF1KBy1w8VMGnZg_-W1gyC_LQpI1cUs1lQCpXhOkxaVbOtv7QkWP6Sk9p3QJPK3FFuvyzd32eVmmvEAYyLynvxEyxe_9NtnMGbWisYx53qtl00riR6i4-HggVjmywVsBImltzSDYBBCTwfGEWZj1Cb1zpyQZjJLTQOCrF__OM-WeyIxtdes9SLhOuHAUDbq1j4JbxhuoMqd64qH0GJGKyBv6WA",
        "referer": "https://fiintrade.vn/",
    }
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();