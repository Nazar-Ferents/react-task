import {useEffect} from "react";
import {MovieListCard} from "../MovieListCard/MovieListCard.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../redux/slices/movieSlice.ts";
import {useSearchParams} from "react-router-dom";
import {genreSliceActions} from "../../../redux/slices/genreSlice.ts";

const MoviesListComponent = () => {
    const {movies} = useAppSelector(({movieSlice}) => movieSlice);
    const {genres} = useAppSelector(({genreSlice}) => genreSlice);
    const dispatch = useAppDispatch();

    const [query] = useSearchParams()
    const pg = Number(query.get('pg')) || 1

    useEffect(() => {

        dispatch(movieSliceActions.loadMovies(pg))
        dispatch(genreSliceActions.loadGenres())
    },[query])

    return (
        <div>
            {
                movies.map((movie) => (<MovieListCard key={movie.id} movie={movie} genres={genres} />))
            }
        </div>
    );
};

export default MoviesListComponent;