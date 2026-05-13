import type {IMoviesGeneral} from "../modules/MoviesModules/IMoviesGeneral.ts";
import {endpoints} from "../constants/endpoints.ts";
import {movieTMDBapi} from "./MovieTMDBapi.tsx";


export const getMovies = async (page:number):Promise<IMoviesGeneral> => {
    const {data} = await movieTMDBapi.get<IMoviesGeneral>(endpoints.movies.allMovies(page))

    return data;
}