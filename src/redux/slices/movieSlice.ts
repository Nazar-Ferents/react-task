import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie} from "../../modules/MoviesModules/IMovie.ts";
import {loadMovies, loadMoviesByGenres} from "../functions/functionsForMovieSlice.ts";

interface IMovieSlice {
    movies: IMovie[];
    moviesByGenres: IMovie[];
    moviesStatus:'initial'|'loading'|'success'|'error';
    moviesByGenreStatus:'initial'|'loading'|'success'|'error';
}

const movieInitialState:IMovieSlice = {movies:[],moviesByGenres:[], moviesStatus: 'initial',moviesByGenreStatus: 'initial'}


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
                (state, action:PayloadAction<IMovie[]>) => {
                state.movies = action.payload;
                state.moviesStatus = 'success'

                })
            .addCase(loadMovies.rejected,
                (state) =>{
                state.movies = []
                    state.moviesStatus = 'error'

                })
            .addCase(loadMoviesByGenres.pending,
                (state) => {
                state.moviesByGenreStatus = 'loading'
                })
            .addCase(loadMoviesByGenres.fulfilled,
                (state,action:PayloadAction<IMovie[]>) =>{

                state.moviesByGenres = action.payload;
                state.moviesByGenreStatus = 'success'

            })
            .addCase(loadMoviesByGenres.rejected,
                (state)=>{
                state.moviesByGenres = []
                    state.moviesByGenreStatus = 'error'
            })


    }
})

export const movieSliceActions = {
    ...movieSlice.actions,loadMovies,loadMoviesByGenres
}