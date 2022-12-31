import axios from "axios";
import { ethers } from "ethers";
// console.log(axios);

const submitButton = document.getElementById("submit-button");
// we use `import axios from "axios"` which is another way of saying `const axios = require("axios")`
// it is jsut better supported in the browser!

submitButton.addEventListener("click", function () {
    const addressinput = document.getElementById("address-input");
    console.log(addressinput.value);
    document.getElementById("address").innerHTML = addressinput.value;

    const apiKey = "9kNXbHSC4XEBluKh72dg644UOMK74Y7C";
    const baseNFTURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs`;
    // const tokenURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;

    const ownerAddr = addressinput.value;

    // Construct the axios request:
    var config = {
        method: 'get',
        url: `${baseNFTURL}?owner=${ownerAddr}`
    };

    axios(config).then(function (response) {
        // const nftName = document.getElementById("nft-name");
        // const imageName = response.data.ownedNfts[0].metadata.name;
        var myNFTs = response.data.ownedNfts;
        console.log(myNFTs);
        let myNFTList = [];
        for (let i = 0; i < myNFTs.length; i++) {
            console.log(response.data.ownedNfts[i].metadata.name);
            console.log(response.data.ownedNfts[i].metadata.image);
            myNFTList[i] = response.data.ownedNfts[i].metadata.name;

        }

        console.log(myNFTList);
        document.getElementById("NFT-List").innerHTML = myNFTList;
        console.log(response.data.ownedNfts[0].metadata.name);
        document.getElementById("NFTname").innerHTML = response.data.ownedNfts[0].metadata.name;
        console.log(response.data.ownedNfts[0].metadata.image);
        document.getElementById("NFTimage").src = response.data.ownedNfts[0].metadata.image;

        console.log(response.data.ownedNfts[1].metadata.name);
        document.getElementById("NFTname2").innerHTML = response.data.ownedNfts[1].metadata.name;
        console.log(response.data.ownedNfts[1].metadata.image);
        document.getElementById("NFTimage2").src = response.data.ownedNfts[1].metadata.image;

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
                balance = ethers.utils.formatEther(balance);
                console.log(`Balance of ${address}: ${balance} ETH`);
                document.getElementById("balance").innerHTML = balance;
            })
            .catch(function (error) {
                console.log(error);
            });


    });




});

