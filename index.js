import axios from "axios";

import { ethers } from "ethers";
// const { Network } = require('@alch/alchemy-sdk');
const getCounterPartyWalletBalances = require("./getCounterPartyWalletBalances");
const getConnectedWalletBalances = require("./getConnectedWalletBalances");
const getNFTs = require("./getNFTs");

const walletConnect = document.getElementById("connectWallet");
const submitButton = document.getElementById("submit-button");
var mySelectedNFTsList = [];

walletConnect.addEventListener("click", function () {
    window.ethereum.request({
        method: "eth_requestAccounts",
    }).then(myAddress => {
        // console.log(myAddress[0]);
        document.getElementById("myAddress").innerHTML = myAddress[0];
        getConnectedWalletBalances(myAddress[0]);
    });
});

if (submitButton) {
    submitButton.addEventListener("click", function () {
        const addressinput = document.getElementById("address-input");
        document.getElementById("address").innerHTML = addressinput.value;
        getCounterPartyWalletBalances(addressinput);
    });
} else { }

// document.addEventListener("click", function (e) {
//     e = e || window.event;
//     var target = e.target || e.srcElement,
//         text = target.textContent || target.innerText;
//     if (target.classList == "mynftCard") {
//         let newStr = target.id.replace(/d|i|v/g, "");
//         const apiKey = "9kNXbHSC4XEBluKh72dg644UOMK74Y7C";
//         const baseNFTURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs`;
//         //     // const tokenURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
//         const ownerAddr = myAddress.innerHTML;
//         // Construct the axios request:
//         var config = {
//             method: 'get',
//             url: `${baseNFTURL}?owner=${ownerAddr}`
//         };
//         //   Getting eth balance
//         var data = JSON.stringify({
//             "jsonrpc": "2.0",
//             "id": 1,
//             "method": "eth_getBalance",
//             "params": [
//                 ownerAddr, 'latest',
//             ]
//         });

//         var configEth = {
//             method: 'post',
//             url: `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             },
//             data: data
//         };

//         axios(configEth)
//             .then(function (response) {
//                 let balance = response['data']['result'];
//                 myBalance = ethers.utils.formatEther(balance);
//                 // console.log(`Balance of ${ownerAddr}: ${myBalance} ETH`);
//                 document.getElementById("myBalance").innerHTML = myBalance;
//             })
//             .catch(function (error) {
//                 // console.log(error);
//             });
//         // Construct the axios request:
//         var config = {
//             method: 'get',
//             url: `${baseNFTURL}?owner=${ownerAddr}`
//         };
//         axios(config).then(function (response) {
//             // console.log(target);
//             console.log(mySelectedNFTsList)
//             var myNFTs = response.data.ownedNfts[newStr];
//             // console.log(mySelectedNFTsList)
//             console.log(myNFTs);
//             if (mySelectedNFTsList.indexOf(myNFTs) !== -1) {
//                 console.log('The array contains the object');
//             } else {
//                 console.log(mySelectedNFTsList);
//                 console.log('The array does not contain the object');
//                 mySelectedNFTsList.push(myNFTs);
//             }

//             var cont = document.getElementById("myselectedNFT");

//             var h1 = document.createElement("h1");
//             var h2 = document.createElement("h2");
//             var h3 = document.createElement("h3");
//             var div = document.createElement("div");
//             div.setAttribute("class", "mynftCard");
//             div.setAttribute("id", "div");

//             const displaytitle = document.createTextNode(myNFTs.title);

//             const displayDescription = myNFTs.metadata.image;
//             var displayBalance = document.createTextNode(myNFTs.balance);

//             const img = document.createElement("img");

//             h1.classList.add("h1");
//             img.classList.add("img");
//             h3.classList.add("h3");

//             img.src = displayDescription;

//             h1.appendChild(displaytitle);
//             h2.appendChild(img);

//             h3.append("Number Owned: ", displayBalance);

//             div.appendChild(h1);
//             div.appendChild(img);
//             div.appendChild(h3);
//             cont.appendChild(div);
//         })

//     }
//     else if (target.classList == "nftCard") {

//         let newStr = target.id.replace(/t|h|e|i|r|d|i|v/g, "");

//         const addressinput = document.getElementById("address-input");

//         const apiKey = "9kNXbHSC4XEBluKh72dg644UOMK74Y7C";
//         const baseNFTURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs`;
//         //     // const tokenURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
//         const ownerAddr = addressinput.value;

