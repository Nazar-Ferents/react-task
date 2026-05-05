import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/movieSlice.ts";


export const storeMoviesTMDB = configureStore(
    {
        reducer: {
            movieSlice: movieSlice.reducer
        }
    }
)