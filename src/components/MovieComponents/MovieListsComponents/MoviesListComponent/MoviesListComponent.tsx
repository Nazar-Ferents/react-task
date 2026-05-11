import {useEffect} from "react";
import {MovieListCardComponent} from "../MovieListCardComponent/MovieListCardComponent.tsx";
import {useAppSelector} from "../../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../../redux/slices/movieSlice.ts";
import {useSearchParams} from "react-router-dom";
import {genreSliceActions} from "../../../../redux/slices/genreSlice.ts";

const MoviesListComponent = () => {
    const {movies, moviesStatus} = useAppSelector(({movieSlice}) => movieSlice);
    const {genres} = useAppSelector(({genreSlice}) => genreSlice);
    const dispatch = useAppDispatch();

    const [query] = useSearchParams()
    const pg = Number(query.get('pg')) || 1


    useEffect(() => {

        dispatch(movieSliceActions.loadMovies(pg))
        if(genres.length === 0){
            dispatch(genreSliceActions.loadGenres())
        }
    },[pg])

if (moviesStatus === 'loading') {
    return <div>Loading...</div>
}

    return (
        <div>

            {
                movies.map((movie) => (<MovieListCardComponent key={movie.id} movie={movie} genres={genres} />))
            }
        </div>
    );
};

export default MoviesListComponent;