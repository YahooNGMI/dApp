import axios from "axios";
import { ethers } from "ethers";
import getNFTs from "./getNFTs";

function getConnectedWalletBalances(addressinput) {


    getNFTs(addressinput).then(function (response) {

        var myNFTs = response.data.ownedNfts;
        let myNFTList = [];

        var cont = document.getElementById("myContainer");

        for (var i = 0; i < myNFTs.length; ++i) {
            // myNFTList.push(myNFTs[i]);

            var h1 = document.createElement("h1");
            var h3 = document.createElement("h3");
            const div = document.createElement("div");
            const hAddButton = document.createElement("hAddButton");
            const hButton = document.createElement("hButton");
            var modal = document.getElementById("myModal");
            // const button = document.createElement("button");

            // hButton.appendChild(button);

            div.setAttribute("class", "mynftCard");
            div.setAttribute("id", "div" + i);

            div.dataset.nftindex = i;
            const img = document.createElement("img");
            const displaytitle = document.createTextNode(myNFTs[i].title);
            const displayDescription = myNFTs[i].metadata.image; //This is for image, not decription. needs fixed.
            var displayBalance = document.createTextNode(myNFTs[i].balance);
            const hButtonValue = document.createTextNode("🔎");
            const hAddButtonValue = document.createTextNode("+");

            h1.classList.add("h1");
            img.classList.add("img");
            h3.classList.add("h3");
            hAddButton.classList.add("hButton");
            hButton.classList.add("hButton");
            img.src = displayDescription;

            h1.appendChild(displaytitle);
            h3.append("Number Owned: ", displayBalance);
            hAddButton.appendChild(hAddButtonValue);
            hButton.append(hButtonValue);
            div.appendChild(h1);
            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(hAddButton);
            div.appendChild(hButton);
            cont.appendChild(div);
            h1.onclick = function () {
                // console.log("I just clicked my NFT:", div.dataset.nftindex);
                console.log("h1");
            };
            var mySelectedNFTsList = [];

            hAddButton.onclick = function () {
                // console.log("I just clicked my NFT:", div.dataset.nftindex);
                console.log("index: ", div.dataset.nftindex);
                console.log("my selected NFTs: ", response.data.ownedNfts[div.dataset.nftindex]);
                if (mySelectedNFTsList.includes(response.data.ownedNfts[div.dataset.nftindex])) {
                    console.log("contains")
                } else {
                    console.log("does not contain");
                    console.log(response.data.ownedNfts[div.dataset.nftindex]);
                    mySelectedNFTsList.push(response.data.ownedNfts[div.dataset.nftindex]);

                    var cont = document.getElementById("myselectedNFT");

                    var h1 = document.createElement("h1");
                    var h2 = document.createElement("h2");
                    var h3 = document.createElement("h3");
                    var theirdiv = document.createElement("theirdiv");
                    div.setAttribute("class", "mynftCard");
                    div.setAttribute("id", "div");

                    const displaytitle = document.createTextNode(myNFTs.title);

                    const displayDescription = myNFTs[div.dataset.nftindex].metadata.image_url;
                    const displayBalance = document.createTextNode(myNFTs[div.dataset.nftindex].balance);

                    const img = document.createElement("img");

                    h1.classList.add("h1");
                    img.classList.add("img");
                    h3.classList.add("h3");

                    img.src = displayDescription;

                    h1.appendChild(displaytitle);
                    h2.appendChild(img);

                    h3.append("Number Owned: ", displayBalance);

                    theirdiv.appendChild(h1);
                    theirdiv.appendChild(img);
                    theirdiv.appendChild(h3);
                    cont.appendChild(div);


                }
                // console.log(mySelectedNFTsList);
            }




            hButton.onclick = function () {
                console.log("I just clicked the search button");
                modal.style.display = "block";

                var modalTitle = response.data.ownedNfts[div.dataset.nftindex].title;
                document.getElementById("title").innerHTML = modalTitle;
                var imageSource = response.data.ownedNfts[div.dataset.nftindex].metadata.image_url;
                document.getElementById("imageURL").innerHTML = "<img src='" + response.data.ownedNfts[div.dataset.nftindex].metadata.image_url + "'>";
                document.getElementById("description").innerHTML = response.data.ownedNfts[div.dataset.nftindex].description;
                document.getElementById("balance").innerHTML = response.data.ownedNfts[div.dataset.nftindex].balance;
                // document.getElementById("contractAddress").innerHTML = response.data.ownedNfts[div.dataset.nftindex].contract.address;
                // document.getElementById("createdBy").innerHTML = response.data.ownedNfts[div.dataset.nftindex].meta.created_by;
                // document.getElementById("externalURL").innerHTML = response.data.ownedNfts[div.dataset.nftindex].meta.external_url;
            }




        }
        // console.log("myNFTList:", myNFTList);

    })

}

module.exports = getConnectedWalletBalances;