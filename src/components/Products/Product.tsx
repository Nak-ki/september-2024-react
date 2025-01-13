import {FC} from "react";
import {IProduct} from "../../interfaces/product.interface.ts";


type ProductPropsType={
    product:IProduct
}

const Product:FC<ProductPropsType> = ({product}) => {

    return (
        <div>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div>{product.quantity}</div>
            <img src={product.thumbnail} alt={product.title}/>
        </div>
    );
};

export {Product};
