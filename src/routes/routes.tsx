import {createBrowserRouter} from "react-router-dom";
import MoviesPage from "../pages/MoviesPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import FilmsByGenres from "../pages/FilmsByGenres.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";
import SearchResultPage from "../pages/SearchResultPage.tsx";


export const routes = createBrowserRouter([
    {path:"/",element:<MainLayout/>,
           children:[
               {index:true,element:<MoviesPage/>},
               {path:'/movie/:movieID',element:<MovieDetailsPage/>},
               {path:'/movieByGenres/:genreID',element:<FilmsByGenres/>},
               {path:'/findingMovies',element:<SearchResultPage/>}

           ]
    }
])