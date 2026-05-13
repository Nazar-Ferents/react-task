import type {IMovie} from "../modules/MoviesModules/IMovie.ts";
import {movieTMDBapi} from "./MovieTMDBapi.tsx";
import {endpoints} from "../constants/endpoints.ts";


export const getMoviesByGenres = async (
                     {genreID,page}:{genreID:number,page:number}):Promise<IMovie[]> => {

    const {data} = await movieTMDBapi.get(endpoints.movies.allMoviesByGenre({genreID,page}))
    const {results:MoviesBeGenresArray} = data
    return MoviesBeGenresArray;
}