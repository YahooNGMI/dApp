import axios from "axios";
import { ethers } from "ethers";


function getNFTs(addressinput) {
    const apiKey = "9kNXbHSC4XEBluKh72dg644UOMK74Y7C";
    const baseNFTURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs`;
    // const tokenURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
    const ownerAddr = addressinput;
    // Construct the axios request:
    var config = {
        method: 'get',
        url: `${baseNFTURL}?owner=${ownerAddr}`
    };
    //   Getting eth balance
    var data = JSON.stringify({
        "jsonrpc": "2.0",
        "id": 1,
        "method": "eth_getBalance",
        "params": [
            ownerAddr, 'latest',
        ]
    });

    var configEth = {
        method: 'post',
        url: `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        data: data
    };

    axios(configEth)
        .then(function (response) {
            let balance = response['data']['result'];
            myBalance = ethers.utils.formatEther(balance);
            document.getElementById("myBalance").innerHTML = myBalance;
        })
        .catch(function (error) {
            console.log(error);
        });
    // Construct the axios request:
    var config = {
        method: 'get',
        url: `${baseNFTURL}?owner=${ownerAddr}`
    };
    return new Promise(function (resolve) {
        axios(config).then(function (response) {
            resolve(response)
        })
    })



}

module.exports = getNFTs;