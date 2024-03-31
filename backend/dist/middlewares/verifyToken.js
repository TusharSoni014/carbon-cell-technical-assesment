"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = async (req, res, next) => {
    const token = req.cookies.token;
    const headertoken = req.headers["authorization"]?.split(" ")[1];
    if (!token && !headertoken) {
        return res.status(401).send({ message: "You are unauthorized." });
    }
    if (token) {
        jsonwebtoken_1.default.verify(token, process.env.JWT_KEY, (err, data) => {
            if (err) {
                return res.status(401).send({ message: "You are unauthorized." });
            }
            req._id = data._id;
            next();
        });
    }
    if (headertoken) {
        jsonwebtoken_1.default.verify(headertoken, process.env.JWT_KEY, (err, data) => {
            if (err) {
                return res.status(401).send({ message: "You are unauthorized." });
            }
            req._id = data._id;
            next();
        });
    }
};
exports.verifyToken = verifyToken;
