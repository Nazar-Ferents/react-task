import {createBrowserRouter} from "react-router-dom";
import MoviesPage from "../pages/MoviesPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import FilmsByGenres from "../pages/FilmsByGenres.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";


export const routes = createBrowserRouter([
    {path:"/",element:<MainLayout/>,
           children:[
               {index:true,element:<MoviesPage/>},
               {path:'movie/:id',element:<MovieDetailsPage/>},
               {path:'movieByGenres/:genreID',element:<FilmsByGenres/>}

           ]
    }
])