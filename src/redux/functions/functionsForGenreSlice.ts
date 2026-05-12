import {createAsyncThunk} from "@reduxjs/toolkit";
import {getGenres} from "../../services/genresService.tsx";


export const loadGenres = createAsyncThunk(
    'genreSlice/loadGenres',
    async(_,thunkAPI) => {
        try{
            const genres = await getGenres();
            return thunkAPI.fulfillWithValue(genres)
        }
        catch(error){
            return thunkAPI.rejectWithValue('Something went wrong');
        }
    }
)