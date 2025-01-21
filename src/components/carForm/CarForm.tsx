import {SubmitHandler, useForm} from "react-hook-form";
import {carValidator} from "../../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarService} from "../../services/carService.ts";

const CarForm = () => {
    const {register, handleSubmit, formState:{isValid, errors}, reset} = useForm<{ brand:string, year:number, price:number }>({
        mode:'all', resolver: joiResolver(carValidator)
    })


    const createCar: SubmitHandler<{ brand:string, year:number, price:number }> = async (data) => {
        await CarService.postCar(data)
        reset()

    }

    return (
        <div>
            <form onSubmit={handleSubmit(createCar)}>
                <input className='p-1 m-2 border-gray-300 border-2	' type="text" placeholder={'brand'} {...register('brand')}/>
                <input className='p-1 m-2 border-gray-300 border-2	' type="number" placeholder={'year'} {...register('year')}/>
                <input className='p-1 m-2 border-gray-300 border-2	' type="number" placeholder={'price'} {...register('price')}/>
                <button className='pr-4 pl-4 pb-1 pt-1 m-2 border-2 border-green-800 hover:bg-green-900  active:bg-green-950 hover:text-white 	' disabled={!isValid}>Save</button>
                {errors.brand && <p>{errors.brand.message}</p>}
                {errors.year && <p>{errors.year.message}</p>}
                {errors.price && <p>{errors.price.message}</p>}

            </form>

        </div>
    );
};

export {CarForm};
