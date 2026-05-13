import {useParams} from "react-router-dom";
import MoviesByGenreListComponent from "../components/MovieComponents/MovieListsComponents/MoviesByGenreListComponent/MoviesByGenreListComponent.tsx";
import PaginationForMovies from "../components/PaginationComponents/paginationForMovies.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";

const MoviesByGenres = () => {
    const {movieByGenresMeta} = useAppSelector(({movieByGenresSlice}) => movieByGenresSlice)

    const {genreID} = useParams()
    return (
        <div>
            <PaginationForMovies meta={movieByGenresMeta}/>
            {
                genreID && <MoviesByGenreListComponent genreID={genreID} />

            }



        </div>
    );
};

export default MoviesByGenres;