import axios from "axios";
import {baseURL} from "../constants/constants.ts";

const apiService = axios.create({baseURL})

export {apiService}