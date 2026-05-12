import type {IMovieDetails} from "../modules/MoviesModules/IMovieDetails.ts";
import {movieTMDBapi} from "./MovieTMDBapi.tsx";
import {endpoints} from "../constants/endpoints.ts";


export const getMovieByID = async (movieID:number): Promise<IMovieDetails> => {
     const {data:movieDetails} = await movieTMDBapi.get(endpoints.movies.movieByID(movieID));
     return movieDetails
}