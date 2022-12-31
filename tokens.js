const axios = require("axios");

// Wallet address
const address = "0x9552cfce60429863D4A7D8205457EC4AC05857dC";

// Alchemy URL --> Replace with your API key at the end
const baseURL = `https://eth-mainnet.g.alchemy.com/v2/9kNXbHSC4XEBluKh72dg644UOMK74Y7C`;

// Data for making the request to query token balances
const data = JSON.stringify({
    jsonrpc: "2.0",
    method: "alchemy_getTokenBalances",
    headers: {
        "Content-Type": "application/json",
    },
    params: [`${address}`],
    id: 42,
});

// config object for making a request with axios
const config = {
    method: "post",
    url: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    data: data,
};

// Make the request and print the formatted response:
axios(config)
    .then((response) => console.log(response["data"]["result"]))
    .catch((error) => console.log("error", error));