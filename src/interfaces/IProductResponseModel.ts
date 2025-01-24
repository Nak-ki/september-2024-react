import {IProduct} from "./IProducts.ts";

export interface IProductResponseModel{
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]
}