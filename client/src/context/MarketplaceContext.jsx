import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import { NFTStorage, Blob } from "nft.storage";

import { networks, nftContractABI, nftContractAddress } from '../utils/constants';

export const MarketplaceContext = React.createContext();

const { ethereum } = window;

const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE4ZThFQjVBOTFFYjMzRjJCNTExN0JlODIwRTNEMzZhN0U5MEY5YUQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0NzcwNDQ1NjcyMCwibmFtZSI6Ik5GVCBNYXJrZXRwbGFjZSJ9.Fr1XcsAseRSZNeF7Nqc6jMyWEjfJ_Cq9RMxcWLKGk1A" })

const getEthereumContract = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const marketplaceContract = new ethers.Contract(nftContractAddress, nftContractABI, signer);
    const network = await provider.getNetwork();
    const chainId = network.chainId;
    console.log(network, chainId);

    marketplaceContract.on("Transfer", (from, to, amount, event) => {
        console.log(`${from} sent ${ethers.utils.formatEther(amount)} to ${to}`);
    });

    return marketplaceContract;
};


export const MarketplaceProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState('');
    const [itemDetails, setItemDetails] = useState({ image: { preview: "", raw: "", visible: false, file: '' }, name: "", extlink: "", description: "", price: "" });
    const [uploadStatus, setUploadStatus] = useState({
        imageUploaded: false,
        metadataUploaded: false,
        transactionApproved: false,
        nftListed: false,
        nftCreated: false
    });

    function handleChange(name) {
        setUploadStatus(prevState => ({
            ...prevState,
            [name]: true,
        }));
    }


    //storing file and json metadata on IPFS storage
    const storeNFTonIPFS = async () => {
        const fileCid = await client.storeBlob(new Blob([itemDetails.image.file]));
        handleChange("imageUploaded");

        const fileUrl = "https://ipfs.io/ipfs/" + fileCid;

        const nftData = {
            "name": itemDetails.name,
            "image": fileUrl,
            "description": itemDetails.description,
            "extlink": itemDetails.extlink
        };

        const metadata = new Blob([JSON.stringify(nftData)], { type: 'application/json' });
        const metadataCid = await client.storeBlob(metadata);
        const metadataUrl = "https://ipfs.io/ipfs/" + metadataCid;
        handleChange("metadataUploaded");

        return metadataUrl;

    };

    //Listing the NFT on the market for sale
    const listNFTonMarket = async (tokenId, price, marketplaceContract) => {
        try {
            if (!ethereum) return alert("Please install Metamask");

            const listingHash = await marketplaceContract.createMarketItem(tokenId, price);

            await listingHash.wait();
            handleChange("nftListed");

        } catch (error) {
            console.log(error);
        }
    };


    //Creating NFT
    const createItem = async (listNft) => {
        try {
            if (!ethereum) return alert("Please install Metamask");

            const { price } = itemDetails;
            const marketplaceContract = await getEthereumContract();

            const uri = await storeNFTonIPFS();

            const parsedAmount = price ? ethers.utils.parseEther(price) : ethers.utils.parseEther(0.1);

            const mintHash = await marketplaceContract.createToken(uri, parsedAmount);
            console.log(mintHash);

            handleChange("transactionApproved");
            const rc = await mintHash.wait();

            const event = rc.events.find(event => event.event === 'Transfer');      //getting tokenId value returned from the call
            let [from, to, tokenId] = event.args;
            console.log(from, to, tokenId); 

            tokenId = parseInt(tokenId._hex, 16);
            console.log(tokenId);
            handleChange("nftCreated");

            if (listNft) { await listNFTonMarket(tokenId, parsedAmount, marketplaceContract);
}

        } catch (error) {
            console.log(error);
        }
    };

    const fetchNFTs = async () => {
        console.log("fetch my nfts");

        try {
            if (!ethereum) return alert("Please install Metamask");

            const marketplaceContract = await getEthereumContract();
            const myNFTs = await marketplaceContract.fetchMarketItems();

            console.log(myNFTs);
        } catch (error) {

        }
    }



    // useEffect(() => {

    // }, []);


    return (
        <MarketplaceContext.Provider value={{ itemDetails, setItemDetails, createItem, fetchNFTs, uploadStatus }}>
            {children}
        </MarketplaceContext.Provider>
    )
};