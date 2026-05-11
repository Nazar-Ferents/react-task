import axios from "axios";
import {accessToken, baseURL} from "../config/constants.ts";



export const movieTMDBapi = axios.create({
    baseURL: baseURL,
    headers:{
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json"
    }
})

