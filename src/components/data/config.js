


export const axios = require("axios"); //external library  https://github.com/axios/axios
export let httpsProxyAgent = require('https-proxy-agent');

export var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');

export const mockDataUrl = "http://localhost:8080/rest/";
//const mockDataUrl = "https://api.mockaroo.com/api/c4ece440?count=1&key=87536420";
//const echoPostUrl = "http://localhost:8080/rest/user";
export const echoPostUrl = "http://localhost:8080/rest/";

export var config = {
    httpsAgent: agent
}