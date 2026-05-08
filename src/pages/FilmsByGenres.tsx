import {Outlet, useParams} from "react-router-dom";
import MoviesByGenreListComponent from "../components/MovieComponents/MoviesByGenreListComponent/MoviesByGenreListComponent.tsx";

const FilmsByGenres = () => {

    const {genreID} = useParams()
    return (
        <div>
            {
                genreID && <MoviesByGenreListComponent genreID={genreID} />

            }
            <Outlet/>


        </div>
    );
};

export default FilmsByGenres;