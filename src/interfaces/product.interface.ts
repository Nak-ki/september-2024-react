import {ICart} from "./cart.interface.ts";

export interface IProduct{
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface ICartsList {
  carts: ICart[];
  total: number;
  skip: number;
  limit: number;
}

