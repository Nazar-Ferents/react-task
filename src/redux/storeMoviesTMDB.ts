import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/movieSlice.ts";
import {genreSlice} from "./slices/genreSlice.ts";
import {movieByGenresSlice} from "./slices/movieByGenresSlice.ts";
import {movieSearchSlice} from "./slices/movieSearchSlice.ts";


export const storeMoviesTMDB = configureStore(
    {
        reducer: {
            movieSlice: movieSlice.reducer,
            movieByGenresSlice: movieByGenresSlice.reducer,
            movieSearchSlice: movieSearchSlice.reducer,
            genreSlice: genreSlice.reducer,

        }
    }
)