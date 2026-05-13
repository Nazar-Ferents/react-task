import {movieTMDBapi} from "./movieTMDBapi.tsx";
import {endpoints} from "../constants/endpoints.ts";
import type {IMoviesGeneral} from "../modules/MoviesModules/IMoviesGeneral.ts";


export const getMoviesByGenres = async (
                     {genreID,page}:{genreID:number,page:number}):Promise<IMoviesGeneral> => {

    const {data} = await movieTMDBapi.get(endpoints.movies.allMoviesByGenre({genreID,page}))

    return data
}