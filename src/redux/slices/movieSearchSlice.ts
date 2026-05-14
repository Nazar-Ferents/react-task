import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie} from "../../modules/MoviesModules/IMovie.ts";
import type {IMoviesGeneral} from "../../modules/MoviesModules/IMoviesGeneral.ts";
import type {StatusType} from "../../modules/MoviesModules/StatusType.ts";
import {loadFindingMovies} from "../functions/functionsForMovieSlice.ts";
import {movieSlice} from "./movieSlice.ts";

interface IMovieSearchSlice {
    movieSearch: IMovie[];
    movieSearchMeta: IMoviesGeneral | null;
    movieSearchStatus: StatusType;
}

const movieSearchSliceInitialState:IMovieSearchSlice = {movieSearch:[],movieSearchMeta:null,movieSearchStatus:'initial'}

export const movieSearchSlice = createSlice({
    name: "movieSearchSlice",
    initialState: movieSearchSliceInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadFindingMovies.pending,
                (state) => {
                    state.movieSearchStatus = 'loading'
                    state.movieSearch=[]


                })
            .addCase(loadFindingMovies.fulfilled,
                (state, action:PayloadAction<IMoviesGeneral>) => {
                    state.movieSearch = action.payload.results;
                    state.movieSearchMeta = action.payload
                    state.movieSearchStatus = 'success'
                })
            .addCase(loadFindingMovies.rejected,
                (state) => {
                    state.movieSearchStatus = 'error'
                    state.movieSearch = []
                })
    }
})

export const movieSearchSliceActions = {
    ...movieSlice.actions,loadFindingMovies
}