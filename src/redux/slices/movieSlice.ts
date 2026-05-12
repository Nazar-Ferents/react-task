import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie} from "../../modules/MoviesModules/IMovie.ts";
import {loadFindingMovies, loadMovies, loadMoviesByGenres, loadMoviesByID} from "../functions/functionsForMovieSlice.ts";
import type {IMovieDetails} from "../../modules/MoviesModules/IMovieDetails.ts";

interface IMovieSlice {
    movies: IMovie[];
    moviesByGenres: IMovie[];
    movieDetails: IMovieDetails | null;
    movieSearch: IMovie[];
    moviesStatus:'initial'|'loading'|'success'|'error';
    moviesByGenreStatus:'initial'|'loading'|'success'|'error';
    movieDetailsStatus:'initial'|'loading'|'success'|'error';
    movieSearchStatus:'initial'|'loading'|'success'|'error';
}

const movieInitialState:IMovieSlice = {movies:[],moviesByGenres:[], movieDetails:null,movieSearch:[],
    moviesStatus: 'initial',moviesByGenreStatus: 'initial',movieDetailsStatus:'initial',movieSearchStatus:'initial'};


export const movieSlice = createSlice({
    name: "movieSlice",
    initialState:movieInitialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(loadMovies.pending,
                (state) =>{
                state.moviesStatus = 'loading'
                    state.movies = []
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
                    state.moviesByGenres = []
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
            .addCase(loadMoviesByID.pending,
                (state) => {
                state.movieDetailsStatus = 'loading'
                    state.movieDetails = null
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
            .addCase(loadFindingMovies.pending,
                (state) => {
                state.movieSearchStatus = 'loading'
                    state.movieSearch = []
                })
            .addCase(loadFindingMovies.fulfilled,
                (state, action:PayloadAction<IMovie[]>) => {
                state.movieSearch = action.payload;
                state.movieSearchStatus = 'success'
                })
            .addCase(loadFindingMovies.rejected,
                (state) => {
                state.movieSearchStatus = 'error'
                    state.movieSearch = []
                })


    }
})

export const movieSliceActions = {
    ...movieSlice.actions,loadMovies,loadMoviesByGenres,loadMoviesByID,loadFindingMovies
}