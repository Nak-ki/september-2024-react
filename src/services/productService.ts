import {urls} from "../constants/urls.tsx";
import {ICartsList} from "../interfaces/product.interface.ts";

export const productService = {
    getCartsByUserId: async (id: number): Promise<ICartsList> => {
        return  await fetch(urls.products.getProductsByUserId(id)).then((carts) => carts.json())
    }
}