"use strict";
/**
 * @swagger
 * tags:
 *   name: Ethereum
 *   description: API for fetching balance from a ethereum blockchain wallet
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ethRouter = void 0;
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
const express_1 = require("express");
const eth_controller_1 = require("../controllers/eth.controller");
exports.ethRouter = (0, express_1.Router)();
exports.ethRouter.get("/balance/:address", eth_controller_1.getEthBalance);
