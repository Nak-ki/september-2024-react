import {useEffect, useState} from "react";
import {ICar} from "../../interfaces/ICar.ts";
import {CarService} from "../../services/carService.ts";
import {Car} from "../car/Car.tsx";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([])

    useEffect(() => {
        CarService.getAll().then((data) => setCars(data))
    }, []);

    return (
        <div className='m-2'>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};
