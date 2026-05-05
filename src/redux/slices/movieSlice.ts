import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie} from "../../modules/MoviesModules/IMovie.ts";
import {loadMovies} from "../functions/functionsForMovieSlice.ts";

interface IMovieSlice {
    movies: IMovie[];
}

const movieInitialState:IMovieSlice = {movies:[]}


export const movieSlice = createSlice({
    name: "movieSlice",
    initialState:movieInitialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(loadMovies.fulfilled,
                (state, action:PayloadAction<IMovie[]>) => {
                state.movies = action.payload;
                })
            .addCase(loadMovies.rejected,
                (state) =>{
                state.movies = []
                })
    }
})

export const movieSliceActions = {
    ...movieSlice.actions,loadMovies
}