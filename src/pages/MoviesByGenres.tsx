import {useParams} from "react-router-dom";
import MoviesByGenreListComponent from "../components/MovieComponents/MovieListsComponents/MoviesByGenreListComponent/MoviesByGenreListComponent.tsx";
import PaginationForMovies from "../components/PaginationComponents/paginationForMovies.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";

const MoviesByGenres = () => {
    const {movieByGenresMeta} = useAppSelector(({movieByGenresSlice}) => movieByGenresSlice)

    const {genreID} = useParams()
    return (
        <div className='main-container'>

            {
                genreID && <MoviesByGenreListComponent genreID={genreID} />

            }
            <PaginationForMovies meta={movieByGenresMeta}/>



        </div>
    );
};

export default MoviesByGenres;