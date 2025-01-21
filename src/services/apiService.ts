import axios from "axios";
import {baseURL} from "../constants/constants.tsx";


const apiService = axios.create({baseURL})

export {apiService}