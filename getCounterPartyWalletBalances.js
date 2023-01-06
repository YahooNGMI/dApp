import axios from 'axios';
import { ethers } from 'ethers';
import getNFTs from "./getNFTs";

function getCounterPartyWalletBalances(addressinput) {
    addressinput = addressinput.value;
    getNFTs(addressinput).then(function (response) {

        var NFTs = response.data.ownedNfts;
        let theirNFTList = [];
        var cont = document.getElementById("container");

        for (var i = 0; i < NFTs.length; ++i) {
            // theirNFTList.push(NFTs[i]);

            var h1 = document.createElement("h1");
            var h2 = document.createElement("h2");
            var h3 = document.createElement("h3");
            const theirdiv = document.createElement("theirdiv");
            theirdiv.setAttribute("class", "nftCard");
            theirdiv.setAttribute("id", "theirdiv" + i);
            // find which NFT was clicked
            theirdiv.dataset.nftindex = i;
            theirdiv.onclick = function () {
                console.log("I just clicked his NFT:", theirdiv.dataset.nftindex);
                console.log(response.data.ownedNfts[theirdiv.dataset.nftindex])
            };

            const displaytitle = document.createTextNode(NFTs[i].title);

            const displayDescription = NFTs[i].metadata.image;
            var displayBalance = document.createTextNode(NFTs[i].balance);
            const img = document.createElement("img");

            h1.classList.add("h1");
            h2.classList.add("h2");
            img.classList.add("img");
            h3.classList.add("h3");

            img.src = displayDescription;

            h1.appendChild(displaytitle);
            h2.appendChild(img);

            h3.append("Number Owned: ", displayBalance);

            theirdiv.appendChild(h1);
            theirdiv.appendChild(img);
            theirdiv.appendChild(h3);
            cont.appendChild(theirdiv);
        }
        console.log("their nft list:", theirNFTList);
    })

}

module.exports = getCounterPartyWalletBalances;