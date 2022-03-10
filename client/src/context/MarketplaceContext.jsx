import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

import { nftContractABI, nftContractAddress } from '../utils/constants';

export const MarketplaceContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const marketplaceContract = new ethers.Contract(nftContractAddress, nftContractABI, signer);
    
    marketplaceContract.on("Transfer", (from, to, amount, event) => {
        console.log(`${from} sent ${ethers.utils.formatEther(amount)} to ${to}`);
    });

    return marketplaceContract;
};


export const MarketplaceProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState('');
    const [itemDetails, setItemDetails] = useState({image: {preview: "", raw: "", visible: false, file: ''}, name: "", extlink: "", description: "", price: ""});



    const createItems = async () => {
        console.log("dvsdv");
        try {
            if (!ethereum) return alert("Please install Metamask");
            
            console.log(nftContractAddress, nftContractABI);
            const { name, extlink, description, price } = itemDetails;
            const marketplaceContract = getEthereumContract();

            // const hash = '';

            const parsedAmount = ethers.utils.parseEther(price);

            const mintHash = await marketplaceContract.createToken(JSON.stringify({name, extlink, description}), parsedAmount);

            console.log(`Loading - ${mintHash.hash}`);

            await mintHash.wait();

            console.log(`Success - ${mintHash.hash}`);

           

        } catch (error) {
            console.log(error);
        }
    };

    const fetchNFTs = async () => {
        console.log("fetch my nfts");

        try {
            if (!ethereum) return alert("Please install Metamask");

            const marketplaceContract = getEthereumContract();
            const myNFTs = await marketplaceContract.fetchMyNFTs();

            console.log(myNFTs);
        } catch (error) {
            
        }
    }



    // useEffect(() => {
     
    // }, []);


    return (
        <MarketplaceContext.Provider value={{ itemDetails, setItemDetails, createItems, fetchNFTs}}>
            {children}
        </MarketplaceContext.Provider>
    )
};