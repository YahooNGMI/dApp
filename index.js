import axios from "axios";
import { ethers } from "ethers";

const submitButton = document.getElementById("submit-button");

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

    // Construct the axios request:
    var config = {
        method: 'get',
        url: `${baseNFTURL}?owner=${ownerAddr}`
    };

    axios(config).then(function (response) {

        var myNFTs = response.data.ownedNfts;
        console.log(myNFTs);

        var cont = document.getElementById("container");

        for (var i = 0; i < myNFTs.length; ++i) {

            var h1 = document.createElement("h1");
            var h2 = document.createElement("h2");
            var h3 = document.createElement("h3");
            var div = document.createElement("div");
            div.setAttribute("class", "square");
            div.setAttribute("id", "div" + i);

            const displaytitle = document.createTextNode(myNFTs[i].title);

            const displayDescription = myNFTs[i].metadata.image;
            var displayBalance = document.createTextNode(myNFTs[i].balance);
            console.log(displayDescription);
            const img = document.createElement("img");
            // displaytitle.classList.add("h1");
            h1.classList.add("h1");
            h2.classList.add("h2");
            img.classList.add("img");
            h3.classList.add("h3");
            // img.style.width = "50%";
            // img.style.height = "50%";
            img.src = displayDescription;

            h1.appendChild(displaytitle);
            h2.appendChild(img);

            h3.append("Number Owned: ", displayBalance);

            div.appendChild(h1);
            div.appendChild(img);
            div.appendChild(h3);
            cont.appendChild(div);
            

        }


    });
});

// console.log(myNFTList);
        // document.getElementById("NFT-List").innerHTML = myNFTList;
        // console.log(response.data.ownedNfts[0].metadata.name);
        // document.getElementById("NFTname").innerHTML = response.data.ownedNfts[0].metadata.name;
        // console.log(response.data.ownedNfts[0].metadata.image);
        // document.getElementById("NFTimage").src = response.data.ownedNfts[0].metadata.image;

        // console.log(response.data.ownedNfts[1].metadata.name);
        // document.getElementById("NFTname2").innerHTML = response.data.ownedNfts[1].metadata.name;
        // console.log(response.data.ownedNfts[1].metadata.image);
        // document.getElementById("NFTimage2").src = response.data.ownedNfts[1].metadata.image;