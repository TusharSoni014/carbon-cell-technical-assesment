import { Request, Response } from "express";
import Web3 from "web3";

// Replace with your Ethereum node URL
const web3 = new Web3(
  "https://mainnet.infura.io/v3/5d3805c5ae074042a9142d3474eb75c2"
);

export const getEthBalance = async (req: Request, res: Response) => {
  const { address } = req.params;

  try {
    if (!web3.utils.isAddress(address)) {
      return res.status(400).json({ error: "Invalid Ethereum address" });
    }
    const balance = await web3.eth.getBalance(address);
    const balanceInEther = web3.utils.fromWei(balance, "ether");
    return res.status(200).json({ balance: balanceInEther });
  } catch (error) {
    console.error("Error fetching Ethereum balance:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
