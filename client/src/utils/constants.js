import abi from './NFTDungeonToken.json';
import output from "./NFTMarketplace.json";


export const contractABI = abi.abi;
export const nftContractABI = output.output.abi;
export const contractAddress = '0xC9C8640083De6b77b909E3Fc339FC0a45C9487f3';
export const nftContractAddress = '0x31586a461E068BBD999FF9df78A19e8cd85A273d';

export const networks = {
    mumbai_testnet: {
        chainId: `0x${Number(80001).toString(16)}`,
        chainName: "Polygon Testnet Mumbai",
        rpcUrls: [
            "https://matic-mumbai.chainstacklabs.com",
            "https://rpc-mumbai.maticvigil.com",
            "https://matic-testnet-archive-rpc.bwarelabs.com"
        ],
        faucets: [
            "https://faucet.polygon.technology/"
        ],
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        },
        infoURL: "https://polygon.technology/",
        shortName: "maticmum",
        networkId: 80001,
        blockExplorerUrls: [
            "https://mumbai.polygonscan.com"
        ]
    },
};