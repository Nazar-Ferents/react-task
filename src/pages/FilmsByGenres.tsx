import {useParams} from "react-router-dom";
import MoviesByGenreListComponent from "../components/MovieByGenreComponents/MoviesByGenreList/MoviesByGenreListComponent.tsx";

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