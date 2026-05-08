import {createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie} from "../../modules/MoviesModules/IMovie.ts";
import {loadMovies, loadMoviesByGenres} from "../functions/functionsForMovieSlice.ts";

interface IMovieSlice {
    movies: IMovie[];
    loadState:boolean
}

const movieInitialState:IMovieSlice = {movies:[],loadState: false}


export const movieSlice = createSlice({
    name: "movieSlice",
    initialState:movieInitialState,
    reducers:{
        changeLoadState:(state,action:PayloadAction<boolean>)=>{
            state.loadState=action.payload;
        }
    },
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
            .addCase(loadMoviesByGenres.fulfilled,
                (state,action:PayloadAction<IMovie[]>) =>{

                state.movies = action.payload;

            })
            .addCase(loadMoviesByGenres.rejected,
                (state)=>{
                state.movies = []
            })
            .addMatcher(isFulfilled(loadMovies,loadMoviesByGenres),
                (state => {

                state.loadState = true;
            }))

    }
})

export const movieSliceActions = {
    ...movieSlice.actions,loadMovies,loadMoviesByGenres
}