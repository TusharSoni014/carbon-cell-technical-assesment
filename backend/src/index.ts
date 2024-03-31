import express from "express";
import cookieParser from "cookie-parser";
import swaggerDocs from "./swagger";
import { userRouter } from "./routes/user.router";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { publicRouter } from "./routes/public.router";
import { ethRouter } from "./routes/eth.router";
config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/public", publicRouter);
app.use("/api/eth", ethRouter);

dbConnect();
app.listen(4000, () => {
  swaggerDocs(app);
  console.log("http://localhost:4000");
});
