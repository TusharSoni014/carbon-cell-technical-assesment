import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

export interface AuthRequest extends Request {
  _id?: string;
}

export const verifyToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  const headertoken = req.headers["authorization"]?.split(" ")[1];

  if (!token && !headertoken) {
    return res.status(401).send({ message: "You are unauthorized." });
  }
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_KEY!,
      (err: JsonWebTokenError | null, data: any) => {
        if (err) {
          return res.status(401).send({ message: "You are unauthorized." });
        }
        req._id = data._id;
        next();
      }
    );
  }
  if (headertoken) {
    jwt.verify(
      headertoken,
      process.env.JWT_KEY!,
      (err: JsonWebTokenError | null, data: any) => {
        if (err) {
          return res.status(401).send({ message: "You are unauthorized." });
        }
        req._id = data._id;
        next();
      }
    );
  }
};
