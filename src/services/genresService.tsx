import type {IGenres, IGenre} from "../modules/GenresModules/IGenres.ts";
import {endpoints} from "../constants/endpoints.ts";
import {movieTMDBapi} from "./MovieTMDBapi.tsx";


export const getGenres = async ():Promise<IGenre[]> => {
    const {data} = await movieTMDBapi.get<IGenres>(endpoints.movies.allGenres);
    const {genres} = data;
    return genres;
}