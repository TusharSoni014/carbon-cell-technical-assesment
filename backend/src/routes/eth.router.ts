/**
 * @swagger
 * tags:
 *   name: Ethereum
 *   description: API for fetching balance from a ethereum blockchain wallet
 */

/**
 * @swagger
 * /api/eth/balance/{address}:
 *   get:
 *     summary: Get Ethereum account balance
 *     description: Retrieve the balance of a specified Ethereum account.
 *     tags: [Ethereum]
 *     parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         schema:
 *           type: string
 *         description: The Ethereum account address
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 balance:
 *                   type: string
 *                   description: The account balance in Ether
 *       '400':
 *         description: Invalid Ethereum address
 *       '500':
 *         description: Internal server error
 * 
 */

import { Router } from "express";
import { getEthBalance } from "../controllers/eth.controller";

export const ethRouter = Router();
ethRouter.get("/balance/:address", getEthBalance);

