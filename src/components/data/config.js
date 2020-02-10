


export const axios = require("axios"); //external library  https://github.com/axios/axios
export let httpsProxyAgent = require('https-proxy-agent');

export var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');

export const mockDataUrl = "http://localhost:8080/rest/";

export const echoPostUrl = "http://localhost:8080/rest/";

export var config = {
    httpsAgent: agent
}