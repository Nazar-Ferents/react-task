import {movieTMDBapi} from "./MovieTMDBapi.tsx";
import {endpoints} from "../constants/endpoints.ts";
import type {IMoviesGeneral} from "../modules/MoviesModules/IMoviesGeneral.ts";


export const searchMovie = async ({title,page}:{title:string,page:number}): Promise<IMoviesGeneral> => {
    const {data} = await movieTMDBapi.get<IMoviesGeneral>(endpoints.movies.searchMovie({title,page}));

    return data
}