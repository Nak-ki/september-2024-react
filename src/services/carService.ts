import { urls} from "../constants/constants.tsx";
import {apiService} from "./apiService.ts";
import {ICar} from "../interfaces/ICar.ts";


const CarService = {
    getAll: async ():Promise<ICar[]> => {
        const {data} = await apiService.get<ICar[]>(urls.cars.getAllCars)
        return data
    },
    postCar: async (car: Partial<ICar>): Promise<void> => await apiService.post(urls.cars.getAllCars, car)
}

export {
    CarService
}