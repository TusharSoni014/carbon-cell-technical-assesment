"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const swagger_1 = __importDefault(require("./swagger"));
const user_router_1 = require("./routes/user.router");
const dotenv_1 = require("dotenv");
const dbConnect_1 = require("./lib/dbConnect");
const public_router_1 = require("./routes/public.router");
const eth_router_1 = require("./routes/eth.router");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/user", user_router_1.userRouter);
app.use("/api/public", public_router_1.publicRouter);
app.use("/api/eth", eth_router_1.ethRouter);
(0, dbConnect_1.dbConnect)();
app.listen(4000, () => {
    (0, swagger_1.default)(app);
    console.log("http://localhost:4000");
});
