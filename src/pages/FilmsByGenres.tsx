import {useParams} from "react-router-dom";
import MoviesByGenreListComponent from "../components/MovieComponents/MovieListsComponents/MoviesByGenreListComponent/MoviesByGenreListComponent.tsx";

const FilmsByGenres = () => {

    const {genreID} = useParams()
    return (
        <div>
            {
                genreID && <MoviesByGenreListComponent genreID={genreID} />

            }



        </div>
    );
};

export default FilmsByGenres;