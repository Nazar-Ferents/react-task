import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/movieSlice.ts";
import {genreSlice} from "./slices/genreSlice.ts";


export const storeMoviesTMDB = configureStore(
    {
        reducer: {
            movieSlice: movieSlice.reducer,
            genreSlice: genreSlice.reducer,

        }
    }
)