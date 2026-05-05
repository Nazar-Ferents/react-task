import {createAsyncThunk} from "@reduxjs/toolkit";
import {getMovies} from "../../services/movieService.tsx";


export const loadMovies = createAsyncThunk(
    'movieSlice/loadMovie',
    async (page:number,thunkAPI) => {
        try{
            const movies = await getMovies(page)

            return thunkAPI.fulfillWithValue(movies)
        }
        catch(error){
            return thunkAPI.rejectWithValue(error)
        }
    }
)