import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const WalletContext = React.createContext();

const { ethereum } = window;


export const WalletProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState('');

    const addWalletListener = () => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setCurrentAccount(accounts[0]);
                } else {
                    setCurrentAccount("");
                }
            });
        }
    };

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);

            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum Object.");
        }
    }


    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum Object.");
        }

        console.log(currentAccount);
    }


    useEffect(() => {
        checkIfWalletIsConnected();
        addWalletListener();
    }, []);


    return (
        <WalletContext.Provider value={{ connectWallet, currentAccount }}>
            {children}
        </WalletContext.Provider>
    )
}