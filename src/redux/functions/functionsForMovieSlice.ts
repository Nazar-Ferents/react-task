import {createAsyncThunk} from "@reduxjs/toolkit";
import {getMovies} from "../../services/movieService.tsx";
import {getMoviesByGenres} from "../../services/movieByGenreService.tsx";
import {getMovieByID} from "../../services/movieByIDService.tsx";
import {searchMovie} from "../../services/SearchMovieService.tsx";


export const loadMovies = createAsyncThunk(
    'movieSlice/loadMovie',
    async (page:number,thunkAPI) => {
        try{
            const movies = await getMovies(page)

            return thunkAPI.fulfillWithValue(movies)
        }
        catch(error){
            return thunkAPI.rejectWithValue('Something went wrong');
        }
    }
)

export const loadMoviesByGenres = createAsyncThunk(
    'movieSlice/loadMoviesByGenres',
    async (genreID:number,thunkAPI) => {
        try {
            const moviesByGenres = await getMoviesByGenres(genreID)

            return thunkAPI.fulfillWithValue(moviesByGenres)
        }
        catch(error){
            return thunkAPI.rejectWithValue('Something went wrong')
        }
    }
)

export const loadMoviesByID = createAsyncThunk(
    'movieSlice/loadMoviesByID',
    async (movieID:number,thunkAPI) => {
        try{
            const movieDetails = await getMovieByID(movieID)
            return thunkAPI.fulfillWithValue(movieDetails)
        }
        catch (error){
            return thunkAPI.rejectWithValue('Something went wrong')
        }
    }
)

export const loadFindingMovies = createAsyncThunk(
    'movieSlice/loadFindingMovies',
    async ({title,page}:{title:string,page:number},thunkAPI) => {

        try{
            const findingMovies = await searchMovie({title,page})
            return thunkAPI.fulfillWithValue(findingMovies)
        }
        catch (error){
            return thunkAPI.rejectWithValue('Something went wrong')
        }
    }
)