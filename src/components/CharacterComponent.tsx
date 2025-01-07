import {ISimpson} from "../interfaces/simpson.ts";
import {FC} from "react";

type SimpsonType = {
    simpson: ISimpson
    children: string
}

const CharacterComponent: FC<SimpsonType> = ({simpson, children}) => {
    return (
        <div className='flex items-center flex-col m-5 p-10 border-solid border-2 border-amber-500 rounded-3xl'>
            <p className='text-3xl font-bold'>Name: {simpson.name}</p>
            <p className='text-3xl font-bold'>Surname: {simpson.surname}</p>
            <p className='text-2xl font-bold'>Age: {simpson.age}</p>
            <p>{children}</p>
            <img className='size-1/6 ' src={simpson.photo} alt={simpson.name}/>
        </div>
    );
};

export {CharacterComponent};
