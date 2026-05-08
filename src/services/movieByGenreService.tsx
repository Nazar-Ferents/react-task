import type {IMovie} from "../modules/MoviesModules/IMovie.ts";
import {movieTMDBapi} from "./MovieTMDBapi.tsx";
import {endpoints} from "../constants/endpoints.ts";


export const getMoviesByGenres = async (genreID:number):Promise<IMovie[]> => {

    const {data} = await movieTMDBapi.get(endpoints.movies.allMoviesByGenre(genreID))
    const {results:MoviesBeGenresArray} = data
    return MoviesBeGenresArray;
}