//         var config = {
//             method: 'get',
//             url: `${baseNFTURL}?owner=${ownerAddr}`
//         };
//         //   Getting eth balance
//         var data = JSON.stringify({
//             "jsonrpc": "2.0",
//             "id": 1,
//             "method": "eth_getBalance",
//             "params": [
//                 ownerAddr, 'latest',
//             ]
//         });

//         var configEth = {
//             method: 'post',
//             url: `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             },
//             data: data
//         };

//         axios(configEth)
//             .then(function (response) {
//                 let balance = response['data']['result'];
//                 myBalance = ethers.utils.formatEther(balance);
//                 document.getElementById("myBalance").innerHTML = myBalance;
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//         // Construct the axios request:
//         var config = {
//             method: 'get',
//             url: `${baseNFTURL}?owner=${ownerAddr}`
//         };

//         axios(config).then(function (response) {

//             var myNFTs = response.data.ownedNfts[newStr];

//             var cont = document.getElementById("selectedNFT");

//             var h1 = document.createElement("h1");
//             var h2 = document.createElement("h2");
//             var h3 = document.createElement("h3");

//             var div = document.createElement("div");
//             div.setAttribute("class", "nftCard");
//             div.setAttribute("id", "div");

//             const displaytitle = document.createTextNode(myNFTs.title);

//             const displayDescription = myNFTs.metadata.image;
//             var displayBalance = document.createTextNode(myNFTs.balance);

//             const img = document.createElement("img");

//             h1.classList.add("h1");
//             h2.classList.add("h2");
//             img.classList.add("img");
//             h3.classList.add("h3");

//             img.src = displayDescription;

//             h1.appendChild(displaytitle);
//             h2.appendChild(img);
//             h3.append("Number Owned: ", displayBalance);


//             div.appendChild(h1);
//             div.appendChild(img);
//             div.appendChild(h3);
//             cont.appendChild(div);
//         })
//     } else {
//         console.log("Not an NFT Card")
//     }
// }, false);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// function getCounterPartyWalletBalances () {

//     const apiKey = "9kNXbHSC4XEBluKh72dg644UOMK74Y7C";
//     const baseNFTURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs`;

//     const inputAddr = addressinput.value;

//     var config = {
//         method: 'get',
//         url: `${baseNFTURL}?owner=${inputAddr}`
//     };
//     //   Getting eth balance
//     var data = JSON.stringify({
//         "jsonrpc": "2.0",
//         "id": 1,
//         "method": "eth_getBalance",
//         "params": [
//             inputAddr, 'latest',
//         ]
//     });

//     var configEth = {
//         method: 'post',
//         url: `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`,
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         data: data
//     };

//     axios(configEth)
//         .then(function (response) {
//             let balance = response['data']['result'];
//             balance = ethers.utils.formatEther(balance);
//             console.log(`Balance of ${address}: ${balance} ETH`);
//             document.getElementById("balance").innerHTML = balance;
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

//     // Construct the axios request:
//     var config = {
//         method: 'get',
//         url: `${baseNFTURL}?owner=${inputAddr}`
//     };

//     axios(config).then(function (response) {

//         var NFTs = response.data.ownedNfts;
//         console.log(NFTs);
//         let theirNFTList = [];
//         var cont = document.getElementById("container");

//         for (var i = 0; i < NFTs.length; ++i) {
//             theirNFTList.push(NFTs[i]);
//             var h1 = document.createElement("h1");
//             var h2 = document.createElement("h2");
//             var h3 = document.createElement("h3");
//             var theirdiv = document.createElement("theirdiv");
//             theirdiv.setAttribute("class", "nftCard");
//             theirdiv.setAttribute("id", "theirdiv" + i);

//             const displaytitle = document.createTextNode(NFTs[i].title);

//             const displayDescription = NFTs[i].metadata.image;
//             var displayBalance = document.createTextNode(NFTs[i].balance);
//             console.log(displayDescription);
//             const img = document.createElement("img");

//             h1.classList.add("h1");
//             h2.classList.add("h2");
//             img.classList.add("img");
//             h3.classList.add("h3");

//             img.src = displayDescription;

//             h1.appendChild(displaytitle);
//             h2.appendChild(img);

//             h3.append("Number Owned: ", displayBalance);

//             theirdiv.appendChild(h1);
//             theirdiv.appendChild(img);
//             theirdiv.appendChild(h3);
//             cont.appendChild(theirdiv);
//         }
//     });
//     console.log(theirNFTList);
// }