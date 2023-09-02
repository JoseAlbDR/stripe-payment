import { Request } from "express";

export interface ILoginBody {
  username: string;
  password: number;
}

export interface ILoginRequest extends Request {
  body: ILoginBody;
}

export interface IDecodedToken {
  id: number;
  username: string;
  iat: number;
  exp: number;
}

export interface ICustomShoopBody extends Request {
  body: {
    purchase: {
      id: number;
      name: string;
      price: number;
    };
    total_amount: number;
    shipping_fee: number;
  };
}
