import {FC} from "react";
import {ICar} from "../../interfaces/ICar.ts";

type CarPropsType={
    car: ICar
}

const Car:FC<CarPropsType> = ({car}) => {
    return (
        <div className='py-2 content-center'>
            <div>id: {car.id}</div>
            <div>brand: {car.brand}</div>
            <div>price: {car.year}</div>
            <div>year: {car.price}</div>
            <hr/>
        </div>
    );
};

export {Car};


