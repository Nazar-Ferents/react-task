import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie} from "../../modules/MoviesModules/IMovie.ts";
import {loadMovies, loadMoviesByID} from "../functions/functionsForMovieSlice.ts";
import type {IMovieDetails} from "../../modules/MoviesModules/IMovieDetails.ts";
import type {IMoviesGeneral} from "../../modules/MoviesModules/IMoviesGeneral.ts";
import type {StatusType} from "../../modules/MoviesModules/StatusType.ts";

interface IMovieSlice {
    movies: IMovie[];
    movieDetails: IMovieDetails | null;
    movieMeta: IMoviesGeneral | null;
    moviesStatus: StatusType;
    movieDetailsStatus: StatusType;

}

const movieInitialState:IMovieSlice = {movies:[],movieDetails:null,movieMeta:null,
    moviesStatus: 'initial',movieDetailsStatus:'initial'};


export const movieSlice = createSlice({
    name: "movieSlice",
    initialState:movieInitialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(loadMovies.pending,
                (state) =>{
                state.moviesStatus = 'loading'


                })

            .addCase(loadMovies.fulfilled,
                (state, action:PayloadAction<IMoviesGeneral>) => {
                state.movies = action.payload.results;
                state.movieMeta = action.payload
                state.moviesStatus = 'success'

                })
            .addCase(loadMovies.rejected,
                (state) =>{
                state.movies = []
                    state.moviesStatus = 'error'

                })
            .addCase(loadMoviesByID.pending,
                (state) => {
                state.movieDetailsStatus = 'loading'


                })
            .addCase(loadMoviesByID.fulfilled,
                (state, action:PayloadAction<IMovieDetails>) => {
                state.movieDetails = action.payload;
                state.movieDetailsStatus = 'success'
                })
            .addCase(loadMoviesByID.rejected,
                (state) => {
                state.movieDetails = null;
                state.movieDetailsStatus = 'error'
                })



    }
})

export const movieSliceActions = {
    ...movieSlice.actions,loadMovies,loadMoviesByID
}