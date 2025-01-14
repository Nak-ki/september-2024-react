
import {Product} from "./Product.tsx";
import { useEffect, useState} from "react";

import {useLocation} from "react-router-dom";
import {productService} from "../../services/productService.ts";

import {ICart} from "../../interfaces/cart.interface.ts";


const Products= () => {

    const [productsList, setProductsList] = useState<ICart[]>([])
    console.log(productsList)

    const [cart] = productsList

    const {state} = useLocation()


    useEffect(() => {
        productService.getCartsByUserId(state).then(({carts}) => setProductsList(carts))
    }, [state]);
    return (
        <div>
            {
                cart && cart.products.map(product => <Product key={product.id} product={product}/>)
            }
        </div>
    );
};

export {Products};