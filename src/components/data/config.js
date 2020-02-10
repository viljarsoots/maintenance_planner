


const axios = require("axios"); //external library  https://github.com/axios/axios
let httpsProxyAgent = require('https-proxy-agent');

var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');

const mockDataUrl = "http://localhost:8080/rest/";
//const mockDataUrl = "https://api.mockaroo.com/api/c4ece440?count=1&key=87536420";
//const echoPostUrl = "http://localhost:8080/rest/user";
const echoPostUrl = "http://localhost:8080/rest/user";

var config = {
    httpsAgent: agent
}