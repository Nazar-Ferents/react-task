import {useParams} from "react-router-dom";
import MoviesByGenreListComponent from "../components/MovieComponents/MovieListsComponents/MoviesByGenreListComponent/MoviesByGenreListComponent.tsx";
import PaginationForMovies from "../paginations/paginationForMovies.tsx";

const FilmsByGenres = () => {

    const {genreID} = useParams()
    return (
        <div>
            <PaginationForMovies/>
            {
                genreID && <MoviesByGenreListComponent genreID={genreID} />

            }



        </div>
    );
};

export default FilmsByGenres;