const axios = require('axios');
const ethers = require('ethers');

// Set wallet address corresponding to vitalik.eth
const address = '0x9552cfce60429863D4A7D8205457EC4AC05857dC';

// Alchemy API key
const apiKey = '9kNXbHSC4XEBluKh72dg644UOMK74Y7C';

var data = JSON.stringify({
    "jsonrpc": "2.0",
    "id": 1,
    "method": "eth_getBalance",
    "params": [
        address, 'latest',
    ]
});

var config = {
    method: 'post',
    url: `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    data: data
};

axios(config)
    .then(function (response) {
        let balance = response['data']['result'];
        balance = ethers.utils.formatEther(balance);
        console.log(`Balance of ${address}: ${balance} ETH`);
    })
    .catch(function (error) {
        console.log(error);
    });
