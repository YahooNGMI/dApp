import axios from "axios";

import { ethers } from "ethers";
// const { Network } = require('@alch/alchemy-sdk');

const walletConnect = document.getElementById("connectWallet");
const submitButton = document.getElementById("submit-button");

walletConnect.addEventListener("click", function () {
    window.ethereum.request({
        method: "eth_requestAccounts",
    }).then(myAddress => {
        console.log(myAddress[0]);
        document.getElementById("myAddress").innerHTML = myAddress[0];
        const apiKey = "9kNXbHSC4XEBluKh72dg644UOMK74Y7C";
        const baseNFTURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs`;
        // const tokenURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
        const ownerAddr = myAddress[0];
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
                console.log(`Balance of ${myAddress}: ${myBalance} ETH`);
                document.getElementById("myBalance").innerHTML = myBalance;
            })
            .catch(function (error) {
                console.log(error);
            });
        // Construct the axios request:
        var config = {
            method: 'get',
            url: `${baseNFTURL}?owner=${myAddress}`
        };

        axios(config).then(function (response) {

            var myNFTs = response.data.ownedNfts;
            console.log(myNFTs);

            var cont = document.getElementById("myContainer");

            for (var i = 0; i < myNFTs.length; ++i) {

                var h1 = document.createElement("h1");
                var h2 = document.createElement("h2");
                var h3 = document.createElement("h3");
                var div = document.createElement("div");
                div.setAttribute("class", "mynftCard");
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
        })
    })
});
if (submitButton) {
    submitButton.addEventListener("click", function () {
        const addressinput = document.getElementById("address-input");
        console.log("were address");
        console.log(addressinput.value);
        document.getElementById("address").innerHTML = addressinput.value;
        const apiKey = "9kNXbHSC4XEBluKh72dg644UOMK74Y7C";
        const baseNFTURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs`;
        // const tokenURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
        const inputAddr = addressinput.value;
        // Construct the axios request:
        var config = {
            method: 'get',
            url: `${baseNFTURL}?owner=${inputAddr}`
        };
        //   Getting eth balance
        var data = JSON.stringify({
            "jsonrpc": "2.0",
            "id": 1,
            "method": "eth_getBalance",
            "params": [
                inputAddr, 'latest',
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
            url: `${baseNFTURL}?owner=${inputAddr}`
        };

        axios(config).then(function (response) {

            var myNFTs = response.data.ownedNfts;
            console.log(myNFTs);

            var cont = document.getElementById("container");

            for (var i = 0; i < myNFTs.length; ++i) {

                var h1 = document.createElement("h1");
                var h2 = document.createElement("h2");
                var h3 = document.createElement("h3");
                var theirdiv = document.createElement("theirdiv");
                theirdiv.setAttribute("class", "nftCard");
                theirdiv.setAttribute("id", "theirdiv" + i);

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

                theirdiv.appendChild(h1);
                theirdiv.appendChild(img);
                theirdiv.appendChild(h3);
                cont.appendChild(theirdiv);
            }
        });
    });
} else { }

document.addEventListener("click", function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
    console.log("Clicky");
    console.log(text);
    console.log(target);
    if (target.classList == "mynftCard") {
        console.log("I'm NOT GAY");
        console.log(target.id);
        let newStr = target.id.replace(/d|i|v/g, "");
        console.log(newStr);
        console.log(myAddress.innerHTML);
        // window.ethereum.request({
        //     method: "eth_requestAccounts",
        // }).then(myAddress => {
        //     console.log(myAddress[0]);
        //     document.getElementById("myAddress").innerHTML = myAddress[0];
        const apiKey = "9kNXbHSC4XEBluKh72dg644UOMK74Y7C";
        const baseNFTURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs`;
        //     // const tokenURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
        const ownerAddr = myAddress.innerHTML;
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
                console.log(`Balance of ${ownerAddr}: ${myBalance} ETH`);
                document.getElementById("myBalance").innerHTML = myBalance;
            })
            .catch(function (error) {
                // console.log(error);
            });
        // Construct the axios request:
        var config = {
            method: 'get',
            url: `${baseNFTURL}?owner=${ownerAddr}`
        };

        axios(config).then(function (response) {

            var myNFTs = response.data.ownedNfts[newStr];

            console.log(myNFTs);

            var cont = document.getElementById("myselectedNFT");

            var h1 = document.createElement("h1");
            var h2 = document.createElement("h2");
            var h3 = document.createElement("h3");
            var div = document.createElement("div");
            div.setAttribute("class", "mynftCard");
            div.setAttribute("id", "div");

            const displaytitle = document.createTextNode(myNFTs.title);

            const displayDescription = myNFTs.metadata.image;
            var displayBalance = document.createTextNode(myNFTs.balance);
            console.log(displayDescription);
            const img = document.createElement("img");

            h1.classList.add("h1");
            h2.classList.add("h2");
            img.classList.add("img");
            h3.classList.add("h3");

            img.src = displayDescription;

            h1.appendChild(displaytitle);
            h2.appendChild(img);

            h3.append("Number Owned: ", displayBalance);

            div.appendChild(h1);
            div.appendChild(img);
            div.appendChild(h3);
            cont.appendChild(div);
        })

    }
    else if (target.classList == "nftCard") {
        console.log("I'm GAY");
        // console.log(target.id);
        let newStr = target.id.replace(/t|h|e|i|r|d|i|v/g, "");
        console.log(newStr);
        const addressinput = document.getElementById("address-input");
        console.log(addressinput.value);
        // window.ethereum.request({
        //     method: "eth_requestAccounts",
        // }).then(myAddress => {
        //     console.log(myAddress[0]);
        //     document.getElementById("myAddress").innerHTML = myAddress[0];
        const apiKey = "9kNXbHSC4XEBluKh72dg644UOMK74Y7C";
        const baseNFTURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs`;
        //     // const tokenURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
        const ownerAddr = addressinput.value;
        console.log(ownerAddr);
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
                console.log(`Balance of ${ownerAddr}: ${myBalance} ETH`);
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

        axios(config).then(function (response) {

            var myNFTs = response.data.ownedNfts[newStr];

            console.log(myNFTs);

            var cont = document.getElementById("selectedNFT");

            var h1 = document.createElement("h1");
            var h2 = document.createElement("h2");
            var h3 = document.createElement("h3");
            var div = document.createElement("div");
            div.setAttribute("class", "nftCard");
            div.setAttribute("id", "div");

            const displaytitle = document.createTextNode(myNFTs.title);

            const displayDescription = myNFTs.metadata.image;
            var displayBalance = document.createTextNode(myNFTs.balance);
            console.log(displayDescription);
            const img = document.createElement("img");

            h1.classList.add("h1");
            h2.classList.add("h2");
            img.classList.add("img");
            h3.classList.add("h3");

            img.src = displayDescription;

            h1.appendChild(displaytitle);
            h2.appendChild(img);

            h3.append("Number Owned: ", displayBalance);

            div.appendChild(h1);
            div.appendChild(img);
            div.appendChild(h3);
            cont.appendChild(div);
        })
    } else {
        console.log("Not an NFT Card")
    }
}, false);
