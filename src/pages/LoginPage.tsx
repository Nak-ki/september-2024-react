// import {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {login} from "../services/api.service.ts";

const LoginPage = () => {
    //Создание формы для кредов
    const {register, handleSubmit} = useForm<{username:string, password:string}>()

    //Отправка данных на сервер
    const toLogin:SubmitHandler<{username:string, password:string}> = async (user) => {
        await login({...user, expiresInMins:1})
    }

    // отправка данных с формы на сервер
    // useEffect(() => {
    //     login({
    //         username:'emilys',
    //         password:'emilyspass',
    //         expiresInMins: 1
    //     })
    // }, []);


    return (
        <div>
            <form onSubmit={handleSubmit(toLogin)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>login</button>
            </form>
        </div>
    );
};

export {LoginPage};







