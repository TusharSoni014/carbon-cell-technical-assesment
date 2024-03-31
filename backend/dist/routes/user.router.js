"use strict";
/**
 * @swagger
 * tags:
 *   name: User
 *   description: API for managing user authentication and details
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignupRequest'
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: User already exists or invalid username
 *       '500':
 *         description: Internal server error
 *
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Login user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       '200':
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       '400':
 *         description: User not found or wrong password
 *       '500':
 *         description: Internal server error
 *
 * @swagger
 * /api/user/logout:
 *   post:
 *     summary: Logout user
 *     tags: [User]
 *     responses:
 *       '200':
 *         description: Logged out successfully
 *       '500':
 *         description: Internal server error
 *
 * @swagger
 * /api/user/user-details:
 *   get:
 *     summary: Get user details (JWT Auth Protected)
 *     description: This is a user-authenticated route. Only authenticated users can access their details.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserDetails'
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 *
 * components:
 *   schemas:
 *     SignupRequest:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *
 *     LoginRequest:
 *       type: object
 *       required:
 *         - userId
 *         - password
 *       properties:
 *         userId:
 *           type: string
 *         password:
 *           type: string
 *
 *     LoginResponse:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         picture:
 *           type: string
 *         email:
 *           type: string
 *         token:
 *           type: string
 *         message:
 *           type: string
 *
 *     UserDetails:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         picture:
 *           type: string
 *         email:
 *           type: string
 *
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
const express_1 = __importDefault(require("express"));
const verifyToken_1 = require("../middlewares/verifyToken");
const user_controller_1 = require("../controllers/user.controller");
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/signup", user_controller_1.signup);
exports.userRouter.post("/login", user_controller_1.login);
exports.userRouter.post("/logout", user_controller_1.logout);
exports.userRouter.get("/user-details", verifyToken_1.verifyToken, user_controller_1.userDetails);
