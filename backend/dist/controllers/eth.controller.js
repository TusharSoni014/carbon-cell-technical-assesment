"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEthBalance = void 0;
const web3_1 = __importDefault(require("web3"));
// Replace with your Ethereum node URL
const web3 = new web3_1.default("https://mainnet.infura.io/v3/5d3805c5ae074042a9142d3474eb75c2");
const getEthBalance = async (req, res) => {
    const { address } = req.params;
    try {
        if (!web3.utils.isAddress(address)) {
            return res.status(400).json({ error: "Invalid Ethereum address" });
        }
        const balance = await web3.eth.getBalance(address);
        const balanceInEther = web3.utils.fromWei(balance, "ether");
        return res.status(200).json({ balance: balanceInEther });
    }
    catch (error) {
        console.error("Error fetching Ethereum balance:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
exports.getEthBalance = getEthBalance;
