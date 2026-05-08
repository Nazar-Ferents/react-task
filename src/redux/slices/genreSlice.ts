import type {IGenre} from "../../modules/GenresModules/IGenres.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {loadGenres} from "../functions/functionsForGenreSlice.ts";

interface IGenreSlice {
    genres: IGenre[],

}

const GenreInitialState:IGenreSlice = {genres: []};

export const genreSlice = createSlice({
    name: "genreSlice",
    initialState: GenreInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadGenres.fulfilled,
                (state, action:PayloadAction<IGenre[]>) => {
                state.genres = action.payload;
            })
            .addCase(loadGenres.rejected,
                (state) => {
                state.genres = []
                })

    }
})

export const genreSliceActions = {
    ...genreSlice.actions,loadGenres
}