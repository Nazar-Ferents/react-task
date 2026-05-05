import {useEffect} from "react";
import {MovieListCard} from "../MovieListCard/MovieListCard.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../redux/slices/movieSlice.ts";

const MoviesListComponent = () => {
    const {movies} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {

        const pg = 1

        dispatch(movieSliceActions.loadMovies(pg))
    },[])

    return (
        <div>
            {
                movies.map((movie) => (<MovieListCard key={movie.id} movie={movie} />))
            }
        </div>
    );
};

export default MoviesListComponent;