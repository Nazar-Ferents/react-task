import {useEffect} from "react";
import {MovieListCardComponent} from "../MovieListCardComponent/MovieListCardComponent.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../redux/slices/movieSlice.ts";
import {useSearchParams} from "react-router-dom";
import {genreSliceActions} from "../../../redux/slices/genreSlice.ts";

const MoviesListComponent = () => {
    const {movies, loadState} = useAppSelector(({movieSlice}) => movieSlice);
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
            {!loadState && <div>Loading...</div>}
            {
                movies.map((movie) => (<MovieListCardComponent key={movie.id} movie={movie} genres={genres} />))
            }
        </div>
    );
};

export default MoviesListComponent;