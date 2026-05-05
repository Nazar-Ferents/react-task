import axios from "axios";
const baseURL = import.meta.env.VITE_MOVIE_TMDB_URL;
const accessToken = import.meta.env.VITE_MOVIE_ACCESS_TOKEN;


export const movieTMDBapi = axios.create({
    baseURL: baseURL,
    headers:{
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json"
    }
})

