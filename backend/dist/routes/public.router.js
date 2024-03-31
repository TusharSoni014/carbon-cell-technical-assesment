"use strict";
/**
 * @swagger
 * tags:
 *   name: Public
 *   description: API for fetching data from publicAPI with filter and limit parameters
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
/**
 * @swagger
 * /api/public:
 *   post:
 *     summary: Fetch public data
 *     tags: [Public]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit the number of results
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter results by category
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PublicDataResponse'
 *       '500':
 *         description: Internal server error
 *
 * components:
 *   schemas:
 *     PublicDataResponse:
 *       type: object
 *       properties:
 *         resultCount:
 *           type: integer
 *           description: Number of results returned
 *         result:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/PublicItem'
 *
 *     PublicItem:
 *       type: object
 *       properties:
 *         API:
 *           type: string
 *           description: Name of the API
 *         Description:
 *           type: string
 *           description: Description of the API
 *         Auth:
 *           type: string
 *           description: Authentication method required for the API
 *         HTTPS:
 *           type: boolean
 *           description: Indicates if the API supports HTTPS
 *         Cors:
 *           type: string
 *           description: Cross-Origin Resource Sharing (CORS) options
 *         Link:
 *           type: string
 *           description: Link to the API documentation
 *         Category:
 *           type: string
 *           description: Category of the API
 */
const express_1 = require("express");
const public_controller_1 = require("../controllers/public.controller");
exports.publicRouter = (0, express_1.Router)();
exports.publicRouter.post("/", public_controller_1.fetchPublicData);
