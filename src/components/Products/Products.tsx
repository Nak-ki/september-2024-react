
import {Product} from "./Product.tsx";
import { useEffect, useState} from "react";

import {useLocation} from "react-router-dom";
import {productService} from "../../services/productService.ts";
import {ICartsList} from "../../interfaces/product.interface.ts";


const Products= () => {

    const [productsList, setProductsList] = useState<ICartsList>()
    console.log(productsList)

    const {state} = useLocation()


    useEffect(() => {
        productService.getCartsByUserId(state).then((carts) => setProductsList(carts))
    }, [state]);
    return (
        <div>
            {
            productsList && productsList.carts[0].products.map(product => <Product key={product.id} product={product}/>)
            }
        </div>
    );
};

export {Products};
