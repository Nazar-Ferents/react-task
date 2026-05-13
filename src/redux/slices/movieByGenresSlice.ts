import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie} from "../../modules/MoviesModules/IMovie.ts";
import type {IMoviesGeneral} from "../../modules/MoviesModules/IMoviesGeneral.ts";
import type {StatusType} from "../../modules/MoviesModules/StatusType.ts";
import {loadMoviesByGenres} from "../functions/functionsForMovieSlice.ts";
import {movieSlice} from "./movieSlice.ts";

interface IMoviesByGenresSlice {
    moviesByGenres: IMovie[];
    movieByGenresMeta: IMoviesGeneral | null;
    moviesByGenreStatus: StatusType;
}

const movieByGenresInitialState:IMoviesByGenresSlice = {moviesByGenres:[],movieByGenresMeta:null,moviesByGenreStatus:'initial'}

export const movieByGenresSlice = createSlice({
    name: "movieByGenresSlice",
    initialState: movieByGenresInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadMoviesByGenres.pending,
                (state) => {
                    state.moviesByGenreStatus = 'loading'
                    state.moviesByGenres = []
                })
            .addCase(loadMoviesByGenres.fulfilled,
                (state,action:PayloadAction<IMoviesGeneral>) =>{

                    state.moviesByGenres = action.payload.results;
                    state.movieByGenresMeta = action.payload
                    state.moviesByGenreStatus = 'success'

                })
            .addCase(loadMoviesByGenres.rejected,
                (state)=>{
                    state.moviesByGenres = []
                    state.moviesByGenreStatus = 'error'
                })
    }
})

export const movieByGenresSliceActions = {
    ...movieSlice.actions,loadMoviesByGenres
}