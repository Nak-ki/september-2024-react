import {Cars} from "../components/cars/Cars.tsx";
import {CarForm} from "../components/carForm/CarForm.tsx";

const CarsPage = () => {
    return (
        <div className='font-mono'>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarsPage};
