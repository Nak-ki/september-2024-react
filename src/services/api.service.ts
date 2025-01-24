import axios from "axios";
import {IUserWithTokens} from "../interfaces/IUserWithTokens.ts";
import {IProduct} from "../interfaces/IProducts.ts";
import {IProductResponseModel} from "../interfaces/IProductResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";


type LoginData={
    username: string;
    password: string;
    expiresInMins: number;
}

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers:{}
    })

// Добавляем accessToken к запросам GET
axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject
})

// Авторизируемся и сохраняем юзера с токенами в localStorage
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    const {data:userWithTokens} = await axiosInstance.post<IUserWithTokens>('login', {username, password, expiresInMins})
    console.log(userWithTokens)
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens
}

//Авторизированный юзер достает массив продуктов
export const loadAuthProducts = async ():Promise<IProduct[]> => {
const {data:{products}} = await axiosInstance.get<IProductResponseModel>('/products');
return products
}

// Отравляем refreshToken и получаем accessToken и refreshToken и заменяем их в localStorage
export const refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user')
    const {data:{accessToken, refreshToken}} = await axiosInstance.post('/refresh', {refreshToken: iUserWithTokens.refreshToken,
        expiresInMins:1
    })
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens))
}
